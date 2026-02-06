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
      name: t.pricing.basic,
      description: t.products.reseller.description,
      priceEUR: 5.00, // $6.00 USD
      priceUSD: 6.0,
      features: [
        "25 GB NVMe Storage",
        "Hasta 25 cuentas",
        "DDR4 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.litespeed,
        t.products.reseller.labels.whiteLabel,
        t.products.reseller.labels.sslFree,
        t.products.reseller.labels.unlimitedTransfer,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-basico`,
    },
    {
      name: t.pricing.intermediate,
      description: "Para negocios en crecimiento",
      priceEUR: 10.00, // $12.00 USD
      priceUSD: 12.0,
      features: [
        "50 GB NVMe Storage",
        "Hasta 50 cuentas",
        "DDR4 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.litespeed,
        t.products.reseller.labels.whiteLabel,
        t.products.reseller.labels.sslFree,
        t.products.reseller.labels.unlimitedTransfer,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-inicial`,
      popular: true,
    },
    {
      name: t.pricing.advanced,
      description: "Para resellers ambiciosos",
      priceEUR: 15.00, // $18.00 USD
      priceUSD: 18.0,
      features: [
        "100 GB NVMe Storage",
        "Hasta 100 cuentas",
        "DDR4 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.litespeed,
        t.products.reseller.labels.whiteLabel,
        t.products.reseller.labels.sslFree,
        t.products.reseller.labels.unlimitedTransfer,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-pro`,
    },
    {
      name: t.pricing.advanced,
      description: "Para agencias establecidas",
      priceEUR: 30.00, // $35.00 USD
      priceUSD: 35.0,
      features: [
        "200 GB NVMe Storage",
        "Hasta 200 cuentas",
        "DDR4 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.litespeed,
        t.products.reseller.labels.whiteLabel,
        t.products.reseller.labels.sslFree,
        t.products.reseller.labels.unlimitedTransfer,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-avanzado`,
    },
    {
      name: t.pricing.enterprise,
      description: "Maxima capacidad",
      priceEUR: 50.00, // $59.00 USD
      priceUSD: 59.0,
      features: [
        "300 GB NVMe Storage",
        "Hasta 300 cuentas",
        "DDR4 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.litespeed,
        t.products.reseller.labels.whiteLabel,
        t.products.reseller.labels.sslFree,
        t.products.reseller.labels.unlimitedTransfer,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/reseller-plan-empresariall`,
    },
    // Premium plans (placeholders) - you can replace details later
    {
      name: "Plan Premium Básico",
      description: "Ideal para empezar tu negocio de reseller y gestionar tus primeros clientes con facilidad",
      priceEUR: 25.00,
      priceUSD: 30.0,
      features: [
        "50 GB NVMe Storage",
        "Hasta 50 cuentas",
        "DDR5 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.litespeed,
        t.products.reseller.labels.prioritySupport,
        t.products.reseller.labels.sslFree,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/plan-premium-basico`,
    },
    {
      name: "Plan Premium Inicial",
      description: "Más espacio y capacidad para crecer con tu negocio de reseller y atender más clientes.",
      priceEUR: 40.00,
      features: [
        "100 GB NVMe Storage",
        "Hasta 50 cuentas",
        "DDR5 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.litespeed,
        t.products.reseller.labels.prioritySupport,
        t.products.reseller.labels.dailyBackups,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/plan-premium-inicial`,
    },
    {
      name: "Plan Premium Pro",
      description: "Diseñado para resellers ambiciosos que necesitan gestionar gran cantidad de clientes con fiabilidad total",
      priceEUR: 60.00,
      features: [
        "150 GB NVMe Storage",
        "Hasta 75 cuentas",
        "DDR5 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.liteSpeedEnterprise,
        t.products.reseller.labels.prioritySupport,
        t.products.reseller.labels.ipmi,
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/reseller/plan-premium-pro`,
    },
    {
      name: "Plan Premium Avanzado",
      description: "Capacidad y recursos para agencias o revendedores establecidos con muchas cuentas.",
      priceEUR: 70.00,
      features: [
        "200 GB NVMe Storage",
        "Hasta 100 cuentas",
        "DDR5 RAM",
        t.products.reseller.labels.cpanel,
        t.products.reseller.labels.liteSpeedEnterprise,
        t.products.reseller.labels.prioritySupport,
        t.products.reseller.labels.slaMonitoring,
      ],
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
