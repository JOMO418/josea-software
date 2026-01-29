'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Linkedin, Facebook, Instagram, LucideIcon } from 'lucide-react';

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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
};

interface SocialLink {
  icon: LucideIcon | typeof XIcon;
  href: string;
  label: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  { icon: Mail, href: 'mailto:hello@josea.co.ke', label: 'Email', color: '#EA4335' },
  { icon: XIcon, href: 'https://x.com/josea', label: 'X', color: '#000000' },
  { icon: Linkedin, href: 'https://linkedin.com/company/josea', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Facebook, href: 'https://facebook.com/josea', label: 'Facebook', color: '#1877F2' },
  { icon: Instagram, href: 'https://instagram.com/josea', label: 'Instagram', color: '#E4405F' },
];

export default function FinalCTASection() {
  return (
    <section className="bg-white pt-10 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Professional Card with Gradient Background */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 shadow-2xl shadow-purple-500/25 border border-white/10">
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Ambient glow effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-8 sm:px-12 py-10 sm:py-14">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-5">
                  <span
                    className="text-white/90 text-xs font-medium tracking-[0.15em] uppercase"
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                  >
                    Let's Connect
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  Ready to Transform
                  <br />
                  Your Operations?
                </h2>
                <p className="text-base sm:text-lg text-violet-100 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                  Join forward-thinking businesses powered by Josea. Start your journey with a direct consultation.
                </p>
              </div>

              {/* Right Side - Primary Action */}
              <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
                {/* WhatsApp CTA Button */}
                <motion.a
                  href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I've%20explored%20your%20solutions%20and%20I'm%20ready%20to%20discuss%20how%20Josea%20can%20transform%20my%20business%20operations.%20I'd%20like%20to%20schedule%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-white text-purple-700 px-7 py-4 rounded-full font-semibold text-base shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2} />
                  <span>Start a Conversation</span>
                </motion.a>

                {/* Social Media Links */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-white/70 text-xs font-medium mr-1"
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                  >
                    Connect:
                  </span>
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{
                          scale: 1.15,
                          y: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg border border-white/20"
                        style={{ backgroundColor: social.color }}
                      >
                        <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-20 blur-2xl" />
        <div className="absolute -bottom-3 -left-3 w-32 h-32 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full opacity-20 blur-2xl" />
      </motion.div>
    </section>
  );
}
