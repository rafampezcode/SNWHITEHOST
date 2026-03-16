"use client"

import { Cpu, Users, Palette, Shield, Headphones, TrendingUp } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function ResellerHostingPage() {
  const { t } = useLanguage()

  // Precios reales de SN White Hosting - Reseller
  const plans: ProductPlan[] = [
    {
      name: t.products.reseller.plans.basic.name,
      description: t.products.reseller.plans.basic.description,
      priceEUR: 5.00, // $6.00 USD
      priceUSD: 6.0,
      features: t.products.reseller.plans.basic.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-basico`,
    },
    {
      name: t.products.reseller.plans.initial.name,
      description: t.products.reseller.plans.initial.description,
      priceEUR: 10.00, // $12.00 USD
      priceUSD: 12.0,
      features: t.products.reseller.plans.initial.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-inicial`,
      popular: true,
    },
    {
      name: t.products.reseller.plans.pro.name,
      description: t.products.reseller.plans.pro.description,
      priceEUR: 15.00, // $18.00 USD
      priceUSD: 18.0,
      features: t.products.reseller.plans.pro.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-pro`,
    },
    {
      name: t.products.reseller.plans.advanced.name,
      description: t.products.reseller.plans.advanced.description,
      priceEUR: 30.00, // $35.00 USD
      priceUSD: 35.0,
      features: t.products.reseller.plans.advanced.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-avanzado`,
    },
    {
      name: t.products.reseller.plans.enterprise.name,
      description: t.products.reseller.plans.enterprise.description,
      priceEUR: 50.00, // $59.00 USD
      priceUSD: 59.0,
      features: t.products.reseller.plans.enterprise.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-empresariall`,
    },
    {
      name: t.products.reseller.plans.premiumBasic.name,
      description: t.products.reseller.plans.premiumBasic.description,
      priceEUR: 25.00, // $30.00 USD
      priceUSD: 30.0,
      features: t.products.reseller.plans.premiumBasic.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/plan-premium-basico`,
    },
    {
      name: t.products.reseller.plans.premiumInitial.name,
      description: t.products.reseller.plans.premiumInitial.description,
      priceEUR: 40.00, // $48.00 USD
      priceUSD: 48.0,
      features: t.products.reseller.plans.premiumInitial.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/plan-premium-inicial`,
    },
    {
      name: t.products.reseller.plans.premiumPro.name,
      description: t.products.reseller.plans.premiumPro.description,
      priceEUR: 60.00, // $70.00 USD
      priceUSD: 70.0,
      features: t.products.reseller.plans.premiumPro.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/plan-premium-pro`,
    },
    {
      name: t.products.reseller.plans.premiumAdvanced.name,
      description: t.products.reseller.plans.premiumAdvanced.description,
      priceEUR: 70.00, // $83.00 USD
      priceUSD: 83.0,
      features: t.products.reseller.plans.premiumAdvanced.features,
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/plan-premium-avanzado`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Users,
      title: t.products.reseller.features.createAccountsTitle,
      description: t.products.reseller.features.createAccountsDesc,
    },
    {
      icon: Palette,
      title: t.products.reseller.features.whiteLabelTitle,
      description: t.products.reseller.features.whiteLabelDesc,
    },
    {
      icon: Cpu,
      title: t.products.reseller.features.whmTitle,
      description: t.products.reseller.features.whmDesc,
    },
    {
      icon: Shield,
      title: t.products.reseller.features.sslTitle,
      description: t.products.reseller.features.sslDesc,
    },
    {
      icon: Headphones,
      title: t.products.reseller.features.supportTitle,
      description: t.products.reseller.features.supportDesc,
    },
    {
      icon: TrendingUp,
      title: t.products.reseller.features.scalableTitle,
      description: t.products.reseller.features.scalableDesc,
    },
  ]

  const faqs = [
    { question: t.products.reseller.faqs.q1, answer: t.products.reseller.faqs.a1 },
    { question: t.products.reseller.faqs.q2, answer: t.products.reseller.faqs.a2 },
    { question: t.products.reseller.faqs.q3, answer: t.products.reseller.faqs.a3 },
    { question: t.products.reseller.faqs.q4, answer: t.products.reseller.faqs.a4 },
  ]

  const techSpecs = [
    { label: t.products.reseller.techSpecs.panel, value: t.products.reseller.techSpecs.panel },
    { label: t.products.reseller.techSpecs.webServer, value: t.products.reseller.techSpecs.webServer },
    { label: t.products.reseller.techSpecs.storage, value: t.products.reseller.techSpecs.storage },
    { label: t.products.reseller.techSpecs.ssl, value: t.products.reseller.techSpecs.ssl },
  ]
  const benefits = t.products.reseller.benefits

  return (
    <ProductPageLayout
      title={t.products.reseller.title}
      subtitle={t.products.reseller.subtitle}
      description={t.products.reseller.description}
      icon={Cpu}
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
      benefits={benefits}
    />
  )
}
