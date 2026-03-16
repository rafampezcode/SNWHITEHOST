"use client"

import { UserCheck, Mail, MapPin, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CustomerSecurityBestPracticesPolicyPage() {
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
            <UserCheck className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.customerSecurityBestPracticesTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.customerSecurityBestPracticesSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/customer-security-best-practices-policy" />

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
                  This policy defines baseline recommendations and obligations for customers
                  to protect accounts, data and contracted services.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Scope</h2>
                <ul>
                  <li>Web hosting (Shared, WordPress, VPS, Dedicated).</li>
                  <li>Game servers.</li>
                  <li>Email and DNS services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Strong Passwords</h2>
                <ul>
                  <li>Use unique, complex passwords with at least 12 characters.</li>
                  <li>Include uppercase, lowercase, numbers and symbols.</li>
                  <li>Rotate passwords at least every 6 months.</li>
                  <li>Do not share credentials.</li>
                  <li>Enable MFA whenever possible.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Secure CMS and Application Configuration</h2>
                <ul>
                  <li>Keep CMS, themes and plugins updated.</li>
                  <li>Remove or disable unnecessary modules and extensions.</li>
                  <li>Avoid insecure permissions (e.g. 777).</li>
                  <li>Use SSL certificates on all sites and applications.</li>
                  <li>Avoid default configurations that reduce security.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Email Security</h2>
                <ul>
                  <li>Use strong unique passwords for mailbox accounts.</li>
                  <li>Enable anti-spam and anti-malware filters.</li>
                  <li>Avoid automatic forwarding to untrusted external accounts.</li>
                  <li>Review access logs and detect unauthorized access.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Malware and Phishing Protection</h2>
                <ul>
                  <li>Do not download files from untrusted sources.</li>
                  <li>Avoid suspicious links and phishing emails.</li>
                  <li>Scan websites and servers regularly using antivirus and antimalware tools.</li>
                  <li>Report suspicious activity immediately via support or abuse@snwhitehosting.com.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Customer Responsibilities</h2>
                <ul>
                  <li>Follow these security best practices.</li>
                  <li>Keep systems and applications updated.</li>
                  <li>Report incidents or possible account compromise quickly.</li>
                  <li>Contract additional backup plans when guaranteed recovery is required.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Non-Compliance Consequences</h2>
                <ul>
                  <li>Temporary access blocks for security reasons.</li>
                  <li>Service suspension for serious AUP violations or malware incidents.</li>
                  <li>Possible data loss where no backup plan exists.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Review and Updates</h2>
                <p>
                  This policy is reviewed annually or after significant security incidents.
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
                    <a href="mailto:abuse@snwhitehosting.com" className="text-primary hover:underline">
                      abuse@snwhitehosting.com
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
