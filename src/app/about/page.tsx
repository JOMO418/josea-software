"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================================
// FONTS - Editorial Authority
// ============================================================================

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// ============================================================================
// CONFIGURATION
// ============================================================================

const WHATSAPP_NUMBER = "254746554150";
const CONSULTATION_MESSAGE =
  "Hello Josea Team, I'd like to discuss your enterprise software solutions.";

// ============================================================================
// SECTION 1: HERO — "Our Story"
// ============================================================================

function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 lg:pb-16 overflow-hidden">
      {/* Gradient Background - Purple to White */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-200 via-50% to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Sophisticated badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-slate-400" />
              <span className="text-slate-700 text-xs font-semibold tracking-[0.2em] uppercase">
                Since 2022 · Nairobi
              </span>
              <span className="w-8 h-px bg-slate-400" />
            </div>

            {/* Body paragraphs */}
            <div
              className={`${inter.className} space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed max-w-xl`}
            >
              <p>
                In 2022, we identified a critical gap in Kenya&apos;s enterprise
                software market. Ambitious businesses scaling beyond single
                locations faced an impossible choice: expensive offshore systems
                built for different markets, or unreliable local options that
                disappeared after payment.
              </p>
              <p>
                We built Josea to change that. Not as a startup chasing trends,
                but as a long-term partner committed to operational excellence.
                We architect bespoke enterprise systems with the precision of
                international consultancies and the understanding of local
                business realities.
              </p>
              <p>
                Today, we serve Kenya&apos;s most ambitious organizations — from
                growing SMEs to large-scale operations — with software that
                doesn&apos;t compromise on quality, support, or alignment with
                how business actually works here.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about-hero-team-workspace.jpg"
                alt="Josea team working in Nairobi office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 2: PHILOSOPHY — "Our Approach"
// ============================================================================

function PhilosophySection() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/about-partnership-support-team.jpg"
                alt="Josea team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-purple-400" />
              <span className="text-purple-600 text-xs font-semibold tracking-[0.15em] uppercase">
                Our Philosophy
              </span>
            </div>

            <h2
              className={`${playfair.className} text-3xl sm:text-4xl font-semibold text-slate-900 mb-6 leading-tight`}
            >
              How We Think.
            </h2>

            <div className={`${inter.className} space-y-5`}>
              {/* Principle 1 */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Bespoke Excellence
                </h3>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                  We don&apos;t force your business into pre-built templates.
                  Every system is architected specifically for your workflows,
                  your team, your growth trajectory. This isn&apos;t
                  customization of an existing product — it&apos;s true
                  engineering from first principles.
                </p>
              </div>

              {/* Principle 2 */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  True Partnership
                </h3>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                  Software isn&apos;t a transaction. We&apos;re present from
                  discovery through deployment and beyond — providing ongoing
                  optimization, support, and evolution as your business scales.
                  Your success is our success.
                </p>
              </div>

              {/* Principle 3 */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Radical Clarity
                </h3>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                  No hidden costs. No surprise timelines. No vague promises. We
                  communicate with complete transparency because trust is earned
                  through honesty, not salesmanship.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3: CTA — "Let's Talk"
// ============================================================================

function CTASection() {
  return (
    <section className="relative py-12 lg:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2
            className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 leading-tight`}
          >
            Let&apos;s Build Something Exceptional Together.
          </h2>

          {/* Subtext */}
          <p
            className={`${inter.className} text-slate-600 text-base lg:text-lg mb-8 max-w-xl mx-auto`}
          >
            We partner with organizations ready for enterprise-grade systems.
            Start with a conversation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONSULTATION_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium text-sm hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Button */}
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-lg font-medium text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors duration-200"
            >
              View Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AboutUsPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </main>
  );
}
