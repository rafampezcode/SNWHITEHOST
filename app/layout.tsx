import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { CurrencyProvider } from "@/components/currency-provider"
import { FestiveEffects } from "@/components/festive-effects"
import { GlobalSettingsProvider } from "@/components/global-settings-provider"
import { PromoBannerProvider } from "@/components/promo-banner-provider"
import { GlobalSiteBanner } from "@/components/global-site-banner"
import { MaintenanceWrapper } from "@/components/maintenance-wrapper"
import { FestivePopup } from "@/components/festive-popup"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SN White Hosting | Premium Web Hosting Services",
  description:
    "Fast, reliable, and secure web hosting solutions. Shared hosting, VPS, dedicated servers, and game servers with 24/7 support.",
  keywords: [
    "web hosting",
    "VPS",
    "dedicated servers",
    "game servers",
    "Minecraft hosting",
    "reseller hosting",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Apply theme immediately from localStorage to prevent flash
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  const colorTheme = localStorage.getItem('colorTheme') || 'blue';
                  const festiveTheme = localStorage.getItem('festiveTheme') || 'none';
                  
                  const root = document.documentElement;
                  
                  // Apply theme class
                  root.classList.add(theme);
                  
                  // Apply color theme
                  if (colorTheme !== 'blue') {
                    root.setAttribute('data-theme', colorTheme);
                  }
                  
                  // Apply festive theme
                  if (festiveTheme !== 'none') {
                    root.setAttribute('data-festive', festiveTheme);
                  }
                } catch (e) {
                  // Fail silently
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <CurrencyProvider>
              <GlobalSettingsProvider>
                <PromoBannerProvider>
                  <FestiveEffects />
                  <FestivePopup />
                  <GlobalSiteBanner />
                  <MaintenanceWrapper>
                    {children}
                  </MaintenanceWrapper>
                </PromoBannerProvider>
              </GlobalSettingsProvider>
            </CurrencyProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
