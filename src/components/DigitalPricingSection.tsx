'use client';

import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 'starter-web',
    title: 'Starter Web',
    description: 'Professional online presence to establish credibility.',
    price: 'KES 10,000',
    priceSuffix: 'One-time',
    features: [
      '5-Page Professional Site',
      'Basic SEO Setup (Google Maps)',
      '1 Year Free Domain & Hosting',
      'Mobile Responsive Design',
    ],
    cta: 'Launch My Site',
    ctaStyle: 'secondary',
    isHero: false,
  },
  {
    id: 'ecommerce-pro',
    title: 'E-commerce Pro',
    description: 'Full online store to sell products 24/7.',
    price: 'KES 20,000',
    priceSuffix: 'One-time',
    badge: 'SELL ONLINE',
    features: [
      { text: 'Complete Online Storefront', highlight: true },
      { text: 'M-Pesa & Card Payment Gateways', highlight: true },
      { text: 'Inventory Sync (with Josea Ops)', highlight: false },
      { text: '1 Year Free Domain & Hosting', highlight: false },
      { text: 'Abandoned Cart Recovery', highlight: false },
    ],
    cta: 'Start Selling',
    ctaStyle: 'primary',
    isHero: true,
  },
  {
    id: 'custom-digital',
    title: 'Custom Digital & Branding',
    description: 'Complex solutions and full brand identity suites.',
    price: 'Custom Quote',
    priceSubtext: 'Based on project scope and complexity.',
    features: [
      'Custom Web Applications',
      'Full Brand Identity (Logo, Guidelines)',
      'Advanced Marketing Integrations',
      'Dedicated Project Manager',
    ],
    cta: 'Discuss My Project',
    ctaStyle: 'secondary',
    isHero: false,
  },
];

export default function DigitalPricingSection() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-r from-[#f5f3ff] via-[#a855f7] to-[#7e22ce] overflow-hidden">
      {/* Decorative elements for digital feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2e1065] mb-4">
            Josea Digital: Expand Online.
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Professional websites, e-commerce stores, and branding to capture the digital market.
            One-time investment for long-term growth.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto mt-12 px-4 sm:px-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl
                transition-all duration-300 hover:shadow-2xl
                ${plan.isHero
                  ? 'border-2 border-[#a855f7] shadow-[0_0_30px_rgba(168,85,247,0.3)] lg:-translate-y-2'
                  : 'border border-white/50'
                }
              `}
            >
              {/* Badge for Hero Card */}
              {plan.badge && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-[#7e22ce] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="space-y-6">
                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold text-[#2e1065] mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-slate-800 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-[#2e1065]">
                      {plan.price}
                    </span>
                    {plan.priceSuffix && (
                      <span className="text-slate-700 text-sm font-medium">
                        {plan.priceSuffix}
                      </span>
                    )}
                  </div>
                  {plan.priceSubtext && (
                    <p className="text-slate-600 text-sm mt-1">
                      {plan.priceSubtext}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => {
                    const featureText = typeof feature === 'string' ? feature : feature.text;
                    const isHighlight = typeof feature === 'object' && feature.highlight;

                    return (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#7e22ce] flex-shrink-0 mt-0.5" />
                        <span className={`text-slate-800 ${isHighlight ? 'font-semibold' : ''}`}>
                          {featureText}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/254746554150?text=${encodeURIComponent(
                    plan.id === 'custom-digital'
                      ? `Hello Josea Team, I'm interested in discussing a custom digital project. I'd like to schedule a consultation to explore branding and web development options for my business.`
                      : `Hello Josea Team, I'm interested in the ${plan.title} package (${plan.price}). Please help me get started.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full py-3 px-6 rounded-xl font-semibold text-center block
                    transition-all duration-300 transform hover:scale-[1.02]
                    ${plan.ctaStyle === 'primary'
                      ? 'bg-gradient-to-r from-[#a855f7] to-[#7e22ce] text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30'
                      : 'bg-transparent border-2 border-[#7e22ce] text-[#7e22ce] hover:bg-[#7e22ce] hover:text-white'
                    }
                  `}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
