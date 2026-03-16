"use client"

import { Mail, Shield, Cloud, Smartphone, Users, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function EmailPage() {
  const { t, language } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "Plan Básico",
      description: "Ideal para empezar con tu correo profesional y gestionar tus cuentas con facilidad.",
      priceEUR: 1.50,
      priceUSD: 2.00,
      features: [
        "1 cuenta de correo profesional",
        "2 GB de almacenamiento",
        "Webmail accesible desde navegador",
        "Configuración en móviles, Outlook y PC",
        "Filtro antispam básico",
        "Copias de seguridad diarias",
        "Soporte incluido",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/correos-electronicos/plan-basico`,
    },
    {
      name: "Plan Profesional",
      description: "Ideal para pequeñas empresas que necesitan gestionar varias cuentas de correo profesional.",
      priceEUR: 3.50,
      priceUSD: 4.50,
      features: [
        "Hasta 5 cuentas de correo",
        "10 GB de almacenamiento por cuenta",
        "Webmail + clientes externos",
        "Antispam avanzado",
        "Autorespuesta y reenvíos",
        "Copias de seguridad diarias",
        "Soporte incluido",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/correos-electronicos/plan-profesional`,
      popular: true,
    },
    {
      name: "Plan Empresa",
      description: "Ideal para empresas que necesitan correo profesional completo y con mayor capacidad.",
      priceEUR: 9.00,
      priceUSD: 11.00,
      features: [
        "Hasta 10 cuentas de correo",
        "25 GB de almacenamiento por cuenta",
        "Dominio Gratis con pago Anual",
        "Antivirus y antispam premium",
        "Copias de seguridad diarias",
        "Soporte incluido",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/correos-electronicos/plan-empresa`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Mail,
      title: t.products?.email?.features?.professionalTitle || "Professional Email",
      description: t.products?.email?.features?.professionalDesc || "Professional email hosting",
    },
    {
      icon: Shield,
      title: t.products?.email?.features?.spamTitle || "Spam Protection",
      description: t.products?.email?.features?.spamDesc || "Advanced spam filtering",
    },
    {
      icon: Cloud,
      title: t.products?.email?.features?.webmailTitle || "Webmail Access",
      description: t.products?.email?.features?.webmailDesc || "Access email anywhere",
    },
    {
      icon: Smartphone,
      title: t.products?.email?.features?.mobileTitle || "Mobile Sync",
      description: t.products?.email?.features?.mobileDesc || "Sync across devices",
    },
    {
      icon: Users,
      title: t.products?.email?.features?.teamTitle || "Team Features",
      description: t.products?.email?.features?.teamDesc || "Collaboration tools",
    },
    {
      icon: Headphones,
      title: t.products?.email?.features?.supportTitle || "24/7 Support",
      description: t.products?.email?.features?.supportDesc || "Expert support",
    },
  ]

  const faqs = [
    { question: t.products?.email?.faqs?.q1 || "Question 1", answer: t.products?.email?.faqs?.a1 || "Answer 1" },
    { question: t.products?.email?.faqs?.q2 || "Question 2", answer: t.products?.email?.faqs?.a2 || "Answer 2" },
    { question: t.products?.email?.faqs?.q3 || "Question 3", answer: t.products?.email?.faqs?.a3 || "Answer 3" },
    { question: t.products?.email?.faqs?.q4 || "Question 4", answer: t.products?.email?.faqs?.a4 || "Answer 4" },
  ]

  return (
    <ProductPageLayout
      title={t.products?.email?.title || "Corporate Email"}
      subtitle={t.products?.email?.subtitle || "Business Email"}
      description={t.products?.email?.description || "Professional email hosting"}
      icon={Mail}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
