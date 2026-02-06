"use client"

import React from "react"

const partners = [
  { name: "cPanel", logo: "cPanel" },
  { name: "LiteSpeed", logo: "LiteSpeed" },
  { name: "CloudLinux", logo: "CloudLinux" },
  { name: "Imunify360", logo: "Imunify360" },
  { name: "Plesk", logo: "Plesk" },
  { name: "Pterodactyl", logo: "Pterodactyl" },
  { name: "AMD EPYC", logo: "AMD EPYC" },
  { name: "NVMe", logo: "NVMe" },
]

export function PartnersSection() {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Tecnologias y partners de confianza
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <span className="text-sm font-semibold">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
