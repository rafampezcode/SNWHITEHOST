"use client"

import { Cookie, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookiesPolicyPage() {
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
            <Cookie className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">Cookies</span>
              <span className="mx-2 text-foreground">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.cookiesPolicySubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/cookies-policy" />

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
              <section className="mb-8">
                <h2>1. Introduction</h2>
                <p>
                  This Cookies Policy explains how SN WHITE HOSTING, the trade name of SN SOLUTIONS LLC (hereinafter referred to as "we," "us," or "our"), uses cookies and similar technologies to recognize you when you visit our website snwhitehosting.com and the client area. It also explains what these technologies are, why we use them, and your rights to control their use.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. What are cookies?</h2>
                <p>
                  Cookies are small text files that a website places on your computer or mobile device when you visit it. Cookies are widely used to make websites work or work more efficiently, as well as to provide information to the website owners.
                </p>
                <p>There are different types of cookies:</p>
                <ul>
                  <li><strong>First-party cookies:</strong> set by the domain you are visiting.</li>
                  <li><strong>Third-party cookies:</strong> set by domains other than the one you are visiting.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Why do we use cookies?</h2>
                <p>We use cookies for several reasons, including:</p>
                <ul>
                  <li>To enable the technical and secure operation of our website and client panel.</li>
                  <li>To remember your preferences and settings.</li>
                  <li>To collect statistical data about the use of our services and improve your experience.</li>
                  <li>To provide you with faster and more personalized technical support.</li>
                  <li>For legitimate marketing purposes, in cases where you have given your consent.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Types of cookies we use</h2>
                
                <h3>4.1. Strictly necessary cookies</h3>
                <p>
                  These are essential for you to navigate the site and use its features, such as accessing secure areas. Without these cookies, the services you have requested cannot be provided.
                </p>

                <h3>4.2. Performance and analytics cookies</h3>
                <p>
                  These collect information about how visitors use our website, for example, which pages they visit most often and whether they receive error messages. We use tools such as Google Analytics for this purpose.
                </p>

                <h3>4.3. Functionality cookies</h3>
                <p>
                  These allow the site to remember the choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
                </p>

                <h3>4.4. Advertising cookies (only with consent)</h3>
                <p>
                  These are used to display advertisements relevant to you and your interests, limit the number of times you see an ad, and help measure the effectiveness of an advertising campaign.
                </p>
              </section>

              <section className="mb-8">
                <h2>5. Third-party cookies</h2>
                <p>In some cases, we use cookies provided by trusted third parties, for example:</p>
                <ul>
                  <li><strong>Google Analytics:</strong> to analyze web traffic and improve content and navigation.</li>
                  <li><strong>Soluciones Corporativas IP, SL:</strong> in the context of domain registration, they may use strictly necessary cookies for the technical management of WHOIS and other associated processes.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Managing cookies</h2>
                <p>
                  You have the right to decide whether to accept or reject cookies. You can set your browser to refuse all cookies or to alert you when a cookie is being sent.
                </p>
                <p>
                  If you disable cookies, some parts of our website may not function properly.
                </p>
              </section>

              <section className="mb-8">
                <h2>7. Cookie retention</h2>
                <p>
                  The length of time a cookie will stay on your device will vary depending on whether it is a "session cookie" or a "persistent cookie." Session cookies are deleted when you close your browser, while persistent cookies remain until they expire or you delete them.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Changes to the Cookies Policy</h2>
                <p>
                  SN WHITE HOSTING may update this Cookies Policy at any time. When changes are made, we will notify you via our website or other means at least 15 days before they take effect.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Contact</h2>
                <p>If you have questions about this Cookies Policy, you can contact us at:</p>
                <p>
                  <strong>SN SOLUTIONS LLC</strong><br />
                  EIN: 32-0817400<br />
                  1209 Mountain Road Pl NE, Ste N<br />
                  Albuquerque, New Mexico, 87110, USA<br />
                  Email: legal@snwhitehosting.com
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Effective Date:</strong> 01/08/2025
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
