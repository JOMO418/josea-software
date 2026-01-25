"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Banknote, UserCog, FileStack } from "lucide-react";

const ProblemSection = () => {
  // Glitch/shake animation for the monitor
  const glitchVariants = {
    animate: {
      x: [0, -3, 4, -2, 3, -1, 2, 0],
      y: [0, 2, -1, 2, -2, 1, -1, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear" as const,
      },
    },
  };

  // Flicker animation for screen
  const flickerVariants = {
    animate: {
      opacity: [1, 0.8, 1, 0.6, 1, 0.9, 1, 0.7, 1],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear" as const,
        times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
      },
    },
  };

  // Static noise animation
  const noiseVariants = {
    animate: {
      opacity: [0.02, 0.05, 0.02, 0.08, 0.02],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        ease: "linear" as const,
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  };

  // Cell error animation - randomly turns cells red
  const cellErrorVariants = (shouldError: boolean, delay: number) => ({
    animate: shouldError
      ? {
          backgroundColor: ["#1e293b", "#dc2626", "#1e293b", "#dc2626", "#1e293b"],
          transition: {
            duration: 3,
            repeat: Infinity,
            delay,
            ease: "linear" as const,
            times: [0, 0.25, 0.5, 0.75, 1],
          },
        }
      : {},
  });

  // Pain points data - 'Resonative' copywriting
  const painPoints = [
    {
      icon: TrendingUp,
      iconColor: "text-slate-400",
      iconBg: "bg-slate-500/20",
      title: "The Scalability Ceiling",
      shortDesc: "Basic tools can't handle multi-branch growth.",
      desc: "Your tools worked for starting out, but break under expansion. Basic systems lack the architecture for multiple branches, capping your growth potential.",
    },
    {
      icon: Banknote,
      iconColor: "text-red-400",
      iconBg: "bg-red-500/20",
      title: "The Legacy Capital Drain",
      shortDesc: "Enterprise software demands massive upfront cash.",
      desc: "Legacy providers demand huge upfront costs, draining your working capital and forcing you to sacrifice liquidity for tomorrow's tools.",
    },
    {
      icon: UserCog,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/20",
      title: "The 'Manual Work' Bottleneck",
      shortDesc: "Staff waste hours on data entry instead of customers.",
      desc: "Manual data entry consumes hours of productive time, turning valuable employees into data clerks instead of relationship builders.",
    },
    {
      icon: FileStack,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/20",
      title: "The Paperwork Anchor",
      shortDesc: "Pen-and-paper chaos kills visibility.",
      desc: "Physical books for tax returns and reports create administrative chaos—lost data, zero visibility into actual performance.",
    },
  ];

  // Spreadsheet data for the "old Excel" look
  const spreadsheetHeaders = ["ID", "DATE", "ITEM", "STOCK", "STATUS"];
  const spreadsheetData = [
    { id: "001", date: "12/03", item: "WIDGET-A", stock: "45", status: "OK", errorCell: 4 },
    { id: "002", date: "12/03", item: "BOLT-M12", stock: "##", status: "ERROR", errorCell: 3 },
    { id: "003", date: "12/04", item: "GEAR-SM", stock: "128", status: "OK", errorCell: null },
    { id: "004", date: "##/##", item: "PIPE-2IN", stock: "0", status: "LOW", errorCell: 1 },
    { id: "005", date: "12/04", item: "########", stock: "67", status: "ERROR", errorCell: 2 },
    { id: "006", date: "12/05", item: "VALVE-PL", stock: "ERR", status: "SYNC", errorCell: 3 },
  ];

  return (
    <section className="sticky top-0 min-h-screen w-full relative overflow-hidden flex flex-col lg:flex-row z-0">
      {/* Background Image - The Man */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/problem-bg.png"
          alt="Business struggle background"
          fill
          className="object-cover object-[50%_25%] sm:object-[55%_30%] lg:object-center"
          priority
        />
        {/* Strengthened gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/30 lg:from-slate-900/95 lg:via-slate-900/80 lg:to-slate-900/40" />
        {/* Desktop: additional side gradient for left-side text */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen w-full max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-12 sm:pt-8 lg:pt-10 lg:pb-16 flex flex-col lg:flex-row lg:items-center">
        {/* ===== FIRST - Text Content ===== */}
        <motion.div
          className="flex-1 max-w-xl w-full lg:flex lg:flex-col lg:justify-start lg:pt-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm text-red-400 px-3 py-1.5 rounded-full text-xs font-semibold border border-red-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              The Industry Secret
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4"
          >
            Why 80% of Businesses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
              Stall...
            </span>
          </motion.h2>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed"
          >
            You are ready to scale, but your tools are stuck in 2010. Legacy
            systems drain your time, money, and sanity.
          </motion.p>

          {/* Pain Points - 4 Resonative Items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-2 sm:space-y-4"
          >
            {painPoints.map((pain, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <div className={`flex-shrink-0 p-1.5 md:p-2 rounded-lg ${pain.iconBg}`}>
                  <pain.icon className={`w-4 h-4 ${pain.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-0.5 md:mb-1">
                    {pain.title}
                  </h3>
                  {/* Mobile: brief description */}
                  <p className="md:hidden text-sm text-slate-300 leading-snug">
                    {pain.shortDesc}
                  </p>
                  {/* Desktop: refined description */}
                  <p className="hidden md:block text-sm text-slate-400 leading-snug">
                    {pain.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== SECOND - Glitch Monitor Animation ===== */}
        {/* Mobile: scaled down, centered. Desktop: bottom-right positioning */}
        <motion.div
          className="w-[220px] h-[160px] sm:w-[280px] sm:h-[200px] mx-auto mt-4 mb-2 sm:mt-8 sm:mb-4 relative z-10 flex items-center justify-center lg:flex-1 lg:w-auto lg:h-auto lg:mx-0 lg:mt-0 lg:mb-0 lg:flex lg:flex-col lg:justify-end lg:items-end lg:min-h-[400px] xl:min-h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glitching Monitor Container */}
          <motion.div
            className="relative scale-[0.55] sm:scale-[0.65] lg:scale-90 xl:scale-100 origin-center lg:max-w-[420px]"
            variants={glitchVariants}
            animate="animate"
          >
            {/* Glitch shadow/ghost effect */}
            <div className="absolute -inset-1 bg-red-500/20 blur-xl rounded-2xl animate-pulse" />
            <div className="absolute -inset-2 bg-cyan-500/10 blur-2xl rounded-2xl" style={{ transform: "translate(5px, -3px)" }} />

            {/* Monitor Frame */}
            <div className="relative">
              {/* Outer bezel - Retro CRT style */}
              <div className="w-72 md:w-80 h-52 md:h-56 lg:w-[400px] lg:h-[280px] bg-slate-700 rounded-2xl p-3 shadow-2xl border-4 border-slate-600 relative overflow-hidden">
                {/* Plastic texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/50 to-transparent rounded-2xl" />

                {/* Inner bezel */}
                <div className="relative w-full h-full bg-slate-800 rounded-lg p-1.5 border-2 border-slate-700">
                  {/* Screen */}
                  <motion.div
                    className="w-full h-full bg-slate-950 rounded overflow-hidden relative"
                    variants={flickerVariants}
                    animate="animate"
                  >
                    {/* CRT Scanlines */}
                    <div
                      className="absolute inset-0 pointer-events-none z-20 opacity-20"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                      }}
                    />

                    {/* Static noise overlay */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-10"
                      variants={noiseVariants}
                      animate="animate"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Screen glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />

                    {/* OLD EXCEL SPREADSHEET CONTENT */}
                    <div className="relative z-0 p-2 h-full flex flex-col">
                      {/* Header bar */}
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                          <span className="text-[7px] lg:text-[8px] font-mono text-red-400">
                            INVENTORY_2010.xls
                          </span>
                        </div>
                        <span className="text-[6px] lg:text-[7px] font-mono text-slate-500">
                          [NOT RESPONDING]
                        </span>
                      </div>

                      {/* Spreadsheet Grid */}
                      <div className="flex-1 border border-slate-700 rounded overflow-hidden bg-slate-900/50">
                        {/* Spreadsheet Header Row */}
                        <div className="grid grid-cols-5 bg-slate-600 border-b border-slate-500">
                          {spreadsheetHeaders.map((header, i) => (
                            <div
                              key={i}
                              className="text-[5px] lg:text-[7px] font-mono text-slate-200 font-bold px-1 py-0.5 border-r border-slate-500 last:border-r-0 text-center"
                            >
                              {header}
                            </div>
                          ))}
                        </div>

                        {/* Spreadsheet Data Rows */}
                        {spreadsheetData.map((row, rowIndex) => (
                          <div
                            key={rowIndex}
                            className="grid grid-cols-5 border-b border-slate-800 last:border-b-0"
                          >
                            {[row.id, row.date, row.item, row.stock, row.status].map(
                              (cell, cellIndex) => (
                                <motion.div
                                  key={cellIndex}
                                  className={`text-[5px] lg:text-[6px] font-mono px-1 py-0.5 border-r border-slate-800 last:border-r-0 text-center truncate ${
                                    cell === "ERROR" || cell === "##" || cell === "########" || cell === "##/##" || cell === "ERR"
                                      ? "text-red-400"
                                      : cell === "LOW" || cell === "SYNC"
                                      ? "text-amber-400"
                                      : "text-slate-300"
                                  }`}
                                  style={{ backgroundColor: "#1e293b" }}
                                  variants={cellErrorVariants(row.errorCell === cellIndex, rowIndex * 0.3)}
                                  animate="animate"
                                >
                                  {row.errorCell === cellIndex && cell !== "ERROR" ? (
                                    <motion.span
                                      animate={{
                                        opacity: [1, 0, 1],
                                      }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: rowIndex * 0.2,
                                      }}
                                    >
                                      {cell}
                                    </motion.span>
                                  ) : (
                                    cell
                                  )}
                                </motion.div>
                              )
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Error messages at bottom */}
                      <div className="mt-1 space-y-0.5">
                        <div className="text-[5px] lg:text-[7px] font-mono text-red-400 animate-pulse">
                          ! Sync timeout: Server not responding...
                        </div>
                        <div className="text-[5px] lg:text-[7px] font-mono text-amber-400">
                          ! WARNING: 23 records corrupted
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="mx-auto w-14 md:w-18 lg:w-20 h-3 md:h-4 lg:h-5 bg-slate-600 rounded-b-lg border-x-4 border-b-4 border-slate-500"></div>
              <div className="mx-auto w-20 md:w-28 lg:w-32 h-2 md:h-3 bg-slate-500 rounded-b-xl shadow-lg"></div>
            </div>

            {/* Floating error badges with smooth animations */}
            {/* SYNC FAILED - Float Effect */}
            <motion.div
              className="absolute -top-2 -left-2 md:-top-3 md:-left-3 bg-red-500 text-white text-[6px] md:text-[7px] lg:text-[9px] font-bold px-2 py-1 md:px-2.5 md:py-1 rounded-full shadow-lg shadow-red-500/50"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              SYNC FAILED
            </motion.div>

            {/* DATA LOSS - Float + Pulse Effect */}
            <motion.div
              className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 bg-rose-600 text-white text-[6px] md:text-[7px] lg:text-[9px] font-bold px-2 py-1 md:px-2.5 md:py-1 rounded-full shadow-lg shadow-rose-500/50"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              DATA LOSS
            </motion.div>

            {/* TIMEOUT - Float Effect */}
            <motion.div
              className="absolute top-1/2 -right-3 md:-right-4 -translate-y-1/2 bg-amber-500 text-white text-[6px] md:text-[7px] lg:text-[9px] font-bold px-2 py-1 md:px-2.5 md:py-1 rounded-full shadow-lg shadow-amber-500/50"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              TIMEOUT
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default ProblemSection;
