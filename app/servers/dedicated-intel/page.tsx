"use client"

import { Server, Cpu, Shield, Network, Clock, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function DedicatedIntelServersPage() {
  const { t } = useLanguage()
  const { currency } = useCurrency()

  const plans: ProductPlan[] = [
    {
      name: "SN-424-AL",
      priceEUR: 83.00,
      priceUSD: 99.00,
      installationEUR: 99.00,
      installationUSD: 118.00,
      features: [
        "Intel® Core™ i5-13500 14 Core \"Raptor Lake-S\"",
        "RAM: 64 GB DDR4 RAM",
        "SSD: 2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=23`,
    },
    {
      name: "SN-424-FN",
      priceEUR: 83.00,
      priceUSD: 99.00,
      installationEUR: 99.00,
      installationUSD: 118.00,
      features: [
        "Intel® Core™ i5-13500 14 Core \"Raptor Lake-S\"",
        "RAM: 64 GB DDR4 RAM",
        "SSD: 2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=24`,
    },
    {
      name: "SN-623-AL",
      priceEUR: 150.00,
      priceUSD: 179.00,
      installationEUR: 99.00,
      installationUSD: 118.00,
      features: [
        "Intel® Core™ Ultra 7 265",
        "RAM: 64 GB DDR5",
        "SSD: 2x 1 TB NVMe SSD (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=25`,
    },
    {
      name: "SN-623-FN",
      priceEUR: 150.00,
      priceUSD: 179.00,
      installationEUR: 99.00,
      installationUSD: 118.00,
      features: [
        "Intel® Core™ Ultra 7 265",
        "RAM: 64 GB DDR5",
        "SSD: 2x 1 TB NVMe SSD (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=26`,
    },
    {
      name: "SN-1230-AL",
      priceEUR: 300.00,
      priceUSD: 357.36,
      installationEUR: 476.00,
      installationUSD: 567.00,
      features: [
        "Intel® Xeon® Gold 5412U 24-Core \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=27`,
    },
    {
      name: "SN-1230-FN",
      priceEUR: 300.00,
      priceUSD: 357.36,
      installationEUR: 476.00,
      installationUSD: 567.00,
      features: [
        "Intel® Xeon® Gold 5412U 24-Core \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=28`,
    },
    {
      name: "SN-12302-AL",
      priceEUR: 300.00,
      priceUSD: 357.36,
      installationEUR: 359.00,
      installationUSD: 427.65,
      features: [
        "Intel® Xeon® Gold 5412U",
        "RAM: 128 GB DDR5 ECC",
        "SSD: 2x 3.84 TB NVMe SSD (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=29`,
    },
    {
      name: "SN-12302-FN",
      priceEUR: 300.00,
      priceUSD: 357.36,
      installationEUR: 359.00,
      installationUSD: 427.65,
      features: [
        "Intel® Xeon® Gold 5412U",
        "RAM: 128 GB DDR5 ECC",
        "SSD: 2x 3.84 TB NVMe SSD (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=30`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Server,
      title: t.products.dedicatedIntel.features.hardwareTitle,
      description: t.products.dedicatedIntel.features.hardwareDesc,
    },
    {
      icon: Cpu,
      title: t.products.dedicatedIntel.features.cpuTitle,
      description: t.products.dedicatedIntel.features.cpuDesc,
    },
    {
      icon: Network,
      title: t.products.dedicatedIntel.features.networkTitle,
      description: t.products.dedicatedIntel.features.networkDesc,
    },
    {
      icon: Shield,
      title: t.products.dedicatedIntel.features.ddosTitle,
      description: t.products.dedicatedIntel.features.ddosDesc,
    },
    {
      icon: Clock,
      title: t.products.dedicatedIntel.features.uptimeTitle,
      description: t.products.dedicatedIntel.features.uptimeDesc,
    },
    {
      icon: Headphones,
      title: t.products.dedicatedIntel.features.supportTitle,
      description: t.products.dedicatedIntel.features.supportDesc,
    },
  ]

  const faqs = [
    { question: t.products.dedicatedIntel.faqs.q1, answer: t.products.dedicatedIntel.faqs.a1 },
    { question: t.products.dedicatedIntel.faqs.q2, answer: t.products.dedicatedIntel.faqs.a2 },
    { question: t.products.dedicatedIntel.faqs.q3, answer: t.products.dedicatedIntel.faqs.a3 },
    { question: t.products.dedicatedIntel.faqs.q4, answer: t.products.dedicatedIntel.faqs.a4 },
  ]

  return (
    <ProductPageLayout
      title={t.products.dedicatedIntel.title}
      subtitle={t.products.dedicatedIntel.subtitle}
      description={t.products.dedicatedIntel.description}
      icon={Server}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
