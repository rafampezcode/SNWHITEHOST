"use client"

import { BarChart3, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceLevelAgreementPage() {
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
            <BarChart3 className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.slaTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.slaSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/service-level-agreement" />

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
                  This Service Level Agreement ("SLA") sets forth the availability and quality commitments that SN WHITE HOSTING, a trade name of SN SOLUTIONS LLC ("Provider"), offers to its customers ("Client") in relation to Shared Hosting, WordPress Hosting, VPS, and Dedicated Server services.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Guaranteed Availability</h2>
                <p>
                  <strong>2.1.</strong> SN WHITE HOSTING guarantees a monthly uptime of 99.95% for all hosting services, measured over a one (1) calendar month.
                </p>
                <p>
                  <strong>2.2.</strong> Availability will be calculated as follows:
                </p>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  Availability (%) = [(Total monthly time - Non-excluded downtime) / Total monthly time] x 100
                </div>
              </section>

              <section className="mb-8">
                <h2>3. SLA Credit Compensation</h2>
                <p>
                  <strong>3.1.</strong> If the monthly availability falls below 99.95%, the Client may request an account credit equal to a percentage of the monthly service fee, according to the following table:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Uptime Range</th>
                        <th className="text-left py-2">Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">99.94% – 99.90%</td>
                        <td className="py-2">5% of monthly fee</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">99.89% – 99.80%</td>
                        <td className="py-2">10% of monthly fee</td>
                      </tr>
                      <tr>
                        <td className="py-2">Below 99.80%</td>
                        <td className="py-2">25% of monthly fee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>3.2.</strong> Credits will be applied only to future invoices and are non-refundable in cash.
                </p>
                <p>
                  <strong>3.3.</strong> To request the credit, the Client must open a support ticket within 10 days after the end of the affected month, specifying the date, time, and estimated duration of the outage.
                </p>
              </section>

              <section className="mb-8">
                <h2>4. SLA Exclusions</h2>
                <p>The following shall not be counted as downtime:</p>
                <ul>
                  <li>Scheduled maintenance with at least 24 hours prior notice.</li>
                  <li>Force majeure events (natural disasters, widespread power outages, wars, terrorism, pandemics).</li>
                  <li>Failures caused by Client actions, configurations, or negligence.</li>
                  <li>Connectivity issues outside SN WHITE HOSTING's infrastructure.</li>
                  <li>Suspensions due to breach of General Terms, AUP, or non-payment.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Backups</h2>
                <p>
                  <strong>5.1.</strong> SN WHITE HOSTING automatically performs:
                </p>
                <ul>
                  <li>Incremental backups from Monday to Saturday at 03:00 AM (server time).</li>
                  <li>Full backups on Sundays at 03:00 AM (server time).</li>
                </ul>
                <p>
                  <strong>5.2.</strong> The Client is solely responsible for maintaining additional copies of their data. The Provider shall not be held liable for data loss if the Client fails to maintain their own external backups.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. Support Procedure</h2>
                <p>
                  <strong>6.1.</strong> Technical support will be provided during the hours specified in the General Terms, except for emergencies, which will be handled through a priority ticket.
                </p>
                <p>
                  <strong>6.2.</strong> In case of a critical emergency, the Client must open a ticket marked as "URGENT."
                </p>
              </section>

              <section className="mb-8">
                <h2>7. SLA Modification</h2>
                <p>
                  SN WHITE HOSTING reserves the right to modify this SLA, notifying Clients at least 15 days in advance. Changes will not affect services already contracted until their next renewal date.
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