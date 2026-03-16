"use client"

import React from "react"
import { Building2, Cpu, Network } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TrustSection() {
  const { t } = useLanguage()

  const trustItems = [
    {
      icon: Building2,
      title: t.trust.datacenters,
      description: t.trust.datacentersDesc,
    },
    {
      icon: Cpu,
      title: t.trust.hardware,
      description: t.trust.hardwareDesc,
    },
    {
      icon: Network,
      title: t.trust.network,
      description: t.trust.networkDesc,
    },
  ]

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.trust.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.trust.subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 border border-border/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
