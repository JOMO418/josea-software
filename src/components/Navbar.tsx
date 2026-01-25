"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Cpu,
  Globe,
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

const productsMenu = {
  operations: {
    title: "JOSEA OPERATIONS",
    description: "Enterprise-grade business management",
    icon: Cpu,
    color: "purple",
    items: [
      {
        name: "Retail Lite",
        description: "Perfect for small businesses",
        href: "/products/retail-lite",
      },
      {
        name: "Retail Pro",
        description: "Advanced inventory & analytics",
        href: "/products/retail-pro",
      },
      {
        name: "Enterprise OS",
        description: "Full-scale business operations",
        href: "/products/enterprise-os",
      },
    ],
  },
  digital: {
    title: "JOSEA DIGITAL",
    description: "Web presence & growth solutions",
    icon: Globe,
    color: "indigo",
    items: [
      {
        name: "Business Sites",
        description: "Professional web presence",
        href: "/products/business-sites",
      },
      {
        name: "E-Commerce",
        description: "Online store solutions",
        href: "/products/e-commerce",
      },
      {
        name: "Growth",
        description: "SEO & digital marketing",
        href: "/products/growth",
      },
    ],
  },
};

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for subtle shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] as const }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="relative bg-white/95 backdrop-blur-xl shadow-2xl shadow-purple-900/15 border border-white/60 rounded-2xl p-8 grid grid-cols-2 gap-10 w-[580px]">
                        {/* Decorative gradient orb */}
                        <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-gradient rounded-full" />

                        {/* Operations Column */}
                        <div className="space-y-5">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-purple-100 rounded-xl">
                              <Cpu className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-sm text-purple-600 tracking-wide">
                                {productsMenu.operations.title}
                              </h3>
                              <p className="text-xs text-slate-400">
                                {productsMenu.operations.description}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-1">
                            {productsMenu.operations.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50/80 transition-all duration-200"
                                >
                                  <div className="flex-1">
                                    <span className="block text-sm font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                      {item.description}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Digital Column */}
                        <div className="space-y-5">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-indigo-100 rounded-xl">
                              <Globe className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-sm text-indigo-600 tracking-wide">
                                {productsMenu.digital.title}
                              </h3>
                              <p className="text-xs text-slate-400">
                                {productsMenu.digital.description}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-1">
                            {productsMenu.digital.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="group flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50/80 transition-all duration-200"
                                >
                                  <div className="flex-1">
                                    <span className="block text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                      {item.description}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Links */}
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
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-white/60 transition-all duration-200"
              >
                Sign In
              </Link>

              {/* Shimmer Button */}
              <Link
                href="/get-started"
                className="group relative px-6 py-2.5 text-sm font-semibold text-white bg-brand-gradient rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]"
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative z-10">Get Started</span>
              </Link>
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

                  {/* Products Accordion */}
                  <div className="pb-2">
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      Products
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
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
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-4 space-y-6">
                            {/* Operations */}
                            <div className="px-4">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                  <Cpu className="w-4 h-4 text-purple-600" />
                                </div>
                                <span className="text-xs font-bold text-purple-600 tracking-wide uppercase">
                                  {productsMenu.operations.title}
                                </span>
                              </div>
                              <ul className="space-y-1 pl-2">
                                {productsMenu.operations.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all"
                                    >
                                      {item.name}
                                      <ArrowRight className="w-4 h-4 text-slate-300" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Digital */}
                            <div className="px-4">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="p-2 bg-indigo-100 rounded-lg">
                                  <Globe className="w-4 h-4 text-indigo-600" />
                                </div>
                                <span className="text-xs font-bold text-indigo-600 tracking-wide uppercase">
                                  {productsMenu.digital.title}
                                </span>
                              </div>
                              <ul className="space-y-1 pl-2">
                                {productsMenu.digital.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-all"
                                    >
                                      {item.name}
                                      <ArrowRight className="w-4 h-4 text-slate-300" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100" />

                  {/* Other Links */}
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

                  {/* Action Buttons */}
                  <div className="pt-2 space-y-3">
                    <Link
                      href="/sign-in"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full py-3 text-center text-base font-medium text-slate-700 border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/get-started"
                      onClick={() => setMobileMenuOpen(false)}
                      className="group relative block w-full py-3 text-center text-base font-semibold text-white bg-brand-gradient rounded-xl overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                      <span className="relative z-10">Get Started</span>
                    </Link>
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
