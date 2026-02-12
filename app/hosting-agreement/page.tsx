"use client"

import { FileText, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HostingAgreementPage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.hostingAgreementTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.hostingAgreementSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/hosting-agreement" />

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
                <h2>1. Purpose of the Agreement</h2>
                <p>
                  This Agreement governs the provision of servicios de alojamiento web by SN WHITE HOSTING™, operated by SN SOLUTIONS LLC, to the Customer. By purchasing and using the hosting services, the Customer agrees to the terms set forth in this document, as well as in the Condiciones Generales de Servicio (CGS), the Condiciones específicas del servicio (STS), the Política de Uso Aceptable (AUP), and the Acuerdo de Nivel de Servicio (SLA).
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Term and Renewal</h2>
                <p>
                  <strong>2.1.</strong> The duration of the hosting service shall be as specified in the Customer's order (monthly, annual, or other).
                </p>
                <p>
                  <strong>2.2.</strong> The service shall be automatically renewed for subsequent periods unless the Customer provides notice of non-renewal at least 15 days in advance.
                </p>
                <p>
                  <strong>2.3.</strong> Failure to renew or pay will result in suspension of the service 3 days after the due date, and permanent deletion of all data 10 days after the due date.
                </p>
              </section>

              <section className="mb-8">
                <h2>3. Availability and SLA</h2>
                <p>
                  <strong>3.1.</strong> SN WHITE HOSTING™ guarantees a minimum availability of 99.95%, in accordance with the Acuerdo de Nivel de Servicio (SLA).
                </p>
                <p>
                  <strong>3.2.</strong> In the event of SLA breach, the Customer shall be entitled to service credits as set forth in the General Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2>4. Backups</h2>
                <p>
                  <strong>4.1.</strong> SN WHITE HOSTING™ performs automatic backups of hosted data:
                </p>
                <ul>
                  <li>Incremental backups Monday through Saturday.</li>
                  <li>Full backups on Sundays at 03:00 AM (server time).</li>
                </ul>
                <p>
                  <strong>4.2.</strong> Backups are provided as an additional safety measure but do not replace the Customer's obligation to maintain independent local copies.
                </p>
              </section>

              <section className="mb-8">
                <h2>5. Customer Obligations</h2>
                <p>The Customer agrees to:</p>
                <ul>
                  <li>Use the service solely for lawful purposes and in compliance with the AUP.</li>
                  <li>Not use the hosting service as an external storage or backup server (a Storage Box service may be provided for such purposes).</li>
                  <li>Keep billing and contact details accurate and up to date.</li>
                  <li>Protect login credentials and account access.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. SN WHITE HOSTING™ Obligations</h2>
                <p>SN WHITE HOSTING™ agrees to:</p>
                <ul>
                  <li>Maintain server uptime in accordance with the SLA.</li>
                  <li>Apply reasonable security and data protection measures.</li>
                  <li>Provide technical support during business hours, with emergency incidents handled via priority ticket alerts.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Suspension and Termination</h2>
                <p>SN WHITE HOSTING™ may suspend or terminate the service without liability in cases of:</p>
                <ul>
                  <li>Non-payment.</li>
                  <li>Breach of the AUP.</li>
                  <li>Fraudulent, abusive, or illegal use of resources.</li>
                  <li>Requirement by a competent authority.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Limitation of Liability</h2>
                <p>SN WHITE HOSTING™ shall not be held liable for:</p>
                <ul>
                  <li>Indirect damages, data loss, or financial losses resulting from the use of the service.</li>
                  <li>Failures caused by third parties, external attacks, or force majeure events.</li>
                  <li>Content published or distributed by the Customer through the services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Amendments</h2>
                <p>
                  SN WHITE HOSTING™ may amend this Agreement by providing at least 15 days' prior notice before changes take effect.
                </p>
              </section>

              <section className="mb-8">
                <h2>10. Governing Law and Jurisdiction</h2>
                <p>
                  This Agreement shall be governed by the laws of the United States of America, State of New Mexico. Any disputes shall be submitted to the competent courts of New Mexico, unless otherwise required by applicable law.
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