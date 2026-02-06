"use client"

import { Blocks, Cpu, Users, Shield, Zap, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function MinecraftPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "MJ - Servidor Gratis",
      description: "Free Trial — ¡GRATIS!",
      priceEUR: 0,
      priceUSD: 0,
      features: [
        "2GB RAM",
        "2 Núcleos",
        "5GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`,
    },
    {
      name: "MJ - Plan Madera",
      description: "Entrada",
      priceEUR: 5.00,
      priceUSD: 6.0,
      features: [
        "2GB de memoria RAM",
        "2 Núcleos",
        "5GB de almacenamiento NVME",
        "Panel Pterodactyl",
        "Todas las versiones",
        "Slots ilimitados",
        "Mods",
        "Plugins",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`,
    },
    {
      name: "MJ - Plan Piedra",
      description: "Recomendado",
      priceEUR: 7.50,
      priceUSD: 9.0,
      features: [
        "3GB RAM",
        "2 Núcleos",
        "8GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`,
      popular: true,
    },
    {
      name: "MJ - Plan Hierrónico",
      description: "Para comunidades",
      priceEUR: 12.00,
      priceUSD: 14.0,
      features: [
        "4GB RAM",
        "2 Núcleos",
        "10GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`,
    },
    {
      name: "MJ - Plan Oro",
      description: "Alta capacidad",
      priceEUR: 17.00,
      priceUSD: 20.0,
      features: [
        "6GB RAM",
        "4 Núcleos",
        "20GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`,
    },
    {
      name: "MJ - Plan Cobre",
      description: "Muy alto rendimiento",
      priceEUR: 21.00,
      priceUSD: 25.0,
      features: [
        "8GB RAM",
        "4 Núcleos",
        "50GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`,
    },
    {
      name: "MJ - Plan Diamante",
      description: "Máxima potencia",
      priceEUR: 29.50,
      features: [
        "12GB RAM",
        "6 Núcleos",
        "50GB almacenamiento",
        "Pterodactyl Panel",
        "Todas las versiones",
        "Slots ilimitados",
        "Plugins",
        "Mods",
        "Base de datos",
        "FTP",
        "Soporte 24/7",
      ],
      href: `${CLIENT_URL}/index.php?rp=/store/minecraft-java-servers`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Blocks,
      title: "Todas las Versiones",
      description: "Ejecuta cualquier version de Minecraft, desde la clasica hasta el ultimo snapshot, Java o Bedrock.",
    },
    {
      icon: Cpu,
      title: "Soporte de Modpacks",
      description: "Instalacion con un clic de Forge, Fabric, Spigot, Paper y mas de 1000 modpacks.",
    },
    {
      icon: Users,
      title: "Slots Ilimitados",
      description: "Sin limites artificiales de jugadores. Aloja tantos jugadores como tu RAM permita.",
    },
    {
      icon: Shield,
      title: "Proteccion DDoS",
      description: "Mitigacion DDoS de nivel empresarial mantiene tu servidor online durante ataques.",
    },
    {
      icon: Zap,
      title: "Setup Instantaneo",
      description: "Tu servidor esta listo para jugar en 60 segundos despues del pedido.",
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Expertos en Minecraft disponibles las 24 horas para ayudarte con cualquier problema.",
    },
  ]

  const faqs = [
    {
      question: "Puedo instalar modpacks?",
      answer: "Si! Soportamos todos los modpacks principales incluyendo Forge, Fabric y launchers de modpacks. Instalalo con un clic desde tu panel de control.",
    },
    {
      question: "Soportan Bedrock Edition?",
      answer: "Si! Ofrecemos servidores dedicados de Bedrock Edition asi como Geyser para cross-play entre jugadores de Java y Bedrock.",
    },
    {
      question: "Puedo actualizar mi RAM despues?",
      answer: "Por supuesto! Puedes actualizar la RAM de tu servidor en cualquier momento desde tu area de cliente con activacion instantanea.",
    },
    {
      question: "Como accedo a los archivos de mi servidor?",
      answer: "Tienes acceso completo FTP/SFTP a los archivos de tu servidor. Tambien puedes usar el administrador de archivos integrado en el panel Pterodactyl.",
    },
  ]

  const techSpecs = [
    { label: "CPU", value: "AMD EPYC 9645" },
    { label: "RAM", value: "DDR5 ECC" },
    { label: "Storage", value: "NVMe Gen4" },
    { label: "Red", value: "10 Gbps" },
  ]

  const benefits = [
    "Activacion instantanea",
    "Sin limites de slots",
    "Panel Pterodactyl",
    "Backups automaticos",
    "Soporte de mods",
    "Anti-DDoS incluido",
  ]

  return (
    <ProductPageLayout
      title={t.products.minecraft.title}
      subtitle={t.products.minecraft.subtitle}
      description={t.products.minecraft.description}
      icon={Blocks}
      imageSrc="/minecraft.png"
      plans={plans}
      features={features}
      faqs={faqs}
      techSpecs={techSpecs}
      benefits={benefits}
    />
  )
}
