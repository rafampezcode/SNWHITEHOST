"use client"

import React from "react"
import { Users, TrendingUp, Percent, CreditCard, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export function AffiliatesSection() {
  const { t } = useLanguage()

  const commissionTiers = [
    { clients: "1 - 30", commission: "10%" },
    { clients: "31 - 60", commission: "15%" },
    { clients: "61 - 80", commission: "20%" },
    { clients: "81 - 150", commission: "25%" },
    { clients: "+151", commission: "30%" },
  ]

  const benefits = [
    { icon: Percent, title: t.affiliates.commission, description: t.affiliates.commissionDesc },
    { icon: TrendingUp, title: t.affiliates.scaled, description: t.affiliates.scaledDesc },
    { icon: CreditCard, title: t.affiliates.payments, description: t.affiliates.paymentsDesc },
    { icon: Users, title: t.affiliates.unlimited, description: t.affiliates.unlimitedDesc },
  ]
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            {t.affiliates.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.affiliates.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.affiliates.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Commission Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden max-w-2xl mx-auto mb-12">
          <div className="bg-primary/5 px-6 py-4 border-b border-border">
            <h3 className="font-semibold text-foreground text-center">{t.affiliates.table}</h3>
          </div>
          <div className="divide-y divide-border">
            {commissionTiers.map((tier, index) => (
              <div key={tier.clients} className="flex items-center justify-between px-6 py-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{tier.clients} {t.affiliates.clients}</span>
                </div>
                <Badge variant={index === commissionTiers.length - 1 ? "default" : "secondary"} className="text-lg font-bold">
                  {tier.commission}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <a href={`${CLIENT_URL}/index.php?rp=/store/affiliate`}>
              {t.affiliates.join}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            {t.affiliates.contact}
          </p>
        </div>
      </div>
    </section>
  )
}
