"use client"

import { Sword, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function TerrariaPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "T - Servidor Gratis",
      description: "Free Trial",
      priceEUR: 0,
      features: [
        "1GB RAM",
        "1 Núcleo",
        "5GB Almacenamiento",
        "Slots Ilimitados",
        "Base de datos",
        "FTP",
        "Mods",
        "Plugins",
        "Pterodactyl Panel",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/terraria`,
    },
    {
      name: "T - Plan Botín Raro",
      description: "Entrada",
      priceEUR: 1.75,
      features: [
        "2GB RAM",
        "1 Núcleo",
        "5GB Almacenamiento",
        "Slots Ilimitados",
        "Base de datos",
        "FTP",
        "Mods",
        "Plugins",
        "Pterodactyl Panel",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/terraria`,
    },
    {
      name: "T - Plan El Tesoro",
      description: "Recomendado",
      priceEUR: 3.45,
      features: [
        "3GB RAM",
        "1 Núcleo",
        "8GB Almacenamiento",
        "Slots Ilimitados",
        "Base de datos",
        "FTP",
        "Mods",
        "Plugins",
        "Pterodactyl Panel",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/terraria`,
      popular: true,
    },
    {
      name: "T - Plan Magia pura",
      description: "Para grupos grandes",
      priceEUR: 5.25,
      features: [
        "4GB RAM",
        "2 Núcleos",
        "15GB Almacenamiento",
        "Slots Ilimitados",
        "Base de datos",
        "FTP",
        "Mods",
        "Plugins",
        "Pterodactyl Panel",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/terraria`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Sword,
      title: "Mod Support",
      description: "Full support for Terraria mods and plugins",
    },
    {
      icon: Cpu,
      title: "Dedicated Resources",
      description: "Guaranteed CPU and RAM for optimal performance",
    },
    {
      icon: Users,
      title: "Unlimited Players",
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
      description: "Ready to play in minutes",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team always available",
    },
  ]

  const faqs = [
    {
      question: "Can I install mods on Terraria servers?",
      answer: "Yes, Terraria servers support mods and plugins to enhance your gameplay experience.",
    },
    {
      question: "How many players can I host?",
      answer: "You can host unlimited players, limited only by your server resources.",
    },
    {
      question: "What is included in the plans?",
      answer: "All plans include Pterodactyl Panel, database access, FTP, automatic backups, and 24/7 support.",
    },
    {
      question: "Can I upgrade my server?",
      answer: "Yes, you can upgrade anytime from your control panel with instant activation.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.terraria?.title || "Terraria Servers"}
      subtitle={t.products.terraria?.subtitle || "Game Hosting"}
      description={t.products.terraria?.description || "High-performance Terraria server hosting with mod support and 24/7 expert support"}
      icon={Sword}
      imageSrc="/terraria.png"
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
