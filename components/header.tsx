"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Server,
  Globe,
  Mail,
  Cpu,
  HardDrive,
  User,
  Menu,
  X,
  ChevronDown,
  Award,
  RefreshCw,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useCurrency, type Currency } from "@/components/currency-provider"
import { cn } from "@/lib/utils"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const { t } = useLanguage()
  const { currency, setCurrency } = useCurrency()

  const currencies: Currency[] = ["EUR", "USD"]

  const hostingPrimaryItems = [
    { icon: Cpu, label: t.hosting.reseller, desc: t.hosting.resellerDesc, href: "/hosting/reseller" },
    { icon: RefreshCw, label: t.hosting.migrations, desc: t.hosting.migrationsDesc, href: "/hosting/migrations" },
    { icon: Mail, label: t.proServices.email, desc: t.proServices.emailDesc, href: "/services/email" },
  ]

  const hostingSharedItems = [
    { icon: Server, label: t.hosting.shared, desc: t.hosting.sharedDesc, href: "/hosting/shared" },
    { icon: Globe, label: t.hosting.wordpress, desc: t.hosting.wordpressDesc, href: "/hosting/wordpress" },
  ]

  const hostingMenuItems = [...hostingSharedItems, ...hostingPrimaryItems]

  const hostingChooserOptions = [
    { label: t.hostingMenu.beginner, desc: t.hostingMenu.beginnerDesc, href: "/hosting/shared" },
    { label: t.hostingMenu.advanced, desc: t.hostingMenu.advancedDesc, href: "/servers/cloud" },
    { label: t.hostingMenu.expert, desc: t.hostingMenu.expertDesc, href: "/servers/vps" },
  ]

  const menuItems = [
    {
      key: "domains",
      label: t.nav.domains,
      items: [
        { icon: Globe, label: t.domains.register, desc: t.domains.registerDesc, href: "/domains/register" },
        { icon: RefreshCw, label: t.domains.transfer, desc: t.domains.transferDesc, href: "/domains/transfer" },
      ],
    },
    {
      key: "hosting",
      label: t.nav.hosting,
      items: hostingMenuItems,
    },
    {
      key: "games",
      label: t.nav.gameHosting,
      items: [
        { image: "/minecraft.png", label: t.games.minecraft, desc: t.games.minecraftDesc, href: "/games/minecraft" },
        { image: "/minecraft.png", label: t.games.minecraftBedrock, desc: t.games.minecraftBedrockDesc, href: "/games/minecraft-bedrock" },
        { image: "/terraria.png", label: t.games.terraria, desc: t.games.terrariaDesc, href: "/games/terraria" },
        { image: "/project zomboid.png", label: t.games.projectZomboid, desc: t.games.projectZomboidDesc, href: "/games/project-zomboid" },
        { image: "/Hytale.png", label: t.games.hytale, desc: t.games.hytaleDesc, href: "/games/hytale" },
        { image: "/GTA V.png", label: t.games.fivem, desc: t.games.fivemDesc, href: "/games/fivem" },
        { image: "/rage.png", label: t.games.ragemp, desc: t.games.ragempDesc, href: "/games/ragemp" },
        { image: "/samp.png", label: t.games.samp, desc: t.games.sampDesc, href: "/games/samp" },
        { image: "/mta.png", label: t.games.mtasa, desc: t.games.mtasaDesc, href: "/games/mtasa" },
        { image: "/american truck simulator.png", label: t.games.americanTruck, desc: t.games.americanTruckDesc, href: "/games/american-truck-simulator" },
        { image: "/rust.png", label: t.games.rust, desc: t.games.rustDesc, href: "/games/rust" },
        { image: "/assetto corsa.png", label: t.games.assetto, desc: t.games.assettoDesc, href: "/games/assetto-corsa" },
      ],
    },
    {
      key: "servers",
      label: t.nav.servers,
      items: [
        { icon: HardDrive, label: t.servers.vps, desc: t.servers.vpsDesc, href: "/servers/vps" },
        { icon: Server, label: t.servers.dedicatedIntel, desc: t.servers.dedicatedIntelDesc, href: "/servers/dedicated-intel" },
        { icon: Server, label: t.servers.dedicatedAmd, desc: t.servers.dedicatedAmdDesc, href: "/servers/dedicated-amd" },
      ],
    },
    {
      key: "business",
      label: t.footerSections.business,
      items: [
        { icon: Award, label: t.footerSections.affiliateProgram, desc: t.legal.affiliateProgramPartnersSubtitle, href: "/affiliate-program-partners" },
        { icon: Briefcase, label: t.footerSections.acquisitions, desc: t.footerSections.sellPortfolio, href: "/adquisiciones" },
      ],
    },
    {
      key: "extras",
      label: t.extras.title,
      items: [
        { icon: Globe, label: t.extras.ssl, desc: t.extras.sslDesc, href: "/extras/ssl" },
        { icon: HardDrive, label: t.extras.storageBox, desc: t.extras.storageBoxDesc, href: "/extras/storage-box" },
        { icon: Award, label: t.extras.licenses, desc: t.extras.licensesDesc, href: "/extras/licenses" },
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SN White Hosting"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((menu) => (
              <div
                key={menu.key}
                className="relative"
                onMouseEnter={() => setActiveMenu(menu.key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-md hover:bg-muted festive-hover"
                >
                  {menu.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Mega Menu Dropdown */}
                {activeMenu === menu.key && (
                  <div className="absolute left-0 top-full pt-2 animate-slide-down">
                    {menu.key === "hosting" ? (
                      <div className="w-[980px] rounded-lg border border-border bg-card p-5 shadow-xl">
                        <div className="grid grid-cols-[1fr_1fr_280px] gap-6">
                          <div className="space-y-3">
                            <div className="text-xs font-semibold uppercase text-muted-foreground">
                              {t.hostingMenu.coreTitle}
                            </div>
                            <div className="grid gap-2">
                              {hostingPrimaryItems.map((item, index) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="menu-item-animate menu-item-hover festive-hover flex items-start gap-3 rounded-md p-3"
                                  style={{
                                    animationDelay: `${index * 0.06}s`,
                                  }}
                                >
                                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0 menu-icon-hover" />
                                  <div>
                                    <div className="font-medium text-foreground">{item.label}</div>
                                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="text-xs font-semibold uppercase text-muted-foreground">
                              {t.hostingMenu.sharedTitle}
                            </div>
                            <div className="grid gap-2">
                              {hostingSharedItems.map((item, index) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className={cn(
                                    "menu-item-animate flex items-start gap-3 rounded-md border p-3 transition-colors festive-hover",
                                    item.href === "/hosting/wordpress"
                                      ? "border-primary/30 bg-primary/10"
                                      : "border-transparent hover:bg-muted"
                                  )}
                                  style={{
                                    animationDelay: `${index * 0.06}s`,
                                  }}
                                >
                                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                                  <div>
                                    <div className="font-medium text-foreground">{item.label}</div>
                                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-lg border border-border bg-muted/40 p-4">
                            <div className="text-sm font-semibold text-foreground">
                              {t.hostingMenu.helpTitle}
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {t.hostingMenu.helpDesc}
                            </p>
                            <div className="mt-3 text-xs font-semibold uppercase text-muted-foreground">
                              {t.hostingMenu.helpLead}
                            </div>
                            <div className="mt-3 space-y-2">
                              {hostingChooserOptions.map((option) => (
                                <a
                                  key={option.label}
                                  href={option.href}
                                  className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2 transition-colors hover:bg-muted festive-hover"
                                >
                                  <div>
                                    <div className="text-sm font-semibold text-foreground">{option.label}</div>
                                    <div className="text-xs text-muted-foreground">{option.desc}</div>
                                  </div>
                                  <span className="text-xs text-muted-foreground">{t.hostingMenu.ctaTag}</span>
                                </a>
                              ))}
                            </div>
                            <Button size="sm" className="mt-4 w-full" asChild>
                              <a href={`${CLIENT_URL}/submitticket.php`}>
                                {t.hostingMenu.contactCta}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`${menu.key === "games" ? "w-[720px]" : "w-80"} rounded-lg border border-border bg-card p-4 shadow-xl`}>
                        <div className={`${menu.key === "games" ? "grid grid-cols-2 gap-2" : "grid gap-2"}`}>
                          {menu.items.map((item, index) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="menu-item-animate menu-item-hover festive-hover flex items-start gap-3 rounded-md p-3"
                              style={{
                                animationDelay: `${index * 0.06}s`,
                              }}
                            >
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={item.label}
                                  width={28}
                                  height={28}
                                  className="h-7 w-7 shrink-0"
                                />
                              ) : item.icon ? (
                                <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0 menu-icon-hover" />
                              ) : null}
                              <div>
                                <div className="font-medium text-foreground">{item.label}</div>
                                <div className="text-sm text-muted-foreground">{item.desc}</div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 festive-hover">
                  {currency}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {currencies.map((cur) => (
                  <DropdownMenuItem
                    key={cur}
                    onClick={() => setCurrency(cur)}
                    className={currency === cur ? "bg-muted festive-hover" : "festive-hover"}
                  >
                    {cur}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="default" size="sm" asChild className="hidden sm:flex">
              <a href={`${CLIENT_URL}/clientarea.php`}>
                <User className="h-4 w-4 mr-2" />
                {t.nav.clientArea}
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-4">
            {menuItems.map((menu) => (
              <div key={menu.key} className="space-y-2">
                <div className="font-medium text-foreground">{menu.label}</div>
                <div className="grid gap-1 pl-4">
                  {menu.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.label}
                          width={16}
                          height={16}
                          className="h-4 w-4 shrink-0"
                        />
                      ) : item.icon ? (
                        <item.icon className="h-4 w-4 text-primary" />
                      ) : null}
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="justify-between festive-hover">
                    <span>{currency}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {currencies.map((cur) => (
                    <DropdownMenuItem
                      key={cur}
                      onClick={() => setCurrency(cur)}
                      className={currency === cur ? "bg-muted festive-hover" : "festive-hover"}
                    >
                      {cur}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="default" asChild>
                <a href={`${CLIENT_URL}/clientarea.php`}>
                  <User className="h-4 w-4 mr-2" />
                  {t.nav.clientArea}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
