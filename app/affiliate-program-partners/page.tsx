"use client"

import { Users, TrendingUp, Check, ArrowRight, DollarSign, Clock, Shield, Zap, Award } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function AffiliatePartnersPage() {
  const { t, language } = useLanguage()

  const commissionTiers = [
    { clients: "1 – 30", commission: "10%" },
    { clients: "31 – 60", commission: "15%" },
    { clients: "61 – 80", commission: "20%" },
    { clients: "81 – 150", commission: "25%" },
    { clients: "+151", commission: "30%" },
  ]

  const getServiceLabel = (type: string) => {
    switch(type) {
      case 'hosting':
        return {
          title: t.partnerProgram.hosting,
          description: t.partnerProgram.sharedHostingDesc || "Shared hosting with recurring billing"
        }
      case 'vps':
        return {
          title: t.partnerProgram.vps,
          description: t.partnerProgram.vpsDesc || "Virtual Private Servers with recurring billing"
        }
      case 'dedicated':
        return {
          title: t.partnerProgram.dedicated,
          description: t.partnerProgram.dedicatedDesc || "Dedicated Servers with recurring billing"
        }
      case 'additional':
        return {
          title: t.partnerProgram.additionalServices,
          description: t.partnerProgram.additionalServicesDesc || "All other recurring services"
        }
      default:
        return { title: "", description: "" }
    }
  }

  const serviceInclusions = [
    { ...getServiceLabel('hosting'), icon: Zap },
    { ...getServiceLabel('vps'), icon: Award },
    { ...getServiceLabel('dedicated'), icon: TrendingUp },
    { ...getServiceLabel('additional'), icon: Check },
  ]

  const validationRequirements = [
    t.partnerProgram.validationReq1,
    t.partnerProgram.validationReq2,
    t.partnerProgram.validationReq3,
  ]

  const nonCountedCustomers = [
    t.partnerProgram.nonCountedCust1,
    t.partnerProgram.nonCountedCust2,
    t.partnerProgram.nonCountedCust3,
    t.partnerProgram.nonCountedCust4,
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/30 py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,6,6,0.1),transparent_50%)]" />
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  🤝 {t.partnerProgram.commercialBadge}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {t.partnerProgram.title}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  {t.partnerProgram.subtitle}
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <a href="https://clients.snwhitehosting.com/submitticket.php">
                      {t.partnerProgram.contactTeam}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Link href="/">
                    <Button size="lg" variant="outline">
                      {t.partnerProgram.backHome}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl" />
                  <Card className="relative border border-primary/20 bg-card/50 backdrop-blur p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <Users className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{t.partnerProgram.earningPotential}</h3>
                    <p className="text-4xl font-bold text-primary mb-2">{t.partnerProgram.upTo30Percent}</p>
                    <p className="text-muted-foreground">{t.partnerProgram.recurringCommissions}</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.scaledAutomatic}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.partnerProgram.scaledText}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              {commissionTiers.map((tier, index) => (
                <Card 
                  key={tier.clients} 
                  className={cn(
                    "text-center p-6 border-2 transition-all hover:shadow-lg",
                    index === 0 ? "border-blue-500/50 bg-blue-500/5" :
                    index === 1 ? "border-cyan-500/50 bg-cyan-500/5" :
                    index === 2 ? "border-emerald-500/50 bg-emerald-500/5" :
                    index === 3 ? "border-amber-500/50 bg-amber-500/5" :
                    "border-rose-500/50 bg-rose-500/5"
                  )}
                >
                  <div className="text-sm font-medium text-muted-foreground mb-2">{t.partnerProgram.activeCustomers}</div>
                  <div className="text-2xl font-bold text-foreground mb-3">{tier.clients}</div>
                  <div className={cn(
                    "text-3xl font-bold rounded-lg py-3 px-4",
                    index === 0 ? "bg-blue-500/20 text-blue-500" :
                    index === 1 ? "bg-cyan-500/20 text-cyan-500" :
                    index === 2 ? "bg-emerald-500/20 text-emerald-500" :
                    index === 3 ? "bg-amber-500/20 text-amber-500" :
                    "bg-rose-500/20 text-rose-500"
                  )}>
                    {tier.commission}
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-8">
              <Card className="border border-primary/20 bg-card/50 backdrop-blur p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t.partnerProgram.monthlyReview}</h3>
                    <p className="text-sm text-muted-foreground">{t.partnerProgram.monthlyReviewText}</p>
                  </div>
                </div>
              </Card>
              <Card className="border border-primary/20 bg-card/50 backdrop-blur p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t.partnerProgram.baseCommissionTitle}</h3>
                    <p className="text-sm text-muted-foreground">{t.partnerProgram.noNegotiation}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.baseCommission}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.partnerProgram.baseCommissionText}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceInclusions.map((service, index) => (
                <Card key={service.title} className="border border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur p-6 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-l-4 border-l-primary bg-primary/5 backdrop-blur p-6">
              <p className="text-muted-foreground">{t.partnerProgram.commissionActive}</p>
            </Card>
          </div>
        </section>

        {/* Validation Criteria */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.validationCriteria}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.partnerProgram.validationText}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Valid Requirements */}
              <Card className="border-l-4 border-l-emerald-500 bg-emerald-500/5 backdrop-blur p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Check className="h-6 w-6 text-emerald-500" />
                  <h3 className="font-semibold text-foreground text-lg">{t.partnerProgram.validationRequirements}</h3>
                </div>
                <ul className="space-y-3">
                  {validationRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Non-Counted Customers */}
              <Card className="border-l-4 border-l-rose-500 bg-rose-500/5 backdrop-blur p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-rose-500" />
                  <h3 className="font-semibold text-foreground text-lg">{t.partnerProgram.nonCountedCustomers}</h3>
                </div>
                <ul className="space-y-3">
                  {nonCountedCustomers.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="mt-8 border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm text-muted-foreground italic">{t.partnerProgram.validationNote}</p>
            </Card>
          </div>
        </section>

        {/* Adjustments & Exclusions */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Adjustments */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  {t.partnerProgram.adjustments}
                </h2>
                <div className="space-y-4">
                  {[t.partnerProgram.adjustmentsText1, t.partnerProgram.adjustmentsText2, t.partnerProgram.adjustmentsText3].map((text, idx) => (
                    <Card key={idx} className="border border-primary/10 bg-card/50 backdrop-blur p-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">• {text}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  {t.partnerProgram.exclusions}
                </h2>
                <Card className="border border-rose-500/20 bg-rose-500/5 backdrop-blur p-6">
                  <p className="font-semibold text-foreground mb-4 text-sm">{t.partnerProgram.exclusionsTitle}</p>
                  <div className="space-y-3">
                    {[t.partnerProgram.exclusion1, t.partnerProgram.exclusion2, t.partnerProgram.exclusion3, t.partnerProgram.exclusion4, t.partnerProgram.exclusion5, t.partnerProgram.exclusion6].map((exclusion, idx) => (
                      <p key={idx} className="text-xs text-muted-foreground flex items-start gap-3">
                        <span className="text-rose-500 flex-shrink-0">✓</span>
                        <span>{exclusion}</span>
                      </p>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.paymentMethod}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.partnerProgram.paymentText}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card className="border border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur p-8 transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
                    <span className="font-bold text-primary">1</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">💳 {t.partnerProgram.internalBalance}</h3>
                <p className="text-sm text-muted-foreground">{t.partnerProgram.internalBalanceDesc}</p>
              </Card>

              <Card className="border border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur p-8 transition-all text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15">
                    <span className="font-bold text-primary">2</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">🏦 {t.partnerProgram.directPayment}</h3>
                <p className="text-sm text-muted-foreground">{t.partnerProgram.directPaymentDesc}</p>
              </Card>
            </div>

            <Card className="border border-primary/20 bg-primary/5 backdrop-blur p-6 text-center">
              <p className="font-semibold text-foreground">{t.partnerProgram.paymentFrequency}</p>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-background p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.readyStart}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t.partnerProgram.readyStartText}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="https://clients.snwhitehosting.com/submitticket.php">
                    {t.partnerProgram.contactTeam}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Link href="/">
                  <Button size="lg" variant="outline">
                    {t.partnerProgram.backHome}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <FloatingSupport />
      <BackToTop />
      <Footer />
    </div>
  )
}

