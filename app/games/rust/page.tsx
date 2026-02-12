"use client"

import { Flame, Cpu, MapPin, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function RustPage() {
  const { t } = useLanguage()

  // Precios reales de SN White Hosting - Rust
  const rustPlans = t.products.rust.plans as any
  const plans: ProductPlan[] = [
    {
      name: rustPlans.scrap,
      description: "Mensual",
      priceEUR: 8.00,
      priceUSD: 9.50,
      features: [
        "6GB DDR5",
        "AMD EPYC™ 9645",
        "4 Core",
        "32GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "Plugins",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/rust`,
    },
    {
      name: rustPlans.sheetMetal,
      description: "Mensual",
      priceEUR: 12.00,
      priceUSD: 14.50,
      features: [
        "8GB DDR5",
        "AMD EPYC™ 9645",
        "4 Core",
        "64GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "Plugins",
        "2 Bases de datos",
        "Slots ilimitados",
        "2 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/rust`,
      popular: true,
    },
    {
      name: rustPlans.metalFragments,
      description: "Mensual",
      priceEUR: 18.00,
      priceUSD: 21.50,
      features: [
        "10GB DDR5",
        "AMD EPYC™ 9645",
        "6 Core",
        "128GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "Plugins",
        "3 Bases de datos",
        "Slots ilimitados",
        "2 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/rust`,
    },
    {
      name: rustPlans.gears,
      description: "Mensual",
      priceEUR: 25.00,
      priceUSD: 29.75,
      features: [
        "12GB DDR5",
        "AMD EPYC™ 9645",
        "6 Core",
        "256GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "Plugins",
        "4 Bases de datos",
        "Slots ilimitados",
        "2 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/rust`,
    },
    {
      name: rustPlans.electricFuse,
      description: "Mensual",
      priceEUR: 35.00,
      priceUSD: 40.75,
      features: [
        "16GB DDR5",
        "AMD EPYC™ 9645",
        "8 Core",
        "256GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "Mods",
        "Plugins",
        "4 Bases de datos",
        "Slots ilimitados",
        "2 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/rust`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Flame,
      title: "Rust Optimized",
      description: "High-frequency CPUs and optimized configurations for smooth Rust gameplay.",
    },
    {
      icon: Cpu,
      title: "Oxide/uMod Ready",
      description: "Pre-installed Oxide mod framework with one-click plugin installation.",
    },
    {
      icon: MapPin,
      title: "Custom Maps",
      description: "Upload and run custom maps, or use our selection of popular community maps.",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Enterprise-grade protection keeps your server online during attacks.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Powerful hardware ensures no lag even with high player counts.",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Support team familiar with Rust server administration and plugins.",
    },
  ]

  const faqs = [
    {
      question: "Can I install plugins?",
      answer: "Yes! All our Rust servers come with Oxide/uMod pre-installed. You can install thousands of plugins with one click or upload your own.",
    },
    {
      question: "Can I use custom maps?",
      answer: "Absolutely! You can upload custom maps or choose from our library of popular community maps.",
    },
    {
      question: "How do I manage my server?",
      answer: "Use our game panel for basic management, or connect via RCON for full server console access.",
    },
    {
      question: "Do you support modded servers?",
      answer: "Yes, we fully support modded Rust servers with Oxide plugins, custom maps, and modified gameplay settings.",
    },
  ]

  const techSpecs = [
    { label: "CPU", value: "AMD EPYC 9645" },
    { label: "RAM", value: "DDR5 ECC" },
    { label: "Storage", value: "NVMe Gen4" },
    { label: "Red", value: "10 Gbps" },
  ]

  const benefits = [
    "Oxide/uMod incluido",
    "Mapas custom",
    "Wipes programados",
    "RCON access",
    "Plugins ilimitados",
    "Anti-DDoS incluido",
  ]

  return (
    <ProductPageLayout
      title={t.products.rust.title}
      subtitle={t.products.rust.subtitle}
      description={t.products.rust.description}
      icon={Flame}
      imageSrc="/rust.png"
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
      benefits={benefits}
    />
  )
}
