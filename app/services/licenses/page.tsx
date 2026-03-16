"use client"

import { Award, Server, Shield, Zap, RefreshCw, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function LicensesPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "cPanel/WHM",
      description: "Hosting control panel",
      priceEUR: 15.99,
      features: [
        "cPanel & WHM License",
        "Unlimited Domains",
        "Automatic Updates",
        "Official Support",
        "Instant Activation",
        "Monthly Billing",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=150`,
      popular: true,
    },
    {
      name: "Plesk",
      description: "Web hosting platform",
      priceEUR: 12.99,
      features: [
        "Plesk Web Admin License",
        "Up to 10 Domains",
        "WordPress Toolkit",
        "Automatic Updates",
        "Instant Activation",
        "Monthly Billing",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=151`,
    },
    {
      name: "WHMCS",
      description: "Billing automation",
      priceEUR: 14.99,
      features: [
        "WHMCS License",
        "Unlimited Clients",
        "250 Active Orders",
        "All Modules Included",
        "Automatic Updates",
        "Monthly Billing",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=152`,
    },
    {
      name: "CloudLinux",
      description: "Server OS",
      priceEUR: 14.99,
      features: [
        "CloudLinux OS License",
        "Resource Limits (LVE)",
        "CageFS Security",
        "MySQL Governor",
        "Automatic Updates",
        "Monthly Billing",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=153`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Zap,
      title: t.products.licenses.features.instantTitle,
      description: t.products.licenses.features.instantDesc,
    },
    {
      icon: RefreshCw,
      title: t.products.licenses.features.updatesTitle,
      description: t.products.licenses.features.updatesDesc,
    },
    {
      icon: Shield,
      title: t.products.licenses.features.officialTitle,
      description: t.products.licenses.features.officialDesc,
    },
    {
      icon: Server,
      title: t.products.licenses.features.anyServerTitle,
      description: t.products.licenses.features.anyServerDesc,
    },
    {
      icon: Award,
      title: t.products.licenses.features.pricingTitle,
      description: t.products.licenses.features.pricingDesc,
    },
    {
      icon: Headphones,
      title: t.products.licenses.features.supportTitle,
      description: t.products.licenses.features.supportDesc,
    },
  ]

  const faqs = [
    { question: t.products.licenses.faqs.q1, answer: t.products.licenses.faqs.a1 },
    { question: t.products.licenses.faqs.q2, answer: t.products.licenses.faqs.a2 },
    { question: t.products.licenses.faqs.q3, answer: t.products.licenses.faqs.a3 },
    { question: t.products.licenses.faqs.q4, answer: t.products.licenses.faqs.a4 },
  ]

  return (
    <ProductPageLayout
      title={t.products.licenses.title}
      subtitle={t.products.licenses.subtitle}
      description={t.products.licenses.description}
      icon={Award}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
