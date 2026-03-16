"use client"

import { Globe, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DomainRegistrationPolicyPage() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.domainRegistrationTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.domainRegistrationSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/domain-registration-policy" />

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
                <h2>1. PURPOSE</h2>
                <p>
                  This Domain Registration Policy governs the terms and conditions applicable to the registration, management, renewal, transfer, and cancellation of domain names registered through SN WHITE HOSTING (hereinafter, "the Company"), as well as the rights and obligations of customers (hereinafter, "the Customer") in relation to such services.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. REGISTRATION PROVIDER</h2>
                <p>
                  SN WHITE HOSTING acts as an intermediary between the Customer and various ICANN-accredited domain registration providers responsible for the chosen TLD (Top-Level Domain). The processing of the Customer's personal data, solely for domain management purposes, will be carried out by the relevant accredited registrar in compliance with applicable regulations, acting exclusively as a data processor for this purpose.
                </p>
              </section>

              <section className="mb-8">
                <h2>3. REGISTRATION PROCESS</h2>
                <p>
                  <strong>3.1.</strong> Once payment has been received and the order confirmed, the Company will proceed with the registration of the requested domain, subject to availability and to the policies of ICANN and the registry corresponding to the requested TLD (extension).
                </p>
                <p>
                  <strong>3.2.</strong> The Customer is responsible for providing complete, truthful, and up-to-date information during the registration process. Any error, omission, or false information may result in the cancellation of the domain without the right to a refund.
                </p>
                <p>
                  <strong>3.3.</strong> The Customer acknowledges that some TLDs may require additional information or documentation as determined by the corresponding registry.
                </p>
              </section>

              <section className="mb-8">
                <h2>4. RENEWALS</h2>
                <p>
                  <strong>4.1.</strong> All domains registered through SN WHITE HOSTING will be automatically renewed unless the Customer notifies the Company in writing, at least 15 calendar days before the expiration date, of their intention not to renew.
                </p>
                <p>
                  <strong>4.2.</strong> The Company will issue the corresponding invoice and proceed with the renewal charge unless otherwise indicated by the Customer within the established timeframe.
                </p>
                <p>
                  <strong>4.3.</strong> The grace period after a domain's expiration depends strictly on the policies of the corresponding TLD registry.
                </p>
              </section>

              <section className="mb-8">
                <h2>5. TRANSFERS</h2>
                <p>
                  The Customer may request the transfer of a domain to another provider, provided that:
                </p>
                <ul>
                  <li>There are no outstanding invoices or debts with SN WHITE HOSTING.</li>
                  <li>The domain is not locked due to ICANN or registry security policies.</li>
                  <li>The minimum age requirements are met (typically 60 days from registration or the last transfer).</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. CANCELLATIONS AND REFUNDS</h2>
                <p>
                  <strong>6.1.</strong> The Customer may cancel a domain at any time; however, no refunds will be issued for completed registrations, renewals, or transfers, as these are immediate and irreversible services.
                </p>
                <p>
                  <strong>6.2.</strong> In case of non-payment, the domain may be suspended and subsequently deleted according to the registry's policies.
                </p>
              </section>

              <section className="mb-8">
                <h2>7. WHOIS AND PUBLIC DATA</h2>
                <p>
                  <strong>7.1.</strong> In accordance with ICANN rules, domain registration information must be publicly available via the WHOIS service, unless a domain privacy service is active.
                </p>
                <p>
                  <strong>7.2.</strong> SN WHITE HOSTING offers WHOIS privacy services, where available, subject to the conditions and costs indicated in the Client Panel.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. CUSTOMER RESPONSIBILITIES</h2>
                <p>
                  <strong>8.1.</strong> Maintain updated and accurate contact information associated with the domain.
                </p>
                <p>
                  <strong>8.2.</strong> Comply with all usage rules established by ICANN and the corresponding registry.
                </p>
                <p>
                  <strong>8.3.</strong> Avoid any unlawful use of the domain, including phishing, spam, malware distribution, or any activity contrary to law.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. POLICY MODIFICATIONS</h2>
                <p>
                  SN WHITE HOSTING reserves the right to modify this Policy. Any significant changes will be notified to the Customer via the Client Panel or email at least 15 calendar days prior to their effective date.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>{t.legal.effectiveDateLabel}:</strong> February 21, 2026
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