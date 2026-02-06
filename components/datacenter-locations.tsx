"use client"

import React from "react"
import { MapPin, Check, Signal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const locations = [
  {
    city: "Virginia",
    country: "USA",
    flag: "US",
    latency: "15ms",
    features: ["Anti-DDoS", "NVMe", "10Gbps"],
  },
  {
    city: "Frankfurt",
    country: "Germany",
    flag: "DE",
    latency: "25ms",
    features: ["Anti-DDoS", "NVMe", "10Gbps"],
  },
  {
    city: "Helsinki",
    country: "Finland",
    flag: "FI",
    latency: "18ms",
    features: ["Anti-DDoS", "NVMe", "10Gbps"],
  },
]

export function DatacenterLocations() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t.datacenters.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.datacenters.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.city}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{location.city}</h3>
                  <p className="text-sm text-muted-foreground">{location.country}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-sm">
                <Signal className="h-4 w-4 text-green-500" />
                <span className="text-green-500 font-medium">{location.latency}</span>
                <span className="text-muted-foreground">{t.datacenters.latency}</span>
              </div>

              <ul className="space-y-2">
                {location.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-3 w-3 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

