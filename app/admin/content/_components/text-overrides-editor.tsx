"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"

type Props = {
  textOverrides: Record<string, string>
  onChange: (textOverrides: Record<string, string>) => void
}

export function TextOverridesEditor({ textOverrides, onChange }: Props) {
  const entries = Object.entries(textOverrides)

  const add = () => {
    const key = `Texto ${entries.length + 1}`
    onChange({ ...textOverrides, [key]: "" })
  }

  const remove = (index: number) => {
    const next = entries.filter((_, i) => i !== index)
    onChange(Object.fromEntries(next.filter(([k]) => k.trim())))
  }

  const updateKey = (index: number, newKey: string) => {
    const next = [...entries]
    next[index] = [newKey, next[index][1]]
    onChange(Object.fromEntries(next.filter(([k]) => k.trim())))
  }

  const updateValue = (index: number, newValue: string) => {
    const next = [...entries]
    next[index] = [next[index][0], newValue]
    onChange(Object.fromEntries(next.filter(([k]) => k.trim())))
  }

  return (
    <div className="space-y-3 rounded-md border border-border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Sustitucion de textos (sin cambiar diseno)</h3>
        <Button variant="outline" size="sm" onClick={add}>
          <Plus className="mr-1 h-4 w-4" />
          Anadir
        </Button>
      </div>
      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground">No hay sustituciones configuradas.</p>
      ) : (
        entries.map(([from, to], index) => (
          <div key={index} className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
            <Input
              value={from}
              placeholder="Texto actual exacto"
              onChange={(e) => updateKey(index, e.target.value)}
            />
            <Input
              value={to}
              placeholder="Texto nuevo"
              onChange={(e) => updateValue(index, e.target.value)}
            />
            <Button variant="ghost" size="sm" onClick={() => remove(index)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))
      )}
    </div>
  )
}
