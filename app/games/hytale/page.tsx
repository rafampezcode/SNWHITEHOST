"use client"

import { Gamepad2, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function HytalePage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "H - Servidor Gratis",
      description: "Free Trial — ¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      stock: 11,
      features: [
        "2.5GB RAM",
        "2 Núcleos",
        "10GB almacenamiento",
        "Pterodactyl Panel",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "1 Base de datos",
        "FTP",
        "Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hytale`,
    },
    {
      name: "H - Plan Común",
      description: "Entrada",
      priceEUR: 6.00,
      priceUSD: 7.0,
      features: [
        "2.5GB RAM",
        "2 Núcleos",
        "10GB almacenamiento",
        "Pterodactyl Panel",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "1 Base de datos",
        "FTP",
        "Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hytale`,
    },
    {
      name: "H - Plan Raro",
      description: "Para comunidades pequeñas",
      priceEUR: 9.45,
      priceUSD: 11.0,
      features: [
        "4GB RAM",
        "2 Núcleos",
        "15GB almacenamiento",
        "Pterodactyl Panel",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "1 Base de datos",
        "FTP",
        "Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hytale`,
    },
    {
      name: "H - Plan Épico",
      description: "Recomendado",
      priceEUR: 13.75,
      priceUSD: 16.0,
      features: [
        "6GB RAM",
        "2 Núcleos",
        "20GB almacenamiento",
        "Pterodactyl Panel",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "2 Bases de datos",
        "FTP",
        "Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hytale`,
      popular: true,
    },
    {
      name: "H - Plan Legendario",
      description: "Para comunidades grandes",
      priceEUR: 17.20,
      priceUSD: 20.0,
      features: [
        "8GB RAM",
        "3 Núcleos",
        "20GB almacenamiento",
        "Pterodactyl Panel",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "2 Bases de datos",
        "FTP",
        "Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hytale`,
    },
    {
      name: "H - Plan Jefe",
      description: "Máximo rendimiento",
      priceEUR: 25.75,
      priceUSD: 30.0,
      features: [
        "12GB RAM",
        "3 Núcleos",
        "50GB almacenamiento",
        "Pterodactyl Panel",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "3 Bases de datos",
        "FTP",
        "Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/hytale`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Gamepad2,
      title: "Hytale Ready",
      description: "Optimized for Hytale gameplay",
    },
    {
      icon: Cpu,
      title: "Dedicated Resources",
      description: "Guaranteed CPU, RAM and storage",
    },
    {
      icon: Users,
      title: "Unlimited Slots",
      description: "Host unlimited players on your server",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection against attacks",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Server ready in minutes",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team always available",
    },
  ]

  const faqs = [
    {
      question: "Can I use mods and plugins?",
      answer: "Yes, Hytale servers support both mods and plugins for custom experiences.",
    },
    {
      question: "How many players can join?",
      answer: "Unlimited players can join based on your server resources.",
    },
    {
      question: "What is included in each plan?",
      answer: "All plans include Pterodactyl Panel, plugins, mods, databases, FTP access, backups, and 24/7 support.",
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, upgrade anytime from your control panel instantly.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.hytale?.title || "Hytale Servers"}
      subtitle={t.products.hytale?.subtitle || "Game Hosting"}
      description={t.products.hytale?.description || "Hytale game server hosting with mod support and 24/7 expert support"}
      icon={Gamepad2}
        imageSrc="/Hytale.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
