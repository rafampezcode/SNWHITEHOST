"use client"

import { Sword, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function TerrariaPage() {
  const { t } = useLanguage()
  const terrariaPlans = t.products.terraria?.plans as any

  const plans: ProductPlan[] = [
    {
      name: terrariaPlans?.free || "T - Servidor Gratis",
      description: "Free Trial",
      priceEUR: 0,
      priceUSD: 0,
      priceLabel: "¡GRATIS!",
      features: [
        "Terraria - 1GB RAM",
        "1 Núcleo",
        "5GB Almacenamiento",
        "Slots Ilimitados",
        "Base de datos",
        "FTP",
        "Mods",
        "Plugins",
        "Pterodactyl Panel",
        "Soporte 24/7",
        "9 Disponible",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=checkout",
    },
    {
      name: terrariaPlans?.rareLoot || "T - Plan Botín Raro",
      description: t.products.terraria?.planDescriptions?.entry || "Entry",
      priceEUR: 1.75,
      priceUSD: 3.00,
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
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=0",
    },
    {
      name: terrariaPlans?.treasure || "T - Plan El Tesoro",
      description: t.products.terraria?.planDescriptions?.recommended || "Recommended",
      priceEUR: 3.45,
      priceUSD: 4.00,
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
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=1",
      popular: true,
    },
    {
      name: terrariaPlans?.pureMagic || "T - Plan Magia pura",
      description: t.products.terraria?.planDescriptions?.large || "For large groups",
      priceEUR: 5.25,
      priceUSD: 6.00,
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
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=2",
    },
    {
      name: terrariaPlans?.magicThread || "T - Hilo Mágico",
      description: t.products.terraria?.planDescriptions?.large || "For communities",
      priceEUR: 8.00,
      priceUSD: 9.50,
      features: [
        "6GB RAM",
        "3 Núcleos",
        "32GB Almacenamiento",
        "Slots Ilimitados",
        "Base de datos",
        "FTP",
        "Mods",
        "Plugins",
        "Pterodactyl Panel",
        "Soporte 24/7",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=3",
    },
    {
      name: terrariaPlans?.luckyClover || "T - Trébol de la suerte",
      description: t.products.terraria?.planDescriptions?.large || "For large communities",
      priceEUR: 12.00,
      priceUSD: 14.30,
      features: [
        "8GB RAM",
        "3 Núcleos",
        "64GB Almacenamiento",
        "Slots Ilimitados",
        "Base de datos",
        "FTP",
        "Mods",
        "Plugins",
        "Pterodactyl Panel",
        "Soporte 24/7",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=4",
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Sword,
      title: t.products.terraria?.features?.modSupportTitle || "Mod Support",
      description: t.products.terraria?.features?.modSupportDesc || "Full support for Terraria mods and plugins",
    },
    {
      icon: Cpu,
      title: t.products.terraria?.features?.resourcesTitle || "Dedicated Resources",
      description: t.products.terraria?.features?.resourcesDesc || "Guaranteed CPU and RAM for optimal performance",
    },
    {
      icon: Users,
      title: t.products.terraria?.features?.playersTitle || "Unlimited Players",
      description: t.products.terraria?.features?.playersDesc || "Host unlimited players on your server",
    },
    {
      icon: Shield,
      title: t.products.terraria?.features?.ddosTitle || "DDoS Protection",
      description: t.products.terraria?.features?.ddosDesc || "Advanced protection against attacks",
    },
    {
      icon: Zap,
      title: t.products.terraria?.features?.setupTitle || "Instant Setup",
      description: t.products.terraria?.features?.setupDesc || "Ready to play in minutes",
    },
    {
      icon: Headphones,
      title: t.products.terraria?.features?.supportTitle || "24/7 Support",
      description: t.products.terraria?.features?.supportDesc || "Expert support team always available",
    },
  ]

  const faqs = [
    {
      question: t.products.terraria?.faqs?.q1 || "Can I install mods on Terraria servers?",
      answer: t.products.terraria?.faqs?.a1 || "Yes, Terraria servers support mods and plugins to enhance your gameplay experience.",
    },
    {
      question: t.products.terraria?.faqs?.q2 || "How many players can I host?",
      answer: t.products.terraria?.faqs?.a2 || "You can host unlimited players, limited only by your server resources.",
    },
    {
      question: t.products.terraria?.faqs?.q3 || "What is included in the plans?",
      answer: t.products.terraria?.faqs?.a3 || "All plans include Pterodactyl Panel, database access, FTP, automatic backups, and 24/7 support.",
    },
    {
      question: t.products.terraria?.faqs?.q4 || "Can I upgrade my server?",
      answer: t.products.terraria?.faqs?.a4 || "Yes, you can upgrade anytime from your control panel with instant activation.",
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
