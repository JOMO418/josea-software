"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Hexagon,
  Layers,
  Gem,
  CircuitBoard,
  ArrowRight,
  Check,
  Award,
  ShieldCheck,
  FileCode2,
  Globe2,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================================
// HERO SECTION - Compact Elegant Command Center
// ============================================================================
const HeroSection = () => {
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
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900/90 to-indigo-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(167, 139, 250, 0.25) 0%, transparent 60%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.2) 0%, transparent 70%)'
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <Hexagon className="w-3.5 h-3.5 text-violet-300" strokeWidth={1.5} />
              <span
                className="text-xs tracking-[0.2em] text-violet-200/90"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
              >
                OPERATIONS SUITE
              </span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5 tracking-tight"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            <span className="text-white/95">The </span>
            <span className="bg-gradient-to-r from-violet-200 via-purple-100 to-violet-200 bg-clip-text text-transparent">
              Intelligent Backbone
            </span>
            <br />
            <span className="text-white/95">of African Enterprise</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-violet-100/70 max-w-2xl mx-auto leading-relaxed mb-8 font-light"
          >
            From the corner shop to the corporate tower—one system to{" "}
            <span className="text-white/90 font-normal">unify</span>,{" "}
            <span className="text-white/90 font-normal">automate</span>, and{" "}
            <span className="text-white/90 font-normal">scale</span>{" "}
            your entire operation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#choose-scale">
              <motion.button
                className="group relative px-6 py-3 bg-white rounded-full font-medium text-violet-950 text-sm shadow-xl shadow-purple-900/20 overflow-hidden"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="px-6 py-3 border border-white/25 hover:border-white/40 rounded-full font-medium text-white/90 hover:text-white text-sm transition-all duration-300 backdrop-blur-sm tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Speak to a Consultant
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade to White */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
};

// ============================================================================
// HOLOGRAPHIC DOORS SECTION - Compact
// ============================================================================

interface DoorProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  variant: "lite" | "pro" | "enterprise";
  badge?: string;
  icon: React.ElementType;
}

const HolographicDoor = ({
  title,
  description,
  features,
  href,
  variant,
  badge,
  icon: Icon,
}: DoorProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    lite: {
      cardBg: "bg-gradient-to-br from-white via-violet-50/50 to-purple-50/30",
      hoverBg: "bg-gradient-to-br from-white via-violet-50 to-purple-100/50",
      borderColor: "border-violet-200/60",
      hoverBorder: "border-violet-300",
      iconBg: "bg-gradient-to-br from-violet-100 to-purple-100",
      iconColor: "text-violet-600",
      accentColor: "text-violet-600",
      shadowColor: "shadow-violet-200/50",
    },
    pro: {
      cardBg: "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50",
      hoverBg: "bg-gradient-to-br from-violet-100/80 via-purple-100/80 to-indigo-100/80",
      borderColor: "border-purple-300/60",
      hoverBorder: "border-purple-400",
      iconBg: "bg-gradient-to-br from-violet-200 to-purple-200",
      iconColor: "text-purple-700",
      accentColor: "text-purple-700",
      shadowColor: "shadow-purple-300/50",
    },
    enterprise: {
      cardBg: "bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100",
      hoverBg: "bg-gradient-to-br from-violet-200/90 via-purple-200/90 to-indigo-200/90",
      borderColor: "border-purple-400/50",
      hoverBorder: "border-purple-500",
      iconBg: "bg-gradient-to-br from-violet-600 to-purple-700",
      iconColor: "text-white",
      accentColor: "text-purple-800",
      shadowColor: "shadow-purple-400/40",
    },
  };

  const style = variants[variant];

  return (
    <Link href={href}>
      <motion.div
        className="relative h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <motion.div
          className={`
            relative h-full rounded-2xl overflow-hidden cursor-pointer
            border ${isHovered ? style.hoverBorder : style.borderColor}
            ${isHovered ? style.hoverBg : style.cardBg}
            transition-colors duration-300
          `}
          animate={{
            boxShadow: isHovered
              ? `0 20px 50px -15px rgba(139, 92, 246, 0.25), 0 8px 25px -8px rgba(139, 92, 246, 0.15)`
              : `0 4px 15px -5px rgba(139, 92, 246, 0.1)`,
            y: isHovered ? -6 : 0,
            scale: isHovered ? 1.01 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Subtle Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237c3aed' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 55%, transparent 60%)`,
              transform: 'translateX(-100%)',
            }}
            animate={{ transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)' }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />

          {/* Badge */}
          {badge && (
            <motion.div
              className="absolute top-4 right-4 z-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
            >
              <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg shadow-amber-500/30">
                <Award className="w-3 h-3 text-white" strokeWidth={2} />
                <span className="text-[9px] font-bold text-white tracking-wider uppercase">
                  {badge}
                </span>
              </div>
            </motion.div>
          )}

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col p-5 lg:p-6">
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center mb-4 shadow-md ${style.shadowColor}`}
              animate={{ scale: isHovered ? 1.05 : 1, rotate: isHovered ? 2 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Icon className={`w-5 h-5 ${style.iconColor}`} strokeWidth={1.5} />
            </motion.div>

            {/* Title */}
            <h3
              className="text-xl font-semibold text-slate-800 mb-2"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              {title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 mb-4 leading-relaxed font-light text-sm">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-5 flex-grow">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2"
                  animate={{ opacity: isHovered ? 1 : 0.8, x: isHovered ? 2 : 0 }}
                  transition={{ delay: idx * 0.02 }}
                >
                  <div className={`w-4 h-4 rounded-full ${style.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className={`w-2.5 h-2.5 ${style.iconColor}`} strokeWidth={2.5} />
                  </div>
                  <span className="text-xs text-slate-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              className={`flex items-center gap-1.5 font-medium text-sm ${style.accentColor}`}
              animate={{ x: isHovered ? 4 : 0 }}
            >
              <span className="tracking-wide">
                {isHovered ? "Get Started" : "Learn More"}
              </span>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${isHovered ? "translate-x-0.5" : ""}`}
                strokeWidth={2}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const PortalsSection = () => {
  const doors: DoorProps[] = [
    {
      variant: "lite",
      title: "Retail Lite",
      description:
        "The perfect launchpad for small businesses. Clean, fast, and intuitive.",
      features: [
        "Quick-setup Point of Sale",
        "Basic inventory tracking",
        "Sales reports & analytics",
        "Single-store operations",
        "Mobile-first design",
      ],
      href: "/products/retail-lite",
      icon: Layers,
    },
    {
      variant: "pro",
      title: "Retail Pro",
      description:
        "Built for growing businesses. Multi-location support and powerful automation.",
      features: [
        "Multi-store management",
        "Advanced inventory & warehousing",
        "Staff management & permissions",
        "Supplier & purchase orders",
        "Customer loyalty programs",
        "API integrations",
      ],
      href: "/products/retail-pro",
      icon: CircuitBoard,
    },
    {
      variant: "enterprise",
      title: "Enterprise OS",
      description:
        "Complete operating system for industry leaders. Unlimited customization.",
      features: [
        "Full ERP capabilities",
        "Custom module development",
        "Dedicated cloud infrastructure",
        "24/7 priority support",
        "Data analytics & BI tools",
        "Unlimited integrations",
        "On-premise deployment",
      ],
      href: "/products/enterprise-os",
      badge: "Recommended",
      icon: Gem,
    },
  ];

  return (
    <section
      id="choose-scale"
      className="relative pt-6 pb-14 md:pt-8 md:pb-20 bg-white overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(237, 233, 254, 0.5) 0%, transparent 60%)'
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
            className="inline-block px-4 py-1.5 mb-4 text-[10px] font-medium tracking-[0.2em] text-violet-700 border border-violet-200 rounded-full bg-violet-50"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            SCALABLE SOLUTIONS
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-3"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Operational Scale
            </span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto font-light">
            Three pathways, one unified vision. Select the foundation that matches your ambition.
          </p>
        </motion.div>

        {/* Doors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {doors.map((door, idx) => (
            <motion.div
              key={door.variant}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <HolographicDoor {...door} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// WHY US SECTION - Refined Enterprise Pitch
// ============================================================================
const WhyUsSection = () => {
  const reasons = [
    {
      icon: FileCode2,
      title: "Bespoke Solutions",
      description:
        "Tailored systems built around your unique workflow. No forced templates—just software that fits like a glove.",
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      description:
        "256-bit encryption, role-based access, and audit trails. Your data stays yours—protected, private, compliant.",
    },
    {
      icon: Globe2,
      title: "Multi-Device Ecosystem",
      description:
        "Desktop, tablet, mobile—seamlessly synced. Manage operations from anywhere, on any device, online or offline.",
    },
    {
      icon: Layers,
      title: "KRA, M-Pesa & Beyond",
      description:
        "Native integrations with KRA eTIMS, M-Pesa, banks, and 50+ third-party services. One click, fully connected.",
    },
    {
      icon: CircuitBoard,
      title: "Future-Ready Architecture",
      description:
        "Built to scale with your ambition. Add modules, users, and locations without performance compromise.",
    },
  ];

  return (
    <section className="relative pt-8 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/40 to-purple-50/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-3"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Why Industry Leaders Choose{" "}
            <span className="bg-gradient-to-r from-violet-700 via-purple-600 to-violet-700 bg-clip-text text-transparent">
              Josea
            </span>
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto font-light">
            Enterprise-grade capabilities. African-first design. Unmatched reliability.
          </p>
        </motion.div>

        {/* Reasons - Sophisticated Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
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
                {/* Icon + Title Row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md shadow-purple-300/40">
                    <reason.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-base font-semibold text-slate-800"
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                  >
                    {reason.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-500 leading-relaxed text-sm pl-[52px]">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/contact">
            <motion.button
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full font-medium text-white text-sm shadow-xl shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tracking-wide">Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PortalsSection />
      <WhyUsSection />
      <Footer />
    </main>
  );
}
