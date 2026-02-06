"use client"

import { RotateCcw, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExpiredDomainRecoveryPolicyPage() {
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
            <RotateCcw className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">Expired Domain</span>
              <span className="mx-2 text-foreground">Recovery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.expiredDomainSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/expired-domain-recovery-policy" />

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
                <h2>1. Purpose of the Policy</h2>
                <p>
                  This policy outlines the grace periods, redemption periods, and deletion procedures for expired domain names registered through SN WHITE HOSTING™.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Domain Expiration Timeline</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Period</th>
                        <th className="text-left py-2">Duration</th>
                        <th className="text-left py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Active Period</td>
                        <td className="py-2">Until expiration date</td>
                        <td className="py-2">Domain is active</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Grace Period</td>
                        <td className="py-2">5 days after expiration</td>
                        <td className="py-2">Can be renewed without penalty</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Redemption Period</td>
                        <td className="py-2">30 days after grace period ends</td>
                        <td className="py-2">Can be recovered with redemption fee</td>
                      </tr>
                      <tr>
                        <td className="py-2">Deletion</td>
                        <td className="py-2">After redemption period</td>
                        <td className="py-2">Domain is deleted and becomes available</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2>3. Grace Period (0-5 days)</h2>
                <ul>
                  <li>The domain remains registered to the original owner.</li>
                  <li>The domain is not yet deleted.</li>
                  <li>DNS services may be disabled by SN WHITE HOSTING.</li>
                  <li>Renewal is possible at the standard renewal rate.</li>
                  <li>No additional fees apply during the grace period.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Redemption Period (6-35 days)</h2>
                <ul>
                  <li>The domain enters the redemption period after the grace period expires.</li>
                  <li>The original registrant may still recover the domain.</li>
                  <li>A redemption fee will apply (in addition to the renewal fee).</li>
                  <li>SN WHITE HOSTING will contact the registrant during this period with recovery instructions.</li>
                  <li>Recovery must be requested through a support ticket.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Deletion (After 35 days)</h2>
                <ul>
                  <li>If not recovered during the redemption period, the domain will be deleted.</li>
                  <li>The domain becomes available for public registration.</li>
                  <li>SN WHITE HOSTING will not be responsible for third parties registering the domain.</li>
                  <li>No recovery is possible after deletion.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Notification Requirements</h2>
                <p>SN WHITE HOSTING will attempt to notify the domain registrant at:</p>
                <ul>
                  <li>The email address associated with the domain registration.</li>
                  <li>Any alternative contact information provided by the registrant.</li>
                  <li>Notifications will be sent at expiration, at the start of the grace period, and at the start of the redemption period.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Special TLD Rules</h2>
                <p>
                  Some TLDs may have different grace and redemption periods according to their registry policies. SN WHITE HOSTING will follow the specific rules of each TLD registry.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Responsibilities</h2>
                <ul>
                  <li>SN WHITE HOSTING is not responsible for domain loss due to non-payment or failure to renew.</li>
                  <li>The registrant is responsible for ensuring renewal payments are made on time.</li>
                  <li>The registrant is responsible for keeping contact information up to date.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Policy Amendments</h2>
                <p>SN WHITE HOSTING reserves the right to modify this policy at any time, notifying customers at least 15 days in advance.</p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Effective Date:</strong> 01/08/2025
                </p>
              </section>

              <div className="mt-12 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
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