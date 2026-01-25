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
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // REPLACE WITH YOUR ACTUAL PHONE NUMBER (International format without '+')
  const phoneNumber = "254700000000";
  const message = encodeURIComponent("Hi Josea team, I'm interested in your software solutions.");

  // Fast, attention-grabbing animation cycle
  useEffect(() => {
    const runCycle = () => {
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 3000); // 3s open
    };

    // Start quickly - 1.5s after page load
    const initialDelay = setTimeout(() => {
      runCycle();
      // Repeat every 8 seconds for urgency
      const interval = setInterval(runCycle, 8000);
      return () => clearInterval(interval);
    }, 1500);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <>
      {/* Pulsing ring animation behind the button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[99] w-14 h-14 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.4, 1.4],
          opacity: [0.4, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeOut",
        }}
      />

      {/* Second pulse ring for layered effect */}
      <motion.div
        className="fixed bottom-6 right-6 z-[99] w-14 h-14 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.3, 1.3],
          opacity: [0.3, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 0.3,
          ease: "easeOut",
        }}
      />

      {/* Main CTA Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] flex items-center h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-[0_4px_25px_rgba(37,211,102,0.5)] cursor-pointer overflow-hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          width: isExpanded ? "auto" : "3.5rem",
          borderRadius: isExpanded ? "1rem" : "9999px",
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 15, delay: 0.5 },
          width: { type: "spring", stiffness: 400, damping: 25 },
          borderRadius: { duration: 0.2 },
        }}
        whileHover={{ scale: 1.08, boxShadow: "0 6px 30px rgba(37,211,102,0.6)" }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => !hasInteracted && setHasInteracted(true)}
      >
        <div className="flex items-center px-4">
          {/* Icon with subtle bounce */}
          <motion.div
            animate={!isExpanded ? {
              rotate: [0, -10, 10, -10, 10, 0],
            } : {}}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
          </motion.div>

          {/* Text Reveal */}
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0, x: -10 }}
                animate={{ opacity: 1, width: "auto", x: 0, marginLeft: 10 }}
                exit={{ opacity: 0, width: 0, x: -10, marginLeft: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-bold whitespace-nowrap text-[15px] tracking-tight pr-1"
              >
                Let's Talk
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.a>
    </>
  );
}
