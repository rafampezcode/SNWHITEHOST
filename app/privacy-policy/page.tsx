"use client"

import { Shield, Mail, MapPin, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      <div className="container max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        <div className="mb-8 flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              {t.legal.backToHome}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.privacyPolicyTitle.split(' ')[0]}</span>
              <span className="mx-2 text-foreground">{t.legal.privacyPolicyTitle.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.privacyPolicySubtitle}
            </p>
          </div>
        </div>

        {/* Content with Sidebar */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/privacy-policy" />

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
              <section className="mb-12">
                <h2>1. Introduction</h2>
                <p>
                  SN WHITE HOSTING is the trade name of SN SOLUTIONS LLC, headquartered at 1209 Mountain Road Pl NE, STE N, Albuquerque, New Mexico, 87110, United States, EIN: 32-0817400 (hereinafter "SN WHITE HOSTING," "we," or "our").
                </p>
                <p>
                  We provide shared hosting, WordPress hosting, VPS, dedicated servers, and domain registration services, as well as related products and services.
                </p>
                <p>
                  The privacy and security of our customers is a top priority. We process and protect personal data in accordance with U.S. law and, for customers in the European Union, in compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679.
                </p>
                <p>
                  When this Policy refers to "you" or "user," it means any person who uses our services, visits our website snwhitehosting.com, or communicates with us.
                </p>
                <p>
                  For any inquiries about this policy or about the processing of your data, you can contact us at:{" "}
                  <a href="mailto:privacy@snwhitehosting.com" className="text-primary hover:underline">
                    privacy@snwhitehosting.com
                  </a>
                </p>
              </section>

              <section className="mb-12">
                <h2>2. General Data Processing Principles</h2>
                <p>We process your personal data in accordance with the following principles:</p>
                <ul>
                  <li><strong>Lawfulness, fairness, and transparency:</strong> always with a legal basis and in a clear manner.</li>
                  <li><strong>Purpose limitation:</strong> we collect data only for specific and legitimate purposes.</li>
                  <li><strong>Data minimization:</strong> we process only the data strictly necessary.</li>
                  <li><strong>Accuracy:</strong> we keep your data updated.</li>
                  <li><strong>Storage limitation:</strong> we do not keep your data longer than necessary.</li>
                  <li><strong>Integrity and confidentiality:</strong> we protect your data from unauthorized access or accidental loss.</li>
                </ul>
                <p>
                  All information is treated as strictly confidential, and only authorized personnel have access to it.
                </p>
              </section>

              <section className="mb-12">
                <h2>3. Information We Collect</h2>
                
                <h3>3.1. Information you provide</h3>
                <p>We collect personal data when you:</p>
                <ul>
                  <li>Register on our website and create an account.</li>
                  <li>Purchase one of our services.</li>
                  <li>Request technical support.</li>
                  <li>Contact us via any channel (email, ticket, chat).</li>
                  <li>Participate in promotions or surveys.</li>
                </ul>
                <p>This data may include:</p>
                <ul>
                  <li>Full name.</li>
                  <li>Email address.</li>
                  <li>Postal address.</li>
                  <li>Phone number.</li>
                  <li>Billing and payment details (processed via secure gateways; we do not store full card details).</li>
                  <li>Identity documents (only when required for domain registration).</li>
                </ul>

                <h3>3.2. Information collected automatically</h3>
                <p>When you access snwhitehosting.com or use our services, we collect:</p>
                <ul>
                  <li>IP address.</li>
                  <li>Browser type and version.</li>
                  <li>Operating system.</li>
                  <li>Date, time, and duration of the connection.</li>
                  <li>Activity logs related to the use of our services.</li>
                </ul>
                <p>
                  We use cookies and similar technologies to enhance your experience. Please refer to our <Link href="/cookies-policy" className="text-primary hover:underline">Cookies Policy</Link> for more details.
                </p>

                <h3>3.3. Domain registration information</h3>
                <p>
                  For domain name registration, we process personal data as part of the WHOIS process required by ICANN international regulations. This processing is carried out by Soluciones Corporativas IP, SL exclusively for the purpose of managing the registration, renewal, or transfer of domains.
                </p>
              </section>

              <section className="mb-12">
                <h2>4. How We Use Your Data</h2>
                <p>We use your data to:</p>
                <ul>
                  <li>Provide, manage, and bill our services.</li>
                  <li>Set up your account and manage access to the client area.</li>
                  <li>Comply with legal obligations (including tax regulations and ICANN rules).</li>
                  <li>Communicate with you about updates, incidents, or service changes.</li>
                  <li>Improve our services and perform statistical analysis.</li>
                  <li>Prevent fraud and ensure infrastructure security.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>5. Legal Basis for Processing</h2>
                <p>We process your data based on:</p>
                <ul>
                  <li><strong>Contract performance:</strong> when necessary to provide our services.</li>
                  <li><strong>Legal obligation:</strong> when required by applicable law.</li>
                  <li><strong>Consent:</strong> for marketing or non-essential communications.</li>
                  <li><strong>Legitimate interest:</strong> for continuous service improvement and abuse prevention.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>6. Data Retention</h2>
                <p>
                  We retain your data for as long as necessary to fulfill the processing purpose and our legal obligations.
                </p>
                <p>In case of account closure:</p>
                <ul>
                  <li>Personal data will be anonymized or deleted within a maximum of 30 days, unless otherwise required by law.</li>
                  <li>Data related to domains will be retained as required by ICANN and the provider Soluciones Corporativas IP, SL.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>7. Data Transfers</h2>
                <p>We may transfer data to third parties only when:</p>
                <ul>
                  <li>Necessary for service provision (e.g., domain registration with Soluciones Corporativas IP, SL).</li>
                  <li>Required by law.</li>
                  <li>We have your explicit consent.</li>
                </ul>
                <p>
                  For international transfers outside the U.S. or EU, we apply European Commission-approved standard contractual clauses.
                </p>
              </section>

              <section className="mb-12">
                <h2>8. Data Security</h2>
                <p>We implement technical and organizational measures to protect your data, including:</p>
                <ul>
                  <li>SSL/TLS encryption for all communications.</li>
                  <li>Restricted access control.</li>
                  <li>Automatic daily backups (incremental from Monday to Saturday and full backups on Sundays at 03:00 AM).</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>9. User Rights</h2>
                <p>You may:</p>
                <ul>
                  <li>Access your data.</li>
                  <li>Correct inaccurate data.</li>
                  <li>Request deletion.</li>
                  <li>Restrict or object to processing.</li>
                  <li>Request data portability.</li>
                </ul>
                <p>
                  You can exercise these rights by contacting:{" "}
                  <a href="mailto:privacy@snwhitehosting.com" className="text-primary hover:underline">
                    privacy@snwhitehosting.com
                  </a>
                </p>
              </section>

              <section className="mb-12">
                <h2>10. Policy Changes</h2>
                <p>
                  We may modify this policy at any time. We will notify changes 15 days in advance before they take effect, unless a different period is required by law.
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
                    <a href="mailto:privacy@snwhitehosting.com" className="text-primary hover:underline">
                      privacy@snwhitehosting.com
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
