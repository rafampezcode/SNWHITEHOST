"use client"

import { Globe, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DataProcessingAddendumPage() {
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
            <Globe className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.dpaTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.dpaSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/data-processing-addendum" />

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
                <h2>1. Purpose of the Addendum</h2>
                <p>
                  This Data Processing Addendum ("DPA") forms part of the Terms and Conditions of SN WHITE HOSTING™, operated by SN SOLUTIONS LLC (EIN: 32-0817400), and governs the processing of personal data we carry out on behalf of the Client, in accordance with Regulation (EU) 2016/679 (GDPR) and other applicable data protection laws.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Roles and Definitions</h2>
                <ul>
                  <li>
                    <strong>Controller:</strong> The Client, who determines the purposes and means of processing personal data.
                  </li>
                  <li>
                    <strong>Processor:</strong> SN WHITE HOSTING™, which processes personal data on behalf of the Client.
                  </li>
                  <li>
                    <strong>Sub-processor:</strong> Any third party engaged by SN WHITE HOSTING™ to carry out part of the processing.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Obligations of SN WHITE HOSTING™</h2>
                <p>We undertake to:</p>
                <ol className="list-decimal pl-6">
                  <li>Process personal data only in accordance with documented instructions from the Client.</li>
                  <li>Ensure that persons authorized to process personal data are bound by confidentiality obligations.</li>
                  <li>Implement appropriate technical and organizational measures to ensure the security of personal data.</li>
                  <li>Assist the Client in ensuring compliance with its obligations regarding security, breach notifications, and impact assessments.</li>
                  <li>Delete or return all personal data upon termination of the services.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2>4. Sub-processors</h2>
                <ul>
                  <li>The Client authorizes the use of sub-processors listed in our Política de Privacidad.</li>
                  <li>If we add or replace sub-processors, we will notify the Client at least 15 days in advance.</li>
                  <li>We will require all sub-processors to comply with the same data protection obligations set out in this DPA.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. International Transfers</h2>
                <p>
                  When personal data is transferred outside the European Economic Area, appropriate legal mechanisms will be in place, such as Standard Contractual Clauses approved by the European Commission.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. Data Security</h2>
                <ul>
                  <li>We will apply appropriate security measures, including encryption, access controls, backups, and system monitoring.</li>
                  <li>We will periodically review the effectiveness of these measures.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Security Breach Notification</h2>
                <p>
                  In the event of a security breach affecting personal data, we will notify the Client without undue delay and provide relevant information to enable the Client to meet its legal obligations.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Data Subject Rights</h2>
                <p>
                  When the Client receives a request to exercise data subject rights (access, rectification, erasure, etc.), SN WHITE HOSTING™ will assist in fulfilling such requests where it is within the scope of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Audits</h2>
                <p>
                  The Client may, upon reasonable notice, audit compliance with this DPA directly or through an independent auditor, provided such audits do not unreasonably interfere with our operations.
                </p>
              </section>

              <section className="mb-8">
                <h2>10. Amendments to the DPA</h2>
                <p>
                  We may amend this DPA to reflect legal or technical changes. Any amendments will be notified at least 15 days prior to taking effect.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>{t.legal.effectiveDateLabel}:</strong> 01/08/2025
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