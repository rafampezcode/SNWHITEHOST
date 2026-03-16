"use client"

import React from "react"
import { Check, X, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useLanguage } from "@/components/language-provider"

interface Feature {
  name: string
  tooltip?: string
  plans: (boolean | string)[]
}

interface ComparisonTableProps {
  title: string
  plans: { name: string; price: string }[]
  features: Feature[]
}

export function ComparisonTable({ title, plans, features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-muted/50 border-b border-border">
              <span className="text-lg font-bold text-foreground">{title}</span>
            </th>
            {plans.map((plan) => (
              <th key={plan.name} className="p-4 bg-muted/50 border-b border-border text-center min-w-[140px]">
                <div className="font-bold text-foreground">{plan.name}</div>
                <div className="text-sm text-primary font-medium">{plan.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx} className={cn(idx % 2 === 0 ? "bg-background" : "bg-muted/30")}>
              <td className="p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="text-foreground">{feature.name}</span>
                  {feature.tooltip && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">{feature.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </td>
              {feature.plans.map((value, planIdx) => (
                <td key={planIdx} className="p-4 border-b border-border text-center">
                  {typeof value === "boolean" ? (
                    value ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                    )
                  ) : (
                    <span className="text-foreground font-medium">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Ejemplo de uso para hosting
export function HostingComparisonSection() {
  const { t } = useLanguage()

  const plans = [
    { name: t.comparison?.planBasic || "Plan Básico", price: "3.99 €/mo" },
    { name: t.comparison?.planIntermediate || "Plan Intermedio", price: "6.99 €/mo" },
    { name: t.comparison?.planAdvanced || "Plan Avanzado", price: "9.99 €/mo" },
    { name: t.comparison?.planEnterprise || "Plan Enterprise", price: "20.00 €" },
    { name: t.comparison?.planBasicPremium || "Plan Básico Premium", price: "7.99 €/mo" },
  ]

  const features: Feature[] = [
    { name: t.comparison?.nvmeSpace || "Almacenamiento NVMe", plans: ["15 GB", "20 GB", "50 GB", "100 GB", "15 GB"] },
    { name: t.comparison?.memoryType || "Tipo de Memoria", plans: ["DDR4", "DDR4", "DDR4", "DDR4", "DDR5"] },
    { name: t.comparison?.liteSpeedServer || "Servidor LiteSpeed + LSCache", plans: [true, true, true, true, true] },
    { name: t.comparison?.imunify360Security || "Seguridad Imunify360 Anti-Malware", plans: [true, true, true, true, true] },
    { name: t.comparison?.cloudLinuxSystem || "Sistema CloudLinux", plans: [true, true, true, true, true] },
    { name: t.comparison?.jetBackupBackups || "Copias de seguridad JetBackup", plans: [true, true, true, true, true] },
    { name: t.comparison?.cpanelIncluded || "cPanel incluido", plans: [true, true, true, true, true] },
    { name: t.comparison?.databases || "Bases de Datos MySQL", plans: ["3", "6", "10", "20", "3"] },
    { name: t.comparison?.ftpAccounts || "Cuentas FTP", plans: ["3", "6", "10", "20", "3"] },
    { name: t.comparison?.unlimitedEmails || "Correos electrónicos ilimitados", plans: [true, true, true, true, true] },
    { name: t.comparison?.freeSsl || "Certificado SSL gratuito", plans: [true, true, true, true, true] },
    { name: t.comparison?.serverLocation || "Ubicación del servidor", plans: [t.comparison?.finlandGermany || "Finlandia Y Alemania", t.comparison?.finlandGermany || "Finlandia Y Alemania", t.comparison?.finlandGermany || "Finlandia Y Alemania", t.comparison?.finlandGermany || "Finlandia Y Alemania", t.comparison?.finlandGermany || "Finlandia Y Alemania"] },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="rounded-xl border border-border overflow-hidden">
          <ComparisonTable
            title={t.comparison.features}
            plans={plans}
            features={features}
          />
        </div>
      </div>
    </section>
  )
}
