"use client"

import { Zap, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AbuseHandlingPolicyPage() {
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
            <Zap className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">Abuse Handling</span>
              <span className="mx-2 text-foreground">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.abuseHandlingSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/abuse-handling-policy" />

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
                <h2>1. Purpose of the Policy</h2>
                <p>
                  This policy outlines the procedure SN WHITE HOSTING™ will follow to receive, investigate, and resolve abuse reports related to the services we provide, including web hosting, domain registration, and other associated services.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Definition of Abuse</h2>
                <p>For the purposes of this policy, we define abuse as any illegal, fraudulent, malicious, or policy-violating activity that breaches our General Terms of Service, Política de Uso Aceptable (AUP), or ICANN policies, including but not limited to:</p>
                <ul>
                  <li>Phishing, fraud, or scams.</li>
                  <li>Distribution of malware or viruses.</li>
                  <li>Mass or unsolicited spam.</li>
                  <li>Copyright or trademark infringement.</li>
                  <li>Activities compromising the security of systems or networks.</li>
                  <li>Illegal content, including child sexual abuse material (CSAM).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Reporting Channel</h2>
                <p>All abuse reports must be sent to abuse@snwhitehosting.com and must include:</p>
                <ul>
                  <li>Reporter's contact information.</li>
                  <li>A clear description of the incident.</li>
                  <li>Evidence or links supporting the report.</li>
                  <li>Relevant technical information (IP addresses, email headers, etc.).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Abuse Handling Procedure</h2>
                <ol className="list-decimal pl-6">
                  <li><strong>Receipt of Report:</strong> We will acknowledge receipt within 24 business hours.</li>
                  <li><strong>Preliminary Assessment:</strong> We will determine if the report falls within the scope of this policy.</li>
                  <li><strong>Investigation:</strong> Our team will review the evidence and may request additional information.</li>
                  <li>
                    <strong>Corrective Action:</strong> Depending on severity, we may:
                    <ul>
                      <li>Request the client to remove content or cease the activity.</li>
                      <li>Temporarily suspend the service.</li>
                      <li>Permanently terminate the service in severe cases.</li>
                    </ul>
                  </li>
                  <li><strong>Case Closure:</strong> We will notify the reporter (when possible) and the affected client of the resolution.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2>5. Cooperation with Authorities</h2>
                <p>In cases involving illegal activities, we will cooperate with the relevant authorities and provide any required information in accordance with applicable law.</p>
              </section>

              <section className="mb-8">
                <h2>6. Protection Against False Reports</h2>
                <p>Submitting false or malicious reports may result in legal action and the reporter being blocked from accessing our reporting systems.</p>
              </section>

              <section className="mb-8">
                <h2>7. Termination for Intimidation, Harassment, or Abusive Behavior</h2>
                <p>
                  SN WHITE HOSTING does not tolerate and will not tolerate under any circumstances any form of intimidation, harassment, threats, coercion, verbal abuse, or disrespectful behavior directed toward any member of staff, contractors, representatives, service providers, or the company founder, regardless of the communication channel used (email, ticket system, telephone, instant messaging, or any other means).
                </p>
                <p>
                  Engaging in such behavior shall be considered a material breach of the General Terms of Service and may result in immediate termination of the service under this Section and the Abuse Handling Policy / AUP.
                </p>
                <p>
                  In cases of termination under this clause, the Client will be notified with a minimum prior notice of thirty (30) calendar days, counted from the date of notification, during which the service will remain active solely for the purpose of allowing migration of data and services to another provider.
                </p>
                <p>
                  During this period:
                </p>
                <ul>
                  <li>The service shall continue to be billed normally, including automatic renewals or any pending invoices.</li>
                  <li>Technical support shall be strictly limited to providing access and procedures necessary for migration purposes.</li>
                </ul>
                <p>
                  Upon expiration of the notice period, the service shall be permanently terminated and all data may be deleted. SN WHITE HOSTING shall not be liable for any data loss resulting from the Client's failure to complete the migration within the granted timeframe.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Policy Amendments</h2>
                <p>We reserve the right to amend this policy at any time. Any changes will be posted on snwhitehosting.com at least 15 days prior to taking effect.</p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Effective Date:</strong> 17/02/2026
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
