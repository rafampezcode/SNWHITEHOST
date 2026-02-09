import React from "react"
import Image from "next/image"
import { Check, ArrowRight, Zap, Shield, Clock, Headphones, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"
import { translateProductText, translatePlanFeature } from "@/lib/product-text-translations"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

export interface ProductPlan {
  name: string
  priceEUR: number
  priceUSD?: number
  priceLabel?: string
  installationEUR?: number
  installationUSD?: number
  description?: string
  descriptionEUR?: string
  descriptionUSD?: string
  showInstallationFee?: boolean
  stock?: number
  features: string[]
  href: string
  popular?: boolean
  badge?: string
}

export interface ProductFeature {
  icon: LucideIcon
  title: string
  description: string
}

interface ProductPageLayoutProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  imageSrc?: string
  plans: ProductPlan[]
  features: ProductFeature[]
  faqs?: { question: string; answer: string }[]
  benefits?: string[]
  techSpecs?: { label: string; value: string }[]
  hideQuickBenefits?: boolean
  hideHeroButtons?: boolean
}

const getQuickBenefits = (t: any) => [
  { icon: Zap, label: t.features?.instantActivation || "Instant Activation" },
  { icon: Shield, label: t.features?.antiDDos || "Anti-DDoS Included" },
  { icon: Clock, label: t.features?.uptime || "99.9% Uptime" },
  { icon: Headphones, label: t.features?.support24_7 || "24/7 Support" },
]

export function ProductPageLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  imageSrc,
  plans,
  features,
  faqs,
  benefits,
  techSpecs,
  hideQuickBenefits = false,
  hideHeroButtons = false,
}: ProductPageLayoutProps) {
  const { t, language } = useLanguage()
  const { currency, formatPrice } = useCurrency()

  const formatUSDPrice = (priceUSD: number) => {
    return `$${priceUSD.toFixed(2)}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section Mejorado */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/30 py-20 lg:py-28">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,6,6,0.1),transparent_50%)]" />
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {translateProductText(subtitle, language)}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {translateProductText(title, language)}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  {translateProductText(description, language)}
                </p>
                
                {!hideQuickBenefits && (
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {getQuickBenefits(t).map((benefit) => (
                      <div key={benefit.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <benefit.icon className="h-4 w-4 text-primary" />
                        <span>{benefit.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {!hideHeroButtons && (
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                      <a href="#pricing">
                        {t.productPage?.seeAllPlans || "See Plans"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent" asChild>
                      <a href="#features">
                        {t.features?.title || "Features"}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Hero visual */}
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={translateProductText(title, language)}
                      width={160}
                      height={160}
                      className="h-40 w-40 object-contain"
                    />
                  ) : (
                    <Icon className="h-32 w-32 text-primary/40" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-muted/50 border-y border-border">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>{translateProductText(t.productPage?.rating || "4.9/5 Rating", language)}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>{translateProductText(t.productPage?.activeClients || "+500 Active Clients", language)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>{translateProductText(t.productPage?.guaranty30 || "30-day guarantee", language)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{translateProductText(t.productPage?.setupMinutes || "Setup in minutes", language)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                PRECIOS TRANSPARENTES
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t.pricing.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t.pricing.subtitle}
              </p>
            </div>

            <div className={cn(
              "grid gap-6 w-full",
              plans.length <= 3 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto" 
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5"
            )}>
              {plans.map((plan, index) => (
                <Card
                  key={`${plan.name}-${index}`}
                  className={cn(
                    "relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                    plan.popular && "border-primary shadow-lg ring-2 ring-primary"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary py-1 text-center">
                      <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">
                        {t.productPage?.mostPopular || "Most Popular"}
                      </span>
                    </div>
                  )}
                  {plan.badge && !plan.popular && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="text-xs">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className={cn("text-center pb-2", plan.popular && "pt-10")}>
                    <CardTitle className="text-xl text-foreground">{translateProductText(plan.name, language)}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold text-foreground">
                        {plan.priceLabel
                          ? translateProductText(plan.priceLabel, language)
                          : currency === "USD" && plan.priceUSD != null
                            ? formatUSDPrice(plan.priceUSD)
                            : formatPrice(plan.priceEUR)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {currency === "USD" && plan.descriptionUSD
                        ? translateProductText(plan.descriptionUSD, language)
                        : currency !== "USD" && plan.descriptionEUR
                          ? translateProductText(plan.descriptionEUR, language)
                          : plan.description
                            ? translateProductText(plan.description, language)
                            : plan.showInstallationFee === false
                              ? translateProductText("Monthly", language)
                              : currency === "USD" && plan.installationUSD != null
                                ? `${translateProductText("Monthly", language)} + ${formatUSDPrice(plan.installationUSD)} ${translateProductText("Installation Fee", language)}`
                                : `${translateProductText("Monthly", language)} + ${(plan.installationEUR ?? 0).toFixed(2)} ${translateProductText("Installation Fee", language)}`}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{translatePlanFeature(feature, language)}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={cn("w-full", !plan.popular && "bg-transparent")}
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href={plan.href} target="_blank" rel="noopener noreferrer">
                        {t.pricing.orderNow}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Money back guarantee */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-600 dark:text-green-400">
                <Shield className="h-4 w-4" />
                <span>{t.productPage?.moneyBackGuarantee || "30-day money back guarantee - No questions asked"}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Specs Section */}
        {techSpecs && techSpecs.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-bold text-foreground text-center mb-8">
                {translateProductText(t.productPage?.technicalSpecifications || "Technical Specifications", language)}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techSpecs.map((spec) => (
                  <div key={spec.label} className="bg-card rounded-lg p-4 text-center border border-border">
                    <div className="text-2xl font-bold text-primary">{translateProductText(spec.value, language)}</div>
                    <div className="text-sm text-muted-foreground">{translateProductText(spec.label, language)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        {features.length > 0 && (
        <section id="features" className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                {t.features?.badge || "FEATURES"}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t.features.title}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{translateProductText(feature.title, language)}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{translateProductText(feature.description, language)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Benefits Section */}
        {benefits && benefits.length > 0 && (
          <section className="py-16 bg-primary">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-bold text-primary-foreground text-center mb-8">
                {translateProductText(t.productPage?.whyChooseUs || "Why choose us", language)}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
                    <Check className="h-4 w-4 text-primary-foreground" />
                    <span className="text-sm text-primary-foreground">{translateProductText(benefit, language)}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {faqs && faqs.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 text-primary border-primary">
                  FAQ
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  {t.faq?.title || "Frequently Asked Questions"}
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-border bg-card overflow-hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground hover:bg-muted/50 transition-colors">
                      {translateProductText(faq.question, language)}
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground">
                      {translateProductText(faq.answer, language)}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.productPage?.readyToStart || "Ready to get started?"}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.productPage?.ctaDescription || "Set up your server in minutes with our intuitive panel and 24/7 support."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#pricing">
                  {t.productPage?.seeAllPlans || "See Plans"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <a href="https://clients.snwhitehosting.com/submitticket.php" target="_blank" rel="noopener noreferrer">
                  {t.productPage?.contactSales || "Contact Sales"}
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingSupport />
      <BackToTop />
    </div>
  )
}
