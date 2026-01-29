"use client";

import { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { Handshake, Code2, Rocket, ShieldCheck, LucideIcon } from "lucide-react";

// Animation Variants for Desktop Sequential Timeline
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const connectorVariants: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
    backgroundColor: "#e9d5ff",
    transition: { duration: 0 },
  },
  visible: {
    scaleX: 1,
    backgroundColor: "#9333ea",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Discovery & Alignment",
    description:
      "We meet (physically or online) to deeply understand your operations. We agree on timelines and secure the commitment deposit (~30%).",
    icon: Handshake,
  },
  {
    id: 2,
    title: "Elite Execution",
    description:
      "Our elite development team is appointed to your project. We build your custom Josea environment with precision.",
    icon: Code2,
  },
  {
    id: 3,
    title: "Deployment & Empowerment",
    description:
      "We install the system and provide comprehensive training for you and your staff to ensure confident daily use.",
    icon: Rocket,
  },
  {
    id: 4,
    title: "Partnership Maturity",
    description:
      "Project sign-off. Finalize remaining payment via flexible agreed installments or upfront, and transition to ongoing support.",
    icon: ShieldCheck,
  },
];

// Step Node Component - the circular icon holder (Mobile version with individual animations)
function MobileStepNode({
  step,
  index,
  isInView,
}: {
  step: Step;
  index: number;
  isInView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={isInView ? { duration: 0.25, delay: 0.1 } : { duration: 0 }}
      className="relative z-10 flex-shrink-0"
    >
      {/* Outer glow ring */}
      <motion.div
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={isInView ? { duration: 0.3, delay: 0.15 } : { duration: 0 }}
        className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl scale-150"
      />

      {/* Main node circle */}
      <motion.div
        animate={isInView
          ? { backgroundColor: "rgb(147 51 234)" }
          : { backgroundColor: "rgb(226 232 240)" }
        }
        transition={isInView ? { duration: 0.25, delay: 0.1 } : { duration: 0 }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
      >
        {/* Step number badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
          {index + 1}
        </div>

        {/* Icon */}
        <motion.div
          animate={isInView
            ? { color: "rgb(255 255 255)" }
            : { color: "rgb(100 116 139)" }
          }
          transition={isInView ? { duration: 0.25, delay: 0.1 } : { duration: 0 }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Desktop Step Node - uses parent variants for orchestration
function DesktopStepNode({
  step,
  index,
}: {
  step: Step;
  index: number;
}) {
  const Icon = step.icon;

  return (
    <div className="relative z-10 flex-shrink-0">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl scale-150" />

      {/* Main node circle */}
      <div className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-purple-600">
        {/* Step number badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
          {index + 1}
        </div>

        {/* Icon */}
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}

// Mobile Step Content Component
function MobileStepContent({ step, isInView }: { step: Step; isInView: boolean }) {
  return (
    <motion.div
      animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
      transition={isInView ? { duration: 0.25, delay: 0.15 } : { duration: 0 }}
      className="flex-1"
    >
      <h3 className="text-lg font-bold text-slate-900 mb-2">
        {step.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
        {step.description}
      </p>
    </motion.div>
  );
}

// Desktop Step Content Component - inherits animation from parent
function DesktopStepContent({ step }: { step: Step }) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-slate-900 mb-2">
        {step.title}
      </h3>
      <p className="text-slate-600 text-base leading-relaxed max-w-[200px] mx-auto">
        {step.description}
      </p>
    </div>
  );
}

// Vertical Connector Line (Mobile)
function VerticalConnector({ isInView }: { isInView: boolean }) {
  return (
    <div className="flex justify-start pl-[30px]">
      <motion.div
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={isInView ? { duration: 0.3, ease: "easeOut" } : { duration: 0 }}
        className="w-0.5 h-16 bg-gradient-to-b from-purple-600 to-purple-400 origin-top"
      />
    </div>
  );
}

// Mobile Step Layout
function MobileStep({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div ref={ref}>
      <div className="flex items-start gap-6">
        <MobileStepNode step={step} index={index} isInView={isInView} />
        <MobileStepContent step={step} isInView={isInView} />
      </div>
      {!isLast && <VerticalConnector isInView={isInView} />}
    </div>
  );
}

export default function HowWeWorkSection() {
  const desktopRef = useRef(null);
  const isDesktopInView = useInView(desktopRef, { amount: 0.3 });

  return (
    <section id="how-we-work" className="bg-slate-50 pt-12 sm:pt-14 pb-10 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-purple-300" />
            <span
              className="text-purple-600 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Our Process
            </span>
            <span className="w-8 h-px bg-purple-300" />
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-4"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            How We{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p
            className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            A transparent, collaborative four-step process designed to take you
            from concept to empowered operation.
          </p>
        </motion.div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => (
            <MobileStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Desktop Timeline (Horizontal) - Sequential Animation */}
        <motion.div
          ref={desktopRef}
          animate={isDesktopInView ? "visible" : "hidden"}
          initial="hidden"
          variants={containerVariants}
          className="hidden lg:flex flex-row items-start justify-between relative"
        >
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-start flex-1 last:flex-none">
              {/* Step Content Wrapper with Animation */}
              <motion.div
                variants={stepVariants}
                className="flex flex-col items-center gap-4 relative z-10"
              >
                <DesktopStepNode step={step} index={index} />
                <DesktopStepContent step={step} />
              </motion.div>

              {/* Horizontal Connector Line (between steps) */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={connectorVariants}
                  className="hidden lg:block h-1 flex-1 self-center mt-[-60px] mx-2 rounded-full"
                  style={{ originX: 0 }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 lg:mt-16"
        >
          <a
            href="https://wa.me/254746554150?text=Hello%20Josea%20Team%2C%20I'd%20like%20to%20start%20the%20discovery%20process%20and%20discuss%20how%20your%20solutions%20can%20help%20my%20business.%20When%20can%20we%20schedule%20a%20consultation%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold text-sm shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Begin Your Journey</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
