"use client"

import { FileText, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DSATransparencyReportPage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.dsaReportTitle.split(' ').slice(0, 2).join(' ')}</span>
              <span className="mx-2 text-foreground">{t.legal.dsaReportTitle.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.dsaReportSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/dsa-transparency-report" />

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
                <h2>1. Introduction</h2>
                <p>
                  This report is published by SN WHITE HOSTING™, operated by SN SOLUTIONS LLC, in compliance with the European Union's Digital Services Act (DSA) Regulation (EU) 2022/2065. This report provides information about content moderation, user engagement, and compliance measures.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Service Description</h2>
                <p>
                  SN WHITE HOSTING™ provides hosting and domain registration services in the EU. We are classified as a hosting provider and domain name registrar under DSA regulations.
                </p>
                <p>
                  Services include:
                </p>
                <ul>
                  <li>Web hosting (Shared, WordPress, VPS, Dedicated)</li>
                  <li>Domain registration and management</li>
                  <li>Email hosting services</li>
                  <li>SSL certificate provisioning</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Content Moderation Policies</h2>
                <p>
                  SN WHITE HOSTING™ maintains content moderation policies to comply with applicable laws and prevent illegal or harmful content. Our content standards include:
                </p>
                <ul>
                  <li>Prohibition of illegal content and materials</li>
                  <li>Protection against intellectual property infringement</li>
                  <li>Prevention of phishing, malware, and security threats</li>
                  <li>Prevention of spam and commercial abuse</li>
                  <li>Enforcement of our Acceptable Use Policy</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Notice and Action Data</h2>
                <p>
                  During the reporting period (2024), SN WHITE HOSTING™ received and processed the following content-related notices:
                </p>
                <ul>
                  <li>Copyright/DMCA notices: [Data to be updated]</li>
                  <li>Trademark infringement reports: [Data to be updated]</li>
                  <li>Abuse reports: [Data to be updated]</li>
                  <li>Illegal content notices: [Data to be updated]</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Complaint Handling</h2>
                <p>
                  SN WHITE HOSTING™ provides mechanisms for users and third parties to report prohibited content or policy violations:
                </p>
                <ul>
                  <li>Users can report content through our support portal</li>
                  <li>Copyright complaints are handled via our DMCA process</li>
                  <li>Abuse reports are submitted to abuse@snwhitehosting.com</li>
                  <li>Legal complaints are submitted to legal@snwhitehosting.com</li>
                </ul>
                <p>
                  All complaints are investigated within the timeframes specified in our policies. Decisions are documented and can be appealed through our process.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. User Rights and Safeguards</h2>
                <p>
                  SN WHITE HOSTING™ protects user rights through:
                </p>
                <ul>
                  <li>Clear notification of policy violations and remedial actions</li>
                  <li>Opportunity to explain or appeal moderation decisions</li>
                  <li>Documented decision-making processes</li>
                  <li>Protection against arbitrary account suspension or termination</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Transparency Measures</h2>
                <p>
                  SN WHITE HOSTING™ is committed to transparency regarding content moderation:
                </p>
                <ul>
                  <li>This report is published at least annually</li>
                  <li>Decision data is made publicly available in aggregated form</li>
                  <li>Users receive explanations for content removal or account action</li>
                  <li>Appeals processes are clearly documented</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Risk Assessment</h2>
                <p>
                  SN WHITE HOSTING™ has identified the following potential risks related to illegal content or activities:
                </p>
                <ul>
                  <li>Malicious actors exploiting hosting services for phishing or malware</li>
                  <li>Copyright or trademark infringement via customer content</li>
                  <li>Spam and unsolicited commercial activity</li>
                  <li>Domain name abuse for illegal purposes</li>
                </ul>
                <p>
                  We mitigate these risks through monitoring, user verification, and rapid response to reports.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Mitigation Measures</h2>
                <p>
                  To address identified risks, SN WHITE HOSTING™ implements:
                </p>
                <ul>
                  <li>Proactive content scanning and monitoring systems</li>
                  <li>User verification and identity confirmation</li>
                  <li>Rapid response protocols for abuse reports</li>
                  <li>Collaboration with law enforcement when necessary</li>
                  <li>Regular policy updates and enforcement reviews</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>10. Illegal Content Response</h2>
                <p>
                  When SN WHITE HOSTING™ becomes aware of illegal content hosted on our services, we:
                </p>
                <ul>
                  <li>Investigate the reported content</li>
                  <li>Remove or disable access to prohibited content</li>
                  <li>Preserve evidence for law enforcement</li>
                  <li>Notify relevant authorities if required</li>
                  <li>Prevent re-uploading through enhanced monitoring</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>11. External Reporting</h2>
                <p>
                  In accordance with EU law, SN WHITE HOSTING™ cooperates with:
                </p>
                <ul>
                  <li>Law enforcement and judicial authorities</li>
                  <li>The EU Internet Hotline Network (IHN)</li>
                  <li>Other designated bodies under DSA requirements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>12. Contact Information</h2>
                <p>
                  For DSA-related inquiries, content concerns, or transparency questions, please contact:
                </p>
                <p className="text-primary font-medium">legal@snwhitehosting.com</p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Effective Date:</strong> 01/08/2025
                </p>
              </section>

              <div className="mt-12 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
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