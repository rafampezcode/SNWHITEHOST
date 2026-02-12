"use client"

import { Palette, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BrandGuidelinesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      <div className="container max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              {t.legal.backToHome}
            </Button>
          </Link>
        </div>

        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <Palette className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.brandGuidelinesTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.brandGuidelinesSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/brand-guidelines-and-permissions" />

          <div className="lg:col-span-1">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none ">
              <style jsx global>{`
                .prose h2 {
                  font-size: 2rem;
                  font-weight: 700;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                  color: hsl(var(--foreground));
                  }
                .prose h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  color: hsl(var(--primary));
                }
                .prose p {
                  margin-bottom: 1.25rem;
                  line-height: 1.8;
                  color: hsl(var(--foreground));
                }
                .prose ul {
                  margin-top: 1rem;
                  margin-bottom: 1.5rem;
                  padding-left: 1.5rem;
                }
                .prose li {
                  margin-bottom: 0.75rem;
                  color: hsl(var(--foreground));
                }
                .prose section {
                  margin-bottom: 3rem;
                }
                .prose strong {
                  color: hsl(var(--foreground));
                }
              `}</style>
              <section className="mb-8">
                <h2>1. Purpose</h2>
                <p>
                  These guidelines establish the proper use of SN WHITE HOSTING™ trademarks, logos, brand names, and other brand assets by affiliates, partners, resellers, and third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Trademark Ownership</h2>
                <p>
                  SN WHITE HOSTING™, SN SOLUTIONS LLC, and related trademarks are the exclusive property of SN SOLUTIONS LLC. All rights reserved worldwide. Unauthorized use of these marks is prohibited.
                </p>
              </section>

              <section className="mb-8">
                <h2>3. Approved Uses of SN WHITE HOSTING™ Brand</h2>
                <p>The following uses of the SN WHITE HOSTING™ brand are permitted:</p>
                <ul>
                  <li>By authorized partners and affiliates in promotional materials</li>
                  <li>In factual statements about services provided by SN WHITE HOSTING™</li>
                  <li>In news articles or press releases (with proper attribution)</li>
                  <li>In customer testimonials and case studies (with permission)</li>
                  <li>In educational or informational content referencing our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Logo Usage Requirements</h2>
                <p>If authorized to use the SN WHITE HOSTING™ logo, the following requirements apply:</p>
                <ul>
                  <li>Logo must be used in its original form without modifications</li>
                  <li>Minimum size: 100px width</li>
                  <li>Clear space around logo: at least 10px on all sides</li>
                  <li>Do not change colors, proportions, or orientation</li>
                  <li>Do not rotate, skew, or distort the logo</li>
                  <li>Maintain clear, readable font alongside the logo</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Prohibited Uses</h2>
                <p>The following uses of the SN WHITE HOSTING™ brand are strictly prohibited:</p>
                <ul>
                  <li>Modifying the logo, name, or tagline</li>
                  <li>Using the brand to imply endorsement not granted by SN WHITE HOSTING™</li>
                  <li>Using the brand in misleading, offensive, or illegal contexts</li>
                  <li>Registering domain names containing SN WHITE HOSTING™ or SN SOLUTIONS</li>
                  <li>Creating confusion between your brand and SN WHITE HOSTING™</li>
                  <li>Using the brand in social media handles without permission</li>
                  <li>Implying official status, partnership, or affiliation without authorization</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Attribution and Credit</h2>
                <p>When referencing SN WHITE HOSTING™:</p>
                <ul>
                  <li>Always use the full, proper name: "SN WHITE HOSTING™"</li>
                  <li>Include the ™ symbol</li>
                  <li>Provide attribution to SN SOLUTIONS LLC</li>
                  <li>Include a link to snwhitehosting.com when possible</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Affiliate and Reseller Brand Use</h2>
                <p>Authorized affiliates and resellers may:</p>
                <ul>
                  <li>Use provided logo and marketing materials</li>
                  <li>Reference SN WHITE HOSTING™ in promotional content</li>
                  <li>Use SN WHITE HOSTING™ in product listings or descriptions</li>
                  <li>Display the SN WHITE HOSTING™ logo on their websites (with provided badge)</li>
                </ul>
                <p>
                  Affiliates and resellers must not create custom versions of our logo or brand materials without explicit written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Brand Material Requests</h2>
                <p>
                  To request logos, brand materials, or approval for specific uses of the SN WHITE HOSTING™ brand, contact us at:
                </p>
                <p className="text-primary font-medium">legal@snwhitehosting.com</p>
                <p>
                  Please allow 5-7 business days for review and response to brand requests.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Enforcement and Violations</h2>
                <p>
                  Unauthorized or improper use of the SN WHITE HOSTING™ brand may result in:
                </p>
                <ul>
                  <li>Cease and desist notices</li>
                  <li>Content removal orders</li>
                  <li>Account suspension or termination</li>
                  <li>Legal action to enforce trademark rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>10. Third-Party Brand References</h2>
                <p>
                  SN WHITE HOSTING™ does not endorse or approve third-party brands, products, or services that use our name or logo without explicit written authorization.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. Policy Amendments</h2>
                <p>
                  These guidelines may be updated at any time. Changes will be posted on snwhitehosting.com at least 15 days in advance.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>{t.legal.effectiveDateLabel}:</strong> 01/08/2025
                </p>
              </section>

              <div className="mt-16 p-8 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">{t.legal.contactUs}</h3>
                <div className="space-y-4 text-base">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">SN SOLUTIONS LLC</p>
                      <p className="text-muted-foreground">1209 Mountain Road Pl NE, Ste N</p>
                      <p className="text-muted-foreground">Albuquerque, New Mexico, 87110, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="mailto:legal@snwhitehosting.com" className="text-primary hover:underline">
                      legal@snwhitehosting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
      )
      }