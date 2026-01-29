"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Official WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function FloatingWhatsAppCTA() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "254746554150";
  const message = encodeURIComponent("Hi Josea Team, I'm interested in learning more about your software solutions.");

  // Alternating tooltip: Shows for 3s, hides for 6s (to allow AI to show)
  useEffect(() => {
    // Initial delay before first show
    const initialDelay = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);

    // Cycle: Show for 3s, hide for 6s
    const showInterval = setInterval(() => {
      setShowTooltip(true);

      const hideTimeout = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      return () => clearTimeout(hideTimeout);
    }, 9000); // 3s show + 6s hide = 9s total cycle

    return () => {
      clearTimeout(initialDelay);
      clearInterval(showInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-[76px] right-5 z-40">
      {/* Refined Professional Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 5, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-14 bottom-0 pointer-events-none"
          >
            <div className="relative">
              <div
                className="bg-white text-slate-800 text-xs font-medium px-3 py-2 rounded-lg shadow-lg border border-slate-200 whitespace-nowrap"
                style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Chat on WhatsApp</span>
                </div>
              </div>
              {/* Arrow */}
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white drop-shadow-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button - Professional Size (48px) */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 22, delay: 0.2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-shadow">
          <WhatsAppIcon className="w-6 h-6 text-white" />

          {/* Subtle pulse indicator */}
          <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5">
            <motion.div
              className="absolute inset-0 bg-emerald-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <div className="absolute inset-0 bg-emerald-400 rounded-full border border-white" />
          </div>
        </div>
      </motion.a>
    </div>
  );
}
