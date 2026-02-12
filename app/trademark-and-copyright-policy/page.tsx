"use client"

import { Copyright, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TrademarkAndCopyrightPolicyPage() {
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
            <Copyright className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.trademarkCopyrightTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.trademarkCopyrightSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/trademark-and-copyright-policy" />

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
                <h2>1. Purpose</h2>
                <p>
                  SN WHITE HOSTING™ is committed to protecting intellectual property rights and preventing trademark and copyright infringement. This policy defines our procedures for handling infringement claims and our protection of intellectual property.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Intellectual Property Rights</h2>
                <p>
                  SN WHITE HOSTING™ recognizes and respects all intellectual property rights, including:
                </p>
                <ul>
                  <li>Trademarks and service marks</li>
                  <li>Copyright-protected works</li>
                  <li>Patents and trade secrets</li>
                  <li>Domain names and brand names</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Our Intellectual Property</h2>
                <p>
                  All content on snwhitehosting.com, including text, graphics, logos, images, software, and other materials, is the property of SN WHITE HOSTING™ or its content suppliers. Use is permitted only in accordance with these terms and applicable laws.
                </p>
              </section>

              <section className="mb-8">
                <h2>4. Customer-Provided Content</h2>
                <p>
                  By uploading content to SN WHITE HOSTING™ services, customers retain ownership of their intellectual property. SN WHITE HOSTING™ does not claim ownership of customer content.
                </p>
                <p>
                  However, customers grant SN WHITE HOSTING™ a license to use customer content as necessary to provide services, including:
                </p>
                <ul>
                  <li>Backing up and storing content</li>
                  <li>Displaying content on customer websites</li>
                  <li>Processing content for technical optimization</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Copyright Infringement Notices (DMCA)</h2>
                <p>
                  If you believe content hosted on our services infringes your copyright, you may submit a DMCA notice. SN WHITE HOSTING™ will take appropriate action upon receiving a valid notice, including content removal and account suspension.
                </p>
                <p>
                  DMCA notices should be submitted to:
                </p>
                <p className="text-primary font-medium">legal@snwhitehosting.com</p>
                <p>
                  Notices should include:
                </p>
                <ul>
                  <li>Your name, address, and contact information</li>
                  <li>A description of the copyrighted work</li>
                  <li>The URL or specific location of the infringing content</li>
                  <li>A statement that you believe the content infringes your copyright</li>
                  <li>A statement under penalty of perjury that you are authorized to act on behalf of the copyright holder</li>
                  <li>Your physical or electronic signature</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Trademark Infringement Claims</h2>
                <p>
                  If you believe content or a domain name infringes your trademark rights, contact us at:
                </p>
                <p className="text-primary font-medium">legal@snwhitehosting.com</p>
                <p>
                  Include:
                </p>
                <ul>
                  <li>Proof of trademark registration (if available)</li>
                  <li>Description of the infringing use</li>
                  <li>URL or specific location of the infringing content</li>
                  <li>A statement explaining the infringement</li>
                  <li>Your contact information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Counter-Notification Procedure</h2>
                <p>
                  If your content has been removed due to a copyright or trademark claim, and you believe it was removed in error, you may file a counter-notification. Counter-notifications must include:
                </p>
                <ul>
                  <li>Your name and contact information</li>
                  <li>Identification of the removed content</li>
                  <li>A statement that you believe removal was in error</li>
                  <li>Your consent to jurisdiction of courts where your address is located</li>
                  <li>Your physical or electronic signature</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Repeat Infringer Policy</h2>
                <p>
                  SN WHITE HOSTING™ maintains a policy of terminating the accounts of repeat infringers. Customers who engage in repeated copyright or trademark infringement will have their accounts suspended and terminated without refund.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Limitations of Liability</h2>
                <p>
                  SN WHITE HOSTING™ is not liable for:
                </p>
                <ul>
                  <li>Infringement claims arising from customer content</li>
                  <li>Unauthorized modifications of customer content</li>
                  <li>Delays in responding to infringement notices</li>
                  <li>False or fraudulent infringement claims</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>10. Investigation Process</h2>
                <p>
                  Upon receiving an infringement notice, SN WHITE HOSTING™ will:
                </p>
                <ul>
                  <li>Verify the notice is complete and valid</li>
                  <li>Investigate the alleged infringement</li>
                  <li>Take appropriate action if infringement is confirmed</li>
                  <li>Notify the affected customer</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>11. Policy Amendments</h2>
                <p>
                  This policy may be amended at any time. Changes will be posted on snwhitehosting.com at least 15 days in advance.
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