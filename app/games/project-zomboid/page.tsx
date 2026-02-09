"use client"

import { Skull, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function ProjectZomboidPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "Free Server",
      description: "Free Trial — ¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      stock: 10,
      features: [
        "3 GB RAM",
        "2 Cores",
        "5 GB Storage",
        "Pterodactyl Panel",
        "Unlimited Slots",
        "Mods",
        "Database",
        "FTP",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/project-zomboid`,
    },
    {
      name: "Disaster Start Plan",
      description: "For small groups",
      priceEUR: 2.00,
      priceUSD: 2.35,
      features: [
        "2 GB RAM",
        "2 Cores",
        "5 GB Storage",
        "Pterodactyl Panel",
        "Unlimited Slots",
        "Mods",
        "Database",
        "FTP",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/project-zomboid`,
    },
    {
      name: "Virus T Plan",
      description: "Great for casual play",
      priceEUR: 4.25,
      priceUSD: 5.00,
      features: [
        "4 GB RAM",
        "2 Cores",
        "8 GB Storage",
        "Pterodactyl Panel",
        "Unlimited Slots",
        "Mods",
        "Database",
        "FTP",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/project-zomboid`,
      popular: true,
    },
    {
      name: "No Survivor Plan",
      description: "For dedicated groups",
      priceEUR: 8.00,
      priceUSD: 9.30,
      features: [
        "6 GB RAM",
        "3 Cores",
        "10 GB Storage",
        "Pterodactyl Panel",
        "Unlimited Slots",
        "Mods",
        "Database",
        "FTP",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/project-zomboid`,
    },
    {
      name: "Winter Disaster Plan",
      description: "Maximum performance",
      priceEUR: 16.00,
      priceUSD: 18.75,
      features: [
        "10 GB RAM",
        "4 Cores",
        "15 GB Storage",
        "Pterodactyl Panel",
        "Unlimited Slots",
        "Mods",
        "Database",
        "FTP",
        "24/7 Support",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/project-zomboid`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Skull,
      title: "Survival Experience",
      description: "Authentic zombie apocalypse survival gameplay",
    },
    {
      icon: Cpu,
      title: "Dedicated Resources",
      description: "Guaranteed CPU and RAM for smooth gameplay",
    },
    {
      icon: Users,
      title: "Multiplayer Ready",
      description: "Host your survival group with unlimited slots",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection against attacks",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Server ready to play in minutes",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team always available",
    },
  ]

  const faqs = [
    {
      question: "Can I install mods on Project Zomboid servers?",
      answer: "Yes, Project Zomboid servers fully support mods for custom gameplay experiences.",
    },
    {
      question: "How many players can join?",
      answer: "Unlimited players can join, limited only by your server resources.",
    },
    {
      question: "What features are included?",
      answer: "All plans include Pterodactyl Panel, database, FTP access, mods support, and 24/7 support.",
    },
    {
      question: "Can I upgrade my plan?",
      answer: "Yes, upgrade anytime from your control panel with no downtime.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.projectZomboid?.title || "Project Zomboid Servers"}
      subtitle={t.products.projectZomboid?.subtitle || "Game Hosting"}
      description={t.products.projectZomboid?.description || "Project Zomboid survival servers with mod support and 24/7 expert support"}
      icon={Skull}
      imageSrc="/project zomboid.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
