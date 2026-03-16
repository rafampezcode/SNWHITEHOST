"use client"

import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Shield, Clock, Headphones, Calendar, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import { useLanguage } from "@/components/language-provider"
import { translateProductText } from "@/lib/product-text-translations"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function MigrationsPage() {
  const { t, language } = useLanguage()

  const highlights = [
    "Free with new plans",
    "No downtime",
    "24/7 support",
    "Schedule your migration",
    "Migration with guarantees",
  ]

  const steps = [
    {
      title: "Step 1",
      subtitle: "What you need before starting",
      points: [
        "Access to the control panel of your current hosting (username + password).",
        "Previous hosting plan must be active and running.",
        "Migration must be from a compatible platform (not Wix/Shopify, etc.).",
        "Free migration valid up to 30 days after purchase a SN White Hosting.",
      ],
    },
    {
      title: "Step 2",
      subtitle: "Choose the type of migration you need",
      points: [
        "Free migration is included with the purchase of hosting, VPS, or dedicated products.",
        "For standard migration, sales will inform you of current waiting time.",
        "Urgent migrations are handled with maximum priority and delivery in business hours.",
      ],
    },
    {
      title: "Step 3",
      subtitle: "Get in touch with us",
      points: [
        "If you are a client, open a ticket to Sales from the Client Area.",
        "If you are not a client, fill out the contact form and select “Migration inquiry”.",
      ],
    },
  ]

  const migrationTypes = [
    {
      title: "Migration Free",
      badge: "Included",
      items: [
        "Process start: 3–20 business days",
        "Schedule: Mon–Fri",
        "Websites: Unlimited",
        "Email accounts: Unlimited",
        "Price per website: $0",
        "Price per email: €0",
      ],
    },
    {
      title: "Migration Standard",
      badge: "Recommended",
      items: [
        "Process start: 3–12 business days",
        "Schedule: Mon–Fri",
        "Websites: Unlimited",
        "Email accounts: Unlimited",
        "Price per website: $5",
        "Price per email: $1.50",
      ],
    },
    {
      title: "Migration Urgent",
      badge: "Priority",
      items: [
        "Process start: Max. 48h business",
        "Schedule: Mon–Fri",
        "Websites: Unlimited",
        "Email accounts: Unlimited",
        "Price per website: $10",
        "Price per email: $3",
      ],
    },
    {
      title: "Migration Scheduled",
      badge: "Custom",
      items: [
        "Process start: Customized",
        "Schedule: Customized",
        "Websites: Unlimited",
        "Email accounts: Unlimited",
        "Price per website: Mon–Fri: $20 / Sat–Sun: $40 / Holidays: $40",
        "Price per email: Mon–Fri: $6 / Sat–Sun: $12 / Holidays: $12",
      ],
    },
  ]

  const faqs = [
    {
      q: "What exactly does the web migration service include?",
      a: "We migrate your website and email accounts from your previous provider to our servers. The process is designed to avoid downtime and preserve functionality.",
    },
    {
      q: "Will the migration affect my website’s operation?",
      a: "In 99% of cases there is no downtime during the migration. For e-commerce sites, we may request maintenance mode to prevent order sync issues.",
    },
    {
      q: "How long does the migration take?",
      a: "It depends on the number and size of websites and mailboxes, plus our current queue. Ask our sales team for current timing.",
    },
    {
      q: "Do you migrate emails too?",
      a: "Yes, we can migrate email accounts and their contents if you provide credentials.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/30 py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,6,6,0.1),transparent_50%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {translateProductText("Website Migration", language)}
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {translateProductText("Do you need a website migration?", language)}
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  {translateProductText(
                    "We migrate your website from your current hosting provider with zero downtime. If you purchase any of our web hosting products, we will migrate up to 10 websites and the content of up to 10 email accounts completely free of charge.",
                    language
                  )}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                    >
                      <Check className="h-4 w-4" />
                      {translateProductText(item, language)}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#migration-types">
                      {translateProductText("See migration types", language)}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent" asChild>
                    <a href="https://www.snwhitehosting.com/en/contact" target="_blank" rel="noopener noreferrer">
                      {translateProductText("Talk to us", language)}
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  <Sparkles className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background" id="process">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                {translateProductText("The process is easier than you think", language)}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {translateProductText("How to migrate your website", language)}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translateProductText("No stress, no mistakes, and no downtime.", language)}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {steps.map((step) => (
                <Card key={step.title} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {translateProductText(step.title, language)}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {translateProductText(step.subtitle, language)}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {translateProductText(p, language)}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Migration types */}
        <section className="py-20 bg-muted/30" id="migration-types">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                {translateProductText("Migration types", language)}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {translateProductText("Choose the type of migration you need", language)}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {translateProductText(
                  "Prices are indicative. Contact sales to evaluate your case and provide a fixed quote.",
                  language
                )}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {migrationTypes.map((type) => (
                <Card key={type.title} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{translateProductText(type.title, language)}</CardTitle>
                      <Badge variant="secondary">{translateProductText(type.badge, language)}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {translateProductText(item, language)}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Website migration handled by professionals",
                  desc: "We perform hundreds of migrations every day with guaranteed post-migration functionality.",
                },
                {
                  icon: Clock,
                  title: "No unexpected errors",
                  desc: "Your site remains online while we move everything safely.",
                },
                {
                  icon: Headphones,
                  title: "24/7 year-round support",
                  desc: "We are always available to help before, during, and after your migration.",
                },
                {
                  icon: Calendar,
                  title: "Schedule your migration",
                  desc: "Choose the time that suits you best with scheduled migrations.",
                },
              ].map((item) => (
                <Card key={item.title} className="border-border/50">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{translateProductText(item.title, language)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {translateProductText(item.desc, language)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {translateProductText("Frequently Asked Questions About Migrations", language)}
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-lg border border-border bg-card overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground hover:bg-muted/50 transition-colors">
                    {translateProductText(f.q, language)}
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {translateProductText(f.a, language)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {translateProductText("Do you have doubts? We are here to help you.", language)}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {translateProductText(
                "We respond quickly, straightforwardly, and with clear solutions.",
                language
              )}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href={`${CLIENT_URL}/submitticket.php`} target="_blank" rel="noopener noreferrer">
                  {translateProductText("Open a ticket", language)}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <a href="https://www.snwhitehosting.com/en/contact" target="_blank" rel="noopener noreferrer">
                  {translateProductText("Go to the form", language)}
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
