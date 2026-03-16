"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from "lucide-react"

type Props = {
  benefits: string[]
  onChange: (benefits: string[]) => void
}

export function BenefitsEditor({ benefits, onChange }: Props) {
  const add = () => onChange([...benefits, ""])
  const remove = (i: number) => onChange(benefits.filter((_, idx) => idx !== i))
  const update = (i: number, value: string) =>
    onChange(benefits.map((item, idx) => (idx === i ? value : item)))

  return (
    <div className="space-y-3 rounded-md border border-border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Beneficios rapidos</h3>
        <Button variant="outline" size="sm" onClick={add}>
          <Plus className="mr-1 h-4 w-4" />
          Anadir
        </Button>
      </div>
      {benefits.map((benefit, index) => (
        <div key={index} className="flex gap-2">
          <Input
            placeholder="Ej: Soporte 24/7"
            value={benefit}
            onChange={(e) => update(index, e.target.value)}
          />
          <Button variant="ghost" size="sm" onClick={() => remove(index)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}
