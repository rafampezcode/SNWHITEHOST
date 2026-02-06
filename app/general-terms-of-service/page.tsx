"use client"

import { FileText, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GeneralTermsOfServicePage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">General Terms</span>
              <span className="mx-2 text-foreground">of Service</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.generalTermsSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/general-terms-of-service" />

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
                <h2>1. SCOPE OF THE AGREEMENT</h2>
                <p>
                  These General Terms of Service ("Terms") govern the contractual relationship between SN WHITE HOSTING, owned by SN SOLUTIONS LLC ("SN WHITE HOSTING", "we", "us", "our"), and any natural or legal person ("Client" or "User") who acquires any of the following services:
                </p>
                <ul>
                  <li>Shared and WordPress Hosting.</li>
                  <li>Reseller Hosting.</li>
                  <li>VPS (Virtual Private Servers), Dedicated Servers, Game Servers, and Docker Containers.</li>
                  <li>Domain Registration and SSL Certificates.</li>
                  <li>StorageBox (Backup & Storage solutions).</li>
                  <li>Software Licenses (cPanel, Plesk, and other addons).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>2. GOVERNING LAW AND JURISDICTION</h2>
                <p>
                  This agreement is governed by the laws of the United States of America, specifically the laws of the State of New Mexico. The official language of this agreement is English. Any translation provided is for informational purposes only; in the event of a conflict, the English version shall prevail.
                </p>
              </section>

              <section className="mb-8">
                <h2>3. CONTRACTING PROCESS</h2>
                <p>To acquire a service, the Client must:</p>
                <ul>
                  <li>Create an account in our Client Panel.</li>
                  <li>Provide accurate billing and payment details.</li>
                  <li>Expressly accept these General Terms and the Specific Terms related to the chosen service.</li>
                  <li>Complete payment according to the selected plan.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. SERVICE PROVISION AND TECHNICAL SUPPORT</h2>
                <ul>
                  <li><strong>Support Hours:</strong> Monday to Friday during business hours (New Mexico time), excluding emergencies.</li>
                  <li><strong>Emergencies:</strong> Critical incidents (server down) are handled via our priority ticketing system, which triggers an immediate alert to our technical team 24/7.</li>
                  <li><strong>Scope:</strong> Support covers the functionality of the contracted service. It does not include web development, custom programming, or third-party application management unless otherwise agreed.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. CLIENT OBLIGATIONS</h2>
                <p>The Client agrees to:</p>
                <ul>
                  <li>Use services in compliance with the law and our Acceptable Use Policy (AUP).</li>
                  <li>Prohibit illegal activities, spam, malware hosting, or copyright infringement.</li>
                  <li>Keep contact and billing information updated at all times.</li>
                  <li>Secure account credentials and assume responsibility for any activity under their account.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. BILLING AND PAYMENTS</h2>
                <ul>
                  <li>All payments are made to SN WHITE HOSTING.</li>
                  <li>The Client is responsible for timely payments to avoid service suspension.</li>
                  <li>Domain registrations and licenses are set to auto-renew unless canceled through the Client Panel at least 15 days prior to expiration.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. DOMAIN REGISTRATION</h2>
                <p>
                  SN WHITE HOSTING acts as an intermediary with accredited registrars. The Client is the legal owner of the registered domain and is responsible for ensuring the accuracy of the WHOIS data provided.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. SUSPENSION AND TERMINATION</h2>
                <p>
                  We reserve the right to suspend or terminate services for non-payment, breach of terms, or illegal activities.
                </p>
              </section>

              <section className="mb-8">
                <h2>8.1 TERMINATION FOR INTIMIDATION, HARASSMENT, OR ABUSIVE BEHAVIOR</h2>
                <p>
                  SN WHITE HOSTING has zero tolerance for bullying, harassment, threats, coercion, verbal abuse, or disrespectful behavior directed toward any staff member, contractor, representative, or the Company Founder.
                </p>
                <p>
                  Engaging in such behavior constitutes a material breach of these Terms.
                </p>
                <p>
                  <strong>Procedure:</strong> The Client will be notified of termination with a 30-day notice period, during which the service remains active only for migration purposes.
                </p>
                <p>
                  <strong>Support:</strong> During this period, support will be strictly limited to providing access for data migration.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. LIMITATION OF LIABILITY</h2>
                <p>
                  SN WHITE HOSTING shall not be liable for:
                </p>
                <ul>
                  <li>Indirect damages or loss of profits.</li>
                  <li>Failures caused by third parties (network providers, software vendors).</li>
                  <li>Data loss resulting from Client negligence or non-payment.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>10. SERVICE LEVEL AGREEMENT (SLA) COMPENSATION</h2>
                <p>
                  If the committed uptime is not met, the Client may request an account credit (not a cash refund) as follows:
                </p>
                <ul>
                  <li>99.0% – 99.94% uptime: 5% credit of the monthly fee.</li>
                  <li>98.0% – 98.99% uptime: 10% credit of the monthly fee.</li>
                  <li>Below 98.0% uptime: 25% credit of the monthly fee.</li>
                </ul>
                <p>
                  Requests must be submitted via ticket within 10 days of the incident.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. MODIFICATIONS TO SERVICES AND PRICES</h2>
                <p>
                  SN WHITE HOSTING reserves the right to modify service specifications and rates at any time.
                </p>
                <p>
                  <strong>Notice:</strong> Clients will be notified at least 15 days in advance via email or the Client Panel News section.
                </p>
                <p>
                  <strong>Acceptance:</strong> Continued use of the service after the notice period constitutes acceptance of the new conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2>12. DISPUTE RESOLUTION</h2>
                <p>
                  Any dispute shall be resolved in the state or federal courts located in the State of New Mexico, USA.
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
