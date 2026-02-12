"use client"

import { AlertCircle, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AcceptableUsePolicyPage() {
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
            <AlertCircle className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.aupTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.aupSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/acceptable-use-policy" />

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
                  font-weight: 600;
                }
              `}</style>
              <section className="mb-8">
                <h2>1. Purpose</h2>
                <p>
                  This AUP sets forth the acceptable and prohibited uses of our services to ensure a secure, reliable, and lawful hosting environment.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. General Principles</h2>
                <p>
                  Use of our services must be lawful, responsible, and respectful of third parties. Any use that may:
                </p>
                <ul>
                  <li>Violate local, state, federal, or international laws.</li>
                  <li>Harm the security, stability, or performance of our infrastructure.</li>
                  <li>Compromise the privacy or rights of other users.</li>
                </ul>
                <p>is strictly prohibited.</p>
              </section>

              <section className="mb-8">
                <h2>3. Usage Restrictions</h2>
                
                <h3>3.1 Shared Hosting and WordPress Hosting</h3>
                <ul>
                  <li>Excessive disk space or inode usage may result in temporary limitations or migration to a higher plan.</li>
                  <li>Use of the service for video or audio streaming without prior authorization is prohibited.</li>
                </ul>

                <h3>3.2 VPS and Dedicated Servers</h3>
                <ul>
                  <li>The Client is responsible for the administration, security, and updates of their server unless managed services have been contracted.</li>
                  <li>Using services to perform denial-of-service (DDoS) attacks, unauthorized network scans, or any other malicious activity is prohibited.</li>
                </ul>

                <h3>3.3 Prohibition on Using Hosting as a Backup Server</h3>
                <ul>
                  <li>The hosting service may not be used as a repository for external backups unrelated to the data hosted on the service itself.</li>
                  <li>For external backups, SN WHITE HOSTING may provide a Storage Box under a separate contract.</li>
                  <li>The Client may back up their own hosted data within the technical capabilities of the contracted plan.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Prohibited Content</h2>
                <p>It is strictly forbidden to host, transmit, or distribute:</p>
                <ul>
                  <li>Material infringing copyrights or intellectual property rights.</li>
                  <li>Illegal, defamatory, fraudulent, or misleading content.</li>
                  <li>Pornographic or sexually explicit content, including but not limited to nudity, adult material, or any sexual activity.</li>
                  <li>Malicious software, viruses, trojans, or any code designed to damage or interfere with systems or data.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Email Usage</h2>
                <ul>
                  <li>Sending spam, unsolicited bulk email, or phishing campaigns is prohibited.</li>
                  <li>Email accounts must be used legitimately and in compliance with applicable commercial communication and anti-spam laws.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Activities Affecting Third Parties</h2>
                <ul>
                  <li>The use of scripts or applications to attack, scan, or interfere with third-party systems is prohibited.</li>
                  <li>The use of bots or automation that generates abusive traffic to other websites without authorization is prohibited.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Abuse and DMCA Procedure</h2>
                <ul>
                  <li>SN WHITE HOSTING will comply with the Digital Millennium Copyright Act (DMCA) and process takedown notices in accordance with U.S. law.</li>
                  <li>If we receive an abuse complaint or a valid copyright claim, the affected content may be suspended or removed without prior notice.</li>
                  <li>The Client will be notified whenever possible and will have the right to submit a counter-notice under applicable legal terms.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Consequences of Non-Compliance</h2>
                <p>Failure to comply with this AUP may result in:</p>
                <ul>
                  <li>Temporary suspension of the service.</li>
                  <li>Permanent account termination.</li>
                  <li>Legal action in case of unlawful activities.</li>
                  <li>Billing for additional costs caused by service abuse.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Updates to the AUP</h2>
                <p>
                  SN WHITE HOSTING reserves the right to amend this policy at any time. The Client will be notified at least 15 days in advance before changes take effect, unless an immediate change is required for legal or security reasons.
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
