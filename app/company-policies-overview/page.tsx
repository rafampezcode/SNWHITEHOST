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
                  <li><strong><Link href="/general-terms-of-service" className="text-primary hover:underline">General Terms of Service</Link></strong> - Governing terms for all services</li>
                  <li><strong><Link href="/specific-terms-of-service" className="text-primary hover:underline">Specific Terms of Service</Link></strong> - Service-specific details and plans</li>
                  <li><strong><Link href="/service-level-agreement" className="text-primary hover:underline">Service Level Agreement (SLA)</Link></strong> - Uptime guarantees and commitments</li>
                  <li><strong><Link href="/hosting-agreement" className="text-primary hover:underline">Hosting Agreement</Link></strong> - Comprehensive web hosting terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Domain Management Policies</h2>
                <p>These policies regulate domain registration, management, and dispute resolution:</p>
                <ul>
                  <li><strong><Link href="/domain-registration-policy" className="text-primary hover:underline">Domain Registration Policy</Link></strong> - Initial registration and renewal terms</li>
                  <li><strong><Link href="/domain-name-transfer-agreement" className="text-primary hover:underline">Domain Name Transfer Agreement</Link></strong> - Transfer procedures and requirements</li>
                  <li><strong><Link href="/expired-domain-recovery-policy" className="text-primary hover:underline">Expired Domain Recovery Policy</Link></strong> - Grace and redemption periods</li>
                  <li><strong><Link href="/tld-registration-policy" className="text-primary hover:underline">TLD Registration Policy</Link></strong> - Top-level domain specific restrictions</li>
                  <li><strong><Link href="/domain-dispute-resolution-policy" className="text-primary hover:underline">Domain Dispute Resolution Policy</Link></strong> - UDRP and dispute procedures</li>
                  <li><strong><Link href="/registrar-information" className="text-primary hover:underline">Registrar Information</Link></strong> - Company identification and registrar details</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Legal and Compliance Policies</h2>
                <p>These policies ensure legal compliance and customer protection:</p>
                <ul>
                  <li><strong><Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link></strong> - Data collection and privacy practices</li>
                  <li><strong><Link href="/cookies-policy" className="text-primary hover:underline">Cookies Policy</Link></strong> - Cookie usage and management</li>
                  <li><strong><Link href="/data-processing-addendum" className="text-primary hover:underline">Data Processing Addendum (DPA)</Link></strong> - GDPR compliance and data protection</li>
                  <li><strong><Link href="/data-security-and-backup-policy" className="text-primary hover:underline">Data Security and Backup Policy</Link></strong> - Backup, restoration and incident response standards</li>
                  <li><strong><Link href="/customer-security-best-practices-policy" className="text-primary hover:underline">Customer Security Best Practices Policy</Link></strong> - Security recommendations and obligations for customers</li>
                  <li><strong><Link href="/cancellation-and-refund-policy" className="text-primary hover:underline">Cancellation and Refund Policy</Link></strong> - Refund eligibility and procedures</li>
                  <li><strong><Link href="/acceptable-use-policy" className="text-primary hover:underline">Acceptable Use Policy (AUP)</Link></strong> - Prohibited and acceptable uses</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Responsibility and Conduct Policies</h2>
                <p>These policies define expected conduct and our response to violations:</p>
                <ul>
                  <li><strong><Link href="/abuse-handling-policy" className="text-primary hover:underline">Abuse Handling Policy</Link></strong> - Report, investigate, and resolve abuse</li>
                  <li><strong><Link href="/service-continuity-and-contingency-plan" className="text-primary hover:underline">Service Continuity and Contingency Plan</Link></strong> - Resilience, failover and disaster recovery procedures</li>
                  <li><strong><Link href="/brand-guidelines-and-permissions" className="text-primary hover:underline">Brand Guidelines and Permissions</Link></strong> - Permitted use of our trademarks</li>
                  <li><strong><Link href="/trademark-and-copyright-policy" className="text-primary hover:underline">Trademark and Copyright Policy</Link></strong> - Protection of intellectual property</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Commercial Programs</h2>
                <p>These policies govern our partnership and referral programs:</p>
                <ul>
                  <li><strong><Link href="/affiliate-program-agreement" className="text-primary hover:underline">Affiliate Program Agreement</Link></strong> - Affiliate compensation and responsibilities</li>
                  <li><strong><Link href="/referral-program-agreement" className="text-primary hover:underline">Referral Program Agreement</Link></strong> - Customer referral procedures</li>
                  <li><strong><Link href="/special-terms-for-promotions-and-offers" className="text-primary hover:underline">Special Terms for Promotions and Offers</Link></strong> - Promotional campaign terms</li>
                  <li><strong><Link href="/special-terms-for-resellers-and-affiliates" className="text-primary hover:underline">Special Terms for Resellers and Affiliates</Link></strong> - Responsibilities, limits and commercial partner procedures</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Transparency and Regulatory Policies</h2>
                <p>These policies ensure transparency and regulatory compliance:</p>
                <ul>
                  <li><strong><Link href="/dsa-transparency-report" className="text-primary hover:underline">DSA Transparency Report</Link></strong> - Digital Services Act compliance</li>
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