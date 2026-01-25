"use client";

import { motion, Variants } from "framer-motion";
import { Handshake, Code2, Rocket, ShieldCheck, LucideIcon } from "lucide-react";

// Animation Variants for Desktop Sequential Timeline
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const connectorVariants: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
    backgroundColor: "#e9d5ff",
  },
  visible: {
    scaleX: 1,
    backgroundColor: "#9333ea",
    transition: {
      duration: 0.6,
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
}: {
  step: Step;
  index: number;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="relative z-10 flex-shrink-0"
    >
      {/* Outer glow ring */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl scale-150"
      />

      {/* Main node circle */}
      <motion.div
        initial={{ backgroundColor: "rgb(226 232 240)" }}
        whileInView={{ backgroundColor: "rgb(147 51 234)" }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
      >
        {/* Step number badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
          {index + 1}
        </div>

        {/* Icon */}
        <motion.div
          initial={{ color: "rgb(100 116 139)" }}
          whileInView={{ color: "rgb(255 255 255)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
function MobileStepContent({ step }: { step: Step }) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.3 }}
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
function VerticalConnector() {
  return (
    <div className="flex justify-start pl-[30px]">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-0.5 h-16 bg-gradient-to-b from-purple-600 to-purple-400 origin-top"
      />
    </div>
  );
}

// Mobile Step Layout
function MobileStep({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  return (
    <>
      <div className="flex items-start gap-6">
        <MobileStepNode step={step} index={index} />
        <MobileStepContent step={step} />
      </div>
      {!isLast && <VerticalConnector />}
    </>
  );
}

export default function HowWeWorkSection() {
  return (
    <section className="bg-slate-50 pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            How We Work.
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
      </div>
    </section>
  );
}
