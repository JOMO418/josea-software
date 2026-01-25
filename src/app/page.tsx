import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports for below-the-fold components to reduce initial bundle size
const ProductBillboard = dynamic(() => import("@/components/ProductBillboard"));
const ProblemSection = dynamic(() => import("@/components/ProblemSection"));
const BentoGrid = dynamic(() => import("@/components/BentoGrid"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const DigitalPricingSection = dynamic(() => import("@/components/DigitalPricingSection"));
const HowWeWorkSection = dynamic(() => import("@/components/HowWeWorkSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const FinalCTASection = dynamic(() => import("@/components/FinalCTASection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-ground">
      <Navbar />
      <Hero />
      <ProductBillboard />

      {/* ============================================
          PARALLAX SLIDE CONTAINER
          ============================================

          CRITICAL: For the sticky + sliding effect to work:

          1. ProblemSection is `sticky top-0 h-screen z-0`
             - It stays fixed at the top while scrolling
             - z-0 places it BEHIND the BentoGrid

          2. BentoGrid is `relative z-10`
             - z-10 places it ABOVE the ProblemSection
             - rounded-t-[3rem] creates the "sliding panel" look
             - shadow creates depth illusion

          3. This wrapper div must NOT have overflow:hidden
             - Sticky positioning breaks with overflow:hidden on ancestors

          4. The sections are siblings, not nested
             - Sticky needs scroll space to work against
          ============================================ */}
      <div className="relative">
        {/* The "Stuck" Layer - stays in place */}
        <ProblemSection />

        {/* The "Sliding" Layer - scrolls over the Problem */}
        <BentoGrid />
      </div>

      {/* Pricing Section */}
      <PricingSection />

      {/* Digital Pricing Section */}
      <DigitalPricingSection />

      {/* How We Work Section */}
      <HowWeWorkSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
