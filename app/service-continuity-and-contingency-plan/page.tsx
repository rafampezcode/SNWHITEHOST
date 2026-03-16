"use client"

import { ShieldCheck, Mail, MapPin, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceContinuityAndContingencyPlanPage() {
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
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.serviceContinuityContingencyTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.serviceContinuityContingencySubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/service-continuity-and-contingency-plan" />

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
                <h2>1. Purpose</h2>
                <p>
                  This policy defines service continuity and contingency guidelines to reduce downtime
                  and ensure recovery after critical incidents, infrastructure failures, and disasters.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Scope</h2>
                <ul>
                  <li>Web hosting (Shared, WordPress, VPS, Dedicated).</li>
                  <li>Game servers.</li>
                  <li>Email and DNS services.</li>
                  <li>Authorized SN WHITE HOSTING operational, maintenance and monitoring staff.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Core Definitions</h2>
                <ul>
                  <li><strong>Failover:</strong> automatic or manual switch to redundant systems when a critical failure occurs.</li>
                  <li><strong>DRP:</strong> documented disaster recovery procedures to restore service after major disruptions.</li>
                  <li><strong>RTO:</strong> maximum acceptable recovery time for a critical service.</li>
                  <li><strong>RPO:</strong> maximum acceptable data loss according to service and backup availability.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Failover and Redundancy</h2>
                <ul>
                  <li>Critical services such as web, email and DNS use internal redundancy where feasible.</li>
                  <li>If a server goes down, failover to backup systems is executed based on available resources.</li>
                  <li>VPS, dedicated and game servers require customer-managed backups unless additional backup plans are contracted.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Disaster Recovery Procedure</h2>
                <ul>
                  <li>Incident detection through active monitoring and automatic alerts.</li>
                  <li>Impact assessment and service recovery prioritization.</li>
                  <li>Containment of affected systems to prevent spread.</li>
                  <li>Recovery from verified backups according to service type.</li>
                  <li>Post-recovery verification and incident closure with documented lessons learned.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Customer Communication</h2>
                <ul>
                  <li>Notifications via registered email, status page and support channels.</li>
                  <li>Communication includes impacted service, restoration estimate and preventive recommendations where applicable.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Customer Responsibilities</h2>
                <ul>
                  <li>Keep contact details updated for incident notifications.</li>
                  <li>Contract backup plans where guaranteed recovery is required.</li>
                  <li>Follow incident response recommendations provided by SN WHITE HOSTING.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Review and Updates</h2>
                <p>
                  This policy is reviewed annually or after significant incidents that affect service continuity.
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
                    <a href="mailto:support@snwhitehosting.com" className="text-primary hover:underline">
                      support@snwhitehosting.com
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
