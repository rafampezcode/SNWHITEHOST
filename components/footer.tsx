"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { CreditCard, Shield, Clock, Mail } from "lucide-react"

const CLIENT_URL = "https://clients.snwhitehosting.com"

// Iconos de redes sociales
const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"/>
    <path d="M16.2 2.5H7.8A5.3 5.3 0 0 0 2.5 7.8v8.4a5.3 5.3 0 0 0 5.3 5.3h8.4a5.3 5.3 0 0 0 5.3-5.3V7.8a5.3 5.3 0 0 0-5.3-5.3zm3.6 13.7a3.6 3.6 0 0 1-3.6 3.6H7.8a3.6 3.6 0 0 1-3.6-3.6V7.8a3.6 3.6 0 0 1 3.6-3.6h8.4a3.6 3.6 0 0 1 3.6 3.6v8.4z"/>
  </svg>
)

const socialLinks = [
  { name: "Discord", href: "https://discord.gg/", icon: DiscordIcon },
  {
    name: "Instagram",
    href: "https://www.instagram.com/snwhitehosting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: InstagramIcon,
  },
]

const productLinks = [
  { key: "sharedHosting", href: "/hosting/shared" },
  { key: "resellerHosting", href: "/hosting/reseller" },
  { key: "vpsServers", href: "/servers/vps" },
  { key: "dedicatedServers", href: "/servers/dedicated" },
]

const gameLinks = [
  { key: "minecraft", href: "/games/minecraft" },
  { key: "fivem", href: "/games/fivem" },
  { key: "counterStrike", href: "/games/cs2" },
  { key: "rust", href: "/games/rust" },
  { key: "ark", href: "/games/ark" },
]

const supportLinks = [
  { key: "clientArea", href: `${CLIENT_URL}/clientarea.php` },
  { key: "knowledgeBase", href: `${CLIENT_URL}/knowledgebase.php` },
  { key: "openTicket", href: `${CLIENT_URL}/submitticket.php` },
  { key: "serverStatus", href: "https://status.snwhitehosting.com" },
]

const legalLinks = [
  { key: "privacyPolicy", href: "/privacy-policy" },
]

const businessLinks = [
  { key: "affiliateProgram", href: `${CLIENT_URL}/index.php?rp=/store/affiliate` },
  { key: "acquisitions", href: "/adquisiciones" },
  { key: "sellPortfolio", href: `${CLIENT_URL}/submitticket.php?step=2&dession=Sales` },
]

export function Footer() {
  const { t } = useLanguage()
  const paymentMethods = [
    (t.footerSections as any).paymentPaypal,
    (t.footerSections as any).paymentCard,
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo y descripcion */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/logo.png"
                alt="SN White Hosting"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              {t.footer.description}
            </p>
            
            {/* Informacion de contacto */}
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@snwhitehosting.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{(t.footerSections as any).support247}</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{(t.footerSections as any).products}</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {(t.footerSections as any)[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servidores de juegos */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{(t.footerSections as any).gameServers}</h4>
            <ul className="space-y-2">
              {gameLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {(t.footerSections as any)[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{(t.footerSections as any).support}</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {(t.footerSections as any)[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal y Empresa */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{(t.footerSections as any).business}</h4>
            <ul className="space-y-2">
              {businessLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {(t.footerSections as any)[link.key]}
                  </a>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {(t.footerSections as any)[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metodos de pago y garantias */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>{(t.footerSections as any).paymentMethods}:</span>
              {paymentMethods.map((method) => (
                <span key={method} className="px-2 py-1 rounded bg-muted text-xs font-medium">
                  {method}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>{t.trustBadges.moneyBack}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{t.trustBadges.uptime}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} SN White Hosting. {t.footer.copyright}
          </p>
          <a
            href="https://status.snwhitehosting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {(t.footerSections as any).serverStatus}
          </a>
        </div>
      </div>
    </footer>
  )
}
