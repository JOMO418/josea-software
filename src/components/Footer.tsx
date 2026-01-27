'use client';

import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

// Custom X (Twitter) icon component
function XIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
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
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#support' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Data Security', href: '/security' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/josea', label: 'Facebook', color: '#1877F2' },
  { icon: XIcon, href: 'https://x.com/josea', label: 'X', color: '#14171A' },
  { icon: Linkedin, href: 'https://linkedin.com/company/josea', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Instagram, href: 'https://instagram.com/josea', label: 'Instagram', color: '#E4405F' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Dynamic Purple to White Gradient - matching pricing section */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7e22ce] via-[#a855f7] to-[#f5f3ff]" />

      {/* Subtle light overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2)_0%,transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="pt-10 pb-6 sm:pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Section - Grid */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
              {/* Column 1: Brand & Contact */}
              <div className="col-span-2 sm:col-span-2 lg:col-span-4">
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Josea Software
                </h2>
                <p className="mt-1.5 text-xs text-white/80 max-w-xs leading-relaxed">
                  Empowering African enterprise with intelligence and clarity.
                </p>

                {/* Contact Details - Compact inline style */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  <a href="mailto:hello@josea.co.ke" className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" style={{ color: '#60a5fa' }} />
                    <span>hello@josea.co.ke</span>
                  </a>
                  <a href="tel:+254746554150" className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" style={{ color: '#4ade80' }} />
                    <span>+254 746554150</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/90">
                    <MapPin className="w-3.5 h-3.5" style={{ color: '#f87171' }} />
                    <span>Nairobi, Kenya</span>
                  </span>
                </div>
              </div>

              {/* Column 2: Solutions */}
              <div className="lg:col-span-2 lg:col-start-6">
                <h3 className="text-[10px] font-semibold text-white/70 tracking-widest uppercase mb-2.5">
                  Solutions
                </h3>
                <ul className="space-y-1.5">
                  {solutionsLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-white/80 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Company */}
              <div className="lg:col-span-2">
                <h3 className="text-[10px] font-semibold text-white/70 tracking-widest uppercase mb-2.5">
                  Company
                </h3>
                <ul className="space-y-1.5">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-white/80 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Legal */}
              <div className="lg:col-span-2">
                <h3 className="text-[10px] font-semibold text-white/70 tracking-widest uppercase mb-2.5">
                  Legal
                </h3>
                <ul className="space-y-1.5">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-white/80 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section - Copyright & Socials */}
            <div className="mt-8 pt-5 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-white/60 text-center sm:text-left">
                  © {new Date().getFullYear()} Josea Software Solutions. All rights reserved.
                </p>

                {/* Social Icons with Brand Colors */}
                <div className="flex items-center gap-1.5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-7 h-7 rounded-md bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-105 group"
                      >
                        <Icon
                          className="w-3.5 h-3.5 transition-colors duration-300"
                          style={{ color: social.color }}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade to White */}
        <div className="h-12 bg-gradient-to-b from-transparent via-white/40 to-white" />
      </div>
    </footer>
  );
}
