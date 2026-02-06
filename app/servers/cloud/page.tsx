"use client"

import { Cloud, Zap, Shield, TrendingUp, Clock, Headphones } from "lucide-react"
import { ProductPageLayout, type ProductPlan, type ProductFeature } from "@/components/product-page-layout"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function CloudServersPage() {
  const { t } = useLanguage()

  const plans: ProductPlan[] = [
    {
      name: "Cloud S",
      description: "Start small, scale big",
      priceEUR: 5.99,
      features: [
        "1 vCPU Core",
        "1 GB RAM",
        "20 GB NVMe SSD",
        "1 TB Bandwidth",
        "1 IPv4 Address",
        "Hourly Billing",
        "API Access",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=60`,
    },
    {
      name: "Cloud M",
      description: "Most popular",
      priceEUR: 14.99,
      features: [
        "2 vCPU Cores",
        "4 GB RAM",
        "50 GB NVMe SSD",
        "3 TB Bandwidth",
        "1 IPv4 Address",
        "Hourly Billing",
        "API Access",
        "Load Balancer Ready",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=61`,
      popular: true,
    },
    {
      name: "Cloud L",
      description: "For production workloads",
      priceEUR: 29.99,
      features: [
        "4 vCPU Cores",
        "8 GB RAM",
        "100 GB NVMe SSD",
        "5 TB Bandwidth",
        "1 IPv4 Address",
        "Hourly Billing",
        "API Access",
        "Load Balancer Ready",
        "Auto-scaling",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=62`,
    },
    {
      name: "Cloud XL",
      description: "High-performance",
      priceEUR: 59.99,
      features: [
        "8 vCPU Cores",
        "16 GB RAM",
        "200 GB NVMe SSD",
        "10 TB Bandwidth",
        "2 IPv4 Addresses",
        "Hourly Billing",
        "API Access",
        "Load Balancer Ready",
        "Auto-scaling",
        "Priority Support",
      ],
      href: `${CLIENT_URL}/cart.php?a=add&pid=63`,
    },
  ]

  const features: ProductFeature[] = [
    {
      icon: Zap,
      title: "Instant Provisioning",
      description: "Deploy cloud instances in seconds with our automated provisioning system.",
    },
    {
      icon: TrendingUp,
      title: "Auto-Scaling",
      description: "Automatically scale resources up or down based on demand.",
    },
    {
      icon: Shield,
      title: "High Availability",
      description: "Built on redundant infrastructure for maximum uptime and reliability.",
    },
    {
      icon: Cloud,
      title: "Flexible Billing",
      description: "Pay only for what you use with hourly billing and no long-term contracts.",
    },
    {
      icon: Clock,
      title: "99.95% Uptime SLA",
      description: "Enterprise-grade reliability backed by our Service Level Agreement.",
    },
    {
      icon: Headphones,
      title: "API & Automation",
      description: "Full API access for automation and integration with your DevOps tools.",
    },
  ]

  const faqs = [
    {
      question: "What is cloud hosting?",
      answer: "Cloud hosting runs on virtualized infrastructure across multiple servers, providing high availability, scalability, and flexible billing based on actual usage.",
    },
    {
      question: "How does hourly billing work?",
      answer: "You're charged only for the hours your cloud instance is running. When you delete an instance, billing stops immediately. Monthly caps ensure you never pay more than the monthly price.",
    },
    {
      question: "Can I create snapshots?",
      answer: "Yes! You can create snapshots of your cloud instances at any time. Snapshots are perfect for backups or creating new instances from a known good state.",
    },
    {
      question: "What regions are available?",
      answer: "We have cloud infrastructure in Europe and North America. Contact us if you need specific geographic locations for compliance or latency requirements.",
    },
  ]

  return (
    <ProductPageLayout
      title={t.products.cloud.title}
      subtitle={t.products.cloud.subtitle}
      description={t.products.cloud.description}
      icon={Cloud}
      plans={plans}
      features={features}
      faqs={faqs}
    />
  )
}
