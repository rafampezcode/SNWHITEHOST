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
import { ContentCmsPageOverride } from "@/components/content-cms-page-override"
import { SITE_NAME, SITE_URL } from "@/lib/seo"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium Web Hosting Services`,
    template: `%s | ${SITE_NAME}`,
  },
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Premium Web Hosting Services`,
    description:
      "Fast, reliable, and secure web hosting solutions. Shared hosting, VPS, dedicated servers, and game servers with 24/7 support.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Premium Web Hosting Services`,
    description:
      "Fast, reliable, and secure web hosting solutions. Shared hosting, VPS, dedicated servers, and game servers with 24/7 support.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: "support@snwhitehosting.com",
    sameAs: [
      "https://status.snwhitehosting.com",
      "https://clients.snwhitehosting.com",
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
                    <ContentCmsPageOverride>{children}</ContentCmsPageOverride>
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
