"use client"

import React from "react"
import {
  Server,
  Gamepad2,
  HardDrive,
  Headphones,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"

export function ServicesSection() {
  const { t } = useLanguage()
  const { formatPrice } = useCurrency()

  const services = [
    {
      icon: Server,
      title: t.hosting.shared,
      description: t.hosting.sharedDesc,
      price: 3.99,
      href: "/hosting/shared",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: HardDrive,
      title: t.servers.vps,
      description: t.servers.vpsDesc,
      price: 6.50,
      href: "/servers/vps",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Gamepad2,
      title: t.nav.gameHosting,
      description: t.games.minecraftDesc,
      price: 4.99,
      href: "/games/minecraft",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Headphones,
      title: t.proServices.sysadmin,
      description: t.proServices.sysadminDesc,
      price: 29.99,
      href: "/services/sysadmin",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Mail,
      title: t.proServices.email,
      description: t.proServices.emailDesc,
      price: 1.50,
      href: "/services/email",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
    {
      icon: Globe,
      title: t.domains.register,
      description: t.domains.registerDesc,
      price: 9.99,
      href: "/domains",
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.bgColor} mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-sm text-muted-foreground">{t.services.startingFrom}</span>
                  <span className="text-2xl font-bold text-foreground">{formatPrice(service.price)}</span>
                  <span className="text-sm text-muted-foreground">{t.services.perMonth}</span>
                </div>
                <Button className="w-full group-hover:bg-primary" asChild>
                  <a href={service.href}>
                    {t.services.viewAll}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
