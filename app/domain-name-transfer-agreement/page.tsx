"use client"

import { ArrowRightLeft, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DomainNameTransferAgreementPage() {
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
            <ArrowRightLeft className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.domainTransferTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.domainTransferSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/domain-name-transfer-agreement" />

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
                <h2>1. Purpose of the Agreement</h2>
                <p>
                  This agreement sets forth the terms and conditions under which SN WHITE HOSTING™, operated by SN SOLUTIONS LLC (EIN: 32-0817400), will act as registrar or intermediary for the transfer of domain names to or from other registrars.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Definitions</h2>
                <ul>
                  <li>
                    <strong>Transferencia de Dominio:</strong> The process by which a domain name is moved from one registrar to another.
                  </li>
                  <li>
                    <strong>Client:</strong> The individual or legal entity requesting the domain transfer.
                  </li>
                  <li>
                    <strong>Losing Registrar:</strong> The registrar where the domain is registered before the transfer.
                  </li>
                  <li>
                    <strong>Gaining Registrar:</strong> The registrar to which the domain is being transferred (in this case, SN WHITE HOSTING™ or an associated provider).
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Transfer Requirements</h2>
                <p>The client agrees to comply with ICANN's (Internet Corporation for Assigned Names and Numbers) transfer policies and the following requirements:</p>
                <ol className="list-decimal pl-6">
                  <li>The domain must be active and registered under the requesting client's name.</li>
                  <li>The domain must not be locked due to dispute or legal action.</li>
                  <li>The domain must have been registered or last transferred at least 60 days prior to the transfer request.</li>
                  <li>The client must provide the authorization code (Auth/EPP code) issued by the losing registrar.</li>
                  <li>The client must ensure that the registrant's contact details are accurate and up to date.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2>4. Transfer Process</h2>
                <ol className="list-decimal pl-6">
                  <li>The client initiates the transfer request via the control panel or by submitting a support ticket.</li>
                  <li>The client provides the authorization code and confirms the request.</li>
                  <li>SN WHITE HOSTING™ submits the transfer request to the gaining registrar.</li>
                  <li>The losing registrar has up to 5 days to approve or deny the transfer.</li>
                  <li>Once approved, the domain is transferred and automatically renewed for an additional year (unless otherwise specified by the TLD policy).</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2>5. Transfer Denial Reasons</h2>
                <p>We may deny a transfer request if:</p>
                <ul>
                  <li>The domain does not meet the minimum 60-day period since registration or last transfer.</li>
                  <li>The domain is locked due to dispute or security measures.</li>
                  <li>The registrant's confirmation is missing.</li>
                  <li>The contact information is false or outdated.</li>
                  <li>ICANN or the relevant TLD policies are not met.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Fees and Payments</h2>
                <ul>
                  <li>The transfer fee will be published on snwhitehosting.com and may vary depending on the TLD extension.</li>
                  <li>Payment must be made in advance before initiating the process.</li>
                  <li>The fee includes renewal for an additional year, unless otherwise stated by the TLD policy.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Liability</h2>
                <p>
                  SN WHITE HOSTING™ acts as an intermediary in the transfer process but shall not be held responsible for delays, rejections, or errors caused by:
                </p>
                <ul>
                  <li>Incorrect or incomplete data provided by the client.</li>
                  <li>The losing registrar's refusal to approve the transfer.</li>
                  <li>Technical issues beyond our control.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Agreement Modifications</h2>
                <p>
                  We may amend this agreement at any time. Changes will be posted on our official website and will take effect 15 days after publication.
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