"use client"

import React from "react"
import { Shield, Clock, Headphones, CreditCard, RefreshCw, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"
import { Button } from "@/components/ui/button"

const CLIENT_URL = "https://clients.snwhitehosting.com"

const badgeIcons = {
  secure: Shield,
  uptime: Clock,
  support247: Headphones,
  easyPayment: CreditCard,
  moneyBack: RefreshCw,
  premium: Award,
}

export function TrustBadges() {
  const { t } = useLanguage()
  const { formatPrice, currency } = useCurrency()

  const badges = [
    {
      key: "secure",
      icon: badgeIcons.secure,
      title: t.trustBadges?.secure || "Secure",
      description: t.trustBadges?.secureDesc || "SSL Protected",
    },
    {
      key: "uptime",
      icon: badgeIcons.uptime,
      title: t.trustBadges?.uptime || "99.9% Uptime",
      description: t.trustBadges?.uptimeDesc || "Guaranteed",
    },
    {
      key: "support247",
      icon: badgeIcons.support247,
      title: t.trustBadges?.support247 || "24/7 Support",
      description: t.trustBadges?.supportDesc || "Always here",
    },
    {
      key: "easyPayment",
      icon: badgeIcons.easyPayment,
      title: t.trustBadges?.easyPayment || "Easy Payment",
      description: t.trustBadges?.paymentDesc || "Flexible billing",
    },
    {
      key: "moneyBack",
      icon: badgeIcons.moneyBack,
      title: t.trustBadges?.moneyBack || "Money Back",
      description: t.trustBadges?.moneyBackDesc || "30 days",
    },
    {
      key: "premium",
      icon: badgeIcons.premium,
      title: t.trustBadges?.premium || "Premium",
      description: t.trustBadges?.premiumDesc || "Quality assured",
    },
  ]

  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {t.trustBadges?.startingFrom || 'Starting from'} {currency === 'USD' ? '$5.00' : '3.99 €'}
          </h2>
          <p className="text-muted-foreground">
            {t.trustBadges?.withAllFeatures || 'With all the features you need'}
          </p>
          <div className="mt-4">
            <Button asChild>
              <a href="/hosting/shared">
                {(t as any).hero?.viewOffers || 'View All Plans'}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div key={badge.key} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-3">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
