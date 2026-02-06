"use client"

import { Server, Zap, Shield, Clock, RefreshCw, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function WordPressHostingPage() {
  const { t } = useLanguage()

  // Precios reales de SN White Hosting - Hosting WordPress
  const plans: ProductPlan[] = [
    {
      name: t.pricing.basic,
      description:
        "Ideal para empezar con tu proyecto sin renunciar a la calidad. Hosting rapido, seguro y estable desde el primer dia.",
      priceEUR: 3.99, // $5.00 USD
      priceUSD: 5.0,
      features: [
        "15 GB de almacenamiento NVMe (maxima velocidad)",
        "Memoria DDR4 de alto rendimiento",
        "Servidor LiteSpeed + LSCache (optimizacion avanzada)",
        "Seguridad Imunify360 Anti-Malware",
        "Sistema CloudLinux (recursos garantizados)",
        "Copias de seguridad automaticas con JetBackup",
        "cPanel incluido",
        "3 Bases de Datos MySQL",
        "3 Cuentas FTP",
        "Correos electronicos ilimitados",
        "Certificado SSL gratuito",
        "Ubicacion del servidor - Finlandia Y Alemania",
        "Perfecto para blogs, webs personales, paginas pequenas y proyectos que inician.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-basico`,
    },
    {
      name: t.pricing.intermediate,
      description:
        "El equilibrio perfecto entre rendimiento y capacidad. Ideal para webs profesionales o corporativas que requieren estabilidad total.",
      priceEUR: 6.99, // $8.00 USD
      priceUSD: 8.0,
      features: [
        "20 GB de almacenamiento NVMe",
        "Memoria DDR4 de alto rendimiento",
        "Servidor LiteSpeed + LSCache",
        "Seguridad Imunify360 Anti-Malware",
        "Sistema CloudLinux (recursos garantizados)",
        "Copias de seguridad automaticas con JetBackup",
        "cPanel incluido",
        "6 Bases de Datos MySQL",
        "6 Cuentas FTP",
        "Correos electronicos ilimitados",
        "Certificado SSL gratuito",
        "Ubicacion del servidor - Finlandia Y Alemania",
        "Perfecto para empresas, webs corporativas, landing pages y proyectos en crecimiento.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-intermedio-1`,
      popular: true,
    },
    {
      name: t.pricing.advanced,
      description:
        "Mas potencia para proyectos dinamicos y bases de datos exigentes. Rendimiento superior y estabilidad en todo momento.",
      priceEUR: 9.99, // $12.00 USD
      priceUSD: 12.0,
      features: [
        "50 GB de almacenamiento NVMe",
        "Memoria DDR4 de alto rendimiento",
        "Servidor LiteSpeed + LSCache (optimizacion extrema)",
        "Seguridad Imunify360 Anti-Malware",
        "Sistema CloudLinux (recursos garantizados)",
        "Copias de seguridad diarias con JetBackup",
        "cPanel incluido",
        "10 Bases de Datos MySQL",
        "10 Cuentas FTP",
        "Correos electronicos ilimitados",
        "Certificado SSL gratuito",
        "Ubicacion del servidor - Finlandia Y Alemania",
        "Perfecto para tiendas pequenas, proyectos dinamicos, webs con bases de datos activas y carga media.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-avanzado`,
    },
    {
      name: t.pricing.enterprise,
      description:
        "Maxima potencia y estabilidad. Disenado para tiendas online, webs de alto trafico y proyectos empresariales.",
      priceEUR: 20.0, // $24.00 USD
      priceUSD: 24.0,
      features: [
        "100 GB de almacenamiento NVMe",
        "Memoria DDR4 de alto rendimiento",
        "Servidor LiteSpeed + LSCache (rendimiento extremo)",
        "Suite Imunify360 Anti-Malware",
        "Sistema CloudLinux (recursos garantizados)",
        "Copias de seguridad automaticas con JetBackup",
        "cPanel incluido",
        "20 Bases de Datos MySQL",
        "20 Cuentas FTP",
        "Correos electronicos ilimitados",
        "Certificado SSL gratuito",
        "Ubicacion del servidor - Finlandia Y Alemania",
        "Ideal para e-commerce, webs con picos de trafico, proyectos empresariales y negocios en expansion.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hosting-compartido/hosting-plan-empresarial`,
    },
    {
      name: t.pricing.premiumBasic,
      description: "Ideal para empezar con tu proyecto sin renunciar a la calidad. Hosting rapido, seguro y estable desde el primer dia.",
      priceEUR: 7.99,
      priceUSD: 9.35,
      features: [
        "15 GB de almacenamiento NVMe (maxima velocidad)",
        "Memoria DDR5 de alto rendimiento",
        "Servidor LiteSpeed + LSCache (optimizacion avanzada)",
        "Seguridad Imunify360 Anti-Malware",
        "Sistema CloudLinux (recursos garantizados)",
        "Copias de seguridad automaticas con JetBackup",
        "cPanel incluido",
        "3 Bases de Datos MySQL",
        "3 Cuentas FTP",
        "Correos electronicos ilimitados",
        "Certificado SSL gratuito",
        "Ubicacion del servidor - Finlandia Y Alemania",
        "Perfecto para blogs, webs personales, paginas pequenas y proyectos que inician.",
      ],
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
      question: "What is WordPress hosting?",
      answer: "WordPress hosting is optimized for WordPress sites with performance, security, and management features tailored to WordPress.",
    },
    {
      question: "Can I migrate my WordPress site?",
      answer: "Yes! We offer free migration for WordPress sites from your current hosting provider.",
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, you can request a full refund within the first 30 days.",
    },
    {
      question: "Is website migration included?",
      answer: "Yes, we offer free website migration from your current hosting provider. Our team will handle the entire process for you.",
    },
  ]

  const techSpecs = [
    { label: "Web Server", value: "LiteSpeed" },
    { label: "PHP", value: "8.3" },
    { label: "Storage", value: "NVMe Gen4" },
    { label: "Security", value: "Imunify360" },
  ]

  return (
    <ProductPageLayout
      title={t.products.wordpress.title}
      subtitle={t.products.wordpress.subtitle}
      description={t.products.wordpress.description}
      icon={Server}
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
    />
  )
}
