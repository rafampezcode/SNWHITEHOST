"use client"

import { Gamepad2, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function AssettoCorsaPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "AS - Plan Rookie - US",
      description: "Mensual",
      priceEUR: 9.00,
      priceUSD: 9.0,
      features: [
        "3GB DDR5.",
        "AMD EPYC™ 9645.",
        "2 Core.",
        "32GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/assetto`,
      popular: true,
    },
    {
      name: "AS - Plan Expert Pilot - US",
      description: "Mensual",
      priceEUR: 25.00,
      priceUSD: 25.0,
      features: [
        "8GB DDR5.",
        "AMD EPYC™ 9645.",
        "4 Core.",
        "64GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "2 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/assetto`,
    },
    {
      name: "AS - Plan Engineer - US",
      description: "Mensual",
      priceEUR: 35.00,
      priceUSD: 35.0,
      features: [
        "12GB DDR5.",
        "AMD EPYC™ 9645.",
        "6 Core.",
        "128GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "2 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/assetto`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Gamepad2,
      title: "Racing Simulation",
      description: "Professional racing physics and car models",
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Optimized for competitive racing",
    },
    {
      icon: Users,
      title: "Multiplayer Races",
      description: "Host competitive online races",
    },
    {
      icon: Shield,
      title: "Anti-Cheat System",
      description: "Fair play protection",
    },
    {
      icon: Zap,
      title: "Custom Content",
      description: "Full mod and track support",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Racing community support",
    },
  ]

  const faqs = [
    {
      question: "What is Assetto Corsa?",
      answer: "Assetto Corsa is a professional racing simulation with accurate physics, real cars, and circuits.",
    },
    {
      question: "Can I use mods and custom tracks?",
      answer: "Yes, all plans support mods, custom cars, and tracks for enhanced racing experience.",
    },
    {
      question: "How many players can race together?",
      answer: "Unlimited players can participate based on your server resources.",
    },
    {
      question: "Is there protection against cheating?",
      answer: "Yes, all servers include anti-cheat protection for fair competitive racing.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.assettoCom?.title || "Assetto Corsa Servers"}
      subtitle={t.products.assettoCom?.subtitle || "Racing Simulation"}
      description={t.products.assettoCom?.description || "Professional racing servers with full mod support and competitive features"}
      icon={Gamepad2}
      imageSrc="/assetto corsa.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
