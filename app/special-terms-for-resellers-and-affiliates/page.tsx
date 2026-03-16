"use client"

import { Handshake, Mail, MapPin, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SpecialTermsForResellersAndAffiliatesPage() {
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
            <Handshake className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.resellerAffiliateTermsTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.resellerAffiliateTermsSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/special-terms-for-resellers-and-affiliates" />

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
              `}</style>

              <section className="mb-8">
                <h2>1. Purpose and Scope</h2>
                <p>
                  These terms define responsibilities, limits and procedures for resellers,
                  affiliates and commercial partners that promote or resell SN WHITE HOSTING services.
                </p>
                <ul>
                  <li>Applies globally to all partners, regardless of residence country.</li>
                  <li>Covers hosting, VPS, dedicated servers, domains and related services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>2. Reseller and Affiliate Obligations</h2>
                <ul>
                  <li>Comply with applicable local laws related to commercialization and resale.</li>
                  <li>Use SN WHITE HOSTING brand assets only as authorized and according to Brand Guidelines.</li>
                  <li>Provide accurate pricing, service terms and billing information to end customers.</li>
                  <li>Maintain confidentiality of non-public company and customer data.</li>
                  <li>Provide first-level support to end customers unless additional support is contracted.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Brand and Advertising Rules</h2>
                <ul>
                  <li>No unauthorized brand modification or misleading endorsement claims.</li>
                  <li>Advertising must be truthful and non-deceptive.</li>
                  <li>Dedicated IPs are recommended for resellers to reduce reputation and deliverability risks.</li>
                  <li>White-label usage does not create additional liability for SN WHITE HOSTING.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Liability Limits</h2>
                <ul>
                  <li>SN WHITE HOSTING is not responsible for reseller contracts with end customers.</li>
                  <li>SN WHITE HOSTING is not responsible for end-customer non-payment to resellers.</li>
                  <li>Resellers remain responsible for service quality, billing and incident resolution toward their customers.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Non-Payment and Commission Procedures</h2>
                <ul>
                  <li>Reseller services may be suspended for unpaid reseller invoices.</li>
                  <li>Affiliate commissions are calculated on effectively received payments.</li>
                  <li>Commission payouts may be withheld in cases of fraud, violations, or referred-customer cancellations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Termination</h2>
                <ul>
                  <li>SN WHITE HOSTING may terminate relationships for policy or legal violations.</li>
                  <li>After termination, partners must stop using brand assets and references.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Review and Updates</h2>
                <p>
                  This policy is reviewed annually or after relevant legal changes.
                  Updates are published on snwhitehosting.com with at least 15 days notice.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>{t.legal.effectiveDateLabel}:</strong> March 14, 2026
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
