"use client"

import React from "react"
import { Shield, Zap, Headphones, Server, HardDrive, Gauge } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function GuaranteesSection() {
  const { t } = useLanguage()

  const guarantees = [
    {
      icon: Gauge,
      title: t.guarantees?.items?.[0]?.title || "99.99% Uptime Guarantee",
      description: t.guarantees?.items?.[0]?.description || "We guarantee that your server will be online 99.99% of the time. Check our status page for live updates.",
    },
    {
      icon: Shield,
      title: t.guarantees?.items?.[1]?.title || "Safe and Secured",
      description: t.guarantees?.items?.[1]?.description || "We have L3/L4 and L7 layer Anti-DDoS protection with Imunify360, so you don't have to worry about attacks.",
    },
    {
      icon: Headphones,
      title: t.guarantees?.items?.[2]?.title || "Dedicated Support",
      description: t.guarantees?.items?.[2]?.description || "We have a good 24/7 support through tickets on our Discord server or our billing panel.",
    },
    {
      icon: Server,
      title: t.guarantees?.items?.[3]?.title || "Performance",
      description: t.guarantees?.items?.[3]?.description || "We guarantee excellent performance in all our services, thanks to our powerful AMD EPYC and Ryzen 9 servers.",
    },
    {
      icon: Zap,
      title: t.guarantees?.items?.[4]?.title || "Control Panel",
      description: t.guarantees?.items?.[4]?.description || "We have an extensive control panel with many functions: cPanel, Pterodactyl, subusers, activity logs, and more.",
    },
    {
      icon: HardDrive,
      title: t.guarantees?.items?.[5]?.title || "Fast Disk Drives",
      description: t.guarantees?.items?.[5]?.description || "We guarantee high speed on all our servers, with our fast NVMe SSD hard disks and DDR5 memory.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.guarantees?.title || "We Guarantee"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.guarantees?.subtitle || "Discover why thousands of customers worldwide trust us"}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
