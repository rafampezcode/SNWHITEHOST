"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from "lucide-react"
import type { CmsFaq } from "../_types"

type Props = {
  faqs: CmsFaq[]
  onChange: (faqs: CmsFaq[]) => void
}

export function FaqsEditor({ faqs, onChange }: Props) {
  const add = () => onChange([...faqs, { question: "", answer: "" }])
  const remove = (i: number) => onChange(faqs.filter((_, idx) => idx !== i))
  const update = (i: number, patch: Partial<CmsFaq>) =>
    onChange(faqs.map((item, idx) => (idx === i ? { ...item, ...patch } : item)))

  return (
    <div className="space-y-3 rounded-md border border-border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">FAQ</h3>
        <Button variant="outline" size="sm" onClick={add}>
          <Plus className="mr-1 h-4 w-4" />
          Anadir
        </Button>
      </div>
      {faqs.map((item, index) => (
        <div key={index} className="rounded-md border border-border p-3 space-y-2">
          <Input
            placeholder="Pregunta"
            value={item.question}
            onChange={(e) => update(index, { question: e.target.value })}
          />
          <Textarea
            className="min-h-[68px]"
            placeholder="Respuesta"
            value={item.answer}
            onChange={(e) => update(index, { answer: e.target.value })}
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
