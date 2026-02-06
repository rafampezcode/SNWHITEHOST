"use client"

import { Headphones, Server, Shield, Wrench, Clock, Users } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function SysadminPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "One-Time Task",
      description: "Single server task",
      priceEUR: 29.99,
      features: [
        "1 Server Task",
        "Up to 2 Hours Work",
        "Expert Technician",
        "Security Best Practices",
        "Documentation Provided",
        "48-Hour Response",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=160`,
    },
    {
      name: "Monthly Basic",
      description: "Essential server management",
      priceEUR: 49.99,
      features: [
        "1 Server Covered",
        "OS & Software Updates",
        "Security Monitoring",
        "24/7 Server Monitoring",
        "2 Support Tickets/Month",
        "Monthly Reports",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=161`,
    },
    {
      name: "Monthly Pro",
      description: "Complete management",
      priceEUR: 99.99,
      features: [
        "Up to 3 Servers",
        "OS & Software Updates",
        "Security Hardening",
        "24/7 Monitoring & Response",
        "Unlimited Support Tickets",
        "Performance Optimization",
        "Backup Management",
        "Priority Response",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=162`,
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large infrastructures",
      priceEUR: 249.99,
      features: [
        "Unlimited Servers",
        "Full Infrastructure Management",
        "Security & Compliance",
        "24/7 Monitoring & Response",
        "Unlimited Support",
        "Performance Optimization",
        "Disaster Recovery",
        "Dedicated Account Manager",
        "Custom SLA",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=163`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Server,
      title: t.products.sysadmin.features.managementTitle,
      description: t.products.sysadmin.features.managementDesc,
    },
    {
      icon: Shield,
      title: t.products.sysadmin.features.hardeningTitle,
      description: t.products.sysadmin.features.hardeningDesc,
    },
    {
      icon: Wrench,
      title: t.products.sysadmin.features.updatesTitle,
      description: t.products.sysadmin.features.updatesDesc,
    },
    {
      icon: Clock,
      title: t.products.sysadmin.features.monitoringTitle,
      description: t.products.sysadmin.features.monitoringDesc,
    },
    {
      icon: Headphones,
      title: t.products.sysadmin.features.expertTitle,
      description: t.products.sysadmin.features.expertDesc,
    },
    {
      icon: Users,
      title: t.products.sysadmin.features.anyProviderTitle,
      description: t.products.sysadmin.features.anyProviderDesc,
    },
  ]

  const faqs = [
    { question: t.products.sysadmin.faqs.q1, answer: t.products.sysadmin.faqs.a1 },
    { question: t.products.sysadmin.faqs.q2, answer: t.products.sysadmin.faqs.a2 },
    { question: t.products.sysadmin.faqs.q3, answer: t.products.sysadmin.faqs.a3 },
    { question: t.products.sysadmin.faqs.q4, answer: t.products.sysadmin.faqs.a4 },
  ]

  return (
    <ProductPageLayout
      title={t.products.sysadmin.title}
      subtitle={t.products.sysadmin.subtitle}
      description={t.products.sysadmin.description}
      icon={Headphones}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
