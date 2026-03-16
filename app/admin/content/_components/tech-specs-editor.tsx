"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"
import type { CmsTechSpec } from "../_types"

type Props = {
  techSpecs: CmsTechSpec[]
  onChange: (techSpecs: CmsTechSpec[]) => void
}

export function TechSpecsEditor({ techSpecs, onChange }: Props) {
  const add = () => onChange([...techSpecs, { label: "", value: "" }])
  const remove = (i: number) => onChange(techSpecs.filter((_, idx) => idx !== i))
  const update = (i: number, patch: Partial<CmsTechSpec>) =>
    onChange(techSpecs.map((item, idx) => (idx === i ? { ...item, ...patch } : item)))

  return (
    <div className="space-y-3 rounded-md border border-border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Especificaciones tecnicas</h3>
        <Button variant="outline" size="sm" onClick={add}>
          <Plus className="mr-1 h-4 w-4" />
          Anadir
        </Button>
      </div>
      {techSpecs.map((item, index) => (
        <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-2">
          <Input
            placeholder="Etiqueta"
            value={item.label}
            onChange={(e) => update(index, { label: e.target.value })}
          />
          <Input
            placeholder="Valor"
            value={item.value}
            onChange={(e) => update(index, { value: e.target.value })}
          />
          <Button variant="ghost" size="sm" onClick={() => remove(index)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}
