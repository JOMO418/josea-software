"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Industry Showcase Data
const slides = [
  {
    id: 0,
    src: "/industry-office-hr.png",
    alt: "Corporate HR Setup",
    title: "Corporate & HR",
    description: "Recruitment, payroll, and multi-branch compliance.",
  },
  {
    id: 1,
    src: "/industry-pharmacy.png",
    alt: "Modern Pharmacy",
    title: "Healthcare & Pharmacy",
    description: "Inventory tracking, prescriptions, and automated reordering.",
  },
  {
    id: 2,
    src: "/industry-logistics.png",
    alt: "Logistics Hub",
    title: "Logistics & Fleet",
    description: "Route optimization, real-time tracking, and warehouse ops.",
  },
  {
    id: 3,
    src: "/industry-school.png",
    alt: "School Administration",
    title: "Education",
    description: "Student management, fees, and academic records.",
  },
  {
    id: 4,
    src: "/industry-spare-parts.png",
    alt: "Automotive Spare Parts",
    title: "Automotive & Parts",
    description: "Cross-referencing, stock location, and inventory alerts.",
  },
  {
    id: 5,
    src: "/industry-rental.png",
    alt: "Property Management Office",
    title: "Property Management",
    description: "Tenant billing, lease cycles, and maintenance tracking.",
  },
];

export default function ProductBillboard() {
  const [current, setCurrent] = useState(0);

  // Auto-cycle every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const paginate = (newDirection: number) => {
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  return (
    <section className="relative pt-4 pb-6 md:pt-6 md:pb-8 overflow-hidden bg-white">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Compact Professional Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-px bg-violet-300" />
            <span
              className="text-violet-600 text-[10px] font-medium tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Industries We Serve
            </span>
            <span className="w-8 h-px bg-violet-300" />
          </div>

          <h2
            className="text-xl sm:text-2xl font-semibold text-slate-800"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Trusted Across{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Diverse Sectors
            </span>
          </h2>
        </motion.div>

        {/* Compact Professional Billboard */}
        <motion.div
          className="relative aspect-[2.5/1] w-full rounded-xl overflow-hidden shadow-lg shadow-slate-900/8 border border-slate-200/60"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
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
                  className="object-cover"
                  priority={current === 0}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent" />

                {/* Text Overlay - Compact Left-aligned */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute bottom-0 left-0 top-0 flex flex-col justify-center pl-5 sm:pl-8 max-w-[55%] sm:max-w-sm z-30"
                >
                  <span
                    className="text-violet-300 text-[9px] sm:text-[11px] font-medium tracking-[0.15em] uppercase mb-1"
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                  >
                    {slides[current].title}
                  </span>
                  <p className="text-white/90 text-xs sm:text-sm font-light leading-relaxed">
                    {slides[current].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Compact */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
            aria-label="Previous industry"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
            aria-label="Next industry"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>

          {/* Progress Indicators - Minimal */}
          <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 flex items-center gap-1.5 z-30">
            <span className="text-white/40 text-[10px] font-light">
              {String(current + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-0.5 rounded-full transition-all duration-400 ${
                    index === current
                      ? "w-5 bg-white/90"
                      : "w-1.5 bg-white/25 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-white/40 text-[10px] font-light">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
