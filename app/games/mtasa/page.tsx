"use client"

import { Swords, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function MtasaPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "MTA - Server Gratis - US",
      description: "Free Trial — ¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      stock: 10,
      features: [
        "1GB DDR5.",
        "AMD EPYC™ 9645.",
        "1 Core.",
        "5GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/mtasa`,
    },
    {
      name: "MTA - Plan Palomino Creek - US",
      description: "Mensual",
      priceEUR: 2.9,
      priceUSD: 2.9,
      features: [
        "1GB DDR5.",
        "AMD EPYC™ 9645.",
        "1 Core.",
        "5GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/mtasa`,
    },
    {
      name: "MTA - Plan Blueberry - US",
      description: "Mensual",
      priceEUR: 5.82,
      priceUSD: 5.82,
      features: [
        "2GB DDR5.",
        "AMD EPYC™ 9645.",
        "1 Core.",
        "8GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/mtasa`,
    },
    {
      name: "MTA - Plan Las Venturas - US",
      description: "Mensual",
      priceEUR: 9.35,
      priceUSD: 9.35,
      features: [
        "3GB DDR5.",
        "AMD EPYC™ 9645.",
        "2 Core.",
        "15GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/mtasa`,
      popular: true,
    },
    {
      name: "MTA - Plan San Fierro - US",
      description: "Mensual",
      priceEUR: 11.65,
      priceUSD: 11.65,
      features: [
        "6GB DDR5.",
        "AMD EPYC™ 9645.",
        "2 Core.",
        "20GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "2 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/mtasa`,
    },
    {
      name: "MTA - Plan Los Santos - US",
      description: "Mensual",
      priceEUR: 17.45,
      priceUSD: 17.45,
      features: [
        "8GB DDR5.",
        "AMD EPYC™ 9645.",
        "3 Core.",
        "30GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "2 Bases de datos.",
        "Slots ilimitados.",
        "2 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/mtasa`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Swords,
      title: "Multi Theft Auto",
      description: "Custom GTA multiplayer with MTA",
    },
    {
      icon: Cpu,
      title: "Dedicated Hardware",
      description: "Guaranteed CPU and RAM",
    },
    {
      icon: Users,
      title: "Unlimited Slots",
      description: "Host unlimited players",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection included",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Ready in minutes",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team",
    },
  ]

  const faqs = [
    {
      question: "What is MTA?",
      answer: "MTA is a multi-player mod for GTA 3, GTA IV, and GTA San Andreas, allowing custom servers and gameplay.",
    },
    {
      question: "Can I customize my server?",
      answer: "Yes, MTA servers are fully customizable with scripts and resources.",
    },
    {
      question: "How many players can join?",
      answer: "Unlimited players can join based on your server resources.",
    },
    {
      question: "What support is available?",
      answer: "24/7 technical support via ticket system.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.mtasa?.title || "MTA Servers"}
      subtitle={t.products.mtasa?.subtitle || "Multi Theft Auto"}
      description={t.products.mtasa?.description || "MTA servers for GTA with premium infrastructure and 24/7 support"}
      icon={Swords}
      imageSrc="/mta.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
