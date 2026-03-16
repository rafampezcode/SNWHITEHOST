"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from "lucide-react"
import type { CmsPlan } from "../_types"
import { createEmptyPlan, parseNumber } from "../_helpers"

type Props = {
  plans: CmsPlan[]
  onChange: (plans: CmsPlan[]) => void
}

function patch(plans: CmsPlan[], index: number, update: Partial<CmsPlan>): CmsPlan[] {
  return plans.map((plan, i) => (i === index ? { ...plan, ...update } : plan))
}

export function PlansEditor({ plans, onChange }: Props) {
  const addPlan = () => onChange([...plans, createEmptyPlan()])
  const removePlan = (i: number) => onChange(plans.filter((_, idx) => idx !== i))
  const updateField = <K extends keyof CmsPlan>(i: number, field: K, value: CmsPlan[K]) =>
    onChange(patch(plans, i, { [field]: value } as Partial<CmsPlan>))

  const addFeature = (pi: number) =>
    onChange(patch(plans, pi, { features: [...plans[pi].features, ""] }))
  const removeFeature = (pi: number, fi: number) =>
    onChange(patch(plans, pi, { features: plans[pi].features.filter((_, i) => i !== fi) }))
  const updateFeature = (pi: number, fi: number, value: string) =>
    onChange(patch(plans, pi, { features: plans[pi].features.map((f, i) => (i === fi ? value : f)) }))

  return (
    <div className="space-y-3 rounded-md border border-border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Planes</h3>
        <Button variant="outline" size="sm" onClick={addPlan}>
          <Plus className="mr-1 h-4 w-4" />
          Anadir plan
        </Button>
      </div>

      {plans.length === 0 ? (
        <p className="text-sm text-muted-foreground">No hay planes. Anade uno.</p>
      ) : (
        <div className="space-y-3">
          {plans.map((plan, pi) => (
            <div key={pi} className="rounded-md border border-border p-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Plan #{pi + 1}</div>
                <Button variant="ghost" size="sm" onClick={() => removePlan(pi)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  placeholder="Nombre del plan"
                  value={plan.name}
                  onChange={(e) => updateField(pi, "name", e.target.value)}
                />
                <Input
                  placeholder="Badge (opcional)"
                  value={plan.badge}
                  onChange={(e) => updateField(pi, "badge", e.target.value)}
                />
              </div>

              <Textarea
                className="min-h-[70px]"
                placeholder="Descripcion del plan"
                value={plan.description}
                onChange={(e) => updateField(pi, "description", e.target.value)}
              />

              <div className="grid gap-3 md:grid-cols-3">
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Precio EUR"
                  value={plan.priceEUR}
                  onChange={(e) => updateField(pi, "priceEUR", parseNumber(e.target.value))}
                />
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Precio USD"
                  value={plan.priceUSD}
                  onChange={(e) => updateField(pi, "priceUSD", parseNumber(e.target.value))}
                />
                <Input
                  placeholder="URL compra"
                  value={plan.href}
                  onChange={(e) => updateField(pi, "href", e.target.value)}
                />
              </div>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={plan.popular}
                  onChange={(e) => updateField(pi, "popular", e.target.checked)}
                />
                Marcar como plan destacado
              </label>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-muted-foreground">Caracteristicas del plan</div>
                  <Button variant="outline" size="sm" onClick={() => addFeature(pi)}>
                    <Plus className="mr-1 h-3.5 w-3.5" />
                    Anadir
                  </Button>
                </div>
                {plan.features.map((feature, fi) => (
                  <div key={fi} className="flex gap-2">
                    <Input
                      value={feature}
                      placeholder="Ej: SSD NVMe"
                      onChange={(e) => updateFeature(pi, fi, e.target.value)}
                    />
                    <Button variant="ghost" size="sm" onClick={() => removeFeature(pi, fi)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
