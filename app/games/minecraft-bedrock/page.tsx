"use client"

import { Blocks, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function MinecraftBedrockPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "MB - Servidor Gratis",
      description: "Free Trial — ¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      features: [
        "1GB RAM",
        "1 Núcleo",
        "5GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraf-bedrock-servers`,
    },
    {
      name: "MB - Plan Madera",
      description: "Entrada",
      priceEUR: 5.00,
      priceUSD: 6.0,
      features: [
        "2GB de memoria RAM",
        "2 Núcleos",
        "5GB de almacenamiento NVME",
        "Panel Pterodactyl",
        "Todas las versiones",
        "Slots ilimitados",
        "Mods",
        "Plugins",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraf-bedrock-servers`,
    },
    {
      name: "MB - Plan Piedra",
      description: "Recomendado",
      priceEUR: 7.50,
      priceUSD: 9.0,
      features: [
        "3GB RAM",
        "2 Núcleos",
        "8GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraf-bedrock-servers`,
      popular: true,
    },
    {
      name: "MB - Plan Hierrónico",
      description: "Para comunidades",
      priceEUR: 12.00,
      priceUSD: 14.0,
      features: [
        "4GB RAM",
        "2 Núcleos",
        "10GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraf-bedrock-servers`,
    },
    {
      name: "MB - Plan Oro",
      description: "Alta capacidad",
      priceEUR: 17.00,
      priceUSD: 20.0,
      features: [
        "6GB RAM",
        "4 Núcleos",
        "20GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraf-bedrock-servers`,
    },
    {
      name: "MB - Plan Cobre",
      description: "Muy alto rendimiento",
      priceEUR: 21.00,
      priceUSD: 25.0,
      features: [
        "8GB RAM",
        "4 Núcleos",
        "50GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraf-bedrock-servers`,
    },
    {
      name: "MB - Plan Diamante",
      description: "Máxima potencia",
      priceEUR: 29.50,
      priceUSD: 35.0,
      features: [
        "12GB RAM",
        "6 Núcleos",
        "50GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraf-bedrock-servers`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Blocks,
      title: "Bedrock Edition Support",
      description: "Full support for Minecraft Bedrock Edition on all platforms",
    },
    {
      icon: Cpu,
      title: "Dedicated Resources",
      description: "Guaranteed CPU, RAM and storage for smooth gameplay",
    },
    {
      icon: Users,
      title: "Unlimited Slots",
      description: "Host as many players as your server can handle",
    },
    {
      icon: Shield,
      title: "Anti-DDoS Protection",
      description: "Built-in protection against DDoS attacks",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Server is ready to play within minutes of ordering",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available around the clock",
    },
  ]

  const faqs = [
    {
      question: "Can I use mods and plugins?",
      answer: "Yes! Minecraft Bedrock servers support both mods and plugins for enhanced gameplay experiences.",
    },
    {
      question: "How many players can join?",
      answer: "With unlimited slots, you can host as many players as your server resources allow.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your server plan at any time from your control panel.",
    },
    {
      question: "What locations are available?",
      answer: "Servers are hosted in multiple locations including US, Europe, and Asia for optimal latency.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.minecraftBedrock?.title || "Minecraft Bedrock Servers"}
      subtitle={t.products.minecraftBedrock?.subtitle || "Bedrock Edition Servers"}
      description={t.products.minecraftBedrock?.description || "High-performance Minecraft Bedrock Edition servers with instant setup and 24/7 support"}
      icon={Blocks}
        imageSrc="/minecraft.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
