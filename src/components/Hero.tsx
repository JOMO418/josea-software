"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";

// WhatsApp Business Number
const WHATSAPP_NUMBER = "254746554150";
const PHONE_NUMBER = "tel:+254746554150";
const DEMO_MESSAGE = "Hello Josea Team, I'm interested in scheduling a demo of your business software solutions. Could you please arrange a convenient time for a demonstration? Thank you.";
const GENERAL_INQUIRY = "Hi Josea Team, I'm interested in learning more about your software solutions. Could you share more information?";

// Typewriter messages - defined outside component to avoid recreating on each render
const TYPEWRITER_MESSAGES = ["Book a Demo...", "Chat on WhatsApp..."];

const Hero = () => {
  // Typewriter effect state
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentMessage = TYPEWRITER_MESSAGES[messageIndex];

    if (isTyping) {
      if (displayedText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next message
        setMessageIndex((prev) => (prev + 1) % TYPEWRITER_MESSAGES.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, messageIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const dashboardVariants = {
    hidden: { opacity: 0, y: 120, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        mass: 1,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-surface-ground">
      {/* ===== THE SPOTLIGHT (Heavenly Light Effect) - Hidden on mobile for performance ===== */}
      <div className="hidden sm:block absolute top-[-20%] left-0 right-0 h-[500px] bg-gradient-to-b from-purple-500/20 to-transparent blur-[100px] pointer-events-none" />

      {/* ===== THE MESH (Moving Mesh Gradient Pattern) - Hidden on mobile for performance ===== */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30 animate-mesh"
          style={{
            backgroundImage: `
              radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
              radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.12) 0px, transparent 50%),
              radial-gradient(at 0% 50%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
              radial-gradient(at 80% 50%, rgba(79, 70, 229, 0.1) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(124, 58, 237, 0.1) 0px, transparent 50%),
              radial-gradient(at 80% 100%, rgba(99, 102, 241, 0.08) 0px, transparent 50%)
            `,
          }}
        />
      </div>

      {/* ===== ANIMATED BACKGROUND BLOBS - Hidden on mobile for performance ===== */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.4) 0%, rgba(79, 70, 229, 0) 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(91, 33, 182, 0.4) 0%, rgba(91, 33, 182, 0) 70%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(165, 180, 252, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      {/* ===== TYPOGRAPHY SECTION ===== */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center pt-24 sm:pt-20 lg:pt-24 pb-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline - Compact and Punchy */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]"
        >
          Business Software That
          <br />
          <span
            className="text-transparent bg-clip-text animate-gradient-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #7c3aed, #4f46e5, #3b82f6, #4f46e5, #7c3aed)",
              backgroundSize: "200% 200%",
            }}
          >
            Grows With You.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          High-performance systems for Kenya&apos;s ambitious Bussinesses. We combine
          AI-powered automation with enterprise scale—at a price that makes
          perfect sense.
        </motion.p>

        {/* ===== SHIMMER BUTTONS (Alive Interaction) ===== */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary Button - Book a Demo with Shimmer (WhatsApp) */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEMO_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-brand-gradient text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
          >
            {/* The Shimmer Effect */}
            <div className="absolute inset-0 animate-shimmer pointer-events-none">
              <div
                className="h-full w-1/3"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
            </div>
            <span className="relative z-10">Book a Demo</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Secondary Button - Meet an Advisor (Phone Call) */}
          <a
            href={PHONE_NUMBER}
            className="group backdrop-blur-md bg-white/50 border border-white/60 text-slate-800 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-sm hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Meet an Advisor
          </a>
        </motion.div>
      </motion.div>

      {/* ===== HERO IMAGE CONTAINER ===== */}
      <motion.div
        className="relative z-10 mt-8 sm:mt-10 max-w-6xl mx-auto px-4 pb-16"
        style={{ perspective: "2500px" }}
        variants={dashboardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image wrapper for overlay positioning */}
        <div className="relative">
          <Image
            src="/hero-devices-sync-v2.png"
            alt="Josea Software running synchronized across desktop, laptop, tablet, phone, and mobile POS."
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="w-full h-auto rounded-2xl shadow-2xl border border-white/40 backdrop-blur-xl"
            style={{ transform: "rotateX(10deg)" }}
            priority
          />

          {/* ===== FLOATING ACTION BADGE ===== */}
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(GENERAL_INQUIRY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1 right-1 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-full py-2 pl-2 pr-4 scale-75 origin-bottom-right sm:scale-100 md:bottom-3 md:right-3 md:py-3 md:pl-3 md:pr-6 md:gap-3 md:shadow-2xl cursor-pointer hover:scale-[0.8] sm:hover:scale-105 transition-transform"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          >
            {/* Green Circle with Pulse Animation */}
            <div className="relative">
              {/* Pulse ring */}
              <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring" />
              {/* Icon container */}
              <div className="relative bg-green-500 rounded-full p-1.5 md:p-2">
                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </div>
            </div>

            {/* Typewriter Text */}
            <span className="text-xs md:text-sm font-bold text-slate-800 font-mono whitespace-nowrap">
              {displayedText}
              <span className="animate-blink">|</span>
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
