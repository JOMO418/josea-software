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
    y: 60,
    scale: 0.92
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
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
    <section className="bg-white pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#7e22ce] via-[#9333ea] to-[#a855f7] p-10 sm:p-16"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-10 relative">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to revolutionize your operations?
            </h2>
            <p className="mt-4 lg:mt-6 text-base sm:text-lg text-purple-100 max-w-lg mx-auto lg:mx-0">
              Join the forward-thinking businesses powered by Josea. Start your journey today with a direct consultation.
            </p>
          </div>

          {/* Right Side - Primary Action */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
            <motion.a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-[#22c55e] transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Chat on WhatsApp
            </motion.a>

            {/* Social Icons - Mobile Position */}
            <div className="flex items-center justify-center gap-4 mt-6 lg:hidden">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: social.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Social Icons - Desktop Position (Absolute) */}
          <div className="hidden lg:flex items-center gap-4 absolute bottom-0 right-0">
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
                    boxShadow: `0 0 16px ${social.color}80`
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: social.color }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
