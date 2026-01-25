"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";

// Industry Showcase Data
const slides = [
  {
    id: 0,
    src: "/industry-office-hr.png",
    alt: "Corporate HR Setup",
    tinyTitle: "Corporate People Ops",
    tinyDesc: "Streamline recruitment, payroll, and multi-branch compliance.",
  },
  {
    id: 1,
    src: "/industry-pharmacy.png",
    alt: "Modern Pharmacy",
    tinyTitle: "Smart Pharmacy Retail",
    tinyDesc: "Track expiry, manage prescriptions, and automate reordering live.",
  },
  {
    id: 2,
    src: "/industry-logistics.png",
    alt: "Logistics Hub",
    tinyTitle: "End-to-End Logistics",
    tinyDesc: "Optimize routes, track fleets real-time, and master warehouse operations.",
  },
  {
    id: 3,
    src: "/industry-school.png",
    alt: "School Administration",
    tinyTitle: "Smart Education",
    tinyDesc: "Manage students, staff, fees, and academic records effortlessly.",
  },
  {
    id: 4,
    src: "/industry-spare-parts.png",
    alt: "Automotive Spare Parts",
    tinyTitle: "Auto Parts Specialist",
    tinyDesc: "Instant cross-referencing, precise stock location, and low-stock alerts.",
  },
  {
    id: 5,
    src: "/industry-rental.png",
    alt: "Property Management Office",
    tinyTitle: "Prime Property Management",
    tinyDesc: "Automate tenant billing, lease cycles, and maintenance requests.",
  },
];

export default function ProductBillboard() {
  const [current, setCurrent] = useState(0);

  // Auto-cycle every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [current]);

  const paginate = (newDirection: number) => {
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  return (
    <section className="relative py-20 sm:py-24 bg-surface-ground border-b border-slate-200/50 overflow-hidden">
      {/* ==========================================
          1. THE GRID BACKGROUND
          ========================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v40H0V0zm39 0h1v40h-1V0z'/%3E%3Cpath d='M0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Radial Fade to soften edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">

        {/* ==========================================
            2. HEADER SECTION
            ========================================== */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Built For Your Sector</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Powering operations across a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">vast variety of industries</span>.
          </h2>
        </div>

        {/* ==========================================
            3. CINEMATIC BILLBOARD
            ========================================== */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-slate-900/10 ring-1 ring-black/5 group">

          {/* Gloss/Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20" />

          <AnimatePresence mode="popLayout">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={slides[current].src}
                  alt={slides[current].alt}
                  fill
                  className="object-cover brightness-[1.02] contrast-[1.05] saturate-[1.1]"
                  priority={current === 0}
                />

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

                {/* Bottom-right corner fade - subtle gradient for clean edge treatment */}
                <div className="absolute inset-0 bg-gradient-to-tl from-black/60 via-transparent to-transparent sm:from-black/40" />

                {/* Bottom-right corner mask - targeted coverage for mobile */}
                <div className="absolute bottom-0 right-0 w-14 h-10 bg-gradient-to-tl from-black/90 via-black/40 to-transparent rounded-tl-2xl sm:hidden" />

                {/* Text Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 max-w-[75%] sm:max-w-md z-30"
                >
                  <h3 className="text-white font-extrabold tracking-tight text-xs sm:text-lg mb-0.5 sm:mb-1 drop-shadow-lg">
                    {slides[current].tinyTitle}
                  </h3>
                  <p className="text-slate-100 font-medium leading-snug text-[10px] sm:text-sm drop-shadow-md">
                    {slides[current].tinyDesc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Sides) */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-30 cursor-pointer group/left flex items-center justify-center" onClick={() => paginate(-1)}>
             <div className="p-2 sm:p-3 rounded-full bg-black/20 backdrop-blur-md text-white/80 opacity-0 group-hover/left:opacity-100 transition-all duration-300 hover:scale-110">
               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
             </div>
          </div>
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-30 cursor-pointer group/right flex items-center justify-center" onClick={() => paginate(1)}>
             <div className="p-2 sm:p-3 rounded-full bg-black/20 backdrop-blur-md text-white/80 opacity-0 group-hover/right:opacity-100 transition-all duration-300 hover:scale-110">
               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
             </div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1 sm:h-1.5 rounded-full transition-all duration-500 ${
                  index === current
                    ? "w-6 sm:w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "w-1.5 sm:w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
