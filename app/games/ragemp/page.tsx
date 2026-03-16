"use client"

import { Swords, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function RagempPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "RAGE - Plan Brioso 300 - US",
      description: "Entrada",
      priceEUR: 3.00,
      priceUSD: 3.5,
      features: [
        "2GB DDR5",
        "AMD EPYC™ 9645",
        "2 Core",
        "32GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/ragemp`,
    },
    {
      name: "RAGE - Plan Sabre Turbo - US",
      description: "Para servidores en crecimiento",
      priceEUR: 6.00,
      priceUSD: 7.0,
      features: [
        "4GB DDR5",
        "AMD EPYC™ 9645",
        "2 Core",
        "80GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/ragemp`,
    },
    {
      name: "RAGE - Plan Jester Classic - US",
      description: "Más popular",
      priceEUR: 10.00,
      priceUSD: 11.65,
      features: [
        "6GB DDR5",
        "AMD EPYC™ 9645",
        "3 Core",
        "80GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "2 Bases de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/ragemp`,
      popular: true,
    },
    {
      name: "RAGE - Plan Argento - US",
      description: "Para servidores grandes",
      priceEUR: 15.00,
      priceUSD: 17.45,
      features: [
        "8GB DDR5",
        "AMD EPYC™ 9645",
        "4 Core",
        "120GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "2 Bases de datos",
        "Slots ilimitados",
        "2 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/ragemp`,
    },
    {
      name: "RAGE - Plan 8F Drafter - US",
      description: "Alto rendimiento",
      priceEUR: 22.00,
      priceUSD: 25.61,
      features: [
        "12GB DDR5",
        "AMD EPYC™ 9645",
        "6 Core",
        "256GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "4 Bases de datos",
        "Slots ilimitados",
        "4 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/ragemp`,
    },
    {
      name: "RAGE - Plan 10F Wide Body - US",
      description: "Máximo rendimiento",
      priceEUR: 35.00,
      priceUSD: 40.75,
      features: [
        "16GB DDR5",
        "AMD EPYC™ 9645",
        "8 Core",
        "256GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "4 Bases de datos",
        "Slots ilimitados",
        "4 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/ragemp`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Swords,
      title: "GTA V RAGEMP",
      description: "Custom GTA V multiplayer experience",
    },
    {
      icon: Cpu,
      title: "Dedicated Hardware",
      description: "Guaranteed CPU and RAM performance",
    },
    {
      icon: Users,
      title: "Unlimited Slots",
      description: "Host unlimited players",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced attack protection",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Ready to play in minutes",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team",
    },
  ]

  const faqs = [
    {
      question: "What is RAGEMP?",
      answer: "RAGEMP is a multiplayer mod for GTA V that allows players to create custom servers and gameplay experiences.",
    },
    {
      question: "Can I customize my server?",
      answer: "Yes, RAGEMP servers are fully customizable with scripts and plugins.",
    },
    {
      question: "How many players can I host?",
      answer: "Unlimited players can join based on your server resources.",
    },
    {
      question: "What support do you offer?",
      answer: "We provide 24/7 technical support via ticket system and Discord.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.ragemp?.title || "RAGEMP Servers"}
      subtitle={t.products.ragemp?.subtitle || "GTA V Multiplayer"}
      description={t.products.ragemp?.description || "RAGEMP GTA V multiplayer servers with premium infrastructure"}
      icon={Swords}
      imageSrc="/rage.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
