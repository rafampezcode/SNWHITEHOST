"use client"

import React from "react"
import { Server, Globe, Users, ThumbsUp } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { useLanguage } from "@/components/language-provider"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Server, value: 500, suffix: "+", label: t.stats.servers },
    { icon: Globe, value: 1200, suffix: "+", label: t.stats.projects },
    { icon: Users, value: 3500, suffix: "+", label: t.stats.clients },
    { icon: ThumbsUp, value: 99.9, suffix: "%", label: t.stats.satisfaction },
  ]

  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-primary-foreground/80" />
              </div>
              <div className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
              </div>
              <div className="mt-1 text-sm text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
