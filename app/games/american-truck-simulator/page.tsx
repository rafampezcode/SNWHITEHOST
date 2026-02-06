"use client"

import { Gamepad2, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function AmericanTruckSimulatorPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "ATS - Server Gratis - US",
      description: "¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      stock: 10,
      features: [
        "2GB DDR5",
        "AMD EPYC™ 9645",
        "2 Core",
        "20GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "1 Base de datos",
        "Slots ilimitados",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/american`,
    },
    {
      name: "ATS - Plan New Mexico - US",
      description: "Mensual",
      priceEUR: 5.00,
      priceUSD: 6.0,
      features: [
        "2GB DDR5",
        "AMD EPYC™ 9645",
        "2 Core",
        "20GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/american`,
    },
    {
      name: "ATS - Plan Texas - US",
      description: "Mensual",
      priceEUR: 8.00,
      priceUSD: 9.3,
      features: [
        "3GB DDR5",
        "AMD EPYC™ 9645",
        "2 Core",
        "30GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/american`,
      popular: true,
    },
    {
      name: "ATS - Plan Miami - US",
      description: "Mensual",
      priceEUR: 11.00,
      priceUSD: 13.0,
      features: [
        "4GB DDR5",
        "AMD EPYC™ 9645",
        "3 Core",
        "50GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/american`,
    },
    {
      name: "ATS - Plan Las Vegas - US",
      description: "Mensual",
      priceEUR: 15.00,
      priceUSD: 17.45,
      features: [
        "6GB DDR5",
        "AMD EPYC™ 9645",
        "3 Core",
        "80GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/american`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Gamepad2,
      title: "ATS Multiplayer",
      description: "American Truck Simulator multiplayer servers",
    },
    {
      icon: Cpu,
      title: "Dedicated Resources",
      description: "Guaranteed CPU and RAM",
    },
    {
      icon: Users,
      title: "Unlimited Slots",
      description: "Host unlimited truck drivers",
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
      question: "What is American Truck Simulator multiplayer?",
      answer: "It's a mod that adds multiplayer functionality to American Truck Simulator, allowing players to drive together on shared roads.",
    },
    {
      question: "Can I install mods?",
      answer: "Yes, ATS multiplayer servers fully support mods for custom experiences.",
    },
    {
      question: "How many players can drive together?",
      answer: "Unlimited players can join based on your server resources.",
    },
    {
      question: "Is support available?",
      answer: "Yes, 24/7 technical support via ticket system.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.americanTruck?.title || "American Truck Simulator Servers"}
      subtitle={t.products.americanTruck?.subtitle || "Multiplayer Servers"}
      description={t.products.americanTruck?.description || "ATS multiplayer servers with mod support and 24/7 expert support"}
      icon={Gamepad2}
      imageSrc="/american truck simulator.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
