"use client";

import { CheckCircle2 } from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceSubtext?: string;
  features: { text: string; bold?: boolean }[];
  ctaText: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Retail Lite",
    description: "For single stores just starting their digital journey.",
    price: "KES 25,000",
    priceSubtext: " One-time",
    features: [
      { text: "Smart POS Register" },
      { text: "Basic Inventory Tracking" },
      { text: "Daily Sales Reports" },
      { text: "Single User License" },
    ],
    ctaText: "Get Started Now",
  },
  {
    name: "Retail Pro",
    description: "For growing SMEs needing efficiency and AI intelligence.",
    price: "KES 45,000",
    priceSubtext: " One-time",
    features: [
      { text: "Multi-Branch Support (Up to 5)", bold: true },
      { text: "Josea AI Lite (Predictive Stock)", bold: true },
      { text: "Advanced CRM & Loyalty" },
      { text: "Direct M-Pesa Integration" },
      { text: "5 User Licenses" },
    ],
    ctaText: "Get Started Now",
    isPopular: true,
  },
  {
    name: "Enterprise OS",
    description: "For large scale operations with complex, high-volume needs.",
    price: "Custom Quote",
    priceSubtext: "Tailored to your volume and operational complexity.",
    features: [
      { text: "Unlimited Branches & Users", bold: true },
      { text: "Full Josea AI Suite (Deep Analytics)", bold: true },
      { text: "Dedicated API Access (ERP integration)" },
      { text: "24/7 Dedicated Account Manager" },
      { text: "Custom On-premise Options" },
    ],
    ctaText: "Schedule Consultation",
    isEnterprise: true,
  },
];

function PricingCard({ tier }: { tier: PricingTier }) {
  const isPopular = tier.isPopular;
  const isEnterprise = tier.isEnterprise;

  // Base card styles
  let cardStyles =
    "relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300";

  if (isPopular) {
    // Hero card - glowing and prominent with darker glass
    cardStyles +=
      " bg-[#4c1d95]/80 backdrop-blur-xl border-2 border-purple-400 shadow-[0_0_50px_rgba(168,85,247,0.4)] lg:scale-105 z-10";
  } else if (isEnterprise) {
    // Enterprise - darker glass, premium feel
    cardStyles +=
      " bg-[#2e1065]/70 backdrop-blur-xl border border-white/10 hover:border-white/20";
  } else {
    // Standard darker glass card
    cardStyles +=
      " bg-[#2e1065]/70 backdrop-blur-xl border border-white/10 hover:border-white/20";
  }

  // Button styles
  let buttonStyles =
    "w-full py-4 px-6 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ";

  if (isPopular) {
    // Primary - bright purple gradient
    buttonStyles +=
      "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-400 hover:to-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]";
  } else if (isEnterprise) {
    // Premium secondary with subtle glow on hover
    buttonStyles +=
      "bg-transparent border-2 border-white/30 text-white hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]";
  } else {
    // Secondary - transparent with white border
    buttonStyles +=
      "bg-transparent border-2 border-white/30 text-white hover:bg-white/5 hover:border-white/50";
  }

  return (
    <div className={cardStyles}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-purple-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Card Content */}
      <div className="flex-1">
        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-purple-200/80 text-sm leading-relaxed mb-6">
          {tier.description}
        </p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span
              className={`font-bold text-white ${
                isEnterprise ? "text-3xl" : "text-4xl"
              }`}
            >
              {tier.price}
            </span>
            {!isEnterprise && (
              <span className="text-purple-200/70 text-sm">
                {tier.priceSubtext}
              </span>
            )}
          </div>
          {isEnterprise && tier.priceSubtext && (
            <p className="text-purple-200/60 text-sm mt-2">
              {tier.priceSubtext}
            </p>
          )}
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <span
                className={`text-purple-100/90 text-sm ${
                  feature.bold ? "font-semibold" : ""
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <a
        href={`https://wa.me/254746554150?text=${encodeURIComponent(
          tier.isEnterprise
            ? `Hello Josea Team, I'm interested in discussing the Enterprise OS solution for my business. I'd like to schedule a consultation to explore how it can be customized for our operations.`
            : `Hello Josea Team, I'm interested in the ${tier.name} package (${tier.price}). Please help me get started with the setup process.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyles}
      >
        {tier.ctaText}
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-gradient-to-r from-[#7e22ce] via-[#a855f7] to-[#f5f3ff] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2e1065] mb-6">
            The Josea Operations Suite.
          </h2>
          <p className="text-slate-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            One unified operating system to manage sales, inventory, customers,
            and intelligence across your entire business. Choose the power you
            need.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 items-stretch">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`${tier.isPopular ? "lg:mt-0" : "lg:mt-4"}`}
            >
              <PricingCard tier={tier} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
