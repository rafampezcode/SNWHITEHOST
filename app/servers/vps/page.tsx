"use client"

import { HardDrive, Cpu, Shield, Zap, Clock, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function VPSPage() {
  const { t } = useLanguage()

  // Precios reales de SN White Hosting - VPS
  const plans: ProductPlan[] = [
    {
      name: "VPS R9 - Small",
      priceEUR: 6.50,
      priceUSD: 7.65,
      installationEUR: 7.00,
      installationUSD: 8.61,
      features: [
        "2GB RAM DDR5",
        "1 núcleo virtual",
        "AMD RYZEN 9 7950X3D",
        "Frecuencia: 4.2 GHz hasta 5.7GHz",
        "20GB almacenamiento NVMe",
        "Localización: Alemania",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=0`,
    },
    {
      name: "VPS R9 - Small plus",
      priceEUR: 9.00,
      priceUSD: 10.60,
      installationEUR: 7.00,
      installationUSD: 8.31,
      features: [
        "4 GB de RAM DDR5",
        "2 núcleos virtuales",
        "AMD Ryzen 9 7950X3D",
        "Frecuencia: 4,2 GHz hasta 5,7 GHz",
        "64 GB de almacenamiento NVMe",
        "Ubicación: Alemania",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=1`,
    },
    {
      name: "VPS R9 - Medium",
      priceEUR: 12.00,
      priceUSD: 14.00,
      installationEUR: 7.00,
      installationUSD: 8.31,
      features: [
        "6 GB de RAM DDR5",
        "2 núcleos virtuales",
        "AMD Ryzen 9 7950X3D",
        "Frecuencia: 4,2 GHz hasta 5,7 GHz",
        "128 GB de almacenamiento NVMe",
        "Ubicación: Alemania",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=2`,
    },
    {
      name: "VPS R9 - Medium Plus",
      priceEUR: 18.00,
      priceUSD: 21.15,
      installationEUR: 7.00,
      installationUSD: 8.31,
      features: ["8 GB DDR5 RAM", "4 núcleos virtuales", "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)", "180 GB NVMe", "Ubicación: Alemania", "Soporte 24/7"],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=3`,
    },
    {
      name: "VPS R9 - Full",
      priceEUR: 22.00,
      priceUSD: 25.85,
      installationEUR: 7.00,
      installationUSD: 8.31,
      features: ["12 GB DDR5 RAM", "4 núcleos virtuales", "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)", "256 GB NVMe", "Ubicación: Alemania", "Soporte 24/7"],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=4`,
    },
    {
      name: "VPS R9 - Pro",
      priceEUR: 26.00,
      priceUSD: 30.55,
      installationEUR: 7.00,
      installationUSD: 8.31,
      features: ["16 GB DDR5 RAM", "6 núcleos virtuales", "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)", "256 GB NVMe", "Ubicación: Alemania", "Soporte 24/7"],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=5`,
    },
    {
      name: "VPS R9 - Pro Plus",
      priceEUR: 32.00,
      priceUSD: 37.60,
      installationEUR: 7.00,
      installationUSD: 8.31,
      features: ["24 GB DDR5 RAM", "8 núcleos virtuales", "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)", "320 GB NVMe", "Ubicación: Alemania", "Soporte 24/7"],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=6`,
    },
    {
      name: "VPS R9 - Killer",
      priceEUR: 40.00,
      priceUSD: 47.00,
      installationEUR: 7.00,
      installationUSD: 8.61,
      features: ["32 GB DDR5 RAM", "8 núcleos virtuales", "AMD Ryzen 9 7950X3D (4.2–5.7 GHz)", "480 GB NVMe", "Ubicación: Alemania", "Soporte 24/7"],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=7`,
    },
  ]

  const features: ProductFeature[] = [
    { icon: Cpu, title: t.products.vps.features.resourcesTitle, description: t.products.vps.features.resourcesDesc },
    { icon: HardDrive, title: t.products.vps.features.storageTitle, description: t.products.vps.features.storageDesc },
    { icon: Shield, title: t.products.vps.features.accessTitle, description: t.products.vps.features.accessDesc },
    { icon: Zap, title: t.products.vps.features.deployTitle, description: t.products.vps.features.deployDesc },
    { icon: Clock, title: t.products.vps.features.uptimeTitle, description: t.products.vps.features.uptimeDesc },
    { icon: Headphones, title: t.products.vps.features.supportTitle, description: t.products.vps.features.supportDesc },
  ]

  const faqs = [
    { question: t.products.vps.faqs.q1, answer: t.products.vps.faqs.a1 },
    { question: t.products.vps.faqs.q2, answer: t.products.vps.faqs.a2 },
    { question: t.products.vps.faqs.q3, answer: t.products.vps.faqs.a3 },
    { question: t.products.vps.faqs.q4, answer: t.products.vps.faqs.a4 },
  ]

  const techSpecs = [
    { label: "CPU", value: "AMD EPYC" },
    { label: "RAM", value: "DDR5 ECC" },
    { label: "Storage", value: "NVMe Gen4" },
    { label: "Network", value: "10 Gbps" },
  ]

  const benefits = ["Recursos dedicados", "Root access completo", "Deploy instantaneo", "Multi-OS disponible", "Snapshots incluidos", "Anti-DDoS incluido"]

  return (
    <ProductPageLayout
      title={t.products.vps.title}
      subtitle={t.products.vps.subtitle}
      description={t.products.vps.description}
      icon={HardDrive}
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
      benefits={benefits}
    />
  )
}
