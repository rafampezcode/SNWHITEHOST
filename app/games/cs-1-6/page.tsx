"use client"

import { Crosshair, Cpu, Shield, Zap, Map, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

export default function CS16Page() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "CS16 - Plan USP",
      description: "Mensual",
      priceEUR: 2.0,
      priceUSD: 2.36,
      features: [
        "512MB DDR5.",
        "AMD EPYC™ 9645.",
        "1 Core.",
        "3GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "1 Bases de datos.",
        "1 Backups.",
        "Slots ilimitados.",
        "Soporte 24/7.",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=6",
    },
    {
      name: "CS16 - Plan P90",
      description: "Mensual",
      priceEUR: 3.5,
      priceUSD: 4.15,
      features: [
        "1GB DDR5.",
        "AMD EPYC™ 9645.",
        "1 Core.",
        "5GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "1 Bases de datos.",
        "1 Backups.",
        "Slots ilimitados.",
        "Soporte 24/7.",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=7",
    },
    {
      name: "CS16 - Plan Desert Eagle",
      description: "Mensual",
      priceEUR: 6.0,
      priceUSD: 7.0,
      features: [
        "2GB DDR5.",
        "AMD EPYC™ 9645.",
        "1 Core.",
        "8GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "1 Bases de datos.",
        "1 Backups.",
        "Slots ilimitados.",
        "Soporte 24/7.",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=8",
    },
    {
      name: "CS16 - Plan M4A1",
      description: "Mensual",
      priceEUR: 9.0,
      priceUSD: 10.65,
      features: [
        "4GB DDR5.",
        "AMD EPYC™ 9645.",
        "2 Core.",
        "10GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "1 Bases de datos.",
        "1 Backups.",
        "Slots ilimitados.",
        "Soporte 24/7.",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=9",
    },
    {
      name: "CS16 - Plan AK47",
      description: "Mensual",
      priceEUR: 12.0,
      priceUSD: 14.2,
      features: [
        "6GB DDR5.",
        "AMD EPYC™ 9645.",
        "3 Core.",
        "15GB almacenamiento NVME.",
        "Localización: Estados Unidos.",
        "Pterodactyl Panel.",
        "Mods.",
        "Plugins.",
        "2 Bases de datos.",
        "2 Backups.",
        "Slots ilimitados.",
        "Soporte 24/7.",
      ],
      href: "https://clients.snwhitehosting.com/cart.php?a=confproduct&i=10",
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Cpu,
      title: "Low Latency",
      description: "Optimized network routes and premium hardware for minimal ping.",
    },
    {
      icon: Zap,
      title: "SourceMod Ready",
      description: "Full support for SourceMod and MetaMod plugins.",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced protection keeps your server online during attacks.",
    },
    {
      icon: Crosshair,
      title: "Instant Setup",
      description: "Your server is ready within minutes of ordering.",
    },
    {
      icon: Map,
      title: "Workshop Maps",
      description: "Install any Steam Workshop map with one click.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support available around the clock.",
    },
  ]

  const faqs = [
    {
      question: "Do you support SourceMod and MetaMod?",
      answer: "Yes, you can install SourceMod, MetaMod, and custom plugins.",
    },
    {
      question: "Can I change the server location?",
      answer: "Currently these plans are hosted in the United States.",
    },
    {
      question: "Is the server protected against DDoS?",
      answer: "Yes, all plans include advanced anti-DDoS protection.",
    },
    {
      question: "How fast is provisioning?",
      answer: "Servers are deployed automatically within minutes after payment.",
    },
  ]

  const techSpecs = [
    { label: "Tick Rate", value: "128" },
    { label: "CPU", value: "AMD EPYC 9645" },
    { label: "Storage", value: "NVMe SSD" },
    { label: "Network", value: "10 Gbps" },
  ]

  const benefits = [
    "Low latency gameplay",
    "SourceMod ready",
    "Workshop maps",
    "Instant setup",
    "Anti-DDoS included",
    "24/7 support",
  ]

  return (
    <ProductPageLayout
      title={t.products.cs16.title}
      subtitle={t.products.cs16.subtitle}
      description={t.products.cs16.description}
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
