"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Globe2,
  ShieldCheck,
  Zap,
  Puzzle,
  HeartHandshake,
  Check,
  ArrowRight,
} from "lucide-react";

// WhatsApp Business Number
const WHATSAPP_NUMBER = "254746554150";
const CONSULTATION_MESSAGE = "Hello Josea Team, I'd like to learn more about your software solutions and discuss how they can help my business.";

const PhilosophySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const suites = [
    {
      id: "operations",
      icon: Cog,
      label: "PRIMARY SUITE",
      title: "Operations Suite",
      tagline: "The Backbone of Your Business",
      description:
        "Purpose-driven systems engineered to match your exact operational scale. From inventory and sales to HR and finance—we build comprehensive solutions that eliminate inefficiencies and drive measurable growth.",
      features: [
        "Bespoke systems tailored to your workflow",
        "AI-powered automation for redundant tasks",
        "Bank-grade security and data protection",
        "Seamless integrations (M-Pesa, KRA, banks)",
        "Scalable from SME to enterprise operations",
      ],
      accentColor: "violet",
      iconBg: "bg-gradient-to-br from-violet-600 to-purple-700",
    },
    {
      id: "digital",
      icon: Globe2,
      label: "SECONDARY SUITE",
      title: "Digital Suite",
      tagline: "Your Business, Online",
      description:
        "Cement your digital presence with professional websites, or unlock new revenue streams with fully-integrated e-commerce platforms. We build digital experiences that convert visitors into customers.",
      features: [
        "Professional business websites",
        "Full e-commerce solutions",
        "Mobile-optimized design",
        "SEO and performance built-in",
        "Integrated with your operations",
      ],
      accentColor: "indigo",
      iconBg: "bg-gradient-to-br from-indigo-600 to-blue-700",
    },
  ];

  const commitments = [
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "256-bit encryption, role-based access, and audit trails protect your business data.",
    },
    {
      icon: Puzzle,
      title: "Seamless Integrations",
      description: "Native connections to M-Pesa, KRA eTIMS, banks, and 50+ third-party services.",
    },
    {
      icon: Zap,
      title: "AI-Powered Efficiency",
      description: "Intelligent automation reduces manual tasks and accelerates your team's productivity.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Partnership",
      description: "Continuous support, optimization, and evolution as your business scales.",
    },
  ];

  return (
    <section id="solutions" className="relative pt-6 pb-10 md:pt-8 md:pb-12 overflow-hidden bg-white">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(237, 233, 254, 0.4) 0%, transparent 60%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-violet-300" />
            <span
              className="text-violet-600 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Our Philosophy
            </span>
            <span className="w-8 h-px bg-violet-300" />
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-4"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            Building{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Purpose-Driven
            </span>{" "}
            Software
          </h2>

          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            We architect bespoke systems with the precision of international consultancies
            and the understanding of local business realities. Two comprehensive suites,
            one unified vision.
          </p>
        </motion.div>

        {/* Two Suites */}
        <motion.div
          className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {suites.map((suite) => (
            <motion.div
              key={suite.id}
              variants={itemVariants}
              className="relative group"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white via-slate-50/50 to-violet-50/30 border border-violet-100/60 hover:border-violet-200 shadow-sm hover:shadow-lg hover:shadow-purple-200/20 transition-all duration-300">
                {/* Suite Label */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${suite.iconBg} flex items-center justify-center shadow-md shadow-purple-300/30`}>
                    <suite.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-[0.15em] text-violet-500 uppercase"
                    style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                  >
                    {suite.label}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3
                  className="text-xl lg:text-2xl font-semibold text-slate-800 mb-1"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  {suite.title}
                </h3>
                <p className="text-sm text-violet-600 font-medium mb-3">{suite.tagline}</p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {suite.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5">
                  {suite.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-violet-600" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitments Grid */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3
              className="text-xl sm:text-2xl font-semibold text-slate-800"
              style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
            >
              Built With{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>{" "}
              in Mind
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commitments.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-xl bg-white border border-purple-100/60 hover:border-purple-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-3 shadow-md shadow-purple-300/30">
                  <item.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h4
                  className="text-sm font-semibold text-slate-800 mb-1.5"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement & CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p
            className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-6 font-light leading-relaxed"
            style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
          >
            We deliver quality, purpose-driven systems with ongoing support—at a price
            that makes sense for your business. Your success is our success.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONSULTATION_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full font-medium text-white text-sm shadow-xl shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tracking-wide">Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
