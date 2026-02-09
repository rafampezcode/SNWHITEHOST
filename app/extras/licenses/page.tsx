"use client"

import { Key, ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"

const CLIENT_URL = "https://clients.snwhitehosting.com"

interface LicensePlan {
  name: string
  priceEUR: number
  priceUSD: number
  description: string
  features: string[]
  href: string
  popular?: boolean
}

export default function LicensesPage() {
  const { t } = useLanguage()
  const { currency } = useCurrency()

  const plans: LicensePlan[] = [
    {
      name: t.products?.licenses?.plans?.personalPlus?.name || "DirectAdmin - Personal Plus",
      priceEUR: 5.00,
      priceUSD: 5.00,
      description: t.products?.licenses?.plans?.personalPlus?.description || "La licencia DirectAdmin Personal PLUS incluye 2 cuentas, 20 dominios y el paquete Pro.",
      features: [
        t.products?.licenses?.plans?.personalPlus?.features?.f1 || "Incluye soporte técnico para la instalación",
        t.products?.licenses?.plans?.personalPlus?.features?.f2 || "Actualizaciones automáticas",
        t.products?.licenses?.plans?.personalPlus?.features?.f3 || "Protección contra aumentos de precio",
        t.products?.licenses?.plans?.personalPlus?.features?.f4 || "2 cuentas, 20 dominios",
        t.products?.licenses?.plans?.personalPlus?.features?.f5 || "Autoinstalación",
        t.products?.licenses?.plans?.personalPlus?.features?.f6 || "Instalación en la nube, VPS o servidor dedicado"
      ],
      href: "https://clients.snwhitehosting.com/index.php?rp=/store/licencias/licencia-directadmin",
    },
    {
      name: t.products?.licenses?.plans?.lite?.name || "DirectAdmin - LITE",
      priceEUR: 15.00,
      priceUSD: 15.00,
      description: t.products?.licenses?.plans?.lite?.description || "La licencia DirectAdmin LITE incluye 10 cuentas, 50 dominios y todas las funciones necesarias.",
      features: [
        t.products?.licenses?.plans?.lite?.features?.f1 || "Incluye soporte técnico para la instalación",
        t.products?.licenses?.plans?.lite?.features?.f2 || "Actualizaciones automáticas",
        t.products?.licenses?.plans?.lite?.features?.f3 || "Protección contra aumentos de precio",
        t.products?.licenses?.plans?.lite?.features?.f4 || "10 cuentas, 50 dominios",
        t.products?.licenses?.plans?.lite?.features?.f5 || "Autoinstalación",
        t.products?.licenses?.plans?.lite?.features?.f6 || "Instalación en la nube, VPS o servidor dedicado"
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=3",
      popular: true,
    },
    {
      name: t.products?.licenses?.plans?.standard?.name || "DirectAdmin - Standard",
      priceEUR: 29.00,
      priceUSD: 29.00,
      description: t.products?.licenses?.plans?.standard?.description || "La licencia DirectAdmin Standard es ideal para empresas de alojamiento compartido.",
      features: [
        t.products?.licenses?.plans?.standard?.features?.f1 || "Incluye soporte técnico para la instalación",
        t.products?.licenses?.plans?.standard?.features?.f2 || "Actualizaciones automáticas",
        t.products?.licenses?.plans?.standard?.features?.f3 || "Protección contra aumentos de precio",
        t.products?.licenses?.plans?.standard?.features?.f4 || "Cuentas y dominios ilimitados",
        t.products?.licenses?.plans?.standard?.features?.f5 || "Autoinstalación",
        t.products?.licenses?.plans?.standard?.features?.f6 || "Instalación en la nube, VPS o servidor dedicado"
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=4",
    },
  ]

  const displayPrice = (priceEUR: number, priceUSD: number) => {
    return currency === "EUR" ? `${priceEUR.toFixed(2)} €` : `$${priceUSD.toFixed(2)}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background py-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(122,6,6,0.08),transparent_70%)]" />
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-primary/10">
              <Key className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {t.products?.licenses?.title || "Licencias de Software"}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.products?.licenses?.description || "Licencias oficiales de DirectAdmin con soporte técnico y actualizaciones automáticas."}
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, idx) => (
                <div 
                  key={idx}
                  className={`relative rounded-2xl border-2 bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden ${
                    plan.popular ? 'border-primary/40 shadow-primary/10' : 'border-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {t.pricing?.popular || "Popular"}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-primary">
                        {displayPrice(plan.priceEUR, plan.priceUSD)}
                      </span>
                      <span className="text-sm text-muted-foreground">{t.services?.perMonth || "/mes"}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {plan.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      size="default" 
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href={plan.href}>
                        {t.pricing?.orderNow || "Contratar"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.products?.licenses?.infoTitle || "Licencias Oficiales DirectAdmin"}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.products?.licenses?.infoDescription || "DirectAdmin es un panel de control web ligero y potente diseñado para administrar sitios web, cuentas de correo electrónico, bases de datos y más. Todas nuestras licencias incluyen soporte técnico para la instalación, actualizaciones automáticas y protección contra aumentos de precio."}
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingSupport />
      <BackToTop />
    </div>
  )
}
