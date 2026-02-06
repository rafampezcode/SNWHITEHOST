"use client"

import { Crosshair, Cpu, Shield, Zap, Users, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function CS2Page() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "CS2 - Servidor Gratis - US",
      description: "Free Trial — ¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      stock: 10,
      features: [
        "2GB DDR5.",
        "AMD EPYC™ 9645.",
        "2 Core.",
        "10GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/cs2`,
    },
    {
      name: "CS2 - Plan Silver - US",
      description: "Mensual",
      priceEUR: 5.15,
      priceUSD: 6.0,
      features: [
        "2GB DDR5.",
        "AMD EPYC™ 9645.",
        "2 Core.",
        "10GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/cs2`,
    },
    {
      name: "CS2 - Plan Furia - US",
      description: "Mensual",
      priceEUR: 7.50,
      priceUSD: 9.0,
      features: [
        "3GB RAM.",
        "2 Núcleos.",
        "20GB almacenamiento.",
        "Pterodactyl Panel.",
        "Todas las versiones.",
        "Slots ilimitados.",
        "Plugins.",
        "Mods.",
        "Base de datos.",
        "FTP.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/cs2`,
      popular: true,
    },
    {
      name: "CS2 - Plan Mouz - US",
      description: "Mensual",
      priceEUR: 12.00,
      priceUSD: 14.0,
      features: [
        "4GB DDR5.",
        "AMD EPYC™ 9645.",
        "2 Core.",
        "50GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "1 Bases de datos.",
        "Slots ilimitados.",
        "1 Backups.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/cs2`,
    },
    {
      name: "CS2 - 9z Team - US",
      description: "Mensual",
      priceEUR: 15.00,
      priceUSD: 18.0,
      features: [
        "6GB RAM.",
        "4 Núcleos.",
        "64GB almacenamiento.",
        "Pterodactyl Panel.",
        "Todas las versiones.",
        "Slots ilimitados.",
        "Plugins.",
        "Mods.",
        "Base de datos.",
        "FTP.",
        "Soporte 24/7.",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/cs2`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Crosshair,
      title: "128 Tick Rate",
      description: "All our CS2 servers run at 128 tick for the best competitive experience.",
    },
    {
      icon: Cpu,
      title: "Low Latency",
      description: "Optimized network routes and premium hardware for minimal ping.",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection keeps your server online during attacks.",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Your CS2 server is ready to play within minutes of ordering.",
    },
    {
      icon: Users,
      title: "All Game Modes",
      description: "Competitive, casual, deathmatch, arms race, and custom modes.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support available around the clock for any issues.",
    },
  ]

  const faqs = [
    {
      question: "What tick rate do your servers run at?",
      answer: "All our CS2 servers run at 128 tick rate for the smoothest, most competitive gameplay experience.",
    },
    {
      question: "Can I run workshop maps?",
      answer: "Yes! You can easily add any Steam Workshop map to your server through the control panel.",
    },
    {
      question: "Do you support plugins?",
      answer: "Yes, we support SourceMod and MetaMod plugins for server customization.",
    },
    {
      question: "Can I password protect my server?",
      answer: "Absolutely! You can set a server password for private matches and scrims.",
    },
  ]

  const techSpecs = [
    { label: "Tick Rate", value: "128" },
    { label: "CPU", value: "AMD EPYC" },
    { label: "Storage", value: "NVMe SSD" },
    { label: "Red", value: "10 Gbps" },
  ]

  const benefits = [
    "128 tick rate",
    "Baja latencia",
    "Workshop maps",
    "SourceMod ready",
    "Demo recording",
    "Anti-DDoS incluido",
  ]

  return (
    <ProductPageLayout
      title={t.products.cs2.title}
      subtitle={t.products.cs2.subtitle}
      description={t.products.cs2.description}
      icon={Crosshair}
      imageSrc="/csgo.png"
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
      benefits={benefits}
    />
  )
}
