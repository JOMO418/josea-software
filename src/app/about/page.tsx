"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Code2,
  Zap,
  Lock,
  Users,
  Sparkles,
  CheckCircle2,
  Building2,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppCTA from "@/components/FloatingWhatsAppCTA";
import JoseaAI from "@/components/JoseaAI";

// ============================================================================
// CONFIGURATION
// ============================================================================

const WHATSAPP_NUMBER = "254746554150";
const CONSULTATION_MESSAGE =
  "Hello Josea Team, I'd like to discuss your enterprise software solutions and learn more about your approach.";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// ============================================================================
// SECTION 1: HERO — Our Story
// ============================================================================

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden flex items-center">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900/90 to-indigo-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(167, 139, 250, 0.25) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-violet-300" strokeWidth={1.5} />
              <span
                className="text-xs tracking-[0.2em] text-violet-200/90 uppercase"
                style={{
                  fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                }}
              >
                Est. 2022 · Nairobi, Kenya
              </span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight"
            style={{
              fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
            }}
          >
            <span className="text-white/95">Engineering </span>
            <span className="bg-gradient-to-r from-violet-200 via-purple-100 to-violet-200 bg-clip-text text-transparent">
              Enterprise Software
            </span>
            <br />
            <span className="text-white/95">for African Business</span>
          </motion.h1>

          {/* Story - Brief & Professional */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto space-y-5 text-base sm:text-lg text-violet-100/80 leading-relaxed mb-8"
          >
            <p>
              In 2022, we identified a critical gap in Kenya's enterprise software landscape.
              Scaling businesses faced an impossible choice: prohibitively expensive offshore
              systems designed for foreign markets, or unreliable local options that vanished
              post-payment with zero ongoing support.
            </p>
            <p>
              Josea was founded to bridge this divide—<span className="text-white/95 font-medium">not as a trend-chasing startup,
              but as a long-term engineering partner</span> committed to operational excellence. We architect
              bespoke enterprise systems with the technical precision of global consultancies and
              the contextual understanding of African business realities.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade to White */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}

// ============================================================================
// SECTION 2: FOUNDER VISION — Compact Side-by-Side with CEO Insight
// ============================================================================

function FounderVisionSection() {
  return (
    <section className="relative py-10 md:py-12 bg-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(237, 233, 254, 0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          {/* Left: Founder Photo — Circular Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Rotating gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 blur-xl opacity-30 animate-pulse" />

              {/* Outer border ring */}
              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 p-1.5 shadow-2xl shadow-purple-500/30">
                {/* Inner white ring */}
                <div className="w-full h-full rounded-full bg-white p-2">
                  {/* Photo container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-100">
                    {/* Placeholder - User will add photo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-200 via-purple-100 to-indigo-200 flex items-center justify-center">
                      <Users className="w-20 h-20 text-violet-400" strokeWidth={1} />
                    </div>
                    {/* When user adds photo, use this: */}
                    {/* <Image
                      src="/founder-photo.jpg"
                      alt="Hosea Onyango - Development Founder & CEO"
                      fill
                      className="object-cover"
                      sizes="288px"
                    /> */}
                  </div>
                </div>
              </div>

              {/* Name & Title Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-white rounded-2xl shadow-xl border border-violet-200">
                <p
                  className="text-sm font-semibold text-slate-900 mb-0.5 text-center leading-tight"
                  style={{
                    fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                  }}
                >
                  Hosea Onyango
                </p>
                <p
                  className="text-[10px] bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-medium tracking-wide text-center"
                  style={{
                    fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                  }}
                >
                  Development Founder & CEO
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: CEO Vision Card with Purple Gradient */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-1 w-full lg:max-w-2xl"
          >
            {/* Vision Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-6 lg:p-8 shadow-2xl shadow-purple-500/30 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

              {/* Quote icon */}
              <div className="relative mb-5">
                <svg
                  className="w-10 h-10 text-white/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>

              {/* Vision Statement */}
              <div className="relative space-y-4">
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-white leading-tight"
                  style={{
                    fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                  }}
                >
                  Building the Future
                  <br />
                  African Business Deserves
                </h3>

                <p className="text-violet-100 text-base leading-relaxed">
                  When global business technology advances, African enterprises are often the last
                  in line. Access to world-class systems shouldn't require navigating impossible
                  choices or accepting compromised solutions—yet that's been the reality.
                </p>

                <p className="text-white font-medium text-base leading-relaxed">
                  I envision a different reality—where every scaling business, from Nairobi to
                  Lagos, has access to engineering excellence that matches their ambition. Where
                  technology becomes the catalyst for transformation, not a barrier to growth.
                </p>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-violet-200 italic text-sm leading-relaxed">
                    "When African businesses win with world-class technology, entire economies
                    transform. Building the systems that make that inevitable—that's our mission,
                    and my commitment to every entrepreneur we serve."
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span
                  className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-semibold text-white tracking-wider uppercase border border-white/20"
                  style={{
                    fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                  }}
                >
                  Founder's Vision
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3: TECHNICAL CAPABILITIES — AI, Bespoke Dev, Security
// ============================================================================

function TechnicalCapabilitiesSection() {
  const capabilities = [
    {
      icon: Sparkles,
      label: "AI-Powered Intelligence",
      title: "Beyond the Hype",
      description:
        "We integrate AI where it delivers measurable ROI—automating repetitive workflows, predictive inventory optimization, anomaly detection in financial data, and intelligent data entry. Not AI for marketing buzzwords, but purposeful machine learning that reduces operational overhead and enhances decision-making accuracy.",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Code2,
      label: "Bespoke Engineering",
      title: "Built Like a Glove",
      description:
        "We assign dedicated development teams to architect systems tailored to your exact business logic. No generic templates. No forced workflows. Our engineers conduct deep operational analysis, then build custom modules that integrate seamlessly with your processes—from inventory hierarchies to multi-branch accounting rules.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: Lock,
      label: "Enterprise Security",
      title: "Your Data, Your Control",
      description:
        "We implement bank-grade 256-bit AES encryption at rest and in transit. Role-based access control with granular permissions. Complete audit trails for compliance. Your business data remains exclusively yours—hosted securely with zero third-party access. We treat data sovereignty as non-negotiable.",
      gradient: "from-indigo-500 to-violet-600",
    },
  ];

  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(237, 233, 254, 0.5) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-violet-300" />
            <span
              className="text-violet-600 text-xs font-medium tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
              }}
            >
              Technical Excellence
            </span>
            <span className="w-8 h-px bg-violet-300" />
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-4"
            style={{
              fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
            }}
          >
            How We{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Build Different
            </span>
          </h2>

          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Three pillars that define our engineering approach and set us apart from
            conventional software vendors.
          </p>
        </motion.div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-white border border-violet-100/60 hover:border-violet-200 shadow-sm hover:shadow-lg hover:shadow-purple-200/20 transition-all duration-300">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center mb-5 shadow-md shadow-purple-300/30`}
                >
                  <capability.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Label */}
                <span
                  className="text-[10px] font-semibold tracking-[0.15em] text-violet-500 uppercase block mb-2"
                  style={{
                    fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                  }}
                >
                  {capability.label}
                </span>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-slate-800 mb-3"
                  style={{
                    fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                  }}
                >
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ============================================================================
// SECTION 4: OUR APPROACH — Refined Philosophy
// ============================================================================

function ApproachSection() {
  const principles = [
    {
      icon: Shield,
      title: "Dedicated Development Teams",
      description:
        "We don't outsource or rush. Each project receives a dedicated team of senior engineers who immerse themselves in your business logic, ensuring every module aligns perfectly with your operational reality.",
    },
    {
      icon: Zap,
      title: "Iterative Collaboration",
      description:
        "Software evolves with your business. We provide continuous optimization, feature enhancements, and technical support—not as an afterthought, but as a core commitment embedded in our partnership model.",
    },
    {
      icon: CheckCircle2,
      title: "Transparent Execution",
      description:
        "No hidden costs, no surprise timelines, no vague deliverables. We communicate with complete clarity at every stage—from discovery through deployment and beyond—because trust is earned through honesty.",
    },
  ];

  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-violet-300" />
            <span
              className="text-violet-600 text-xs font-medium tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
              }}
            >
              Our Philosophy
            </span>
            <span className="w-8 h-px bg-violet-300" />
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-4"
            style={{
              fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
            }}
          >
            How We{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Work With You
            </span>
          </h2>

          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Partnership principles that define every client relationship we build.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white via-slate-50/50 to-violet-50/30 border border-violet-100/60 hover:border-violet-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-md shadow-purple-300/30">
                <principle.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>

              <h3
                className="text-lg font-semibold text-slate-800 mb-2"
                style={{
                  fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                }}
              >
                {principle.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5: PARTNERSHIP VISUAL — Professional Image Frame
// ============================================================================

function PartnershipVisualSection() {
  return (
    <section className="relative py-10 md:py-12 bg-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(237, 233, 254, 0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Professional Image Frame */}
          <div className="relative rounded-xl overflow-hidden shadow-xl shadow-purple-500/10 border border-violet-100">
            {/* Image */}
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/about-partnership-support-team.jpg"
                alt="Josea Development Team - Partnership and Support"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />

              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            {/* Caption Badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg border border-violet-100">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                <span
                  className="text-xs font-medium text-slate-800"
                  style={{
                    fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                  }}
                >
                  Our dedicated team, committed to your success
                </span>
              </div>
            </div>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-20 blur-2xl" />
          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6: OFFICE & CONTACT INFO — Subtle Mention
// ============================================================================

function OfficeInfoSection() {
  return (
    <section className="relative py-8 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-violet-100 shadow-sm"
        >
          <Building2 className="w-5 h-5 text-violet-600" strokeWidth={1.5} />
          <div className="text-left">
            <p className="text-xs text-slate-500 mb-0.5">Based in Nairobi</p>
            <p className="text-sm font-medium text-slate-800">
              Westpoint Building, Mpaka Road{" "}
              <span className="text-slate-500 font-normal">• Remote-first team</span>
            </p>
          </div>
        </motion.div>

        <p className="mt-4 text-xs text-slate-500 max-w-md mx-auto">
          We work flexibly across Kenya and East Africa, meeting clients where it makes sense.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 7: FINAL CTA
// ============================================================================

function FinalCTASection() {
  return (
    <section className="relative py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-5 leading-tight"
            style={{
              fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
            }}
          >
            Ready to Build{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Enterprise Software
            </span>{" "}
            That Fits?
          </h2>

          {/* Subtext */}
          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your operational challenges and architect a solution that drives
            measurable results. No sales pitch—just honest technical consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONSULTATION_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full font-medium text-white text-base shadow-xl shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="tracking-wide">Schedule a Consultation</span>
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </motion.button>
            </a>

            {/* Secondary Button */}
            <Link href="/">
              <motion.button
                className="px-7 py-3.5 border-2 border-slate-200 hover:border-violet-200 rounded-full font-medium text-slate-700 hover:text-violet-700 text-base transition-all duration-300 bg-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Solutions
              </motion.button>
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
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FounderVisionSection />
      <TechnicalCapabilitiesSection />
      <ApproachSection />
      <PartnershipVisualSection />
      <OfficeInfoSection />
      <FinalCTASection />
      <Footer />

      {/* Floating CTAs */}
      <FloatingWhatsAppCTA />
      <JoseaAI />
    </main>
  );
}
