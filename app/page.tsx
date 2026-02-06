import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustBadges } from "@/components/trust-badges"
import { GuaranteesSection } from "@/components/guarantees-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { HostingComparisonSection } from "@/components/comparison-table"
import { FeatureHighlights } from "@/components/feature-highlights"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DatacenterLocations } from "@/components/datacenter-locations"
// ServerStatus removed from home as requested
import { FAQSection } from "@/components/faq-section"
import { AffiliatesSection } from "@/components/affiliates-section"
import { PortfolioValuationSection } from "@/components/portfolio-valuation-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import { CookieBanner } from "@/components/cookie-banner"
import { PromoBanner } from "@/components/promo-banner"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <GuaranteesSection />
        <StatsSection />
        <PricingSection />
        <HostingComparisonSection />
        <FeatureHighlights />
        <ServicesSection />
        <TestimonialsSection />
        <DatacenterLocations />
        {/* ServerStatus removed from home */}
        <FAQSection />
        <AffiliatesSection />
        <PortfolioValuationSection />
        <TrustSection />
      </main>
      <Footer />
      <FloatingSupport />
      <BackToTop />
      <CookieBanner />
    </div>
  )
}
