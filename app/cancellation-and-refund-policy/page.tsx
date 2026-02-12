"use client"

import { CreditCard, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CancellationAndRefundPolicyPage() {
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
            <CreditCard className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.cancellationRefundTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.cancellationRefundSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/cancellation-and-refund-policy" />

          <div className="lg:col-span-1">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
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
                <h2>1. SCOPE</h2>
                <p>
                  This policy applies to all services provided by SN WHITE HOSTING (SN SOLUTIONS LLC), including but not limited to: Shared, WordPress, and Reseller Hosting; VPS, Dedicated Servers, Game Servers, and Docker Containers; Domain Registration; StorageBox; SSL Certificates; and Software Licenses.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. MONEY-BACK GUARANTEE</h2>
                <p>
                  <strong>2.1.</strong> Shared and WordPress Hosting: The Customer has a 30-day money-back guarantee from the service activation date.
                </p>
                <p>
                  <strong>2.2.</strong> Reseller Hosting: Subject to a 7-day money-back guarantee, provided the resources have not been abused.
                </p>
                <p>
                  <strong>2.3.</strong> Exclusions: This guarantee does NOT include domain registration fees, SSL certificates, software licenses (cPanel, Plesk, etc.), or any other third-party add-on services.
                </p>
                <p>
                  <strong>2.4.</strong> Payment Method: Refunds will only be issued to the original payment method.
                </p>
              </section>

              <section className="mb-8">
                <h2>3. NON-REFUNDABLE SERVICES</h2>
                <p>
                  The following services are non-refundable once activated:
                </p>
                <ul>
                  <li>Servers: VPS, Dedicated Servers, Game Servers, and Docker Containers.</li>
                  <li>Domains: Registration, transfers, and renewals.</li>
                  <li>Storage & Licenses: StorageBox, SSL certificates, and all types of control panel or software licenses.</li>
                  <li>Labor: Technical work, installations, or customized configurations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. SERVICE CANCELLATION</h2>
                <p>
                  <strong>4.1.</strong> Request: The Customer may request cancellation at any time via the Client Panel.
                </p>
                <p>
                  <strong>4.2.</strong> Timing: Scheduled cancellations take effect at the end of the current billing period unless an immediate cancellation is requested.
                </p>
                <p>
                  <strong>4.3.</strong> Renewals: Services renew automatically. To avoid charges, non-renewal must be requested at least 15 days before the expiration date.
                </p>
              </section>

              <section className="mb-8">
                <h2>5. CANCELLATION DUE TO NON-PAYMENT</h2>
                <p>
                  If an invoice remains unpaid by the due date:
                </p>
                <ul>
                  <li>3 Days after due date: The service will be suspended.</li>
                  <li>15 Days after due date: All associated data (files, databases, and configurations) will be permanently and irreversibly deleted.</li>
                </ul>
                <p>
                  The Company is not responsible for data loss resulting from deletion due to non-payment after this 15-day grace period.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. SERVICE LEVEL AGREEMENT (SLA) CREDITS</h2>
                <p>
                  Breach of the SLA (uptime guarantee) will not result in monetary refunds. Compensation will be issued as account credits to be used for future invoices, as specified in our General Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2>7. PROCEDURE</h2>
                <p>
                  To request a refund, the Customer must open a Support Ticket with the Billing Department, stating the reason and providing the invoice number. Approved refunds are processed within 14 business days.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. MODIFICATIONS</h2>
                <p>
                  SN WHITE HOSTING reserves the right to modify this policy. Changes will be announced in the News section of the Client Panel 15 days in advance.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>{t.legal.effectiveDateLabel}:</strong> February 21, 2026
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
