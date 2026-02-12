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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">{t.affiliateAgreement.pageTitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.affiliateAgreement.pageSubtitle}
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
                <h2>{t.affiliateAgreement.section1Title}</h2>
                <p>
                  {t.affiliateAgreement.section1Text1}
                </p>
                <p>
                  {t.affiliateAgreement.section1Text2}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section2Title}</h2>
                <p>
                  {t.affiliateAgreement.section2Text}
                </p>
                <h3>{t.affiliateAgreement.section2_1Title}</h3>
                <p>{t.affiliateAgreement.section2_1Text}</p>
                <ul>
                  <li>{t.affiliateAgreement.section2_1List1}</li>
                  <li>{t.affiliateAgreement.section2_1List2}</li>
                  <li>{t.affiliateAgreement.section2_1List3}</li>
                  <li>{t.affiliateAgreement.section2_1List4}</li>
                </ul>
                <h3>{t.affiliateAgreement.section2_2Title}</h3>
                <p>
                  {t.affiliateAgreement.section2_2Text}
                </p>
                <h3>{t.affiliateAgreement.section2_3Title}</h3>
                <p>
                  {t.affiliateAgreement.section2_3Text}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section3Title}</h2>
                <p>
                  {t.affiliateAgreement.section3Text}
                </p>
                <h3>{t.affiliateAgreement.section3_1Title}</h3>
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border-collapse border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border px-4 py-2 text-left">{t.affiliateAgreement.tableHeaderClients}</th>
                        <th className="border border-border px-4 py-2 text-left">{t.affiliateAgreement.tableHeaderCommission}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2">{t.affiliateAgreement.tableRow1Clients}</td>
                        <td className="border border-border px-4 py-2 font-semibold">{t.affiliateAgreement.tableRow1Commission}</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">{t.affiliateAgreement.tableRow2Clients}</td>
                        <td className="border border-border px-4 py-2 font-semibold">{t.affiliateAgreement.tableRow2Commission}</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">{t.affiliateAgreement.tableRow3Clients}</td>
                        <td className="border border-border px-4 py-2 font-semibold">{t.affiliateAgreement.tableRow3Commission}</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">{t.affiliateAgreement.tableRow4Clients}</td>
                        <td className="border border-border px-4 py-2 font-semibold">{t.affiliateAgreement.tableRow4Commission}</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="border border-border px-4 py-2">{t.affiliateAgreement.tableRow5Clients}</td>
                        <td className="border border-border px-4 py-2 font-semibold">{t.affiliateAgreement.tableRow5Commission}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>{t.affiliateAgreement.section3_2Title}</h3>
                <p>
                  {t.affiliateAgreement.section3_2Text}
                </p>
                <h3>{t.affiliateAgreement.section3_3Title}</h3>
                <p>
                  {t.affiliateAgreement.section3_3Text}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section4Title}</h2>
                <p>
                  {t.affiliateAgreement.section4Text}
                </p>
                <h3>{t.affiliateAgreement.section4_1Title}</h3>
                <ul>
                  <li>{t.affiliateAgreement.section4_1List1}</li>
                  <li>{t.affiliateAgreement.section4_1List2}</li>
                  <li>{t.affiliateAgreement.section4_1List3}</li>
                  <li>{t.affiliateAgreement.section4_1List4}</li>
                </ul>
                <h3>{t.affiliateAgreement.section4_2Title}</h3>
                <p>{t.affiliateAgreement.section4_2Text}</p>
                <ul>
                  <li>{t.affiliateAgreement.section4_2List1}</li>
                  <li>{t.affiliateAgreement.section4_2List2}</li>
                  <li>{t.affiliateAgreement.section4_2List3}</li>
                  <li>{t.affiliateAgreement.section4_2List4}</li>
                </ul>
                <h3>{t.affiliateAgreement.section4_3Title}</h3>
                <p>
                  {t.affiliateAgreement.section4_3Text}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section5Title}</h2>
                <h3>{t.affiliateAgreement.section5_1Title}</h3>
                <p>
                  {t.affiliateAgreement.section5_1Text}
                </p>
                <h3>{t.affiliateAgreement.section5_2Title}</h3>
                <p>
                  {t.affiliateAgreement.section5_2Text}
                </p>
                <h3>{t.affiliateAgreement.section5_3Title}</h3>
                <p>
                  {t.affiliateAgreement.section5_3Text}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section6Title}</h2>
                <p>
                  {t.affiliateAgreement.section6Text}
                </p>
                <ul>
                  <li>{t.affiliateAgreement.section6List1}</li>
                  <li>{t.affiliateAgreement.section6List2}</li>
                  <li>{t.affiliateAgreement.section6List3}</li>
                  <li>{t.affiliateAgreement.section6List4}</li>
                  <li>{t.affiliateAgreement.section6List5}</li>
                  <li>{t.affiliateAgreement.section6List6}</li>
                </ul>
                <p className="mt-4">
                  {t.affiliateAgreement.section6Warning}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section7Title}</h2>
                <h3>{t.affiliateAgreement.section7_1Title}</h3>
                <p>{t.affiliateAgreement.section7_1Text}</p>
                <ul>
                  <li>
                    <strong>{t.affiliateAgreement.section7_1Method1Title}:</strong> {t.affiliateAgreement.section7_1Method1Text}
                  </li>
                  <li>
                    <strong>{t.affiliateAgreement.section7_1Method2Title}:</strong> {t.affiliateAgreement.section7_1Method2Text}
                  </li>
                </ul>
                <h3>{t.affiliateAgreement.section7_2Title}</h3>
                <p>
                  {t.affiliateAgreement.section7_2Text}
                </p>
                <h3>{t.affiliateAgreement.section7_3Title}</h3>
                <p>
                  {t.affiliateAgreement.section7_3Text}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section8Title}</h2>
                <p>{t.affiliateAgreement.section8Text}</p>
                <ul>
                  <li>{t.affiliateAgreement.section8List1}</li>
                  <li>{t.affiliateAgreement.section8List2}</li>
                  <li>{t.affiliateAgreement.section8List3}</li>
                  <li>{t.affiliateAgreement.section8List4}</li>
                  <li>{t.affiliateAgreement.section8List5}</li>
                  <li>{t.affiliateAgreement.section8List6}</li>
                  <li>{t.affiliateAgreement.section8List7}</li>
                </ul>
                <p className="mt-4">
                  {t.affiliateAgreement.section8Warning}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section9Title}</h2>
                <p>
                  {t.affiliateAgreement.section9Text1}
                </p>
                <p>
                  {t.affiliateAgreement.section9Text2}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section10Title}</h2>
                <h3>{t.affiliateAgreement.section10_1Title}</h3>
                <p>
                  {t.affiliateAgreement.section10_1Text}
                </p>
                <ul>
                  <li>{t.affiliateAgreement.section10_1List1}</li>
                  <li>{t.affiliateAgreement.section10_1List2}</li>
                  <li>{t.affiliateAgreement.section10_1List3}</li>
                  <li>{t.affiliateAgreement.section10_1List4}</li>
                  <li>{t.affiliateAgreement.section10_1List5}</li>
                </ul>
                <h3>{t.affiliateAgreement.section10_2Title}</h3>
                <p>
                  {t.affiliateAgreement.section10_2Text}
                </p>
                <h3>{t.affiliateAgreement.section10_3Title}</h3>
                <p>
                  {t.affiliateAgreement.section10_3Text}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section11Title}</h2>
                <p>
                  {t.affiliateAgreement.section11Text}
                </p>
                <ul>
                  <li>{t.affiliateAgreement.section11List1}</li>
                  <li>{t.affiliateAgreement.section11List2}</li>
                  <li>{t.affiliateAgreement.section11List3}</li>
                  <li>{t.affiliateAgreement.section11List4}</li>
                  <li>{t.affiliateAgreement.section11List5}</li>
                </ul>
                <p className="mt-4">
                  {t.affiliateAgreement.section11Text2}
                </p>
                <p>
                  {t.affiliateAgreement.section11Text3}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section12Title}</h2>
                <p>
                  {t.affiliateAgreement.section12Text}
                </p>
                <ul>
                  <li>{t.affiliateAgreement.section12List1}</li>
                  <li>{t.affiliateAgreement.section12List2}</li>
                  <li>{t.affiliateAgreement.section12List3}</li>
                  <li>{t.affiliateAgreement.section12List4}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section13Title}</h2>
                <p>
                  {t.affiliateAgreement.section13Text1}
                </p>
                <p>
                  {t.affiliateAgreement.section13Text2}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section14Title}</h2>
                <p>
                  {t.affiliateAgreement.section14Text1}
                </p>
                <p>
                  {t.affiliateAgreement.section14Text2}
                </p>
              </section>

              <section className="mb-8">
                <h2>{t.affiliateAgreement.section15Title}</h2>
                <p>
                  {t.affiliateAgreement.section15Text1}
                </p>
                <p>
                  {t.affiliateAgreement.section15Text2}
                </p>
                <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                  <strong>{t.affiliateAgreement.lastUpdatedLabel}:</strong> {t.affiliateAgreement.lastUpdatedDate}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>{t.affiliateAgreement.effectiveDateLabel}:</strong> {t.affiliateAgreement.effectiveDate}
                </p>
              </section>

              <div className="mt-12 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">{t.affiliateAgreement.contactTitle}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t.affiliateAgreement.contactCompany}</p>
                      <p className="text-muted-foreground">{t.affiliateAgreement.contactAddress1}</p>
                      <p className="text-muted-foreground">{t.affiliateAgreement.contactAddress2}</p>
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