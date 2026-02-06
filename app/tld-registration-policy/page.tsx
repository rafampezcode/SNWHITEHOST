"use client"

import { Globe, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TLDRegistrationPolicyPage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">TLD Registration</span>
              <span className="mx-2 text-foreground">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.tldRegistrationSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/tld-registration-policy" />

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
                <h2>1. Purpose of the Policy</h2>
                <p>
                  This policy establishes the terms under which SN WHITE HOSTING™, operated by SN SOLUTIONS LLC, allows the registration of domain names under various Top-Level Domains (TLDs), including generic TLDs (gTLDs), country-code TLDs (ccTLDs), and new TLDs (nTLDs).
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Authority and Compliance</h2>
                <p>All domain name registrations are subject to the rules and policies enforced by the relevant regulatory authorities, including:</p>
                <ul>
                  <li>ICANN (Internet Corporation for Assigned Names and Numbers)</li>
                  <li>Individual TLD registries (e.g., NIC.es, Afnic, Nominet)</li>
                  <li>nTLD registries under specific agreements</li>
                </ul>
                <p>SN WHITE HOSTING™ acts as an independent hosting and domain provider, working with ICANN-accredited registrars depending on the TLD.</p>
              </section>

              <section className="mb-8">
                <h2>3. Availability and Restrictions</h2>
                <p>Not all TLDs are available to all users.</p>
                <ul>
                  <li>Some TLDs may require specific conditions, such as local presence, citizenship, or business registration.</li>
                  <li>In such cases, clients will be informed of the special requirements prior to registration.</li>
                  <li>Domain availability does not guarantee successful registration.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Registration and Activation</h2>
                <ul>
                  <li>The registration process begins once full payment is received and confirmed.</li>
                  <li>Some TLDs may require additional validation, potentially causing delays in activation.</li>
                  <li>Final registration is subject to approval by the relevant registry.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Renewal and Deletion</h2>
                <ul>
                  <li>Domains must be renewed before expiration, as described in our Expired Domain Recovery Policy.</li>
                  <li>Registration does not guarantee automatic renewal or retention if renewal procedures are not followed.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Changes and Transfers</h2>
                <ul>
                  <li>Changes to domain ownership or contact information must comply with the rules of the corresponding registry.</li>
                  <li>For domain transfer procedures, refer to the Domain Name Transfer Agreement.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Pricing and Conditions</h2>
                <ul>
                  <li>Pricing varies by TLD and may include additional fees imposed by registries.</li>
                  <li>SN WHITE HOSTING™ reserves the right to change prices with at least 15 days' notice.</li>
                  <li>Refunds are not guaranteed in cases of customer error or registry rejection.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Prohibited Registrations</h2>
                <p>Domain names may not be registered or used in ways that:</p>
                <ul>
                  <li>Infringe upon trademarks or intellectual property rights</li>
                  <li>Are used for illegal activity, spam, or impersonation</li>
                  <li>Violate ICANN or specific TLD policies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Policy Amendments</h2>
                <p>We reserve the right to amend this policy at any time. Any changes will be posted on snwhitehosting.com at least 15 days in advance of their effective date.</p>
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