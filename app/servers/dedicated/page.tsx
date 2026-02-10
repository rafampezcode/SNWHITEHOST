"use client"

import { useState } from "react"
import { Server, Cpu, Shield, Network, Clock, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const CLIENT_URL = "https://clients.snwhitehosting.com"

type ProcessorType = "AMD" | "Intel"

export default function DedicatedServersPage() {
  const { t, language } = useLanguage()
  const { currency } = useCurrency()
  const [processorType, setProcessorType] = useState<ProcessorType>("AMD")

  // AMD Plans
  const amdPlans: ProductPlan[] = [
    {
      name: "SN-421-AL",
      priceEUR: 82.00,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=8`,
    },
    {
      name: "SN-421-FN",
      priceEUR: 82.00,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=9`,
    },
    {
      name: "SN-422-AL",
      priceEUR: 127.46,
      priceUSD: 120.00,
      installationEUR: 107.00,
      installationUSD: 0.00,
      showInstallationFee: true,
      features: [
        "AMD Ryzen™ 7 PRO 8700GE",
        "RAM: 64 GB DDR5 ECC",
        "SSD: 2x 512 GB NVMe SSD (Software-RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=10`,
    },
    {
      name: "SN-422-FN",
      priceEUR: 127.46,
      priceUSD: 120.00,
      installationEUR: 107.00,
      installationUSD: 0.00,
      showInstallationFee: true,
      features: [
        "AMD Ryzen™ 7 PRO 8700GE",
        "RAM: 64 GB DDR5 ECC",
        "SSD: 2x 512 GB NVMe SSD (Software-RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=11`,
    },
    {
      name: "SN-1202-AL",
      priceEUR: 210.00,
      priceUSD: 250.15,
      installationEUR: 269.00,
      installationUSD: 320.40,
      features: [
        "AMD Ryzen™ 9 7950X3D 16-Core \"Raphael\" (Zen 4)",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=12`,
    },
    {
      name: "SN-1202-FN",
      priceEUR: 210.00,
      priceUSD: 250.15,
      installationEUR: 269.00,
      installationUSD: 320.45,
      features: [
        "AMD Ryzen™ 9 7950X3D 16-Core \"Raphael\" (Zen 4)",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=13`,
    },
    {
      name: "SN-1262-AL",
      priceEUR: 400.00,
      priceUSD: 476.50,
      installationEUR: 542.00,
      installationUSD: 645.65,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=14`,
    },
    {
      name: "SN-1262-FN",
      priceEUR: 400.00,
      priceUSD: 476.50,
      installationEUR: 542.00,
      installationUSD: 645.65,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 256 GB DDR5 ECC RAM",
        "SSD: 2 x 1.92 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=15`,
    },
    {
      name: "SN-12062-AL",
      priceEUR: 400.00,
      priceUSD: 476.50,
      installationEUR: 411.00,
      installationUSD: 490.00,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2x 3.84 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Alemania",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=16`,
    },
    {
      name: "SN-12062-FN",
      priceEUR: 400.00,
      priceUSD: 476.50,
      installationEUR: 411.00,
      installationUSD: 490.00,
      features: [
        "AMD EPYC™ 9454P \"Sapphire Rapids SP\"",
        "RAM: 128 GB DDR5 ECC RAM",
        "SSD: 2x 3.84 TB NVMe SSD Datacenter Edition (Gen 4, Software RAID 1)",
        "Tráfico: 1 Gbit/s Ancho de Banda - Ilimitado",
        "Localización: Finlandia",
      ],
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=17`,
    },
  ]

  // Intel Plans
  const intelPlans: ProductPlan[] = [
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=0`,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=1`,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=2`,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=3`,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=4`,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=5`,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=6`,
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
      href: `${CLIENT_URL}/cart.php?a=confproduct&i=7`,
    },
  ]

  const currentPlans = processorType === "AMD" ? amdPlans : intelPlans
  const currentTranslation = processorType === "AMD" ? t.products.dedicatedAmd : t.products.dedicatedIntel

  const features: ProductFeature[] = [
    {
      icon: Server,
      title: currentTranslation.features.hardwareTitle,
      description: currentTranslation.features.hardwareDesc,
    },
    {
      icon: Cpu,
      title: currentTranslation.features.cpuTitle,
      description: currentTranslation.features.cpuDesc,
    },
    {
      icon: Network,
      title: currentTranslation.features.networkTitle,
      description: currentTranslation.features.networkDesc,
    },
    {
      icon: Shield,
      title: currentTranslation.features.ddosTitle,
      description: currentTranslation.features.ddosDesc,
    },
    {
      icon: Clock,
      title: currentTranslation.features.uptimeTitle,
      description: currentTranslation.features.uptimeDesc,
    },
    {
      icon: Headphones,
      title: currentTranslation.features.supportTitle,
      description: currentTranslation.features.supportDesc,
    },
  ]

  const faqs = [
    { question: currentTranslation.faqs.q1, answer: currentTranslation.faqs.a1 },
    { question: currentTranslation.faqs.q2, answer: currentTranslation.faqs.a2 },
    { question: currentTranslation.faqs.q3, answer: currentTranslation.faqs.a3 },
    { question: currentTranslation.faqs.q4, answer: currentTranslation.faqs.a4 },
  ]

  // Processor Type Selector Component
  const processorSelector = (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {t.servers.processorSelector}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t.servers.dedicatedDesc}
        </p>
      </div>
      
      <Card className="inline-flex p-2 shadow-lg border-2">
        <div className="flex gap-2">
          <Button
            onClick={() => setProcessorType("AMD")}
            variant={processorType === "AMD" ? "default" : "ghost"}
            size="lg"
            className={cn(
              "min-w-[180px] transition-all duration-300 font-semibold",
              processorType === "AMD" 
                ? "shadow-md scale-105" 
                : "hover:scale-105 hover:bg-muted"
            )}
          >
            <Cpu className="mr-2 h-5 w-5" />
            {t.servers.amdProcessors}
          </Button>
          <Button
            onClick={() => setProcessorType("Intel")}
            variant={processorType === "Intel" ? "default" : "ghost"}
            size="lg"
            className={cn(
              "min-w-[180px] transition-all duration-300 font-semibold",
              processorType === "Intel" 
                ? "shadow-md scale-105" 
                : "hover:scale-105 hover:bg-muted"
            )}
          >
            <Cpu className="mr-2 h-5 w-5" />
            {t.servers.intelProcessors}
          </Button>
        </div>
      </Card>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Server className="h-4 w-4" />
        <span>
          {processorType === "AMD" 
            ? `${amdPlans.length} ${language === "es" ? "planes disponibles" : language === "de" ? "verfügbare Pläne" : language === "nl" ? "beschikbare plannen" : "available plans"}`
            : `${intelPlans.length} ${language === "es" ? "planes disponibles" : language === "de" ? "verfügbare Pläne" : language === "nl" ? "beschikbare plannen" : "available plans"}`
          }
        </span>
      </div>
    </div>
  )

  return (
    <ProductPageLayout
      title={currentTranslation.title}
      subtitle={currentTranslation.subtitle}
      description={currentTranslation.description}
      icon={Server}
      plans={currentPlans}
      features={features}
      faqs={faqs}
      preContentSelector={processorSelector}
    />
  )
}
