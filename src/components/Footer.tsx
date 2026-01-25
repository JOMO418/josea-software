'use client';

import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

// Custom X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const solutionsLinks = [
  { label: 'Josea Operations', href: '#operations' },
  { label: 'Josea Digital', href: '#digital' },
  { label: 'Retail Pro', href: '#retail-pro' },
  { label: 'Enterprise OS', href: '#enterprise' },
  { label: 'Pricing', href: '#pricing' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact Support', href: '#support' },
  { label: 'Schedule Demo', href: '#demo' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Data Security', href: '/security' },
  { label: 'Cookie Policy', href: '/cookies' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/josea', label: 'Facebook', color: '#1877F2' },
  { icon: XIcon, href: 'https://x.com/josea', label: 'X', color: '#000000' },
  { icon: Linkedin, href: 'https://linkedin.com/company/josea', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Instagram, href: 'https://instagram.com/josea', label: 'Instagram', color: '#E4405F' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7e22ce] via-[#9333ea] to-[#c084fc]" />

      {/* Subtle Overlay Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08)_0%,transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12 sm:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Section - Grid */}
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
              {/* Column 1: Brand & Location - Takes more space */}
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Josea Software
                </h2>
                <p className="mt-4 text-base text-purple-100/90 max-w-sm leading-relaxed">
                  Empowering African enterprise with intelligence and clarity.
                </p>

                {/* Contact Details */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-200 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white">Nairobi HQ</p>
                      <p className="text-sm text-purple-100/80">Westpoint Building, Parklands Road</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-200 flex-shrink-0" />
                    <a href="mailto:hello@josea.co.ke" className="text-sm text-purple-100/80 hover:text-white transition-colors">
                      hello@josea.co.ke
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-200 flex-shrink-0" />
                    <a href="tel:+254700000000" className="text-sm text-purple-100/80 hover:text-white transition-colors">
                      +254 700 000 000
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Solutions */}
              <div className="lg:col-span-2 lg:col-start-6">
                <h3 className="text-xs font-semibold text-white/90 tracking-widest uppercase mb-6">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {solutionsLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-purple-100/80 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Company & Support */}
              <div className="lg:col-span-2">
                <h3 className="text-xs font-semibold text-white/90 tracking-widest uppercase mb-6">
                  Company
                </h3>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-purple-100/80 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Legal & Security */}
              <div className="lg:col-span-2">
                <h3 className="text-xs font-semibold text-white/90 tracking-widest uppercase mb-6">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-purple-100/80 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section - Copyright & Socials */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-sm text-purple-100/70 text-center sm:text-left">
                  © {new Date().getFullYear()} Josea Software. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#7e22ce] transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade to White */}
        <div className="h-24 bg-gradient-to-b from-transparent via-white/30 to-white" />
      </div>
    </footer>
  );
}
