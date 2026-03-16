"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"
import type { CmsPageSection } from "../_types"

type Props = {
  sections: CmsPageSection[]
  onChange: (sections: CmsPageSection[]) => void
}

export function PageSectionsEditor({ sections, onChange }: Props) {
  const [activeSectionId, setActiveSectionId] = useState<string>("")

  const activeSection = useMemo(() => {
    if (!sections.length) {
      return null
    }

    if (activeSectionId) {
      const found = sections.find((section) => section.id === activeSectionId)
      if (found) {
        return found
      }
    }

    return sections[0]
  }, [sections, activeSectionId])

  const updateSectionTitle = (sectionId: string, title: string) => {
    onChange(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              title,
            }
          : section,
      ),
    )
  }

  const updateTextValue = (sectionId: string, textId: string, value: string) => {
    onChange(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              texts: section.texts.map((textItem) =>
                textItem.id === textId
                  ? {
                      ...textItem,
                      value,
                    }
                  : textItem,
              ),
            }
          : section,
      ),
    )
  }

  const resetSection = (sectionId: string) => {
    onChange(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              texts: section.texts.map((textItem) => ({
                ...textItem,
                value: textItem.source,
              })),
              newTexts: [],
            }
          : section,
      ),
    )
  }

  const addNewText = (sectionId: string) => {
    onChange(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              newTexts: [...section.newTexts, ""],
            }
          : section,
      ),
    )
  }

  const updateNewText = (sectionId: string, index: number, value: string) => {
    onChange(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              newTexts: section.newTexts.map((item, itemIndex) => (itemIndex === index ? value : item)),
            }
          : section,
      ),
    )
  }

  const removeNewText = (sectionId: string, index: number) => {
    onChange(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              newTexts: section.newTexts.filter((_, itemIndex) => itemIndex !== index),
            }
          : section,
      ),
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Texto completo por secciones</CardTitle>
      </CardHeader>
      <CardContent>
        {!sections.length ? (
          <p className="text-sm text-muted-foreground">
            No hay texto cargado aun. Usa "Extraer texto actual" para importar todo el contenido de la pagina.
          </p>
        ) : (
          <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
            <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
              {sections.map((section) => {
                const isActive = section.id === activeSection?.id
                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSectionId(section.id)}
                    className={`w-full rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                      isActive
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border hover:border-primary/40 hover:bg-muted"
                    }`}
                  >
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs text-muted-foreground">{section.texts.length} textos</div>
                  </button>
                )
              })}
            </div>

            <div className="space-y-4">
              {activeSection && (
                <>
                  <div className="flex items-center gap-2">
                    <Input
                      value={activeSection.title}
                      onChange={(event) => updateSectionTitle(activeSection.id, event.target.value)}
                      placeholder="Nombre de la seccion"
                    />
                    <Button type="button" variant="outline" onClick={() => resetSection(activeSection.id)}>
                      Restaurar seccion
                    </Button>
                  </div>

                  <div className="max-h-[520px] space-y-3 overflow-y-auto pr-1">
                    {activeSection.texts.map((textItem, index) => (
                      <div key={textItem.id} className="space-y-2 rounded-md border border-border p-3">
                        <div className="text-xs font-medium text-muted-foreground">Texto {index + 1}</div>
                        <Textarea value={textItem.source} readOnly className="min-h-[72px] text-xs" />
                        <Textarea
                          value={textItem.value}
                          onChange={(event) => updateTextValue(activeSection.id, textItem.id, event.target.value)}
                          className="min-h-[72px]"
                        />
                      </div>
                    ))}

                    <div className="space-y-3 rounded-md border border-border p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium text-muted-foreground">Textos nuevos de esta seccion</div>
                        <Button type="button" variant="outline" size="sm" onClick={() => addNewText(activeSection.id)}>
                          <Plus className="mr-1 h-4 w-4" />
                          Anadir texto
                        </Button>
                      </div>

                      {activeSection.newTexts.length === 0 ? (
                        <p className="text-xs text-muted-foreground">Sin textos nuevos en esta seccion.</p>
                      ) : (
                        activeSection.newTexts.map((newText, index) => (
                          <div key={`${activeSection.id}-new-${index}`} className="grid gap-2 md:grid-cols-[1fr_auto]">
                            <Textarea
                              value={newText}
                              onChange={(event) => updateNewText(activeSection.id, index, event.target.value)}
                              className="min-h-[72px]"
                              placeholder="Escribe un texto nuevo para insertar en esta seccion"
                            />
                            <Button type="button" variant="ghost" size="sm" onClick={() => removeNewText(activeSection.id, index)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
