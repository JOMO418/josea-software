"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
} from "lucide-react";

// WhatsApp Business Number
const WHATSAPP_NUMBER = "254746554150";
const CONSULTATION_MESSAGE = "Hello Josea Team, I'd like to speak with a consultant about your custom software solutions for my business.";

const Hero = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[75vh] overflow-hidden flex items-center">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900/90 to-indigo-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(167, 139, 250, 0.25) 0%, transparent 60%)'
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.2) 0%, transparent 70%)'
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)'
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Suite Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <Code2 className="w-3.5 h-3.5 text-violet-300" strokeWidth={1.5} />
              <span
                className="text-xs tracking-[0.2em] text-violet-200/90"
                style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
              >
                SOFTWARE SOLUTIONS
              </span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-5 tracking-tight"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            <span className="text-white/95">Purpose-Built </span>
            <span className="bg-gradient-to-r from-violet-200 via-purple-100 to-violet-200 bg-clip-text text-transparent">
              Software
            </span>
            <br />
            <span className="text-white/95">for Business Excellence</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-violet-100/70 max-w-2xl mx-auto leading-relaxed mb-8 font-light"
          >
            From growing enterprises to industry leaders—we design and build{" "}
            <span className="text-white/90 font-normal">custom systems</span>{" "}
            that fit your operations precisely. Reliable software solutions{" "}
            <span className="text-white/90 font-normal">crafted with purpose</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#solutions">
              <motion.button
                className="group relative px-6 py-3 bg-white rounded-full font-medium text-violet-950 text-sm shadow-xl shadow-purple-900/20 overflow-hidden"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </span>
              </motion.button>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONSULTATION_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-6 py-3 border border-white/25 hover:border-white/40 rounded-full font-medium text-white/90 hover:text-white text-sm transition-all duration-300 backdrop-blur-sm tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Speak to a Consultant
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade to White */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
};

export default Hero;
