"use client"

import { Lock, Shield, Award, Zap, RefreshCw, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function SSLPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "Domain Validation",
      description: "Basic encryption",
      priceEUR: 9.99,
      features: [
        "256-bit Encryption",
        "Domain Validation",
        "99.9% Browser Trust",
        "Free Reissues",
        "Quick Issuance (minutes)",
        "$10,000 Warranty",
        "1 Domain",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=130`,
    },
    {
      name: "Organization Validation",
      description: "Business verified",
      priceEUR: 49.99,
      features: [
        "256-bit Encryption",
        "Organization Validation",
        "99.9% Browser Trust",
        "Free Reissues",
        "Company Name in Certificate",
        "$250,000 Warranty",
        "1 Domain",
        "Business Verification",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=131`,
      popular: true,
    },
    {
      name: "Extended Validation",
      description: "Maximum trust",
      priceEUR: 149.99,
      features: [
        "256-bit Encryption",
        "Extended Validation",
        "99.9% Browser Trust",
        "Free Reissues",
        "Green Address Bar",
        "$1,750,000 Warranty",
        "1 Domain",
        "Full Business Verification",
        "Priority Support",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=132`,
    },
    {
      name: "Wildcard SSL",
      description: "Unlimited subdomains",
      priceEUR: 79.99,
      features: [
        "256-bit Encryption",
        "Domain Validation",
        "99.9% Browser Trust",
        "Free Reissues",
        "Unlimited Subdomains",
        "$10,000 Warranty",
        "*.yourdomain.com",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=133`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Shield,
      title: t.products.ssl.features.encryptionTitle,
      description: t.products.ssl.features.encryptionDesc,
    },
    {
      icon: Award,
      title: t.products.ssl.features.trustedTitle,
      description: t.products.ssl.features.trustedDesc,
    },
    {
      icon: Lock,
      title: t.products.ssl.features.httpsTitle,
      description: t.products.ssl.features.httpsDesc,
    },
    {
      icon: Zap,
      title: t.products.ssl.features.quickTitle,
      description: t.products.ssl.features.quickDesc,
    },
    {
      icon: RefreshCw,
      title: t.products.ssl.features.reissueTitle,
      description: t.products.ssl.features.reissueDesc,
    },
    {
      icon: Headphones,
      title: t.products.ssl.features.installTitle,
      description: t.products.ssl.features.installDesc,
    },
  ]

  const faqs = [
    { question: t.products.ssl.faqs.q1, answer: t.products.ssl.faqs.a1 },
    { question: t.products.ssl.faqs.q2, answer: t.products.ssl.faqs.a2 },
    { question: t.products.ssl.faqs.q3, answer: t.products.ssl.faqs.a3 },
    { question: t.products.ssl.faqs.q4, answer: t.products.ssl.faqs.a4 },
  ]

  return (
    <ProductPageLayout
      title={t.products.ssl.title}
      subtitle={t.products.ssl.subtitle}
      description={t.products.ssl.description}
      icon={Lock}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
