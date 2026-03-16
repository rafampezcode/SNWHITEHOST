"use client"

import { Shield } from "lucide-react"
import { ProductPageLayout, type ProductPlan } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function SSLPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: t.products.ssl?.certificates?.sectigo_essential?.name || "Sectigo Essential SSL",
      description: t.products.ssl?.certificates?.sectigo_essential?.description || "Domain Validation (DV) - Basic security for personal websites and blogs. Issued within minutes.",
      priceEUR: t.products.ssl?.certificates?.sectigo_essential?.price || 12.00,
      priceUSD: 14.00,
      features: [],
      href: `${CLIENT_URL}/index.php?rp=/store/certificados-ssl/sectigo-essential-ssl`,
    },
    {
      name: t.products.ssl?.certificates?.sectigo_positive?.name || "Sectigo Positive SSL",
      description: t.products.ssl?.certificates?.sectigo_positive?.description || "Organization Validation (OV) - Enhanced trust and verification for business websites and e-commerce.",
      priceEUR: t.products.ssl?.certificates?.sectigo_positive?.price_from || 14.00,
      priceUSD: 16.00,
      features: [],
      href: `${CLIENT_URL}/index.php?rp=/store/certificados-ssl/sectigo-positive-ssl`,
      popular: true,
    },
    {
      name: t.products.ssl?.certificates?.sectigo_positive_multidomain?.name || "Sectigo Positive SSL - Multidomain",
      description: t.products.ssl?.certificates?.sectigo_positive_multidomain?.description || "Multi-Domain SSL - Secure multiple domains and subdomains with a single certificate.",
      priceEUR: t.products.ssl?.certificates?.sectigo_positive_multidomain?.price_from || 25.00,
      priceUSD: 29.00,
      features: [],
      href: `${CLIENT_URL}/index.php?rp=/store/certificados-ssl/sectigo-positive-ssl-multidomain`,
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.ssl?.title || "SSL Certificates"}
      subtitle={t.products.ssl?.subtitle || "Website Security"}
      description={t.products.ssl?.description || "Secure your website with premium SSL certificates from trusted certificate authorities."}
      icon={Shield}
      plans={plans}
      features={[]}
      hideQuickBenefits
      hideHeroButtons
    />
  )
}
