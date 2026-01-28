"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react";

// ============================================
// MASTERPIECE LOGO COMPONENT - Ultra Premium
// ============================================
function MasterpieceLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group relative flex items-center gap-2.5 sm:gap-3.5">
      {/* ===== ELEGANT MONOGRAM EMBLEM ===== */}
      <div className="relative">
        {/* Ambient glow - always visible, intensifies on hover */}
        <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

        {/* Secondary pulse glow */}
        <div className="absolute -inset-1.5 bg-gradient-conic from-purple-600 via-violet-600 via-indigo-600 via-purple-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 group-hover:animate-spin-slow" />

        {/* Main emblem container */}
        <motion.div
          className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Multi-layer gradient border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 p-[2px] shadow-lg shadow-purple-500/20">
            {/* Inner glow layer */}
            <div className="absolute inset-[2px] rounded-[10px] bg-gradient-to-br from-white via-purple-50/50 to-white opacity-90" />
            <div className="relative w-full h-full rounded-[10px] bg-gradient-to-br from-white via-slate-50 to-white group-hover:from-purple-50/80 group-hover:via-white group-hover:to-violet-50/80 transition-all duration-500" />
          </div>

          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          </div>

          {/* The "J" Monogram - with subtle shadow */}
          <span
            className="relative z-10 text-2xl sm:text-[1.75rem] font-black bg-gradient-to-br from-purple-700 via-violet-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm select-none"
            style={{
              fontFamily: "'Palatino Linotype', 'Book Antiqua', 'Georgia', serif",
              textShadow: '0 1px 2px rgba(139, 92, 246, 0.1)'
            }}
          >
            J
          </span>

          {/* Premium corner accent - animated pulse */}
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-400 to-orange-500 rounded-full group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
            <div className="absolute inset-[1px] bg-gradient-to-br from-amber-200 to-amber-400 rounded-full" />
          </div>

          {/* Bottom accent line */}
          <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50 group-hover:w-6 group-hover:opacity-80 transition-all duration-300" />
        </motion.div>
      </div>

      {/* ===== TYPOGRAPHY SECTION ===== */}
      <div className="flex flex-col gap-0.5">
        {/* Main Brand Name Row */}
        <div className="flex items-baseline gap-2">
          {/* JOSEA - Primary wordmark */}
          <motion.span
            className={`font-black bg-gradient-to-r from-slate-800 via-purple-900 to-slate-800 bg-clip-text text-transparent bg-[length:200%_100%] group-hover:from-purple-600 group-hover:via-violet-600 group-hover:to-indigo-600 transition-all duration-700 ${
              compact ? 'text-xl' : 'text-[1.4rem] sm:text-[1.65rem]'
            }`}
            style={{
              fontFamily: "'Palatino Linotype', 'Book Antiqua', 'Georgia', serif",
              letterSpacing: '0.04em'
            }}
            whileHover={{ letterSpacing: '0.06em' }}
            transition={{ duration: 0.3 }}
          >
            JOSEA
          </motion.span>

          {/* Luxury separator - vertical bar */}
          <span className="hidden sm:block w-[1.5px] h-4 bg-gradient-to-b from-transparent via-purple-300 to-transparent opacity-60" />

          {/* SOFTWARE - Desktop inline */}
          <span
            className={`hidden lg:inline-block font-semibold tracking-[0.18em] uppercase bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent ${
              compact ? 'text-[0.55rem]' : 'text-[0.6rem]'
            }`}
          >
            SOFTWARE
          </span>
        </div>

        {/* Tagline Row with decorative elements */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Left decorative flourish */}
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-purple-400/60 group-hover:bg-purple-500 transition-colors duration-300" />
            <div className="w-6 h-[1px] bg-gradient-to-r from-purple-400 to-purple-300/0 group-hover:w-8 transition-all duration-500" />
          </div>

          {/* SOFTWARE SOLUTIONS text */}
          <div className="relative">
            {/* Mobile: Full text */}
            <span
              className={`lg:hidden font-semibold tracking-[0.22em] uppercase bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent ${
                compact ? 'text-[0.45rem]' : 'text-[0.5rem] sm:text-[0.55rem]'
              }`}
            >
              SOFTWARE SOLUTIONS
            </span>
            {/* Desktop: Just SOLUTIONS */}
            <span
              className={`hidden lg:inline-block font-semibold tracking-[0.22em] uppercase bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent ${
                compact ? 'text-[0.55rem]' : 'text-[0.6rem]'
              }`}
            >
              SOLUTIONS
            </span>
          </div>

          {/* Right decorative flourish */}
          <div className="hidden sm:flex items-center gap-1">
            <div className="w-6 h-[1px] bg-gradient-to-l from-purple-400 to-purple-300/0 group-hover:w-8 transition-all duration-500" />
            <div className="w-1 h-1 rounded-full bg-purple-400/60 group-hover:bg-purple-500 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* ===== HOVER UNDERLINE ACCENT ===== */}
      <div className="absolute -bottom-2 left-0 right-0 h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-full" />
      </div>
    </Link>
  );
}

// ============================================
// MOBILE MENU LOGO - Refined Compact Version
// ============================================
function MobileMenuLogo() {
  return (
    <div className="flex items-center justify-center gap-3 py-3">
      {/* Emblem */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 p-[2px] shadow-md shadow-purple-500/20">
          <div className="w-full h-full rounded-[10px] bg-gradient-to-br from-white via-slate-50 to-white" />
        </div>

        {/* J letter */}
        <span
          className="relative z-10 text-xl font-black bg-gradient-to-br from-purple-700 via-violet-600 to-indigo-700 bg-clip-text text-transparent"
          style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', 'Georgia', serif" }}
        >
          J
        </span>

        {/* Golden accent */}
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-500 rounded-full" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-amber-200 to-amber-400 rounded-full" />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <span
          className="text-lg font-black tracking-wide bg-gradient-to-r from-slate-800 via-purple-900 to-slate-800 bg-clip-text text-transparent"
          style={{
            fontFamily: "'Palatino Linotype', 'Book Antiqua', 'Georgia', serif",
            letterSpacing: '0.04em'
          }}
        >
          JOSEA
        </span>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-purple-400/60" />
          <span className="text-[0.5rem] font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
            SOFTWARE SOLUTIONS
          </span>
          <div className="w-1 h-1 rounded-full bg-purple-400/60" />
        </div>
      </div>
    </div>
  );
}

// ============================================
// THE THREE GRAND GATEWAYS - Enterprise Suite Navigation
// ============================================
const suiteGateways = [
  {
    id: "operations",
    title: "Josea Operations",
    subtitle: "The Brain",
    tagline: "Command your business",
    description: "Enterprise-grade ERP, Inventory Management & Point of Sale systems engineered for African businesses ready to scale.",
    mobileDesc: "ERP, Inventory & POS systems.",
    icon: Cpu,
    href: "/suites/operations",
    iconGradient: "from-violet-500 to-purple-600",
    textAccent: "text-violet-600",
    hoverBg: "hover:bg-violet-50/50",
  },
  {
    id: "digital",
    title: "Josea Digital",
    subtitle: "The Face",
    tagline: "Own your presence",
    description: "Premium web experiences, e-commerce platforms & growth marketing strategies that convert visitors into loyal customers.",
    mobileDesc: "Web, E-commerce & Marketing.",
    icon: Globe,
    href: "/suites/digital",
    iconGradient: "from-blue-500 to-indigo-600",
    textAccent: "text-blue-600",
    hoverBg: "hover:bg-blue-50/50",
  },
  {
    id: "industries",
    title: "Industries",
    subtitle: "The Context",
    tagline: "Built for your sector",
    description: "We architect enterprise-level systems tailored for a vast range of industries — from Education & Healthcare to Retail, Logistics & beyond.",
    mobileDesc: "Enterprise systems for all sectors.",
    icon: Building2,
    href: "/industries",
    iconGradient: "from-amber-500 to-orange-600",
    textAccent: "text-amber-600",
    hoverBg: "hover:bg-amber-50/50",
  },
];

const navLinks = [
  { name: "Pricing", href: "/#pricing" },
  { name: "How We Work", href: "/#how-we-work" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Track scroll for subtle shadow enhancement using framer-motion's optimized scroll handling
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 10;
    // Only update state if the value actually changes to prevent unnecessary re-renders
    if (shouldBeScrolled !== scrolledRef.current) {
      scrolledRef.current = shouldBeScrolled;
      setScrolled(shouldBeScrolled);
    }
  });

  return (
    <>
      {/* Floating Glass Navbar */}
      <nav
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-xl shadow-purple-900/10" : "shadow-lg shadow-purple-900/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Masterpiece Logo */}
            <MasterpieceLogo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Products Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white/60 transition-all duration-200">
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ============================================
                    SPACIOUS PREMIUM MEGA MENU - Desktop
                    ============================================ */}
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="relative w-[780px] bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/60 overflow-hidden">
                        {/* Top gradient accent */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-amber-500" />

                        {/* Three Column Grid */}
                        <div className="p-3">
                          <div className="grid grid-cols-3 gap-2">
                            {suiteGateways.map((gateway, index) => (
                              <Link
                                key={gateway.id}
                                href={gateway.href}
                                className="group relative"
                              >
                                <motion.div
                                  initial={{ opacity: 0, y: 16 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay: index * 0.06,
                                    duration: 0.35,
                                    ease: [0.23, 1, 0.32, 1]
                                  }}
                                  className={`relative flex flex-col h-full p-5 rounded-xl bg-white border border-slate-100 ${gateway.hoverBg} hover:border-slate-200 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300`}
                                >
                                  {/* Icon */}
                                  <div className="relative mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gateway.iconGradient} flex items-center justify-center shadow-lg shadow-slate-900/10 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}>
                                      <gateway.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                                    </div>
                                  </div>

                                  {/* Subtitle */}
                                  <span className={`text-[0.65rem] font-semibold tracking-[0.12em] uppercase ${gateway.textAccent} mb-1`}>
                                    {gateway.subtitle}
                                  </span>

                                  {/* Title */}
                                  <h3
                                    className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight"
                                    style={{ fontFamily: "'Georgia', 'Palatino Linotype', serif" }}
                                  >
                                    {gateway.title}
                                  </h3>

                                  {/* Tagline */}
                                  <p className="text-sm font-medium text-slate-700 mb-2">
                                    {gateway.tagline}
                                  </p>

                                  {/* Description */}
                                  <p className="text-[0.8rem] text-slate-500 leading-relaxed flex-1">
                                    {gateway.description}
                                  </p>

                                  {/* CTA */}
                                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                                    <span className={`text-sm font-semibold ${gateway.textAccent}`}>
                                      Explore
                                    </span>
                                    <ArrowRight className={`w-4 h-4 ${gateway.textAccent} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`} />
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-4 bg-slate-50/80 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span className="text-sm text-slate-600">
                                Trusted by <span className="font-semibold text-slate-800">500+</span> African businesses
                              </span>
                            </div>
                            <a
                              href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20your%20solutions%20can%20help%20my%20business."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/cta flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg hover:from-violet-700 hover:to-indigo-700 shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-200"
                            >
                              Schedule a Consultation
                              <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Links */}
              {!isHomePage && (
                <Link
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white/60 transition-all duration-200"
                >
                  Home
                </Link>
              )}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white/60 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Shimmer Button */}
              <a
                href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I%27m%20interested%20in%20getting%20started%20with%20your%20software%20solutions.%20Please%20assist%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 text-sm font-semibold text-white bg-brand-gradient rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]"
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10">Get Started</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-600 hover:text-slate-900 hover:bg-white/60 rounded-xl transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separate floating panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
              className="fixed top-24 left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl shadow-purple-900/15 overflow-hidden">
                <div className="p-6 space-y-2">
                  {/* Mobile Logo Header */}
                  <div className="pb-4 mb-2 border-b border-slate-100">
                    <MobileMenuLogo />
                  </div>

                  {/* ============================================
                      MOBILE: Compact Products Menu
                      ============================================ */}
                  <div className="pb-1">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      Products
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          mobileProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="py-1 px-1">
                            {suiteGateways.map((gateway) => (
                              <Link
                                key={gateway.id}
                                href={gateway.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg active:bg-slate-50 transition-colors"
                              >
                                <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${gateway.iconGradient} flex items-center justify-center shadow-sm`}>
                                  <gateway.icon className="w-4 h-4 text-white" strokeWidth={2} />
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm font-semibold text-slate-900">
                                      {gateway.title}
                                    </h3>
                                    <span className={`text-[0.55rem] font-medium uppercase ${gateway.textAccent} opacity-60`}>
                                      {gateway.subtitle}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-500">
                                    {gateway.mobileDesc}
                                  </p>
                                </div>

                                <ArrowRight className="w-4 h-4 text-slate-300" />
                              </Link>
                            ))}

                            {/* Compact CTA */}
                            <div className="mt-2 pt-2 border-t border-slate-100">
                              <a
                                href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I%27d%20like%20to%20schedule%20a%20consultation%20to%20discuss%20how%20your%20solutions%20can%20help%20my%20business."
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-1.5 w-full py-2 text-xs font-semibold text-violet-600"
                              >
                                Schedule a Consultation
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100" />

                  {/* Other Links */}
                  {!isHomePage && (
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
                    >
                      Home
                    </Link>
                  )}
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}

                  {/* Divider */}
                  <div className="h-px bg-slate-100" />

                  {/* Action Button */}
                  <div className="pt-2">
                    <a
                      href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I%27m%20interested%20in%20getting%20started%20with%20your%20software%20solutions.%20Please%20assist%20me."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="group relative block w-full py-3 text-center text-base font-semibold text-white bg-brand-gradient rounded-xl overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      <span className="relative z-10">Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
