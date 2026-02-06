"use client"

import { Server, Cpu, Shield, Network, Clock, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"
export default function DedicatedServersPage() {
  const { t } = useLanguage()
  const { currency } = useCurrency()

  const plans: ProductPlan[] = [
    {
      name: "SN-1202-AL",
      priceEUR: 147.3,
      priceUSD: 172.0,
      installationEUR: 79.0,
      installationUSD: 92.0,
      features: [
        "AMD Ryzen™ 9 7950X3D 16-Core \"Raphael\" (Zen 4)",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=17`,
    },
    {
      name: "SN-1202-FN",
      priceEUR: 132.3,
      priceUSD: 155.0,
      installationEUR: 79.0,
      installationUSD: 92.0,
      features: [
        "AMD Ryzen™ 9 7950X3D 16-Core \"Raphael\" (Zen 4)",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=18`,
    },
    {
      name: "SN-1230-AL",
      priceEUR: 177.3,
      priceUSD: 208.0,
      installationEUR: 159.0,
      installationUSD: 186.0,
      features: [
        "Intel® Xeon® Gold 5412U 24-Core \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=19`,
    },
    {
      name: "SN-1230-FN",
      priceEUR: 162.3,
      priceUSD: 190.0,
      installationEUR: 159.0,
      installationUSD: 186.0,
      features: [
        "Intel® Xeon® Gold 5412U 24-Core \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Locazación: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=20`,
    },
    {
      name: "SN-421-AL",
      priceEUR: 81.1,
      priceUSD: 95.0,
      installationEUR: 0.0,
      installationUSD: 0.0,
      showInstallationFee: false,
      features: [
        "AMD Ryzen™ 5 3600 Hexa-Core \"Matisse\" (Zen2)",
        "RAM: 64 GB DDR4 RAM",
        "SSD: 2 x 512 GB NVMe SSD (Software-RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: (Alemania)",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=21`,
    },
    {
      name: "SN-421-FN",
      priceEUR: 45.6,
      priceUSD: 53.0,
      installationEUR: 0.0,
      installationUSD: 0.0,
      showInstallationFee: false,
      features: [
        "AMD Ryzen™ 5 3600 Hexa-Core \"Matisse\" (Zen2)",
        "RAM: 64 GB DDR4 RAM",
        "SSD: 2 x 512 GB NVMe SSD (Software-RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=22`,
    },
    {
      name: "SN-424-AL",
      priceEUR: 82.3,
      priceUSD: 96.0,
      installationEUR: 79.0,
      installationUSD: 92.0,
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
      priceEUR: 67.3,
      priceUSD: 79.0,
      installationEUR: 79.0,
      installationUSD: 92.0,
      features: [
        "Intel® Core™ i5-13500 14 Core \"Raptor Lake-S\"",
        "RAM: 64 GB DDR4 RAM",
        "SSD: 2 x 512 GB NVMe SSD (Gen 4, Software RAID 1)",
        "Traffic: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=24`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Server,
      title: t.products.dedicated.features.hardwareTitle,
      description: t.products.dedicated.features.hardwareDesc,
    },
    {
      icon: Cpu,
      title: t.products.dedicated.features.cpuTitle,
      description: t.products.dedicated.features.cpuDesc,
    },
    {
      icon: Network,
      title: t.products.dedicated.features.networkTitle,
      description: t.products.dedicated.features.networkDesc,
    },
    {
      icon: Shield,
      title: t.products.dedicated.features.ddosTitle,
      description: t.products.dedicated.features.ddosDesc,
    },
    {
      icon: Clock,
      title: t.products.dedicated.features.uptimeTitle,
      description: t.products.dedicated.features.uptimeDesc,
    },
    {
      icon: Headphones,
      title: t.products.dedicated.features.supportTitle,
      description: t.products.dedicated.features.supportDesc,
    },
  ]

  const faqs = [
    { question: t.products.dedicated.faqs.q1, answer: t.products.dedicated.faqs.a1 },
    { question: t.products.dedicated.faqs.q2, answer: t.products.dedicated.faqs.a2 },
    { question: t.products.dedicated.faqs.q3, answer: t.products.dedicated.faqs.a3 },
    { question: t.products.dedicated.faqs.q4, answer: t.products.dedicated.faqs.a4 },
  ]

  return (
    <ProductPageLayout
      title={t.products.dedicated.title}
      subtitle={t.products.dedicated.subtitle}
      description={t.products.dedicated.description}
      icon={Server}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
