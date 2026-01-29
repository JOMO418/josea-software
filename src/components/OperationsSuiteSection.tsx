"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Layers,
  CircuitBoard,
  Gem,
  Check,
  ArrowRight,
  Cog,
} from "lucide-react";

interface PackageCard {
  id: string;
  icon: React.ElementType;
  tier: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  variant: "lite" | "pro" | "enterprise";
}

const packages: PackageCard[] = [
  {
    id: "retail-lite",
    icon: Layers,
    tier: "STARTER",
    title: "Retail Lite",
    tagline: "For Single-Store Operations",
    description:
      "The perfect launchpad for small businesses beginning their digital transformation. Clean, fast, and intuitive.",
    features: [
      "Smart Point of Sale system",
      "Basic inventory tracking",
      "Daily sales reporting",
      "Single-user license",
      "Mobile-first design",
    ],
    cta: "Explore Retail Lite",
    href: "/products/retail-lite",
    variant: "lite",
  },
  {
    id: "retail-pro",
    icon: CircuitBoard,
    tier: "GROWTH",
    title: "Retail Pro",
    tagline: "For Scaling Enterprises",
    description:
      "Built for businesses outgrowing basic tools. Multi-location support, AI intelligence, and powerful automation.",
    features: [
      "Multi-branch management (up to 5)",
      "Josea AI Lite predictive analytics",
      "Advanced CRM & loyalty programs",
      "Direct M-Pesa integration",
      "Staff management & permissions",
      "Supplier & purchase orders",
    ],
    cta: "Explore Retail Pro",
    href: "/products/retail-pro",
    variant: "pro",
  },
  {
    id: "enterprise-os",
    icon: Gem,
    tier: "ENTERPRISE",
    title: "Enterprise OS",
    tagline: "For Industry Leaders",
    description:
      "Complete operating system for large-scale operations. Unlimited customization, dedicated infrastructure, and white-glove support.",
    features: [
      "Unlimited branches & users",
      "Full Josea AI Suite with deep analytics",
      "Custom module development",
      "Dedicated cloud infrastructure",
      "24/7 priority support",
      "API access for ERP integration",
      "On-premise deployment options",
    ],
    cta: "Explore Enterprise",
    href: "/products/enterprise-os",
    variant: "enterprise",
  },
];

const variantStyles = {
  lite: {
    cardBg: "bg-gradient-to-br from-white via-violet-50/30 to-purple-50/20",
    border: "border-violet-200/60 hover:border-violet-300",
    iconBg: "bg-gradient-to-br from-violet-100 to-purple-100",
    iconColor: "text-violet-600",
    tierColor: "text-violet-500",
  },
  pro: {
    cardBg: "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50",
    border: "border-purple-300/60 hover:border-purple-400",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    iconColor: "text-white",
    tierColor: "text-purple-600",
  },
  enterprise: {
    cardBg: "bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100",
    border: "border-purple-400/50 hover:border-purple-500",
    iconBg: "bg-gradient-to-br from-violet-600 to-purple-700",
    iconColor: "text-white",
    tierColor: "text-purple-700",
  },
};

const OperationsSuiteSection = () => {
  return (
    <section className="relative py-10 md:py-12 overflow-hidden bg-white">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 70% at 50% 100%, rgba(237, 233, 254, 0.4) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Suite Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-violet-50/50 mb-4">
            <Cog className="w-4 h-4 text-violet-600" strokeWidth={1.5} />
            <span
              className="text-violet-600 text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Primary Suite
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-3"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Operations{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Suite
            </span>
          </h2>

          <p
            className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            The intelligent backbone of your business. Sales, inventory, customers, and analytics—unified in one powerful system.
          </p>
        </motion.div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg, idx) => {
            const styles = variantStyles[pkg.variant];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                <Link href={pkg.href}>
                  <div
                    className={`h-full p-5 sm:p-6 rounded-2xl ${styles.cardBg} border ${styles.border} shadow-sm hover:shadow-lg hover:shadow-purple-200/30 transition-all duration-300 cursor-pointer`}
                  >
                    {/* Enterprise Badge */}
                    {pkg.variant === "enterprise" && (
                      <div className="absolute -top-3 right-4">
                        <span
                          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider"
                          style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                        >
                          Recommended
                        </span>
                      </div>
                    )}

                    {/* Icon & Tier */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${styles.iconBg} flex items-center justify-center shadow-md`}>
                        <pkg.icon className={`w-5 h-5 ${styles.iconColor}`} strokeWidth={1.5} />
                      </div>
                      <span
                        className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] ${styles.tierColor} uppercase`}
                        style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                      >
                        {pkg.tier}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3
                      className="text-lg sm:text-xl font-semibold text-slate-800 mb-1"
                      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className="text-violet-600 text-xs sm:text-sm font-medium mb-3"
                      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                    >
                      {pkg.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {pkg.features.slice(0, 5).map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <div className={`w-4 h-4 rounded-full ${styles.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className={`w-2.5 h-2.5 ${pkg.variant === "lite" ? "text-violet-600" : "text-white"}`} strokeWidth={2.5} />
                          </div>
                          <span className="text-xs text-slate-700">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 5 && (
                        <li className="text-xs text-violet-500 pl-6">
                          +{pkg.features.length - 5} more features
                        </li>
                      )}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-violet-600 group-hover:text-violet-700 transition-colors">
                      <span
                        className="text-sm font-medium"
                        style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                      >
                        {pkg.cta}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20Operations%20Suite%20solutions.%20Could%20you%20help%20me%20find%20the%20right%20package%20for%20my%20business%3F"
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
                Speak to a Consultant
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </motion.button>
          </a>
          <Link
            href="/suites/operations"
            className="text-violet-600 hover:text-violet-700 text-sm font-medium transition-colors"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            View Full Suite Details →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OperationsSuiteSection;
