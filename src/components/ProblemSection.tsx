"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, ChevronRight } from "lucide-react";

const ProblemSection = () => {
  const challenges = [
    {
      id: "offshore",
      icon: Building2,
      label: "The Offshore Problem",
      title: "Expensive Foreign Solutions",
      points: [
        "Enterprise software priced for Western markets",
        "Rigid templates that don't fit local workflows",
        "Support teams in distant time zones",
        "No M-Pesa or local payment integrations",
        "Upfront licensing draining working capital",
      ],
    },
    {
      id: "local",
      icon: MapPin,
      label: "The Local Problem",
      title: "Unreliable Local Options",
      points: [
        "Bare-minimum systems that can't scale",
        "Developers who vanish after payment",
        "Zero ongoing support or maintenance",
        "Poor security putting data at risk",
        "Technical debt that compounds daily",
      ],
    },
  ];

  return (
    <section className="sticky top-0 min-h-screen w-full relative overflow-hidden z-0">
      {/* Vibrant Purple Gradient Background - Matching Website Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950">
        {/* Radial glow accent */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 60%)'
          }}
        />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Corner gradient accents */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-800/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-900/40 to-transparent" />
      </div>

      {/* Content - Extra bottom padding so content is visible before BentoGrid slides */}
      <div className="relative z-10 min-h-[120vh] sm:min-h-[110vh] md:min-h-screen w-full max-w-5xl mx-auto px-5 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-48 sm:pb-44 md:pb-48 flex flex-col justify-start sm:justify-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-violet-400/60" />
            <span
              className="text-violet-300 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              The Market Reality
            </span>
            <span className="w-8 h-px bg-violet-400/60" />
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            The Problem We{" "}
            <span className="bg-gradient-to-r from-violet-300 via-purple-200 to-violet-300 bg-clip-text text-transparent">
              Set Out to Solve
            </span>
          </h2>

          <p
            className="text-violet-200/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            African enterprises face an impossible choice between two flawed options.
          </p>
        </motion.div>

        {/* Challenge Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-5 sm:p-6 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-sm hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300">
                {/* Challenge Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 border border-violet-400/30 flex items-center justify-center">
                    <challenge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span
                      className="text-[9px] sm:text-[10px] font-medium tracking-[0.12em] text-violet-400 uppercase block mb-0.5"
                      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                    >
                      {challenge.label}
                    </span>
                    <h3
                      className="text-base sm:text-lg font-semibold text-white leading-tight"
                      style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                    >
                      {challenge.title}
                    </h3>
                  </div>
                </div>

                {/* Challenge Points */}
                <ul className="space-y-2 sm:space-y-2.5">
                  {challenge.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400/70 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span
                        className="text-xs sm:text-sm text-violet-100/80 leading-relaxed"
                        style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Transition Statement */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p
            className="text-violet-200/60 text-sm sm:text-base mb-3 font-light"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Neither option serves the ambition of businesses ready to scale.
          </p>
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/10 border border-white/20">
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <p
              className="text-white text-sm sm:text-base font-medium"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              We saw the gap. We built something better.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-violet-950 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default ProblemSection;
