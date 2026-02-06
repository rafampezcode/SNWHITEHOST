"use client"

import React from "react"
import { Zap, Shield, Clock, Cpu, HardDrive, Headphones } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function FeatureHighlights() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Zap,
      titleKey: "litespeed",
      descKey: "litespeed",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: HardDrive,
      titleKey: "nvme",
      descKey: "nvme",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Shield,
      titleKey: "security",
      descKey: "security",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Cpu,
      titleKey: "cpu",
      descKey: "cpu",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Clock,
      titleKey: "uptime",
      descKey: "uptime",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Headphones,
      titleKey: "support",
      descKey: "support",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t.featureHighlights?.title || "Cutting-Edge Technology"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.featureHighlights?.subtitle || "We use only first-class hardware and software for the best performance"}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => {
            const featureData = t.featureHighlights?.[highlight.titleKey as keyof typeof t.featureHighlights]
            return (
              <div
                key={highlight.titleKey}
                className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${highlight.bgColor} mb-4`}>
                  <highlight.icon className={`h-7 w-7 ${highlight.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {typeof featureData === "object" && featureData?.title ? featureData.title : highlight.titleKey}
                </h3>
                <p className="text-muted-foreground">
                  {typeof featureData === "object" && featureData?.description ? featureData.description : "Feature description"}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
