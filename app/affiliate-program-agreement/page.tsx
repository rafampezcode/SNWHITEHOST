"use client"

import { Users, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AffiliateAgreementPage() {
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
            <Users className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.affiliateProgramTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.affiliateProgramSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/affiliate-program-agreement" />

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
                <h2>1. PURPOSE AND DEFINITIONS</h2>
                <p>
                  This Agreement sets forth the terms under which individuals or organizations ("Affiliates") promote SN WHITE HOSTING services and earn commissions for referred customers.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. ELIGIBILITY</h2>
                <p>To participate, the Affiliate must:</p>
                <ul>
                  <li>Be at least 18 years of age.</li>
                  <li>Operate a website, blog, or active social media presence with relevant content.</li>
                  <li>Comply with all applicable laws and regulations.</li>
                  <li>Be approved by the SN WHITE HOSTING management team.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. COMMISSION STRUCTURE</h2>
                <p>
                  Commissions are earned based on successful, non-refunded purchases by referred customers:
                </p>
                <ul>
                  <li>Initial Purchase Commission: 25% - 35% (depending on the product/plan).</li>
                  <li>Monthly Recurring Commission: 10% - 20% of the monthly billing.</li>
                  <li>Commission Duration: Valid for 24 months from the initial referral.</li>
                  <li>Minimum Accrued Commission: $25 USD.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. PAYMENT TERMS</h2>
                <ul>
                  <li>Minimum Payout Threshold: $50 USD.</li>
                  <li>Payment Methods: PayPal or Bank Transfer.</li>
                  <li>Payment Date: Before the 15th of each month for earnings generated in the previous month.</li>
                  <li>Currency: All payments are processed in USD.</li>
                  <li>Verification: SN WHITE HOSTING reserves the right to delay payment for up to 30 days to verify the legitimacy of referrals and prevent fraud.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. REFERRAL ATTRIBUTION</h2>
                <ul>
                  <li>Cookie Duration: 90 days.</li>
                  <li>Last Click Policy: The last affiliate link clicked before the purchase receives the credit.</li>
                  <li>Self-Referrals: Affiliates cannot earn commissions on their own accounts or accounts owned by their own business entities.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. MARKETING GUIDELINES</h2>
                <ul>
                  <li>Affiliates must only use materials provided in the Client Panel.</li>
                  <li>PPC Restrictions: Bidding on branded keywords (e.g., "SN WHITE HOSTING") in search engines is strictly prohibited.</li>
                  <li>No misleading claims or unauthorized discount coupons.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. PROHIBITED ACTIVITIES</h2>
                <p>
                  The following will result in immediate termination and forfeiture of commissions:
                </p>
                <ul>
                  <li>Engaging in spam, phishing, or predatory advertising.</li>
                  <li>Using affiliate links on sites with illegal or inappropriate content.</li>
                  <li>Registering domains that include the "SN WHITE HOSTING" trademark.</li>
                  <li>Fraudulent practices or encouraging refunds to manipulate commissions.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. TERMINATION</h2>
                <ul>
                  <li>SN WHITE HOSTING may terminate an account at any time for violations of this agreement.</li>
                  <li>Accounts with 12 consecutive months of inactivity (zero referrals) may be closed.</li>
                  <li>Upon valid termination, outstanding commissions will be paid within 30 days.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. MODIFICATIONS</h2>
                <p>
                  SN WHITE HOSTING reserves the right to modify commission rates and program rules with 30 days' notice.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>{t.legal.effectiveDateLabel}:</strong> February 21, 2026
                </p>
              </section>

              <div className="mt-12 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">{t.legal.contactUs}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">SN SOLUTIONS LLC</p>
                      <p className="text-muted-foreground">1209 Mountain Road Pl NE, Ste N</p>
                      <p className="text-muted-foreground">Albuquerque, New Mexico, 87110, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
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