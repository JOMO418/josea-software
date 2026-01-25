"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  isAI?: boolean;
}

const features: FeatureCard[] = [
  {
    title: "Multi-Device Ecosystem",
    description:
      "Manage your business from anywhere. Seamlessly switch between Desktop, Tablet, and Mobile. Works perfectly offline.",
    image: "/multi-device.png",
  },
  {
    title: "M-Pesa Integration",
    description:
      "Instant payments. Automate reconciliations with direct M-Pesa integration. No more manual receipt matching.",
    image: "/mpesa.png",
  },
  {
    title: "Josea AI",
    description:
      "The intelligent engine. Automates processes, provides predictive analysis, and adds intelligence to your system.",
    image: "/ai-brain.png",
    isAI: true,
  },
  {
    title: "Bank-Grade Security",
    description:
      "Your data is sacred. End-to-end encryption and advanced user permissions ensure your business secrets stay safe.",
    image: "/security.png",
  },
  {
    title: "WhatsApp Integration",
    description:
      "Sell where your customers are. Send invoices, receipts, and stock updates directly via WhatsApp.",
    image: "/whatsapp.png",
  },
  {
    title: "Multi-Store & Currency",
    description:
      "Scale without limits. Manage multiple branches and currencies from a single dashboard. Perfect for expansion.",
    image: "/global.png",
  },
];

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative z-20 w-full bg-gradient-to-b from-[#581c87] via-[#3b0764] to-[#240a4a] overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-fuchsia-400/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-purple-400/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-400/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto py-24 px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge - Purple Pill */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-300 bg-purple-500/20 border border-purple-400/30 px-4 py-1.5 rounded-full mb-6">
            Why Josea?
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            All-in-One Power.{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Zero Complexity.
            </span>
          </h2>

          {/* Subhead */}
          <p className="text-purple-200/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our feature-rich enterprise system enables business operations
            to run smoothly.
          </p>
        </motion.div>

        {/* 6-Card Grid */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                feature.isAI
                  ? "bg-white/5 border-2 border-purple-500/50 shadow-[0_0_40px_rgba(147,51,234,0.3),inset_0_0_60px_rgba(147,51,234,0.1)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5),inset_0_0_80px_rgba(147,51,234,0.15)]"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Pulsating border effect for AI card */}
              {feature.isAI && (
                <>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/10 via-transparent to-purple-500/5 pointer-events-none" />
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-pulse" />
                </>
              )}

              {/* Image Area (Top) */}
              <div className="relative h-32 sm:h-48 w-full bg-slate-900/50 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay for smooth transition to text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b0764]/90 via-transparent to-transparent" />

                {/* AI Badge overlay */}
                {feature.isAI && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 bg-purple-500/30 backdrop-blur-md border border-purple-400/50 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-semibold text-purple-200 uppercase tracking-wider">
                      AI
                    </span>
                  </div>
                )}
              </div>

              {/* Text Area (Bottom) */}
              <div className="relative p-4 sm:p-6">
                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-purple-200 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-snug text-purple-200/80 sm:text-sm sm:leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator - hidden on mobile */}
                <div className="hidden sm:flex mt-4 items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
