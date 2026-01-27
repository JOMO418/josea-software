import dynamic from "next/dynamic";

// ============================================================================
// ABOVE-THE-FOLD: Static imports for instant render (no scroll jank)
// These components load in the initial bundle for immediate display
// ============================================================================
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductBillboard from "@/components/ProductBillboard";
import ProblemSection from "@/components/ProblemSection";
import BentoGrid from "@/components/BentoGrid";

// ============================================================================
// BELOW-THE-FOLD: Dynamic imports with loading placeholders
// These load on-demand as user scrolls, reducing initial bundle size
// ============================================================================
const PricingSection = dynamic(() => import("@/components/PricingSection"), {
  loading: () => <div className="h-96 bg-white" />,
  ssr: true,
});

const DigitalPricingSection = dynamic(
  () => import("@/components/DigitalPricingSection"),
  {
    loading: () => <div className="h-96 bg-slate-50" />,
    ssr: true,
  }
);

const HowWeWorkSection = dynamic(
  () => import("@/components/HowWeWorkSection"),
  {
    loading: () => <div className="h-96 bg-white" />,
    ssr: true,
  }
);

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="h-96 bg-slate-50" />,
  ssr: true,
});

const FinalCTASection = dynamic(
  () => import("@/components/FinalCTASection"),
  {
    loading: () => <div className="h-64 bg-gradient-to-r from-purple-600 to-indigo-600" />,
    ssr: true,
  }
);

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-48 bg-slate-900" />,
  ssr: true,
});

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
