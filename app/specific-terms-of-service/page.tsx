"use client"

import { FileText, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SpecificTermsOfServicePage() {
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
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">Specific Terms</span>
              <span className="mx-2 text-foreground">of Service</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.specificTermsSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/specific-terms-of-service" />

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
                  These Specific Terms supplement the General Terms of Service and regulate the specific aspects of the services provided by SN WHITE HOSTING, including:
                </p>
                <ul>
                  <li>Hosting: Shared, WordPress, and Reseller Hosting.</li>
                  <li>Servers: VPS (Virtual Private Servers), Dedicated Servers, Game Servers, and Docker Containers.</li>
                  <li>Storage: StorageBox (dedicated solutions for backup and storage).</li>
                  <li>Domains & Security: Domain registration and SSL Certificates.</li>
                  <li>Licensing: Licenses for cPanel, Plesk, various control panels, and software addons.</li>
                </ul>
                <p>
                  In case of conflict between these Specific Terms and the General Terms, these Specific Terms shall prevail.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. SERVICE LEVEL AGREEMENT (SLA)</h2>
                <p>
                  SN WHITE HOSTING guarantees a minimum monthly uptime of 99.95% for its hosting and server services, excluding interruptions caused by:
                </p>
                <ul>
                  <li>Scheduled maintenance (with prior notice).</li>
                  <li>Failures or incidents beyond the control of SN WHITE HOSTING (external network provider issues, massive DDoS attacks, force majeure).</li>
                  <li>Misconfigurations by the Client in unmanaged services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. PLAN SPECIFICATIONS AND FEATURES</h2>
                <p>
                  To ensure information is always accurate and up-to-date, SN WHITE HOSTING does not detail technical specifications (RAM, SSD, CPU) or pricing within this document.
                </p>
                <p>
                  <strong>Important Note:</strong> All technical details, resource limits, pricing, and features for currently contracted plans or available services are hosted exclusively in the Client Panel.
                </p>
                <p>
                  For further inquiries regarding custom configurations or commercial doubts, the Client must open a Support Ticket with the Sales Department.
                </p>
              </section>

              <section className="mb-8">
                <h2>4. BACKUP POLICY AND STORAGEBOX</h2>
                <p>
                  <strong>Automatic Backups:</strong> Incremental backups are performed Monday through Saturday, with a full backup every Sunday at 03:00 AM, solely for disaster recovery purposes.
                </p>
                <p>
                  <strong>StorageBox:</strong> StorageBox services are managed exclusively by the Client regarding data governance and organization.
                </p>
                <p>
                  <strong>Responsibility:</strong> While SN WHITE HOSTING provides backup tools, the Client remains primarily responsible for maintaining their own external backups.
                </p>
              </section>

              <section className="mb-8">
                <h2>5. DOMAIN REGISTRATION AND LICENSING</h2>
                <p>
                  <strong>Domains:</strong> Registration and renewals are processed through authorized registrars selected by SN WHITE HOSTING. Renewal is automatic unless the Client provides written notice of cancellation before the expiration date.
                </p>
                <p>
                  <strong>Licensing:</strong> Provision of licenses (cPanel, Plesk, etc.) is subject to the terms and conditions of the original software vendors. SN WHITE HOSTING acts as an intermediary and facilitator.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. UPDATES TO PLANS AND PRICING</h2>
                <p>
                  SN WHITE HOSTING reserves the right to update service specifications and rates at any time:
                </p>
                <ul>
                  <li><strong>Plan Changes:</strong> Any modification to plan features (upgrades or downgrades) will be notified to affected clients via email.</li>
                  <li><strong>Price Changes:</strong> Updates to pricing will be communicated to all clients through the News section of the Client Panel.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. USAGE LIMITATIONS</h2>
                <p>
                  It is strictly prohibited to use the services (including game servers and containers) for illegal activities, unsolicited bulk email (SPAM), hosting copyrighted content without authorization, malware, or any use that may damage the infrastructure or reputation of SN WHITE HOSTING.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Effective Date:</strong> February 21, 2026
                </p>
              </section>

              <div className="mt-16 p-8 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Contact Us</h3>
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
