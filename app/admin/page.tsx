"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Database, Settings, LogOut, Globe, Shield, CheckCircle, AlertTriangle, BarChart3 } from "lucide-react"

type SiteStatus = {
  maintenance: boolean
  announcement: boolean
  promoBanner: boolean
  festiveTheme: string
  theme: string
  colorTheme: string
}

const defaultStatus: SiteStatus = {
  maintenance: false,
  announcement: false,
  promoBanner: false,
  festiveTheme: "none",
  theme: "dark",
  colorTheme: "blue",
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [status, setStatus] = useState<SiteStatus>(defaultStatus)
  const [loading, setLoading] = useState(true)
  const [loggingOut, setLoggingOut] = useState(false)

  useEffect(() => {
    let mounted = true

    const init = async () => {
      try {
        const authRes = await fetch("/api/admin/check", { cache: "no-store" })
        if (!mounted) return

        if (!authRes.ok) {
          router.replace("/admin/login")
          return
        }

        try {
          const settingsRes = await fetch("/api/admin/settings", { cache: "no-store" })
          if (mounted && settingsRes.ok) {
            const data = await settingsRes.json()
            const s = data?.settings
            if (s && typeof s === "object") {
              setStatus({
                maintenance: Boolean(s.maintenance?.enabled),
                announcement: Boolean(s.announcement?.enabled),
                promoBanner: Boolean(s.promoBanner?.enabled),
                festiveTheme:
                  typeof s.defaultTheme?.festiveTheme === "string" ? s.defaultTheme.festiveTheme : "none",
                theme: typeof s.defaultTheme?.theme === "string" ? s.defaultTheme.theme : "dark",
                colorTheme: typeof s.defaultTheme?.colorTheme === "string" ? s.defaultTheme.colorTheme : "blue",
              })
            }
          }
        } catch {
          // Settings fetch failed — show dashboard with default status
        }
      } catch {
        if (mounted) router.replace("/admin/login")
      } finally {
        if (mounted) setLoading(false)
      }
    }

    init()

    return () => {
      mounted = false
    }
  }, [router])

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch("/api/admin/logout", { method: "POST" })
    } catch {
      // ignore
    }
    router.replace("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-zinc-700 border-t-zinc-300" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Shield className="h-4 w-4 text-zinc-400" />
              <span className="font-semibold text-sm text-white">SN White Hosting</span>
              <span className="hidden sm:inline text-zinc-600 text-xs">·</span>
              <span className="hidden sm:inline text-zinc-500 text-xs">Admin Panel</span>
            </div>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white disabled:opacity-50 transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-800"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">{loggingOut ? "Saliendo..." : "Cerrar sesión"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Panel de control</h1>
          <p className="text-zinc-500 mt-1.5">Administra el contenido y la configuración del sitio.</p>
        </div>

        {/* Status strip */}
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="h-4 w-4 text-zinc-400" />
            <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Estado del sitio</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusPill label="Mantenimiento" active={status.maintenance} activeColor="red" />
            <StatusPill label="Anuncio" active={status.announcement} activeColor="yellow" />
            <StatusPill label="Banner promo" active={status.promoBanner} activeColor="blue" />
            <div
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
                status.festiveTheme !== "none"
                  ? "border-purple-500/40 bg-purple-500/10 text-purple-300"
                  : "border-zinc-700 bg-zinc-800/50 text-zinc-500"
              }`}
            >
              <span>
                Festivo:{" "}
                <span className="font-medium">{status.festiveTheme === "none" ? "—" : status.festiveTheme}</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-500">
              <span>
                Tema: <span className="font-medium">{status.theme} / {status.colorTheme}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NavCard
            href="/admin/content"
            icon={<Database className="h-5 w-5 text-blue-400" />}
            iconBg="bg-blue-500/10 border-blue-500/20 group-hover:bg-blue-500/20"
            title="Editor de contenido"
            description="Edita textos, precios y planes por página sin tocar código."
          />
          <NavCard
            href="/admin/settings"
            icon={<Settings className="h-5 w-5 text-green-400" />}
            iconBg="bg-green-500/10 border-green-500/20 group-hover:bg-green-500/20"
            title="Configuración"
            description="Mantenimiento, banners, temas festivos y opciones del sitio."
          />
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all flex items-start gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-700/50 border border-zinc-600 group-hover:bg-zinc-700 transition-colors">
              <Globe className="h-5 w-5 text-zinc-300" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-0.5">Ver el sitio</h3>
              <p className="text-sm text-zinc-500">Abre el sitio público en una nueva pestaña.</p>
            </div>
          </a>
        </div>
      </main>
    </div>
  )
}

function NavCard({
  href,
  icon,
  iconBg,
  title,
  description,
}: {
  href: string
  icon: ReactNode
  iconBg: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all flex items-start gap-4"
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${iconBg}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white mb-0.5">{title}</h3>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
    </Link>
  )
}

function StatusPill({
  label,
  active,
  activeColor,
}: {
  label: string
  active: boolean
  activeColor: "red" | "yellow" | "blue"
}) {
  const activeClasses: Record<string, string> = {
    red: "border-red-500/40 bg-red-500/10 text-red-300",
    yellow: "border-yellow-500/40 bg-yellow-500/10 text-yellow-300",
    blue: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  }

  return (
    <div
      className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${
        active ? activeClasses[activeColor] : "border-zinc-700 bg-zinc-800/50 text-zinc-500"
      }`}
    >
      {active ? (
        <AlertTriangle className="h-3 w-3" />
      ) : (
        <CheckCircle className="h-3 w-3 text-zinc-600" />
      )}
      <span>
        {label}: <span className="font-medium">{active ? "Activo" : "Off"}</span>
      </span>
    </div>
  )
}

