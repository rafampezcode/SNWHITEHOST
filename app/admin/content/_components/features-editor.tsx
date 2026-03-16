"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from "lucide-react"
import type { CmsFeature } from "../_types"

type Props = {
  features: CmsFeature[]
  onChange: (features: CmsFeature[]) => void
}

export function FeaturesEditor({ features, onChange }: Props) {
  const add = () => onChange([...features, { title: "", description: "" }])
  const remove = (i: number) => onChange(features.filter((_, idx) => idx !== i))
  const update = (i: number, patch: Partial<CmsFeature>) =>
    onChange(features.map((item, idx) => (idx === i ? { ...item, ...patch } : item)))

  return (
    <div className="space-y-3 rounded-md border border-border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Features</h3>
        <Button variant="outline" size="sm" onClick={add}>
          <Plus className="mr-1 h-4 w-4" />
          Anadir
        </Button>
      </div>
      {features.map((item, index) => (
        <div key={index} className="rounded-md border border-border p-3 space-y-2">
          <Input
            placeholder="Titulo"
            value={item.title}
            onChange={(e) => update(index, { title: e.target.value })}
          />
          <Textarea
            className="min-h-[68px]"
            placeholder="Descripcion"
            value={item.description}
            onChange={(e) => update(index, { description: e.target.value })}
          />
          <Button variant="ghost" size="sm" onClick={() => remove(index)}>
            <Trash2 className="mr-1 h-4 w-4" />
            Eliminar
          </Button>
        </div>
      ))}
    </div>
  )
}
