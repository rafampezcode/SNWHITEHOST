"use client"

import { Swords, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function SampPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "Free Server",
      description: "Free Trial — ¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      stock: 10,
      features: [
        "1 GB DDR5 RAM",
        "1 Core",
        "5 GB NVMe Storage",
        "Pterodactyl Panel",
        "Database",
        "Unlimited Slots",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/samp`,
    },
    {
      name: "Ryder Plan",
      description: "Entrada",
      priceEUR: 2.90,
      priceUSD: 2.9,
      features: [
        "1 GB DDR5 RAM",
        "1 Core",
        "5 GB NVMe Storage",
        "Pterodactyl Panel",
        "Database",
        "Unlimited Slots",
        "Backups",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/samp`,
    },
    {
      name: "Zero Plan",
      description: "Para servidores pequeños",
      priceEUR: 5.82,
      priceUSD: 5.82,
      features: [
        "2 GB DDR5 RAM",
        "1 Core",
        "8 GB NVMe Storage",
        "Pterodactyl Panel",
        "Database",
        "Unlimited Slots",
        "Backups",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/samp`,
    },
    {
      name: "Sweet Plan",
      description: "Comunidades en crecimiento",
      priceEUR: 9.35,
      priceUSD: 9.35,
      features: [
        "3 GB DDR5 RAM",
        "2 Cores",
        "15 GB NVMe Storage",
        "Pterodactyl Panel",
        "Database",
        "Unlimited Slots",
        "Backups",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/samp`,
      popular: true,
    },
    {
      name: "Big Smoke Plan",
      description: "Comunidades grandes",
      priceEUR: 11.65,
      priceUSD: 11.65,
      features: [
        "6 GB DDR5 RAM",
        "2 Cores",
        "20 GB NVMe Storage",
        "Pterodactyl Panel",
        "2 Databases",
        "Unlimited Slots",
        "Backups",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/samp`,
    },
    {
      name: "Carl Johnson Plan",
      description: "Máximo rendimiento",
      priceEUR: 17.45,
      priceUSD: 17.45,
      features: [
        "8 GB DDR5 RAM",
        "3 Cores",
        "30 GB NVMe Storage",
        "Pterodactyl Panel",
        "2 Databases",
        "Unlimited Slots",
        "Backups",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/samp`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Swords,
      title: "SAMP & OpenMP",
      description: "Support for SAMP and OpenMP servers",
    },
    {
      icon: Cpu,
      title: "Dedicated Hardware",
      description: "Guaranteed CPU and RAM",
    },
    {
      icon: Users,
      title: "Unlimited Players",
      description: "Host unlimited players on your server",
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
      question: "What is the difference between SAMP and OpenMP?",
      answer: "SAMP is the original SA-MP platform while OpenMP is a modern replacement with better performance and features.",
    },
    {
      question: "Can I use custom scripts?",
      answer: "Yes, SAMP servers support custom scripts and gamemodes.",
    },
    {
      question: "How many players can I host?",
      answer: "Unlimited players can join based on your server resources.",
    },
    {
      question: "Do you provide support?",
      answer: "Yes, 24/7 technical support via tickets and Discord.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.samp?.title || "SAMP Servers"}
      subtitle={t.products.samp?.subtitle || "GTA SA-MP Hosting"}
      description={t.products.samp?.description || "SAMP and OpenMP server hosting with premium infrastructure"}
      icon={Swords}
      imageSrc="/samp.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
