"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Database, RefreshCw, Save, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { normalizeCmsPath } from "@/lib/content-path"
import { buildTextOverridesFromSections } from "@/lib/content-section-extractor"
import type { CmsContent, ContentListItem } from "./_types"
import { createEmptyContent, normalizeContent } from "./_helpers"
import { PageSectionsEditor } from "./_components/page-sections-editor"

const suggestedPaths = [
  "/hosting/shared",
  "/hosting/wordpress",
  "/hosting/reseller",
  "/servers/vps",
  "/servers/cloud",
  "/servers/dedicated",
  "/games/minecraft",
  "/games/minecraft-bedrock",
  "/games/terraria",
  "/games/rust",
  "/games/fivem",
  "/services/email",
]

function parsePath(raw: string): string {
  return normalizeCmsPath(raw.trim())
}

export default function AdminContentPage() {
  const router = useRouter()

  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [items, setItems] = useState<ContentListItem[]>([])
  const [routePaths, setRoutePaths] = useState<string[]>([])

  const [query, setQuery] = useState("")
  const [path, setPath] = useState("")
  const [content, setContent] = useState<CmsContent>(createEmptyContent())

  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const allKnownPaths = useMemo(() => {
    const fromDb = items.map((item) => item.path)
    return Array.from(new Set([...suggestedPaths, ...routePaths, ...fromDb])).sort((a, b) => a.localeCompare(b))
  }, [items, routePaths])

  const filteredPaths = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) {
      return allKnownPaths
    }

    return allKnownPaths.filter((candidate) => candidate.toLowerCase().includes(q))
  }, [allKnownPaths, query])

  const itemByPath = useMemo(() => {
    return new Map(items.map((item) => [item.path, item]))
  }, [items])

  const clearFlash = () => {
    setError("")
    setSuccess("")
  }

  const loadItems = async () => {
    const response = await fetch("/api/admin/content", { cache: "no-store" })
    if (!response.ok) {
      throw new Error("Failed to load content list")
    }

    const data = await response.json()
    setItems(Array.isArray(data?.items) ? data.items : [])
  }

  const loadRoutePaths = async () => {
    const response = await fetch("/api/admin/content/routes", { cache: "no-store" })
    if (!response.ok) {
      throw new Error("Failed to load route paths")
    }

    const data = await response.json()
    setRoutePaths(Array.isArray(data?.paths) ? data.paths : [])
  }

  useEffect(() => {
    fetch("/api/admin/check")
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true)
          return
        }
        router.push("/admin/login")
      })
      .catch(() => {
        router.push("/admin/login")
      })
  }, [router])

  useEffect(() => {
    if (!authenticated) {
      return
    }

    setLoading(true)
    Promise.all([loadItems(), loadRoutePaths()])
      .catch(() => setError("No se pudo cargar la lista de paginas."))
      .finally(() => setLoading(false))
  }, [authenticated])

  const loadPathContent = async (nextPath: string) => {
    try {
      clearFlash()
      setLoading(true)

      const normalizedPath = parsePath(nextPath)
      setPath(normalizedPath)

      const currentResponse = await fetch(`/api/admin/content?path=${encodeURIComponent(normalizedPath)}`, {
        cache: "no-store",
      })
      if (!currentResponse.ok) {
        throw new Error("Failed to load path content")
      }

      const currentData = await currentResponse.json()
      let nextContent = normalizeContent(currentData?.content ?? createEmptyContent())

      if (!nextContent.pageSections.length) {
        const extractResponse = await fetch(`/api/admin/content/extract?path=${encodeURIComponent(normalizedPath)}`, {
          cache: "no-store",
        })

        if (extractResponse.ok) {
          const extractData = await extractResponse.json()
          const pageSections = Array.isArray(extractData?.pageSections) ? extractData.pageSections : []
          const textOverrides = buildTextOverridesFromSections(pageSections)
          nextContent = normalizeContent({ ...nextContent, pageSections, textOverrides })
        }
      }

      setContent(nextContent)
    } catch {
      setError("No se pudo cargar el contenido de esa pagina.")
    } finally {
      setLoading(false)
    }
  }

  const syncCurrentPath = async () => {
    if (!path.trim()) {
      setError("Selecciona una pagina antes de sincronizar.")
      return
    }

    try {
      clearFlash()
      setSyncing(true)

      const normalizedPath = parsePath(path)
      const response = await fetch(`/api/admin/content/extract?path=${encodeURIComponent(normalizedPath)}`, {
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error("Failed to sync selected path")
      }

      const data = await response.json()
      const pageSections = Array.isArray(data?.pageSections) ? data.pageSections : []
      const textOverrides = buildTextOverridesFromSections(pageSections)

      const merged = normalizeContent({
        ...content,
        pageSections,
        textOverrides: {
          ...content.textOverrides,
          ...textOverrides,
        },
      })

      setContent(merged)
      setSuccess(`Sincronizado: ${Number(data?.extractedTexts ?? 0)} textos detectados.`)
      setTimeout(() => setSuccess(""), 4000)
    } catch {
      setError("No se pudo sincronizar esta pagina.")
    } finally {
      setSyncing(false)
    }
  }

  const syncAllPages = async () => {
    try {
      clearFlash()
      setSyncing(true)

      const response = await fetch("/api/admin/content/sync-all", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ overwrite: false }),
      })

      if (!response.ok) {
        throw new Error("Failed to sync all pages")
      }

      const data = await response.json()
      setSuccess(
        `Sincronizacion completa. Total: ${data?.total ?? 0}, sincronizadas: ${data?.synced ?? 0}, omitidas: ${data?.skipped ?? 0}, fallidas: ${data?.failed ?? 0}, textos detectados: ${data?.totalTexts ?? 0}.`,
      )
      setTimeout(() => setSuccess(""), 7000)
      await loadItems()
    } catch {
      setError("No se pudo sincronizar todas las paginas.")
    } finally {
      setSyncing(false)
    }
  }

  const saveCurrentPath = async () => {
    if (!path.trim()) {
      setError("Selecciona una pagina antes de guardar.")
      return
    }

    try {
      clearFlash()
      setSaving(true)

      const normalizedPath = parsePath(path)
      const normalizedContent = normalizeContent({
        ...content,
        textOverrides: {
          ...content.textOverrides,
          ...buildTextOverridesFromSections(content.pageSections),
        },
      })

      const response = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: normalizedPath, content: normalizedContent }),
      })

      if (!response.ok) {
        throw new Error("Failed to save content")
      }

      setContent(normalizedContent)
      await loadItems()
      setSuccess("Contenido guardado correctamente en base de datos.")
      setTimeout(() => setSuccess(""), 4000)
    } catch {
      setError("No se pudo guardar el contenido de esta pagina.")
    } finally {
      setSaving(false)
    }
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">Content CMS - Texto completo</h1>
              <Badge variant="secondary">MySQL</Badge>
            </div>
            <Button variant="outline" asChild>
              <Link href="/admin">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al panel
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Paginas del sitio</CardTitle>
              <CardDescription>Selecciona una pagina para editar todo su texto por secciones.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-8"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar ruta..."
                />
              </div>

              <div className="max-h-[70vh] min-h-[560px] space-y-1.5 overflow-y-auto pr-1">
                {filteredPaths.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No hay rutas para mostrar.</p>
                ) : (
                  filteredPaths.map((knownPath) => {
                    const item = itemByPath.get(knownPath)
                    const selected = path === knownPath

                    return (
                      <button
                        key={knownPath}
                        type="button"
                        onClick={() => loadPathContent(knownPath)}
                        className={`w-full rounded-md border px-3 py-2 text-left text-sm ${
                          selected
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/40 hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-medium text-foreground">{knownPath}</div>
                          <Badge variant={item ? "default" : "secondary"} className="text-[10px]">
                            {item ? "DB" : "Codigo"}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item ? `Actualizado: ${new Date(item.updatedAt).toLocaleString()}` : "Sin guardar en DB"}
                        </div>
                      </button>
                    )
                  })
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Editor global de texto</CardTitle>
              <CardDescription>
                Cambia textos de cualquier pagina. Los cambios se guardan en DB y se aplican en la web.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <Input
                  value={path}
                  onChange={(event) => setPath(event.target.value)}
                  placeholder="/hosting/shared"
                />
                <Button variant="outline" onClick={() => path.trim() && loadPathContent(path)} disabled={loading}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Cargar pagina
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={syncCurrentPath} disabled={syncing || loading || !path.trim()}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Sincronizar pagina
                </Button>
                <Button variant="outline" onClick={syncAllPages} disabled={syncing || loading}>
                  <Database className="mr-2 h-4 w-4" />
                  Sincronizar todas las paginas
                </Button>
                <Button onClick={saveCurrentPath} disabled={saving || loading || !path.trim()}>
                  <Save className="mr-2 h-4 w-4" />
                  Guardar cambios
                </Button>
              </div>

              <div className="rounded-md border border-border bg-muted/30 p-3 text-sm text-muted-foreground">
                Flujo recomendado: 1) Seleccionar pagina, 2) Sincronizar pagina, 3) Editar textos por seccion, 4)
                Guardar cambios.
              </div>

              <PageSectionsEditor
                sections={content.pageSections}
                onChange={(pageSections) =>
                  setContent((prev) => ({
                    ...prev,
                    pageSections,
                    textOverrides: {
                      ...prev.textOverrides,
                      ...buildTextOverridesFromSections(pageSections),
                    },
                  }))
                }
              />

              {error && (
                <div className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
                  {error}
                </div>
              )}

              {success && (
                <div className="rounded-md border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300">
                  {success}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
