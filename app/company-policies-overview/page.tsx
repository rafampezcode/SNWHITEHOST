"use client"

import { BookOpen, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CompanyPoliciesOverviewPage() {
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
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.companyPoliciesTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.companyPoliciesSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/company-policies-overview" />

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
                <h2>1. Overview of Company Policies</h2>
                <p>
                  SN WHITE HOSTING™, operated by SN SOLUTIONS LLC, maintains a comprehensive set of policies designed to ensure service quality, security, legal compliance, and fair treatment of all customers.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Core Service Policies</h2>
                <p>These policies govern the provision of hosting, domain, and technical services:</p>
                <ul>
                  <li><strong>General Terms of Service</strong> - Governing terms for all services</li>
                  <li><strong>Specific Terms of Service</strong> - Service-specific details and plans</li>
                  <li><strong>Service Level Agreement (SLA)</strong> - Uptime guarantees and commitments</li>
                  <li><strong>Hosting Agreement</strong> - Comprehensive web hosting terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Domain Management Policies</h2>
                <p>These policies regulate domain registration, management, and dispute resolution:</p>
                <ul>
                  <li><strong>Domain Registration Policy</strong> - Initial registration and renewal terms</li>
                  <li><strong>Domain Name Transfer Agreement</strong> - Transfer procedures and requirements</li>
                  <li><strong>Expired Domain Recovery Policy</strong> - Grace and redemption periods</li>
                  <li><strong>TLD Registration Policy</strong> - Top-level domain specific restrictions</li>
                  <li><strong>Domain Dispute Resolution Policy</strong> - UDRP and dispute procedures</li>
                  <li><strong>Registrar Information</strong> - Company identification and registrar details</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Legal and Compliance Policies</h2>
                <p>These policies ensure legal compliance and customer protection:</p>
                <ul>
                  <li><strong>Privacy Policy</strong> - Data collection and privacy practices</li>
                  <li><strong>Cookies Policy</strong> - Cookie usage and management</li>
                  <li><strong>Data Processing Addendum (DPA)</strong> - GDPR compliance and data protection</li>
                  <li><strong>Cancellation and Refund Policy</strong> - Refund eligibility and procedures</li>
                  <li><strong>Acceptable Use Policy (AUP)</strong> - Prohibited and acceptable uses</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Responsibility and Conduct Policies</h2>
                <p>These policies define expected conduct and our response to violations:</p>
                <ul>
                  <li><strong>Abuse Handling Policy</strong> - Report, investigate, and resolve abuse</li>
                  <li><strong>Brand Guidelines and Permissions</strong> - Permitted use of our trademarks</li>
                  <li><strong>Trademark and Copyright Policy</strong> - Protection of intellectual property</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Commercial Programs</h2>
                <p>These policies govern our partnership and referral programs:</p>
                <ul>
                  <li><strong>Affiliate Program Agreement</strong> - Affiliate compensation and responsibilities</li>
                  <li><strong>Referral Program Agreement</strong> - Customer referral procedures</li>
                  <li><strong>Special Terms for Promotions and Offers</strong> - Promotional campaign terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Transparency and Regulatory Policies</h2>
                <p>These policies ensure transparency and regulatory compliance:</p>
                <ul>
                  <li><strong>DSA Transparency Report</strong> - Digital Services Act compliance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Accessing Our Policies</h2>
                <p>All policies are available on our website at snwhitehosting.com:</p>
                <ul>
                  <li>Policies are available in multiple languages.</li>
                  <li>Each policy includes the effective date and last update information.</li>
                  <li>Customers are responsible for reviewing policies before using our services.</li>
                  <li>We encourage customers to contact us with questions or concerns about any policy.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Policy Updates and Amendments</h2>
                <p>
                  SN WHITE HOSTING™ reserves the right to amend these policies at any time. Changes will be posted on our website at least 15 days in advance of their effective date. Continued use of our services constitutes acceptance of updated policies.
                </p>
              </section>

              <section className="mb-8">
                <h2>10. Policy Enforcement</h2>
                <p>
                  These policies are enforced by SN WHITE HOSTING™ employees, contractors, and agents. Violations may result in service suspension, account termination, or legal action as described in the applicable policy.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. Questions and Support</h2>
                <p>
                  If you have questions about any of our policies, please contact our support team. We are committed to maintaining transparent and fair policies for all customers.
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