"use client"

import { Gavel, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DomainDisputeResolutionPolicyPage() {
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
            <Gavel className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.domainDisputeTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.domainDisputeSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/domain-dispute-resolution-policy" />

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
                  This policy outlines the procedures followed by SN WHITE HOSTING™, operated by SN SOLUTIONS LLC, in the event of disputes related to the registration, ownership, or use of domain names managed through ICANN-accredited registrars associated with the chosen TLD.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Scope of Application</h2>
                <p>This policy applies to:</p>
                <ul>
                  <li>Disputes between third parties and the domain holder.</li>
                  <li>Trademark claims or intellectual property rights violations.</li>
                  <li>Any conflicts involving potentially unlawful or unauthorized domain name use.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. UDRP Procedure (Uniform Domain Name Dispute Resolution Policy)</h2>
                <p>All generic top-level domains (gTLDs) and most ICANN-governed TLDs are subject to the UDRP, a mandatory arbitration mechanism.</p>
                <ul>
                  <li>Disputes are handled through authorized entities such as WIPO (World Intellectual Property Organization) or Forum (formerly NAF).</li>
                  <li>The client agrees to comply with these procedures in the event of a dispute.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. TLD-Specific Dispute Policies</h2>
                <p>Some geographic TLDs or new TLDs (nTLDs) may be subject to specific dispute resolution rules.</p>
                <ul>
                  <li>Clients are responsible for reviewing and accepting the applicable policy for the TLD they register.</li>
                  <li>In case of conflict, the registry's official policy will take precedence.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. SN WHITE HOSTING™ Involvement</h2>
                <ul>
                  <li>We act solely as a technical intermediary if contacted by the registrar or relevant authority.</li>
                  <li>If a valid dispute resolution order is received (e.g., from WIPO), we will comply without intervention from the client or SN WHITE HOSTING™.</li>
                  <li>We do not arbitrate or participate in legal conflicts between external parties.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Temporary Suspension or Transfer</h2>
                <p>In certain cases, and in accordance with legal obligations or dispute processes, SN WHITE HOSTING™ may:</p>
                <ul>
                  <li>Temporarily suspend the domain.</li>
                  <li>Prevent transfer of ownership.</li>
                  <li>Execute a forced transfer based on the outcome of an official resolution.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Disclaimer of Liability</h2>
                <p>
                  SN WHITE HOSTING™ shall not be held responsible for any losses, damages, or consequences resulting from disputes between parties. The domain holder assumes all risk associated with domain use.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Policy Amendments</h2>
                <p>We reserve the right to amend this policy at any time. Any changes will be published at least 15 days in advance on snwhitehosting.com before becoming effective.</p>
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