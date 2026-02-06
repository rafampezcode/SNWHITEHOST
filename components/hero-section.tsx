"use client"

import React from "react"
import { ArrowRight, Server, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export function HeroSection() {
  const { t, language } = useLanguage()
  const { formatPrice, currency } = useCurrency()

  return (
    <>
      {/* Hero 1 - Game Servers */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(122,6,6,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                {t.hero.subtitle}
              </p>

              <p className="mt-4 text-2xl font-bold text-primary">
                {t.hero?.startingFrom || 'Starting from'} {currency === 'USD' ? '$5.00' : '3.99 €'}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href={`${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`}>
                    {t.hero?.getStarted || 'Get Started'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <a href="/hosting/shared">
                    {t.hero?.viewOffers || 'View Offers'}
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative flex items-center justify-center">
                <Server className="h-64 w-64 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero 2 - Web Hosting */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative hidden lg:block order-1 lg:order-none">
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative flex items-center justify-center">
                <Globe className="h-64 w-64 text-primary/20" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t.hero?.hostingTitle || 'Everything you need to host your website'}
              </h2>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                {t.hero?.hostingSubtitle || 'Fast, secure, and reliable hosting with LiteSpeed, NVMe storage, and 24/7 support.'}
              </p>

              <p className="mt-4 text-2xl font-bold text-primary">
                {t.hero?.webHostingFrom || 'Get your website from'} {currency === 'USD' ? '$5.00' : '3.99 €'}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href={`${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-basico`}>
                    {t.hero?.getStarted || 'Get Started'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <a href="/hosting/shared">
                    {t.hero?.readMore || 'Read More'}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
