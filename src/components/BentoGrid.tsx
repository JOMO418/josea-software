"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isAI?: boolean;
}

const features: FeatureCard[] = [
  {
    title: "Enterprise-Grade Security",
    subtitle: "Bank-Level Data Protection",
    description:
      "256-bit AES encryption at rest and in transit. Role-based access control with granular permissions. Complete audit trails for compliance. Your business data protected by the same standards trusted by financial institutions.",
    image: "/security.png",
  },
  {
    title: "Multi-Device Ecosystem",
    subtitle: "Run Your Business From Anywhere",
    description:
      "Seamlessly operate across desktop, tablet, and mobile. Start a transaction on one device, complete it on another. Offline-first architecture ensures full functionality without internet—intelligent sync when you reconnect.",
    image: "/multi-device.png",
  },
  {
    title: "Josea AI Engine",
    subtitle: "Intelligence With Purpose",
    description:
      "Not AI for hype—AI for operational efficiency. Automates repetitive data entry, predicts stock requirements, identifies revenue patterns, and flags anomalies before they become problems. Technology serving your bottom line.",
    image: "/ai-brain.png",
    isAI: true,
  },
  {
    title: "Native Payment Integrations",
    subtitle: "M-Pesa, Banks & Beyond",
    description:
      "Direct M-Pesa STK push and automatic reconciliation. Bank integrations for real-time balance checks. Payment links via WhatsApp. Built for how African businesses actually transact—no workarounds needed.",
    image: "/mpesa.png",
  },
  {
    title: "Compliance & Communication",
    subtitle: "eTIMS, WhatsApp & More",
    description:
      "KRA eTIMS integration for seamless tax compliance. WhatsApp Business API for invoices, receipts, and customer updates. SMS notifications. The integrations that matter for Kenyan enterprise operations.",
    image: "/KRA.jpg",
  },
  {
    title: "Multi-Branch Scalability",
    subtitle: "Grow Without Limits",
    description:
      "Centralized control across unlimited locations. Real-time inventory sync between branches. Consolidated reporting and inter-branch transfers. Multi-currency support for regional expansion. Scale from one store to hundreds.",
    image: "/global.png",
  },
];

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative z-20 w-full bg-white overflow-hidden">
      {/* Top curved edge to create "slide over" effect */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white rounded-t-[2rem] -translate-y-7 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]" />

      {/* Subtle background accents */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(237, 233, 254, 0.5) 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 px-5 sm:px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-violet-300" />
            <span
              className="text-violet-600 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Why Josea
            </span>
            <span className="w-8 h-px bg-violet-300" />
          </div>

          {/* Headline */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-3 sm:mb-4"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              African Enterprise
            </span>
          </h2>

          {/* Subhead */}
          <p
            className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Technical excellence meets local understanding. Six pillars that set us apart.
          </p>
        </motion.div>

        {/* 6-Card Grid - 2x2 on mobile, 3x2 on desktop */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                feature.isAI
                  ? "bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 border-2 border-violet-300 shadow-lg shadow-violet-200/50 hover:shadow-xl hover:shadow-violet-300/50"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-violet-200"
              }`}
            >
              {/* AI Card Special Accent */}
              {feature.isAI && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 pointer-events-none" />
              )}

              {/* Image Area */}
              <div className="relative h-28 sm:h-36 md:h-44 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                {/* AI Badge */}
                {feature.isAI && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1.5 bg-violet-600 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span
                      className="text-[9px] sm:text-[10px] font-semibold text-white uppercase tracking-wider"
                      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                    >
                      AI-Powered
                    </span>
                  </div>
                )}
              </div>

              {/* Text Area */}
              <div className="relative p-3 sm:p-4 md:p-5">
                {/* Subtitle */}
                <span
                  className="text-[9px] sm:text-[10px] font-medium tracking-[0.1em] text-violet-500 uppercase block mb-1"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  {feature.subtitle}
                </span>

                {/* Title */}
                <h3
                  className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 mb-1.5 sm:mb-2 leading-tight group-hover:text-violet-700 transition-colors"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[10px] sm:text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-4 sm:line-clamp-none"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-slate-500 text-sm sm:text-base mb-5 font-light"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Enterprise capability. African understanding. Uncompromising quality.
          </p>
          <a
            href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I've%20been%20looking%20at%20your%20solutions%20and%20I'm%20interested%20in%20learning%20how%20Josea%20can%20help%20my%20business.%20Can%20we%20schedule%20a%20consultation%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full font-medium text-white text-sm shadow-lg shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="tracking-wide"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
              >
                Start a Conversation
              </span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
