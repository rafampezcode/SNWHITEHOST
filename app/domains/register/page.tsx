"use client"

import React, { useState } from "react"
import { Globe, Search, RefreshCw, Lock, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"
import { translateProductText } from "@/lib/product-text-translations"
import type { Language } from "@/lib/translations"

const CLIENT_URL = "https://clients.snwhitehosting.com"

const popularTLDs = [
  { tld: ".com", priceEUR: 12.0, priceUSD: 14.0, desc: "1 Año" },
  { tld: ".de", priceEUR: 12.0, priceUSD: 14.0, desc: "1 Año" },
  { tld: ".es", priceEUR: 12.0, priceUSD: 14.0, desc: "1 Año" },
  { tld: ".eu", priceEUR: 12.0, priceUSD: 14.0, desc: "1 Año" },
  { tld: ".eu.com", priceEUR: 25.0, priceUSD: 30.0, desc: "1 Año" },
  { tld: ".fr", priceEUR: 14.0, priceUSD: 17.0, desc: "1 Año" },
  { tld: ".gay", priceEUR: 40.0, priceUSD: 47.0, desc: "1 Año" },
  { tld: ".info", priceEUR: 30.0, priceUSD: 35.0, desc: "1 Año" },
  { tld: ".it", priceEUR: 12.0, priceUSD: 14.0, desc: "1 Año" },
  { tld: ".net", priceEUR: 15.0, priceUSD: 18.0, desc: "1 Año" },
  { tld: ".online", priceEUR: 32.0, priceUSD: 36.0, desc: "1 Año" },
  { tld: ".org", priceEUR: 12.0, priceUSD: 14.0, desc: "1 Año" },
  { tld: ".top", priceEUR: 12.0, priceUSD: 14.0, desc: "1 Año" },
  { tld: ".us", priceEUR: 14.0, priceUSD: 17.0, desc: "1 Año" },
]

const getFeatures = (language: Language) => [
  {
    icon: Lock,
    title: translateProductText("Domain Lock", language),
    description: translateProductText("Prevent unauthorized transfers with domain lock protection included.", language),
  },
  {
    icon: RefreshCw,
    title: translateProductText("Easy Transfers", language),
    description: translateProductText("Transfer your existing domains to us with no downtime and free transfer assistance.", language),
  },
  {
    icon: Globe,
    title: translateProductText("DNS Management", language),
    description: translateProductText("Full DNS management with support for A, AAAA, CNAME, MX, TXT, and more records.", language),
  },
]

export default function RegisterDomainsPage() {
  const [domain, setDomain] = useState("")
  const { language } = useLanguage()
  const { currency } = useCurrency()
  const features = getFeatures(language)

  const formatDomainPrice = (priceEUR: number, priceUSD: number) => {
    const price = currency === "USD" ? priceUSD : priceEUR
    return currency === "USD" ? `$${price.toFixed(2)}` : `${price.toFixed(2)} €`
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (domain.trim()) {
      window.location.href = `https://clients.snwhitehosting.com/cart.php?a=add&domain=register&query=${encodeURIComponent(domain)}`
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {translateProductText("Register Domains", language)}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                {translateProductText("Search from hundreds of domain extensions. Free DNS management included with every domain.", language)}
              </p>

              {/* Domain Search */}
              <form onSubmit={handleSearch} className="mt-10 mx-auto max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder={translateProductText("Search for your domain...", language)}
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="h-14 pl-12 pr-4 text-lg bg-card border-border"
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-14 px-8 text-lg">
                    {translateProductText("Search", language)}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Popular TLDs */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {translateProductText("Popular Domain Extensions", language)}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translateProductText("Choose from hundreds of domain extensions at competitive prices", language)}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularTLDs.map((item) => (
                <Card key={item.tld} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{item.tld}</div>
                    <div className="text-sm text-muted-foreground mb-3">{translateProductText(item.desc, language)}</div>
                    <div className="text-xl font-semibold text-foreground mb-4">
                      {formatDomainPrice(item.priceEUR, item.priceUSD)}{translateProductText("/year", language)}
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="https://clients.snwhitehosting.com/cart.php?a=add&domain=register">
                        {translateProductText("Register", language)}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="link" asChild>
                <a href="https://clients.snwhitehosting.com/cart.php?a=add&domain=register">
                  {translateProductText("View all domain extensions", language)}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {translateProductText("Everything Included", language)}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translateProductText("All domains include these features at no extra cost", language)}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transfer Section */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              {translateProductText("Transfer Your Domain", language)}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {translateProductText("Already have a domain? Transfer it to us and get a free year extension plus all our features.", language)}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-primary" />
                <span>{translateProductText("Free +1 Year Extension", language)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-primary" />
                <span>{translateProductText("No Downtime", language)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-primary" />
                <span>{translateProductText("Free Transfer Assistance", language)}</span>
              </div>
            </div>
            <Button size="lg" asChild>
              <a href={`${CLIENT_URL}/cart.php?a=add&domain=transfer`}>
                {translateProductText("Transfer Domain", language)}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
