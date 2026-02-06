"use client"

import { Share2, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ReferralProgramAgreementPage() {
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
            <Share2 className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.legal.referralProgramTitle.split(' ').slice(0, 2).join(' ')}</span>
              <span className="mx-2 text-foreground">{t.legal.referralProgramTitle.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.legal.referralProgramSubtitle}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/referral-program-agreement" />

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
                <h2>1. Program Overview</h2>
                <p>
                  The SN WHITE HOSTING™ Referral Program allows existing customers to refer friends and colleagues and receive benefits for successful referrals.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Eligibility</h2>
                <p>To participate in the referral program, you must:</p>
                <ul>
                  <li>Be an active SN WHITE HOSTING™ customer</li>
                  <li>Have a valid, non-suspended account</li>
                  <li>Have made at least one payment with no outstanding balances</li>
                  <li>Agree to comply with this agreement and all applicable laws</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>3. Referral Rewards</h2>
                <p>
                  For each successfully referred customer who makes their first purchase, the referrer receives:
                </p>
                <ul>
                  <li>Referrer credit: 20% discount on their next bill (capped at $50 USD)</li>
                  <li>Alternative reward: $15 USD account credit (if preferred)</li>
                  <li>Reward validity: Credits must be used within 12 months</li>
                  <li>No cash refunds: Credits cannot be converted to cash</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>4. How the Program Works</h2>
                <ul>
                  <li>Referrer provides referral code or link to friend</li>
                  <li>Friend must use referral code during checkout</li>
                  <li>Friend receives 15% discount on first service</li>
                  <li>Referrer receives reward upon friend's first payment</li>
                  <li>Referred customer becomes permanent SN WHITE HOSTING™ customer</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>5. Referral Limitations</h2>
                <ul>
                  <li>Maximum rewards per referrer per month: 10 referrals</li>
                  <li>Maximum rewards per customer per month: 5 referrals</li>
                  <li>Friend must be new SN WHITE HOSTING™ customer (no prior accounts)</li>
                  <li>Referrer's friends cannot be immediate family members sharing the same address</li>
                  <li>One referral code per referred customer</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>6. Prohibited Referral Methods</h2>
                <p>
                  Referrers may not:
                </p>
                <ul>
                  <li>Post referral codes on unsolicited mailing lists</li>
                  <li>Use spam or phishing to promote referrals</li>
                  <li>Purchase referrals from third-party services</li>
                  <li>Create fraudulent or fake accounts to generate referrals</li>
                  <li>Manipulate or misuse the referral system</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>7. Fraud and Abuse</h2>
                <p>
                  SN WHITE HOSTING™ reserves the right to:
                </p>
                <ul>
                  <li>Cancel fraudulent referrals and withhold rewards</li>
                  <li>Suspend or terminate accounts engaged in referral abuse</li>
                  <li>Investigate suspicious referral patterns</li>
                  <li>Recover fraudulently obtained rewards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>8. Dispute Resolution</h2>
                <p>
                  Disputes over referral credit:
                </p>
                <ul>
                  <li>Must be reported within 30 days of the referral claim</li>
                  <li>SN WHITE HOSTING™ will investigate and make a determination</li>
                  <li>Decision of SN WHITE HOSTING™ is final</li>
                  <li>No refunds for expired credits</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>9. Program Modifications</h2>
                <p>
                  SN WHITE HOSTING™ may modify or terminate the referral program at any time. Changes will be announced 15 days in advance. Existing unclaimed referral credits will be honored.
                </p>
              </section>

              <section className="mb-8">
                <h2>10. No Third-Party Transfers</h2>
                <p>
                  Referral credits cannot be transferred, sold, or assigned to other users. Credits are personal to the referrer and cannot be used to purchase services for others.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. Tax Responsibility</h2>
                <p>
                  Referrers are responsible for any tax implications arising from referral rewards. SN WHITE HOSTING™ is not responsible for tax reporting or withholding.
                </p>
              </section>

              <section className="mb-8">
                <h2>12. Effective Date and Amendments</h2>
                <p>
                  This agreement is effective upon enrollment. SN WHITE HOSTING™ may amend this agreement with 15 days' notice.
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