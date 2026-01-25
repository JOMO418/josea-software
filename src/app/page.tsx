import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ProblemSection from "@/components/ProblemSection";
import BentoGrid from "@/components/BentoGrid";
import PricingSection from "@/components/PricingSection";
import DigitalPricingSection from "@/components/DigitalPricingSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-ground">
      <Navbar />
      <Hero />
      <TrustedBy />

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
