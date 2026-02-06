"use client"

import { Swords, Cpu, Database, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function FiveMPage() {
  const { t } = useLanguage()

  // Precios reales de SN White Hosting - FiveM
  const plans: ProductPlan[] = [
    {
      name: "FiveM - Plan Mini Performance - US",
      description: "Para servidores RP pequeños",
      priceEUR: 15.55,
      priceUSD: 18.0,
      features: [
        "6GB DDR5",
        "AMD EPYC™ 9645",
        "4 Core",
        "80GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "1 Base de datos",
        "Slots ilimitados",
        "1 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/five-m`,
    },
    {
      name: "FiveM - Plan Regular - US",
      description: "Más popular",
      priceEUR: 22.45,
      priceUSD: 26.0,
      features: [
        "8GB DDR5",
        "AMD EPYC™ 9645",
        "4 Core",
        "128GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "2 Bases de datos",
        "Slots ilimitados",
        "2 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/five-m`,
      popular: true,
    },
    {
      name: "FiveM - Plan Performance - US",
      description: "Para comunidades grandes",
      priceEUR: 35.00,
      priceUSD: 40.75,
      features: [
        "16GB DDR5",
        "AMD EPYC™ 9645",
        "8 Core",
        "256GB almacenamiento NVME",
        "Localización: Estados Unidos",
        "Pterodactyl Panel",
        "2 Bases de datos",
        "Slots ilimitados",
        "2 Backups",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/five-m`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Swords,
      title: "FiveM Optimized",
      description: "Servers specifically configured and optimized for FiveM roleplay servers.",
    },
    {
      icon: Cpu,
      title: "txAdmin Included",
      description: "Full txAdmin control panel for easy server management and player administration.",
    },
    {
      icon: Database,
      title: "MySQL Databases",
      description: "Included MySQL databases for frameworks like ESX, QBCore, and vRP.",
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced DDoS mitigation to keep your roleplay server online 24/7.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Latest AMD Ryzen processors and NVMe storage for smooth gameplay.",
    },
    {
      icon: Headphones,
      title: "FiveM Experts",
      description: "Support team experienced with FiveM, ESX, QBCore, and popular scripts.",
    },
  ]

  const faqs = [
    {
      question: "Can I install custom scripts?",
      answer: "Yes! You have full FTP access and can install any FiveM-compatible scripts, including ESX, QBCore, vRP, and custom resources.",
    },
    {
      question: "Do you provide help with script installation?",
      answer: "Our support team can provide guidance for common scripts and frameworks. For complex custom development, we recommend our professional services.",
    },
    {
      question: "Can I run OneSync?",
      answer: "Yes, all our FiveM plans support OneSync for higher player counts and improved synchronization.",
    },
    {
      question: "How do I get a custom domain for my server?",
      answer: "Premium plans include a dedicated IP. You can point any domain to this IP through your DNS settings.",
    },
  ]

  const techSpecs = [
    { label: "CPU", value: "AMD EPYC 9645" },
    { label: "RAM", value: "DDR5 ECC" },
    { label: "Storage", value: "NVMe Gen4" },
    { label: "Red", value: "10 Gbps" },
  ]

  const benefits = [
    "txAdmin incluido",
    "MySQL databases",
    "ESX/QBCore ready",
    "Scripts custom",
    "OneSync soportado",
    "Anti-DDoS incluido",
  ]

  return (
    <ProductPageLayout
      title={t.products.fivem.title}
      subtitle={t.products.fivem.subtitle}
      description={t.products.fivem.description}
      icon={Swords}
      imageSrc="/GTA V.png"
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
      benefits={benefits}
    />
  )
}
