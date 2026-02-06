"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface LegalLink {
  nameKey: string
  href: string
  active?: boolean
}

interface LegalSection {
  icon: string
  titleKey: string
  links: LegalLink[]
}

interface LegalSidebarProps {
  currentPath: string
}

const legalSections: LegalSection[] = [
  {
    icon: "🌐",
    titleKey: "registrarInfo",
    links: [
      { nameKey: "registrarInfo", href: "/registrar-information" },
    ],
  },
  {
    icon: "🔒",
    titleKey: "privacyData",
    links: [
      { nameKey: "privacyPolicy", href: "/privacy-policy" },
      { nameKey: "cookiesPolicy", href: "/cookies-policy" },
      { nameKey: "dpa", href: "/data-processing-addendum" },
    ],
  },
  {
    icon: "📜",
    titleKey: "termsAgreements",
    links: [
      { nameKey: "generalTerms", href: "/general-terms-of-service" },
      { nameKey: "specificTerms", href: "/specific-terms-of-service" },
      { nameKey: "sla", href: "/service-level-agreement" },
      { nameKey: "aup", href: "/acceptable-use-policy" },
      { nameKey: "cancellationRefund", href: "/cancellation-and-refund-policy" },
      { nameKey: "hostingAgreement", href: "/hosting-agreement" },
      { nameKey: "domainRegistration", href: "/domain-registration-policy" },
      { nameKey: "domainTransfer", href: "/domain-name-transfer-agreement" },
    ],
  },
  {
    icon: "🧾",
    titleKey: "commercialPrograms",
    links: [
      { nameKey: "referralProgram", href: "/referral-program-agreement" },
      { nameKey: "promotionsTerms", href: "/special-terms-for-promotions-and-offers" },
    ],
  },
  {
    icon: "📑",
    titleKey: "policies",
    links: [
      { nameKey: "abuseHandling", href: "/abuse-handling-policy" },
      { nameKey: "expiredDomain", href: "/expired-domain-recovery-policy" },
      { nameKey: "tldRegistration", href: "/tld-registration-policy" },
      { nameKey: "domainDispute", href: "/domain-dispute-resolution-policy" },
      { nameKey: "companyPolicies", href: "/company-policies-overview" },
    ],
  },
  {
    icon: "🛡",
    titleKey: "brandRightsSecurity",
    links: [
      { nameKey: "brandGuidelines", href: "/brand-guidelines-and-permissions" },
      { nameKey: "trademarkCopyright", href: "/trademark-and-copyright-policy" },
    ],
  },
  {
    icon: "📣",
    titleKey: "transparency",
    links: [
      { nameKey: "dsaReport", href: "/dsa-transparency-report" },
    ],
  },
]

export function LegalSidebar({ currentPath }: LegalSidebarProps) {
  const { t } = useLanguage()

  return (
    <aside className="lg:col-span-1 lg:pr-0">
      <div className="sticky top-20 space-y-6">
        <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6 shadow-xl">
          <h2 className="text-lg font-semibold mb-4 text-foreground">{t.legal.documentation}</h2>
          <nav className="space-y-6">
            {legalSections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <span>{section.icon}</span>
                  <span>{t.legal[section.titleKey as keyof typeof t.legal]}</span>
                </h3>
                <ul className="space-y-1.5 ml-6">
                  {section.links.map((link, linkIdx) => {
                    const isActive = currentPath === link.href
                    return (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className={`text-sm flex items-center gap-2 hover:text-primary transition-colors ${
                            isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {isActive && <ChevronRight className="h-3 w-3" />}
                          <span>{t.legal[link.nameKey as keyof typeof t.legal]}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}
