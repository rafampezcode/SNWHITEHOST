"use client"

import { Users, TrendingUp, Check, ArrowRight, Clock, Shield, Zap, Award, XCircle, AlertTriangle, Receipt, Calendar, CreditCard } from "lucide-react"
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

export default function ReferralProgramAgreementPage() {
  const { t, language } = useLanguage()

  const commissionTiers = [
    { clients: "1 – 30", commission: "10%", color: "blue" },
    { clients: "31 – 60", commission: "15%", color: "cyan" },
    { clients: "61 – 80", commission: "20%", color: "emerald" },
    { clients: "81 – 150", commission: "25%", color: "amber" },
    { clients: "+151", commission: "30%", color: "rose" },
  ]

  const includedServices = [
    { name: t.partnerProgram.hosting, icon: Zap, iconColor: "text-blue-500", bgColor: "bg-blue-500/10" },
    { name: t.partnerProgram.vps, icon: Award, iconColor: "text-purple-500", bgColor: "bg-purple-500/10" },
    { name: t.partnerProgram.dedicated, icon: Users, iconColor: "text-emerald-500", bgColor: "bg-emerald-500/10" },
    { name: t.partnerProgram.additionalServices, icon: CreditCard, iconColor: "text-amber-500", bgColor: "bg-amber-500/10" },
  ]

  const validationRequirements = [
    t.partnerProgram.validationReq1,
    t.partnerProgram.validationReq2,
    t.partnerProgram.validationReq3,
    t.partnerProgram.validationReq4,
  ]

  const nonCountedCustomers = [
    t.partnerProgram.nonCountedCust1,
    t.partnerProgram.nonCountedCust2,
    t.partnerProgram.nonCountedCust3,
    t.partnerProgram.nonCountedCust4,
  ]

  const commissionExclusions = [
    t.partnerProgram.exclusion1,
    t.partnerProgram.exclusion2,
    t.partnerProgram.exclusion3,
    t.partnerProgram.exclusion4,
    t.partnerProgram.exclusion5,
    t.partnerProgram.exclusion6,
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,6,6,0.08),transparent_60%)]" />
          <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
                🤝 {t.partnerProgram.commercialBadge}
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
                {t.partnerProgram.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                {t.partnerProgram.companyName}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.partnerProgram.heroSubtitle}
              </p>
            </div>

            {/* Commission Highlight Box */}
            <div className="max-w-4xl mx-auto">
              <Card className="relative border-2 border-primary/30 bg-gradient-to-br from-card via-card/95 to-primary/5 backdrop-blur-sm p-10 shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                <div className="grid md:grid-cols-3 gap-8 items-center text-center">
                  <div>
                    <div className="text-6xl font-bold text-primary mb-2">{t.partnerProgram.baseCommissionPercent}</div>
                    <p className="text-sm text-muted-foreground">{t.partnerProgram.baseCommissionTitle}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-12 w-12 text-primary/40" />
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-primary mb-2">30%</div>
                    <p className="text-sm text-muted-foreground">{t.partnerProgram.commissionRange}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-6">
                    {t.partnerProgram.recurringOnServices}
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg" asChild>
                    <a href="https://clients.snwhitehosting.com/submitticket.php">
                      {t.partnerProgram.ctaContact}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Base Commission Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.baseCommission}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.partnerProgram.baseCommissionIntro} <span className="font-semibold text-primary">{t.partnerProgram.baseCommissionPercent}</span>, {t.partnerProgram.baseCommissionApplies}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {includedServices.map((service) => (
                <Card key={service.name} className="border-2 border-border hover:border-primary/50 transition-all duration-300 p-6 text-center group hover:shadow-lg">
                  <div className={cn("flex h-16 w-16 mx-auto items-center justify-center rounded-2xl mb-4 transition-transform group-hover:scale-110", service.bgColor)}>
                    <service.icon className={cn("h-8 w-8", service.iconColor)} />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">✔ {service.name}</h3>
                </Card>
              ))}
            </div>

            {/* Important Notes */}
            <div className="space-y-4 max-w-5xl mx-auto">
              <Card className="border-l-4 border-l-primary bg-primary/5 p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">💡 {t.partnerProgram.noteImportant}</span> {t.partnerProgram.noteImportantText}
                </p>
              </Card>
              <Card className="border-l-4 border-l-blue-500 bg-blue-500/5 p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">📊 {t.partnerProgram.calculationNote}</span> {t.partnerProgram.calculationNoteText}
                </p>
              </Card>
              <Card className="border-l-4 border-l-amber-500 bg-amber-500/5 p-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">⚖️ {t.partnerProgram.equityNote}</span> {t.partnerProgram.equityNoteText}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Scaled Commission Tiers */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.scaledAutomatic}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.partnerProgram.scaledText}
              </p>
            </div>

            {/* Commission Tiers Table */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="border-2 border-primary/20 overflow-hidden shadow-xl">
                <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 px-6 py-4">
                  <div className="grid grid-cols-2 gap-4 text-center text-primary-foreground">
                    <h3 className="font-bold text-lg">{t.partnerProgram.tableHeaderClients}</h3>
                    <h3 className="font-bold text-lg">{t.partnerProgram.tableHeaderCommission}</h3>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {commissionTiers.map((tier, index) => (
                    <div 
                      key={tier.clients} 
                      className={cn(
                        "grid grid-cols-2 gap-4 px-6 py-5 items-center transition-all hover:bg-muted/50",
                        index === commissionTiers.length - 1 && "bg-primary/5"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold flex-shrink-0",
                          tier.color === "blue" ? "bg-blue-500/20 text-blue-500" :
                          tier.color === "cyan" ? "bg-cyan-500/20 text-cyan-500" :
                          tier.color === "emerald" ? "bg-emerald-500/20 text-emerald-500" :
                          tier.color === "amber" ? "bg-amber-500/20 text-amber-500" :
                          "bg-rose-500/20 text-rose-500"
                        )}>
                          {index + 1}
                        </div>
                        <span className="text-lg font-semibold text-foreground">{tier.clients}</span>
                      </div>
                      <div className="text-center">
                        <Badge 
                          variant={index === commissionTiers.length - 1 ? "default" : "secondary"} 
                          className={cn(
                            "text-2xl font-bold px-6 py-2",
                            index === commissionTiers.length - 1 && "bg-primary text-primary-foreground shadow-lg"
                          )}
                        >
                          {tier.commission}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Key Points */}
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              <Card className="border-l-4 border-l-emerald-500 bg-emerald-500/5 p-6">
                <div className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">🔎 {t.partnerProgram.retroactiveApplication}</h3>
                    <p className="text-muted-foreground">
                      {t.partnerProgram.retroactiveText}
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="border-l-4 border-l-blue-500 bg-blue-500/5 p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">📅 {t.partnerProgram.monthlyReviewTitle}</h3>
                    <p className="text-muted-foreground">
                      {t.partnerProgram.monthlyReviewShortText}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Validation Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.validationCriteria}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.partnerProgram.validationText}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              {/* Valid Requirements */}
              <Card className="border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-emerald-500/5 to-background p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                    <Check className="h-6 w-6 text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl">{t.partnerProgram.validationRequirementsTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {validationRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-emerald-500/20">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Non-Counted Customers */}
              <Card className="border-2 border-rose-500/30 bg-gradient-to-br from-rose-500/5 via-rose-500/5 to-background p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20">
                    <XCircle className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl">{t.partnerProgram.nonCountedTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {nonCountedCustomers.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-rose-500/20">
                      <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="mt-8 border-l-4 border-l-amber-500 bg-amber-500/5 p-6 max-w-6xl mx-auto">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{t.partnerProgram.validationWarning}</span> {t.partnerProgram.validationWarningText}
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Adjustments & Exclusions */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Level Adjustments */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {t.partnerProgram.adjustments}
                  </h2>
                </div>
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 p-8 shadow-lg h-full">
                  <p className="text-lg font-semibold text-foreground mb-6">
                    {t.partnerProgram.adjustmentsMaintenance}
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-background/80 border border-primary/10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        {t.partnerProgram.adjustmentText1}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-background/80 border border-primary/10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-primary">2</span>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        {t.partnerProgram.adjustmentText2}
                      </span>
                    </li>
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-background/80 border border-primary/10">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-1">
                        <span className="text-xs font-bold text-primary">3</span>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        {t.partnerProgram.adjustmentText3}
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Exclusions */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20">
                    <Shield className="h-6 w-6 text-rose-500" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground">
                    {t.partnerProgram.exclusions}
                  </h2>
                </div>
                <Card className="border-2 border-rose-500/30 bg-gradient-to-br from-rose-500/5 via-rose-500/5 to-background p-8 shadow-lg h-full">
                  <p className="text-lg font-semibold text-foreground mb-6">
                    {t.partnerProgram.exclusionsSubtitle}
                  </p>
                  <ul className="space-y-3">
                    {commissionExclusions.map((exclusion, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-rose-500/20">
                        <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                  <Card className="mt-6 border border-rose-500/30 bg-rose-500/10 p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">⚠️ {t.partnerProgram.exclusionNote}</span> {t.partnerProgram.exclusionNoteText}
                    </p>
                  </Card>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                {t.partnerProgram.paymentMethodTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t.partnerProgram.paymentMethodSubtitle}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12 max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-background to-primary/5 p-10 transition-all hover:shadow-xl text-center group">
                <div className="flex justify-center mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 group-hover:bg-primary/25 transition-colors">
                    <Receipt className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  💳 {t.partnerProgram.internalBalanceTitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.partnerProgram.internalBalanceDetail}
                </p>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {t.partnerProgram.internalBalanceMin}
                </Badge>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-background to-primary/5 p-10 transition-all hover:shadow-xl text-center group">
                <div className="flex justify-center mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 group-hover:bg-primary/25 transition-colors">
                    <CreditCard className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  🏦 {t.partnerProgram.directPaymentTitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.partnerProgram.directPaymentDetail}
                </p>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {t.partnerProgram.directPaymentMin}
                </Badge>
              </Card>
            </div>

            <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-8 text-center max-w-3xl mx-auto shadow-lg">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold text-foreground">
                📆 {t.partnerProgram.monthlySettlement}
              </p>
            </Card>
          </div>
        </section>

        {/* Terms Modification */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Card className="border-l-4 border-l-amber-500 bg-amber-500/5 p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    ⚠️ {t.partnerProgram.termsModificationTitle}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.partnerProgram.termsModificationText}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    📅 {t.partnerProgram.lastUpdated} 13/01/2026
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="relative border-2 border-primary/30 bg-gradient-to-r from-card via-card to-primary/5 p-16 text-center overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
              
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                  {t.partnerProgram.ctaTitle}
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  {t.partnerProgram.ctaSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg text-lg px-8 py-6" asChild>
                    <a href="https://clients.snwhitehosting.com/submitticket.php">
                      {t.partnerProgram.ctaContact}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Link href="/">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                      {t.partnerProgram.ctaBack}
                    </Button>
                  </Link>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  💬 {t.partnerProgram.ctaQuestions}
                </p>
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