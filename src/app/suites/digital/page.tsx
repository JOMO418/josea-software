"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, CheckCircle, Globe, Code, ShoppingCart, Palette, Zap, Headphones, Hexagon } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================================
// FONTS
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
// WHATSAPP CONFIGURATION
// ============================================================================
const WHATSAPP_NUMBER = "254746554150";
const DIGITAL_MESSAGE = "Hi Josea Team, I'm interested in your digital services.";

// ============================================================================
// WHATSAPP ICON
// ============================================================================
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ============================================================================
// PRICING DATA
// ============================================================================
interface DigitalService {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: { text: string; bold?: boolean }[];
  ctaText: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
}

const digitalServices: DigitalService[] = [
  {
    id: "business-web",
    name: "Business Web",
    description: "Professional online presence to establish credibility.",
    price: "KES 10,000",
    priceSubtext: "One-time investment",
    features: [
      { text: "5-Page Professional Website" },
      { text: "Mobile Responsive Design" },
      { text: "Basic SEO Setup (Google Maps)" },
      { text: "1 Year Free Domain & Hosting" },
      { text: "Contact Form Integration" },
    ],
    ctaText: "Launch My Site",
  },
  {
    id: "ecommerce-pro",
    name: "E-Commerce Pro",
    description: "Full online store to sell products 24/7.",
    price: "KES 20,000",
    priceSubtext: "One-time investment",
    features: [
      { text: "Complete Online Storefront", bold: true },
      { text: "M-Pesa & Card Payment Integration", bold: true },
      { text: "Inventory Sync (with Josea Ops)" },
      { text: "1 Year Free Domain & Hosting" },
      { text: "Product Management Dashboard" },
      { text: "Abandoned Cart Recovery" },
    ],
    ctaText: "Start Selling Online",
    isPopular: true,
  },
  {
    id: "custom-web",
    name: "Custom Web Solutions",
    description: "Complex web applications and custom integrations.",
    price: "Custom Quote",
    priceSubtext: "Tailored to project scope.",
    features: [
      { text: "Custom Web Applications", bold: true },
      { text: "API Integrations (ERP, CRM)", bold: true },
      { text: "Advanced Marketing Automation" },
      { text: "Dedicated Project Manager" },
      { text: "Full Brand Identity (Optional)" },
    ],
    ctaText: "Discuss My Project",
    isEnterprise: true,
  },
];

// ============================================================================
// PROCESS DATA
// ============================================================================
const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We understand your brand, audience, and goals. A focused consultation defines scope, timeline, and deliverables.",
  },
  {
    number: "2",
    title: "Design & Development",
    description:
      "Our team designs and builds your site with precision. You review progress at key milestones and provide feedback.",
  },
  {
    number: "3",
    title: "Deploy & Support",
    description:
      "We launch your site, provide training, and offer ongoing maintenance. Your digital presence goes live with confidence.",
  },
];

// ============================================================================
// SERVICE CARD COMPONENT
// ============================================================================
function ServiceCard({ service, isHighlighted = false }: { service: DigitalService; isHighlighted?: boolean }) {
  const isPopular = service.isPopular;
  const isEnterprise = service.isEnterprise;

  const whatsappMessage = encodeURIComponent(
    `Hi Josea Team, I'm interested in your ${service.name} package. Could you share more details?`
  );

  let cardStyles =
    "relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300";

  if (isHighlighted) {
    // Highlighted card styling
    cardStyles +=
      " bg-gradient-to-br from-violet-600/95 via-purple-600/90 to-indigo-600/95 backdrop-blur-xl border-2 border-green-400 ring-4 ring-green-400/50 shadow-[0_0_60px_rgba(34,197,94,0.4),0_0_100px_rgba(139,92,246,0.3)] lg:scale-110 z-20 animate-pulse-glow";
  } else if (isPopular) {
    cardStyles +=
      " bg-gradient-to-br from-violet-600/90 via-purple-600/85 to-indigo-600/90 backdrop-blur-xl border-2 border-purple-300/50 shadow-[0_0_50px_rgba(139,92,246,0.3)] lg:scale-105 z-10";
  } else if (isEnterprise) {
    cardStyles +=
      " bg-gradient-to-br from-violet-100/80 via-purple-100/70 to-indigo-100/80 backdrop-blur-xl border border-purple-200/60 hover:border-purple-300/80";
  } else {
    cardStyles +=
      " bg-gradient-to-br from-violet-100/80 via-purple-100/70 to-indigo-100/80 backdrop-blur-xl border border-purple-200/60 hover:border-purple-300/80";
  }

  let buttonStyles =
    "w-full py-4 px-6 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ";

  if (isHighlighted || isPopular) {
    buttonStyles +=
      "bg-white text-purple-700 hover:bg-purple-50 hover:shadow-lg shadow-purple-900/20";
  } else {
    buttonStyles +=
      "bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 shadow-md shadow-purple-300/30";
  }

  // Determine text colors based on card state
  const isDarkCard = isHighlighted || isPopular;

  return (
    <motion.div
      id={service.id}
      className={cardStyles}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Highlighted Badge */}
      {isHighlighted && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30"
          initial={{ scale: 0, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div className="flex items-center gap-1.5 px-4 py-1.5 bg-green-500 rounded-full shadow-lg shadow-green-500/40">
            <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            <span className="text-[10px] font-bold text-white tracking-wider uppercase">
              Recommended For You
            </span>
          </div>
        </motion.div>
      )}

      {/* Popular Badge (only if not highlighted) */}
      {isPopular && !isHighlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex-1">
        <h3 className={`text-2xl font-bold mb-2 ${isDarkCard ? "text-white" : "text-slate-800"}`}>
          {service.name}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${isDarkCard ? "text-purple-100/90" : "text-slate-600"}`}>
          {service.description}
        </p>

        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span
              className={`font-bold ${isDarkCard ? "text-white" : "text-slate-900"} ${isEnterprise ? "text-3xl" : "text-4xl"}`}
            >
              {service.price}
            </span>
            {!isEnterprise && (
              <span className={`text-sm ${isDarkCard ? "text-purple-200/80" : "text-slate-500"}`}>
                {service.priceSubtext}
              </span>
            )}
          </div>
          {isEnterprise && (
            <p className={`text-sm mt-2 ${isDarkCard ? "text-purple-200/70" : "text-slate-500"}`}>
              {service.priceSubtext}
            </p>
          )}
        </div>

        <ul className="space-y-4 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDarkCard ? "text-purple-200" : "text-purple-500"}`} />
              <span
                className={`text-sm ${feature.bold ? "font-semibold" : ""} ${isDarkCard ? "text-white/95" : "text-slate-700"}`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles}
      >
        {service.ctaText}
      </a>
    </motion.div>
  );
}

// ============================================================================
// HERO SECTION - Lighter Purple Gradient (Secondary to Operations)
// ============================================================================
function HeroSection() {
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

  return (
    <section className="relative min-h-[75vh] overflow-hidden flex items-center">
      {/* Lighter Purple Gradient Background - Secondary feel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-800 via-purple-700/90 to-indigo-800" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(196, 181, 253, 0.35) 0%, transparent 60%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Ambient Orbs - Lighter */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(221, 214, 254, 0.25) 0%, transparent 70%)'
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)'
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Suite Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-purple-200" strokeWidth={1.5} />
              <span
                className="text-xs tracking-[0.2em] text-purple-100/90"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
              >
                DIGITAL SUITE
              </span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5 tracking-tight"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            <span className="text-white/95">Your </span>
            <span className="bg-gradient-to-r from-purple-200 via-violet-100 to-purple-200 bg-clip-text text-transparent">
              Digital Storefront
            </span>
            <br />
            <span className="text-white/95">Built Right.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-purple-100/70 max-w-2xl mx-auto leading-relaxed mb-8 font-light"
          >
            Professional websites, e-commerce platforms, and custom web solutions that{" "}
            <span className="text-white/90 font-normal">extend your operations</span>{" "}
            online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#services">
              <motion.button
                className="group relative px-6 py-3 bg-white rounded-full font-medium text-purple-800 text-sm shadow-xl shadow-purple-900/20 overflow-hidden"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </span>
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button
                className="px-6 py-3 border border-white/25 hover:border-white/40 rounded-full font-medium text-white/90 hover:text-white text-sm transition-all duration-300 backdrop-blur-sm tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Pricing
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade to White */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}

// ============================================================================
// SERVICES SECTION (PRICING) - Light Purple Theme
// ============================================================================
function ServicesSection({ highlightPackage }: { highlightPackage: string | null }) {
  return (
    <section
      id="services"
      className="relative pt-6 pb-14 md:pt-8 md:pb-20 bg-white overflow-hidden"
    >
      {/* Subtle Background - Lighter purple */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(237, 233, 254, 0.6) 0%, transparent 60%)'
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
          <span
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-medium tracking-[0.2em] text-purple-700 border border-purple-200 rounded-full bg-purple-50"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            WEB SOLUTIONS
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-3"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            What We{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto font-light">
            From simple business websites to full-featured e-commerce platforms,
            we craft digital experiences that convert.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {digitalServices.map((service, index) => {
            const isHighlighted = highlightPackage === service.id;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={isHighlighted ? "lg:scale-105 z-20" : ""}
              >
                <ServiceCard service={service} isHighlighted={isHighlighted} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PROCESS SECTION
// ============================================================================
function ProcessSection() {
  return (
    <section className="relative pt-8 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Gradient Background - Lighter */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-purple-50/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-3"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            How We Build Your{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto font-light">
            A streamlined process designed for clarity, quality, and results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Number circle */}
              <div className="inline-flex w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white items-center justify-center text-xl font-bold mb-5 shadow-lg shadow-purple-300/40 group-hover:shadow-purple-400/50 transition-shadow">
                {step.number}
              </div>

              <h3
                className="text-lg font-semibold text-slate-800 mb-2"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
              >
                {step.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WHY CHOOSE US SECTION
// ============================================================================
function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Palette,
      title: "Modern Design",
      description:
        "Clean, contemporary aesthetics that reflect your brand and engage your audience.",
    },
    {
      icon: ShoppingCart,
      title: "M-Pesa Ready",
      description:
        "Seamless payment integration with M-Pesa, cards, and local payment methods.",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description:
        "Built for search engines from day one. Get found by customers looking for you.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "We don't disappear after launch. Continuous support and updates included.",
    },
  ];

  return (
    <section className="relative py-14 md:py-20 bg-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(237, 233, 254, 0.4) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-3"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              Josea Digital
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="h-full p-5 rounded-2xl bg-white border border-purple-100/80 shadow-sm hover:shadow-lg hover:shadow-purple-200/30 hover:border-purple-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-md shadow-purple-300/40 group-hover:scale-105 transition-transform">
                  <reason.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-base font-semibold text-slate-800 mb-2"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  {reason.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {reason.description}
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
// CTA SECTION - Lighter Purple Gradient
// ============================================================================
function CTASection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Lighter Purple Gradient - feels secondary */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700 via-purple-600/95 to-indigo-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 80%, rgba(196, 181, 253, 0.2) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Ready to Take Your Business{" "}
            <span className="bg-gradient-to-r from-purple-200 via-violet-100 to-purple-200 bg-clip-text text-transparent">
              Online?
            </span>
          </h2>

          <p className="text-purple-100/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-light">
            From concept to launch, we build digital solutions that work as hard as you do.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DIGITAL_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white text-purple-700 rounded-full font-medium text-sm shadow-xl shadow-purple-900/20 hover:shadow-2xl hover:shadow-purple-900/30 transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="tracking-wide">Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <Link href="/suites/operations">
              <motion.button
                className="px-6 py-3 border border-white/25 hover:border-white/40 rounded-full font-medium text-white/90 hover:text-white text-sm transition-all duration-300 backdrop-blur-sm tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Operations Suite
              </motion.button>
            </Link>
          </div>

          <p className="mt-8 text-purple-200/60 text-xs">
            Free consultation • No commitment • Response within 24 hours
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/20 to-transparent" />
    </section>
  );
}

// ============================================================================
// TOAST NOTIFICATION COMPONENT
// ============================================================================
const RecommendationToast = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -100, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -100, x: "-50%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-24 left-1/2 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-green-500/30 flex items-center gap-3 max-w-md"
        >
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <p className="font-semibold text-sm">Perfect Match Found!</p>
            <p className="text-white/90 text-xs">
              This package is recommended for your business.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// MAIN PAGE CONTENT (with search params handling)
// ============================================================================
function DigitalPageContent() {
  const searchParams = useSearchParams();
  const [showNotification, setShowNotification] = useState(false);
  const [highlightPackage, setHighlightPackage] = useState<string | null>(null);

  // Check for routing params from Industries page
  useEffect(() => {
    const highlight = searchParams.get("highlight");
    const message = searchParams.get("message");

    if (highlight && message === "recommended") {
      setHighlightPackage(highlight);
      setShowNotification(true);

      // Scroll to the package after a brief delay
      setTimeout(() => {
        const element = document.getElementById(highlight);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 800);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  }, [searchParams]);

  return (
    <>
      <RecommendationToast show={showNotification} />
      <HeroSection />
      <ServicesSection highlightPackage={highlightPackage} />
      <ProcessSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function JoseaDigitalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <DigitalPageContent />
      </Suspense>
      <Footer />
    </main>
  );
}
