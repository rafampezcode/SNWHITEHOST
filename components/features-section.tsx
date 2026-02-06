"use client"

import React from "react"
import {
  Clock,
  Headphones,
  Zap,
  Shield,
  HardDrive,
  TrendingUp,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Clock,
      title: t.features.uptime,
      description: t.features.uptimeDesc,
    },
    {
      icon: Headphones,
      title: t.features.support,
      description: t.features.supportDesc,
    },
    {
      icon: Zap,
      title: t.features.speed,
      description: t.features.speedDesc,
    },
    {
      icon: Shield,
      title: t.features.security,
      description: t.features.securityDesc,
    },
    {
      icon: HardDrive,
      title: t.features.backup,
      description: t.features.backupDesc,
    },
    {
      icon: TrendingUp,
      title: t.features.scalable,
      description: t.features.scalableDesc,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
