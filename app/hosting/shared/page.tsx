"use client"

import { Server, Zap, Shield, Clock, RefreshCw, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function SharedHostingPage() {
  const { t } = useLanguage()

  // Precios reales de SN White Hosting - Hosting Compartido
  const plans: ProductPlan[] = [
    {
      name: t.pricing.basic,
      description: t.products.shared.plans.basic.description,
      priceEUR: 3.99, // $5.00 USD
      priceUSD: 5.0,
      features: t.products.shared.plans.basic.features,
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-basico`,
    },
    {
      name: t.pricing.intermediate,
      description: t.products.shared.plans.intermediate.description,
      priceEUR: 6.99, // $8.00 USD
      priceUSD: 8.0,
      features: t.products.shared.plans.intermediate.features,
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-intermedio-1`,
      popular: true,
    },
    {
      name: t.pricing.advanced,
      description: t.products.shared.plans.advanced.description,
      priceEUR: 9.99, // $12.00 USD
      priceUSD: 12.0,
      features: t.products.shared.plans.advanced.features,
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-avanzado`,
    },
    {
      name: t.pricing.enterprise,
      description: t.products.shared.plans.enterprise.description,
      priceEUR: 20.0, // $24.00 USD
      priceUSD: 24.0,
      features: t.products.shared.plans.enterprise.features,
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-empresarial`,
    },
    {
      name: t.pricing.premiumBasic,
      description: t.products.shared.plans.premiumBasic.description,
      priceEUR: 7.99,
      priceUSD: 9.35,
      features: t.products.shared.plans.premiumBasic.features,
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/plan-basico-premium`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Zap,
      title: t.featureHighlights.nvme.title,
      description: t.featureHighlights.nvme.description,
    },
    {
      icon: Shield,
      title: t.comparison.freeSsl,
      description: t.trustBadges.secureDesc,
    },
    {
      icon: Clock,
      title: t.features.uptime,
      description: t.features.uptimeDesc,
    },
    {
      icon: Server,
      title: t.comparison.cpanelIncluded,
      description: t.comparison.cpanelIncluded,
    },
    {
      icon: Headphones,
      title: t.trustBadges.support247,
      description: t.trustBadges.supportDesc,
    },
  ]

  const faqs = [
    {
      question: t.products.shared.faqs.q1,
      answer: t.products.shared.faqs.a1,
    },
    {
      question: t.products.shared.faqs.q2,
      answer: t.products.shared.faqs.a2,
    },
    {
      question: t.products.shared.faqs.q3,
      answer: t.products.shared.faqs.a3,
    },
    {
      question: t.products.shared.faqs.q4,
      answer: t.products.shared.faqs.a4,
    },
  ]

  const techSpecs = [
    { label: t.products.shared.techSpecs.webServer, value: t.products.shared.techSpecs.webServerValue },
    { label: t.products.shared.techSpecs.php, value: t.products.shared.techSpecs.phpValue },
    { label: t.products.shared.techSpecs.storage, value: t.products.shared.techSpecs.storageValue },
    { label: t.products.shared.techSpecs.security, value: t.products.shared.techSpecs.securityValue },
  ]

  return (
    <ProductPageLayout
      title={t.products.shared.title}
      subtitle={t.products.shared.subtitle}
      description={t.products.shared.description}
      icon={Server}
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
    />
  )
}
