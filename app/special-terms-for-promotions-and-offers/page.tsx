"use client"

import { Tag, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SpecialTermsForPromotionsPage() {
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
            <Tag className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.promotionsTermsTitle.split(' ').slice(0, 3).join(' ')}</span>
              <span className="mx-2 text-foreground">{t.legal.promotionsTermsTitle.split(' ').slice(3).join(' ')}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.promotionsTermsSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/special-terms-for-promotions-and-offers" />

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
                <h2>1. Promotional Offer Definition</h2>
                <p>
                  A "Promotional Offer" is a special price, discount, or bonus term provided by SN WHITE HOSTING™ to customers for a limited time or limited quantity. All promotional offers are subject to these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Offer Validity</h2>
                <ul>
                  <li>Offers are valid only during the specified promotional period</li>
                  <li>Offers may be limited to new customers, returning customers, or specific regions</li>
                  <li>Each offer specifies its eligibility criteria and limitations</li>
                  <li>Offers cannot be combined unless explicitly stated</li>
                  <li>SN WHITE HOSTING™ reserves the right to limit offer quantity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Discount and Bonus Terms</h2>
                <ul>
                  <li>Discounts apply to the first billing cycle unless stated otherwise</li>
                  <li>Renewal prices are standard rates unless renewal discount specified</li>
                  <li>Bonuses (e.g., free months, free domains) are non-transferable</li>
                  <li>Bonuses cannot be redeemed for cash or account credit</li>
                  <li>Unused bonuses expire at the end of the promotional period</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. Coupon Codes and Promo Codes</h2>
                <ul>
                  <li>Codes are valid only if entered during checkout</li>
                  <li>One code per order unless stated otherwise</li>
                  <li>Expired or invalid codes cannot be applied retroactively</li>
                  <li>SN WHITE HOSTING™ may disable codes at any time</li>
                  <li>Codes cannot be used in conjunction with other promotions</li>
                  <li>Codes are non-transferable and non-refundable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Seasonal and Limited-Time Offers</h2>
                <p>
                  SN WHITE HOSTING™ periodically runs seasonal promotions (e.g., holiday sales, anniversary specials):
                </p>
                <ul>
                  <li>Dates and terms are announced in advance</li>
                  <li>Offers are available while supplies last</li>
                  <li>Early access may be offered to existing customers</li>
                  <li>Limited quantities may sell out before the end date</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. New Customer vs. Returning Customer Offers</h2>
                <ul>
                  <li>New customer offers apply to first-time account holders only</li>
                  <li>Returning customer offers are for those who had previous accounts</li>
                  <li>Customers who cancel and re-register may be considered new or returning per our discretion</li>
                  <li>Fraudulent account creation to obtain offers is prohibited</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Renewal and Upgrade Rules Under Promotions</h2>
                <ul>
                  <li>Renewal prices revert to standard rates after promotional period</li>
                  <li>Promotional pricing does not guarantee renewal discounts</li>
                  <li>Plan upgrades may or may not retain promotional pricing (specified per offer)</li>
                  <li>Downgrades of service plans may forfeit remaining promotional benefits</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Cancellation and Refunds During Promotion</h2>
                <p>
                  Promotional offers are subject to our standard cancellation and refund policies:
                </p>
                <ul>
                  <li>30-day money-back guarantee applies to Shared and WordPress Hosting</li>
                  <li>VPS, Dedicated, and Domain promotions are non-refundable</li>
                  <li>Refunds are calculated at promotional pricing, not standard rates</li>
                  <li>Cancellation after promotional period is non-refundable</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Promotional Credit and Store Credit</h2>
                <ul>
                  <li>Promotional credits are non-transferable and account-specific</li>
                  <li>Credits must be used within the specified validity period</li>
                  <li>Unused credits expire and cannot be carried forward</li>
                  <li>Credits cannot be redeemed for cash refunds</li>
                  <li>Credits cannot be used to purchase services for third parties</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>10. Fraud and Abuse Prevention</h2>
                <p>
                  SN WHITE HOSTING™ may cancel promotional benefits if:
                </p>
                <ul>
                  <li>Terms of the offer are violated</li>
                  <li>Fraudulent account creation is detected</li>
                  <li>Multiple accounts are created to obtain offers</li>
                  <li>Reselling of promotional services is discovered</li>
                  <li>Any form of abuse or misuse is identified</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>11. Pricing Transparency</h2>
                <ul>
                  <li>Standard rates are displayed before checkout</li>
                  <li>Promotional discount is clearly shown before purchase</li>
                  <li>Total cost including all fees is displayed</li>
                  <li>Renewal pricing is disclosed before purchase completion</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>12. Business Partners and Resellers</h2>
                <p>
                  SN WHITE HOSTING™ may offer special terms to authorized partners and resellers:
                </p>
                <ul>
                  <li>Partner offers are governed by separate partner agreements</li>
                  <li>Reseller promotional terms may differ from retail offers</li>
                  <li>Partner discounts are not available to end customers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>13. Program Modifications and Discontinuation</h2>
                <p>
                  SN WHITE HOSTING™ reserves the right to:
                </p>
                <ul>
                  <li>Modify or discontinue any promotion at any time</li>
                  <li>Change promotional terms with reasonable notice</li>
                  <li>Exclude certain services or plans from promotions</li>
                  <li>Apply restrictions or limitations to promotional offers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>14. Disclaimer</h2>
                <p>
                  SN WHITE HOSTING™ makes no warranty regarding promotional offers. Promotions are provided "as-is" and SN WHITE HOSTING™ is not liable for:
                </p>
                <ul>
                  <li>Typographical errors in promotional pricing</li>
                  <li>System errors causing incorrect discount application</li>
                  <li>Expired or invalid promotional codes</li>
                  <li>Misunderstandings about promotion terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>15. Effective Date and Amendments</h2>
                <p>
                  This agreement is effective immediately and applies to all current and future promotions. SN WHITE HOSTING™ may amend these terms at any time.
                </p>
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
