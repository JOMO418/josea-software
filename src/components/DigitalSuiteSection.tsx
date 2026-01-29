"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Palette,
  Check,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "254746554150";

interface PackageCard {
  id: string;
  icon: React.ElementType;
  tier: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
  isHighlight?: boolean;
}

const packages: PackageCard[] = [
  {
    id: "starter-web",
    icon: Globe,
    tier: "PRESENCE",
    title: "Starter Website",
    tagline: "Establish Your Online Presence",
    description:
      "Professional website to build credibility and help customers find you online. The foundation of digital visibility.",
    features: [
      "5-page professional website",
      "Mobile responsive design",
      "Basic SEO & Google Maps",
      "1 year free domain & hosting",
      "Contact forms & social links",
    ],
    cta: "Get Started",
    whatsappMessage: "Hello Josea Team, I'm interested in the Starter Website package to establish my business's online presence. I'd like to discuss my requirements and get started.",
  },
  {
    id: "ecommerce-pro",
    icon: ShoppingCart,
    tier: "COMMERCE",
    title: "E-Commerce Store",
    tagline: "Sell Products Online 24/7",
    description:
      "Full online storefront with payment integration. Turn your website into a revenue-generating sales channel.",
    features: [
      "Complete online storefront",
      "M-Pesa & card payment gateways",
      "Inventory sync with Josea Ops",
      "Order management dashboard",
      "Abandoned cart recovery",
    ],
    cta: "Start Selling",
    whatsappMessage: "Hello Josea Team, I'm interested in the E-Commerce Store solution to sell my products online. I'd like to discuss payment integrations and how to get my store set up.",
    isHighlight: true,
  },
  {
    id: "custom-digital",
    icon: Palette,
    tier: "CUSTOM",
    title: "Branding & Custom",
    tagline: "Tailored Digital Solutions",
    description:
      "Complex web applications, complete brand identity, and custom digital solutions for unique requirements.",
    features: [
      "Custom web applications",
      "Full brand identity design",
      "Logo & brand guidelines",
      "Advanced integrations",
      "Dedicated project manager",
    ],
    cta: "Discuss Project",
    whatsappMessage: "Hello Josea Team, I'm interested in discussing a custom digital project. I have specific requirements for branding and/or web development that I'd like to explore with your team.",
  },
];

const DigitalSuiteSection = () => {
  return (
    <section className="relative py-10 md:py-12 overflow-hidden bg-slate-50">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 70% at 50% 0%, rgba(237, 233, 254, 0.3) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Suite Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 bg-white/50 mb-4">
            <Globe className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.5} />
            <span
              className="text-slate-500 text-[10px] font-medium tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Secondary Suite
            </span>
          </div>

          <h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 mb-2"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Digital{" "}
            <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
              Suite
            </span>
          </h2>

          <p
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Complement your operations with digital presence. Websites, e-commerce, and branding solutions.
          </p>
        </motion.div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`h-full p-5 rounded-xl bg-white border ${
                    pkg.isHighlight
                      ? "border-violet-300 shadow-md"
                      : "border-slate-200 shadow-sm"
                  } hover:shadow-lg hover:border-violet-200 transition-all duration-300 cursor-pointer`}
                >
                  {/* Highlight Badge */}
                  {pkg.isHighlight && (
                    <div className="absolute -top-2.5 right-4">
                      <span
                        className="bg-violet-500 text-white text-[8px] font-bold px-2.5 py-0.5 rounded-full shadow uppercase tracking-wider"
                        style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                      >
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Icon & Tier */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${pkg.isHighlight ? "bg-violet-100" : "bg-slate-100"} flex items-center justify-center`}>
                      <pkg.icon className={`w-4 h-4 ${pkg.isHighlight ? "text-violet-600" : "text-slate-500"}`} strokeWidth={1.5} />
                    </div>
                    <span
                      className={`text-[9px] font-medium tracking-[0.12em] ${pkg.isHighlight ? "text-violet-500" : "text-slate-400"} uppercase`}
                      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                    >
                      {pkg.tier}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className="text-base sm:text-lg font-semibold text-slate-700 mb-0.5"
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className={`text-xs font-medium mb-2 ${pkg.isHighlight ? "text-violet-500" : "text-slate-400"}`}
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                  >
                    {pkg.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-4">
                    {pkg.features.slice(0, 4).map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 ${pkg.isHighlight ? "text-violet-500" : "text-slate-400"} flex-shrink-0 mt-0.5`} strokeWidth={2} />
                        <span className="text-[11px] text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center gap-1.5 ${pkg.isHighlight ? "text-violet-600" : "text-slate-500"} group-hover:text-violet-600 transition-colors`}>
                    <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
                    <span
                      className="text-xs font-medium"
                      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                    >
                      {pkg.cta}
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link
            href="/suites/digital"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-violet-600 transition-colors"
          >
            <span
              className="text-sm font-medium"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Explore Digital Suite
            </span>
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalSuiteSection;
