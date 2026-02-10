"use client"

import { Server, Cpu, Shield, Network, Clock, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function DedicatedAmdServersPage() {
  const { t } = useLanguage()
  const { currency } = useCurrency()

  const plans: ProductPlan[] = [
    {
      name: "SN-421-AL",
      priceEUR: 90.46,
      priceUSD: 97.70,
      installationEUR: 0.00,
      installationUSD: 0.00,
      showInstallationFee: false,
      features: [
        "AMD Ryzen™ 5 3600 Hexa-Core \"Matisse\" (Zen2)",
        "RAM: 64 GB DDR4 RAM",
        "SSD: 2 x 512 GB NVMe SSD (Software-RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=21`,
    },
    {
      name: "SN-421-FN",
      priceEUR: 90.46,
      priceUSD: 97.70,
      installationEUR: 0.00,
      installationUSD: 0.00,
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
      name: "SN-422-AL",
      priceEUR: 111.11,
      priceUSD: 120.00,
      installationEUR: 0.00,
      installationUSD: 0.00,
      showInstallationFee: false,
      features: [
        "AMD Ryzen™ 7 PRO 8700GE",
        "RAM: 64 GB DDR5 ECC",
        "SSD: 2x 512 GB NVMe SSD (Software-RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=31`,
    },
    {
      name: "SN-422-FN",
      priceEUR: 111.11,
      priceUSD: 120.00,
      installationEUR: 0.00,
      installationUSD: 0.00,
      showInstallationFee: false,
      features: [
        "AMD Ryzen™ 7 PRO 8700GE",
        "RAM: 64 GB DDR5 ECC",
        "SSD: 2x 512 GB NVMe SSD (Software-RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=32`,
    },
    {
      name: "SN-1202-AL",
      priceEUR: 231.62,
      priceUSD: 250.15,
      installationEUR: 296.67,
      installationUSD: 320.40,
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
      priceEUR: 231.62,
      priceUSD: 250.15,
      installationEUR: 296.71,
      installationUSD: 320.45,
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
      name: "SN-1262-AL",
      priceEUR: 441.11,
      priceUSD: 476.50,
      installationEUR: 597.83,
      installationUSD: 645.65,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=33`,
    },
    {
      name: "SN-1262-FN",
      priceEUR: 441.11,
      priceUSD: 476.50,
      installationEUR: 597.83,
      installationUSD: 645.65,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=34`,
    },
    {
      name: "SN-12062-AL",
      priceEUR: 441.11,
      priceUSD: 476.50,
      installationEUR: 453.70,
      installationUSD: 490.00,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2x 3.84 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=35`,
    },
    {
      name: "SN-12062-FN",
      priceEUR: 441.11,
      priceUSD: 476.50,
      installationEUR: 453.70,
      installationUSD: 490.00,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2x 3.84 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=36`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Server,
      title: t.products.dedicatedAmd.features.hardwareTitle,
      description: t.products.dedicatedAmd.features.hardwareDesc,
    },
    {
      icon: Cpu,
      title: t.products.dedicatedAmd.features.cpuTitle,
      description: t.products.dedicatedAmd.features.cpuDesc,
    },
    {
      icon: Network,
      title: t.products.dedicatedAmd.features.networkTitle,
      description: t.products.dedicatedAmd.features.networkDesc,
    },
    {
      icon: Shield,
      title: t.products.dedicatedAmd.features.ddosTitle,
      description: t.products.dedicatedAmd.features.ddosDesc,
    },
    {
      icon: Clock,
      title: t.products.dedicatedAmd.features.uptimeTitle,
      description: t.products.dedicatedAmd.features.uptimeDesc,
    },
    {
      icon: Headphones,
      title: t.products.dedicatedAmd.features.supportTitle,
      description: t.products.dedicatedAmd.features.supportDesc,
    },
  ]

  const faqs = [
    { question: t.products.dedicatedAmd.faqs.q1, answer: t.products.dedicatedAmd.faqs.a1 },
    { question: t.products.dedicatedAmd.faqs.q2, answer: t.products.dedicatedAmd.faqs.a2 },
    { question: t.products.dedicatedAmd.faqs.q3, answer: t.products.dedicatedAmd.faqs.a3 },
    { question: t.products.dedicatedAmd.faqs.q4, answer: t.products.dedicatedAmd.faqs.a4 },
  ]

  return (
    <ProductPageLayout
      title={t.products.dedicatedAmd.title}
      subtitle={t.products.dedicatedAmd.subtitle}
      description={t.products.dedicatedAmd.description}
      icon={Server}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
