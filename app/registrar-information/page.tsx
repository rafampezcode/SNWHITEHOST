"use client"

import { Shield, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RegistrarInformationPage() {
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

        {/* Header */}
        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">Registrar</span>
              <span className="mx-2 text-foreground">Information</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.registrarInfoSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/registrar-information" />

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
                <h2>1. Company Identification</h2>
                <ul>
                  <li><strong>Legal Name:</strong> SN SOLUTIONS LLC</li>
                  <li><strong>Trade Name:</strong> SN WHITE HOSTING™</li>
                  <li><strong>Tax Identification (EIN):</strong> 32-0817400</li>
                  <li><strong>Registered Address:</strong><br />1209 Mountain Road PL NE, STE N,<br />Albuquerque, New Mexico, 87110, USA</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>2. Domain Services</h2>
                <p>
                  SN WHITE HOSTING™ provides domain registration and management services as an independent hosting and domain service provider, working with different ICANN-accredited registrars depending on the chosen domain extension (TLD).
                </p>
              </section>

              <section className="mb-8">
                <h2>3. Contact Information</h2>
                <ul>
                  <li><strong>Official Website:</strong> <a href="https://www.snwhitehosting.com">www.snwhitehosting.com</a></li>
                  <li><strong>General Support Contact:</strong> support@snwhitehosting.com</li>
                  <li><strong>Abuse Contact:</strong> abuse@snwhitehosting.com</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Transparency and Compliance</h2>
                <ul>
                  <li>All domain registrations are subject to ICANN policies and to the specific rules of each TLD registry.</li>
                  <li>SN WHITE HOSTING™ operates with full transparency, ensuring that clients always know which authority governs their domain and under what conditions.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Effective Date:</strong> 01/08/2025
                </p>
              </section>

              {/* Contact Section */}
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