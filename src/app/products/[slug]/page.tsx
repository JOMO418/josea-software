"use client";

import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Phone,
  Shield,
  Server,
  Network,
  Database,
  Cpu,
  Globe,
  Users,
  ArrowRight,
  Building2,
  Truck,
  Factory,
  GraduationCap,
  Landmark,
  Stethoscope,
  Layers,
  Crown,
  Briefcase,
  BadgeCheck,
  Lock,
  Eye,
  Fingerprint,
  Cloud,
  Activity,
  GitBranch,
  Workflow,
  FileCheck,
  Settings,
  Bell,
  PieChart,
  TrendingUp,
  Headphones,
  Award,
  LineChart,
  Key,
  RefreshCw,
  HardDrive,
  Wifi,
  MessageSquare,
  Mail,
  Timer,
  Boxes,
  LayoutDashboard,
  ScrollText,
  Banknote,
  CreditCard,
  FileSpreadsheet,
  Scale,
  UserCheck,
  FileClock,
  Scan,
  FolderLock,
  ShieldCheck,
  Gauge,
  Smartphone,
  Palette,
  Infinity as InfinityIcon,
} from "lucide-react";

// ============================================================================
// IMPORTS
// ============================================================================
import { use } from "react";
import Navbar from "@/components/Navbar";
import { productsData, type ProductFeature, type CarouselScreen, type TargetIndustry } from "@/data/products";

// ============================================================================
// WHATSAPP ICON
// ============================================================================
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ============================================================================
// CONFIGURATION
// ============================================================================
const WHATSAPP_NUMBER = "254700000000";
const PHONE_NUMBER = "+254 700 000 000";
const PHONE_LINK = "tel:+254700000000";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// ============================================================================
// ENTERPRISE HERO - EXECUTIVE DASHBOARD PREVIEW
// ============================================================================
function EnterpriseDashboardPreview() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: "Uptime", value: "99.99%", icon: Activity, color: "#D4AF37", isGold: true },
    { label: "Response", value: "<4hrs", icon: Timer, color: "#8B5CF6", isGold: false },
    { label: "Encrypted", value: "AES-256", icon: Lock, color: "#D4AF37", isGold: true },
    { label: "Compliance", value: "SOC 2", icon: Shield, color: "#D4AF37", isGold: true },
  ];

  const capabilities = [
    { icon: Globe, label: "Unlimited Scale", gold: true },
    { icon: Cpu, label: "AI Analytics", gold: false },
    { icon: Network, label: "API Access", gold: false },
    { icon: Workflow, label: "Custom Workflows", gold: true },
  ];

  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Premium glow with gold accent */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/10 via-purple-500/10 to-[#D4AF37]/10 rounded-3xl blur-2xl" />

      {/* Main Dashboard Card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-900/20 border border-[#D4AF37]/20 overflow-hidden">
        {/* Header Bar with Gold Accent */}
        <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-slate-900" />
            </div>
            <span className="text-white text-sm font-semibold">Enterprise Command Center</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#D4AF37] font-medium uppercase tracking-wider">Live</span>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-4 gap-2 p-4 border-b border-slate-100">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            const isActive = activeMetric === idx;
            return (
              <motion.div
                key={idx}
                className={`relative p-2.5 rounded-xl text-center transition-all duration-300 ${
                  isActive
                    ? metric.isGold
                      ? "bg-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30"
                      : "bg-purple-50 ring-1 ring-purple-200"
                    : "bg-slate-50/80"
                }`}
                animate={{ scale: isActive ? 1.02 : 1 }}
              >
                <Icon
                  className="w-4 h-4 mx-auto mb-1"
                  style={{ color: isActive ? metric.color : "#94a3b8" }}
                />
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">{metric.label}</div>
                <div className={`text-sm font-bold ${
                  isActive && metric.isGold ? "text-[#B8962E]" : isActive ? "text-purple-700" : "text-slate-600"
                }`}>
                  {metric.value}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Capabilities Grid */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <InfinityIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">Unlimited Capabilities</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-2.5 p-2.5 rounded-lg border ${
                    cap.gold
                      ? "bg-gradient-to-r from-[#D4AF37]/5 to-[#D4AF37]/10 border-[#D4AF37]/20"
                      : "bg-gradient-to-r from-slate-50 to-purple-50/50 border-slate-100"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${
                    cap.gold
                      ? "bg-gradient-to-br from-[#D4AF37] to-[#B8962E]"
                      : "bg-gradient-to-br from-purple-500 to-violet-600"
                  }`}>
                    <Icon className={`w-4 h-4 ${cap.gold ? "text-slate-900" : "text-white"}`} />
                  </div>
                  <span className={`text-xs font-medium ${cap.gold ? "text-[#B8962E]" : "text-slate-700"}`}>{cap.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mini Chart */}
        <div className="px-4 pb-4">
          <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">System Performance</span>
              <span className="text-xs font-semibold text-[#D4AF37]">Optimal</span>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[65, 78, 45, 82, 56, 90, 72, 88, 68, 95, 75, 85].map((h, i) => (
                <motion.div
                  key={i}
                  className={`flex-1 rounded-sm ${
                    h > 80 ? "bg-gradient-to-t from-[#D4AF37] to-[#F4E4B2]" : "bg-gradient-to-t from-purple-500 to-violet-400"
                  }`}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges with premium styling */}
      <motion.div
        className="absolute -right-3 top-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 shadow-lg border border-[#D4AF37]/30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Headphones className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="text-[10px] font-semibold text-white">24/7 Support</span>
      </motion.div>

      <motion.div
        className="absolute -left-3 bottom-24 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 shadow-lg border border-[#D4AF37]/30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="text-[10px] font-semibold text-white">Bank-Grade Security</span>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// TABLET BILLBOARD WITH CAROUSEL
// ============================================================================
function TabletBillboard({
  screens,
  isEnterprise,
}: {
  screens: CarouselScreen[];
  isEnterprise: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl opacity-30 scale-110 bg-gradient-to-r from-purple-600/40 via-violet-600/40 to-indigo-600/40 rounded-full" />

      {/* Tablet Frame */}
      <div className="relative rounded-[2rem] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl shadow-purple-900/20">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-600" />

        {/* Screen */}
        <div className={`relative overflow-hidden rounded-[1.5rem] aspect-[4/3] ${isEnterprise ? "bg-slate-950" : "bg-slate-900"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: screens[currentIndex].color + "25" }}
                  >
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: screens[currentIndex].color }} />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{screens[currentIndex].title}</div>
                    <div className="text-slate-500 text-[10px]">{screens[currentIndex].subtitle}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg p-2.5 bg-slate-800/70">
                    <div className="w-5 h-5 rounded mb-2" style={{ backgroundColor: screens[currentIndex].color + "30" }} />
                    <div className="h-1.5 rounded mb-1" style={{ width: `${50 + i * 15}%`, backgroundColor: screens[currentIndex].color }} />
                    <div className="h-1 w-3/4 rounded bg-slate-700" />
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="mt-2 rounded-lg p-3 bg-slate-800/70">
                <div className="flex items-end justify-between h-14 gap-1.5">
                  {[30, 50, 35, 65, 45, 80, 55, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{ backgroundColor: screens[currentIndex].color, opacity: 0.75 }}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.3 + i * 0.04 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-slate-600" />
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {screens.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 rounded-full transition-all ${
              idx === currentIndex ? "w-6 bg-purple-400" : "w-1.5 bg-slate-600"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ============================================================================
// WHATSAPP CTA
// ============================================================================
function WhatsAppCTA({ productTitle, ctaText, isEnterprise }: { productTitle: string; ctaText: string; isEnterprise?: boolean }) {
  const message = encodeURIComponent(`Hello, I am interested in ${productTitle}. Please guide me.`);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-bold text-sm rounded-xl shadow-lg transition-all overflow-hidden ${
        isEnterprise
          ? "bg-white text-purple-700 shadow-purple-900/20 hover:shadow-purple-900/30"
          : "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-green-500/25 hover:shadow-green-500/40"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full ${isEnterprise ? "via-purple-100" : "via-white/20"}`}
        animate={{ translateX: ["-100%", "200%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />
      <WhatsAppIcon className="w-5 h-5 relative z-10" />
      <span className="relative z-10">{ctaText}</span>
      <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
    </motion.a>
  );
}

function PhoneCTA({ text, isEnterprise }: { text: string; isEnterprise?: boolean }) {
  return (
    <motion.a
      href={PHONE_LINK}
      className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl transition-all ${
        isEnterprise
          ? "bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/25"
          : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Phone className="w-4 h-4" />
      {text}
    </motion.a>
  );
}

// ============================================================================
// STANDARD FEATURE ITEM
// ============================================================================
function FeatureItem({ feature, isEnterprise, index }: { feature: ProductFeature; isEnterprise: boolean; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all ${
        isEnterprise
          ? "bg-white/70 hover:bg-white border border-purple-100 hover:border-purple-300"
          : "bg-white/60 hover:bg-white border border-slate-100 hover:border-purple-200"
      }`}
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02 }}
    >
      {feature.highlight ? (
        <BadgeCheck className={`w-4 h-4 flex-shrink-0 ${isEnterprise ? "text-purple-600" : "text-purple-600"}`} />
      ) : (
        <Icon className={`w-4 h-4 flex-shrink-0 ${isEnterprise ? "text-slate-500" : "text-slate-400"}`} />
      )}
      <span className={`text-[13px] leading-tight ${feature.highlight ? "font-semibold" : "font-medium"} ${isEnterprise ? "text-slate-700" : "text-slate-700"}`}>
        {feature.text}
      </span>
    </motion.div>
  );
}

// ============================================================================
// ENTERPRISE FEATURES PILLARS - COMPACT WITH MODAL
// ============================================================================
const enterpriseFeaturePillars = [
  {
    icon: Globe,
    title: "Infrastructure & Scale",
    subtitle: "Built for unlimited growth",
    gradient: "from-purple-500 to-violet-600",
    features: [
      { icon: Users, text: "Unlimited User Licenses", highlight: true },
      { icon: Building2, text: "Unlimited Branches & Entities", highlight: true },
      { icon: Activity, text: "Unlimited Transaction Volume", highlight: true },
      { icon: Cloud, text: "Dedicated Cloud Infrastructure" },
      { icon: Server, text: "On-Premise Deployment Option" },
      { icon: Database, text: "Multi-Region Data Centers" },
      { icon: Layers, text: "Auto-Scaling Architecture" },
      { icon: GitBranch, text: "Load Balancing & Redundancy" },
      { icon: Gauge, text: "99.99% Uptime SLA Guarantee" },
      { icon: HardDrive, text: "Geo-Redundant Storage" },
      { icon: RefreshCw, text: "Automated Hourly Backups" },
      { icon: Timer, text: "Point-in-Time Recovery" },
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    subtitle: "Bank-grade protection",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      { icon: Lock, text: "AES-256 Military-Grade Encryption", highlight: true },
      { icon: ShieldCheck, text: "SOC 2 Type II Certified", highlight: true },
      { icon: Fingerprint, text: "GDPR & Data Protection Ready", highlight: true },
      { icon: Key, text: "Role-Based Access Control (RBAC)" },
      { icon: UserCheck, text: "Multi-Factor Authentication (MFA)" },
      { icon: ScrollText, text: "Complete Audit Trail & Logging" },
      { icon: Wifi, text: "IP Whitelisting & Geo-Fencing" },
      { icon: Eye, text: "Annual Penetration Testing" },
      { icon: FolderLock, text: "Data Encryption at Rest & Transit" },
      { icon: Eye, text: "Real-Time Threat Monitoring" },
      { icon: FileCheck, text: "Compliance Reporting Dashboard" },
      { icon: Scale, text: "Regulatory Framework Support" },
    ],
  },
  {
    icon: Cpu,
    title: "Intelligence & Analytics",
    subtitle: "AI-powered decisions",
    gradient: "from-blue-500 to-indigo-600",
    features: [
      { icon: Cpu, text: "Full Josea AI Suite Included", highlight: true },
      { icon: LineChart, text: "Predictive Demand Forecasting", highlight: true },
      { icon: LayoutDashboard, text: "Real-Time BI Dashboards", highlight: true },
      { icon: FileSpreadsheet, text: "Custom Report Builder" },
      { icon: TrendingUp, text: "Machine Learning Models" },
      { icon: Eye, text: "Anomaly Detection System" },
      { icon: PieChart, text: "Executive KPI Dashboards" },
      { icon: Activity, text: "Multi-Dimensional Analysis" },
      { icon: Bell, text: "Intelligent Alert System" },
      { icon: Eye, text: "Performance Benchmarking" },
      { icon: FileClock, text: "Historical Trend Analysis" },
      { icon: Scan, text: "Document OCR & Processing" },
    ],
  },
  {
    icon: Network,
    title: "Integration & Connectivity",
    subtitle: "Seamless orchestration",
    gradient: "from-orange-500 to-red-600",
    features: [
      { icon: Network, text: "RESTful & GraphQL API Access", highlight: true },
      { icon: Boxes, text: "ERP Integration (SAP, Oracle)", highlight: true },
      { icon: Users, text: "CRM Connectors (Salesforce)", highlight: true },
      { icon: CreditCard, text: "Payment Gateway APIs" },
      { icon: Workflow, text: "Webhook & Event Automation" },
      { icon: Settings, text: "Custom Integration Development" },
      { icon: Key, text: "SSO & LDAP/Active Directory" },
      { icon: RefreshCw, text: "Real-Time Data Synchronization" },
      { icon: Mail, text: "Email & SMS Gateway Integration" },
      { icon: MessageSquare, text: "Communication Platform APIs" },
      { icon: Landmark, text: "Government System Connectors" },
      { icon: Banknote, text: "Banking & Financial APIs" },
    ],
  },
];

function EnterpriseFeaturesPillars() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <InfinityIcon className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">Boundless Platform</span>
        </motion.div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          <span className="text-slate-900">Limitless </span>
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#B8962E] to-[#D4AF37] bg-clip-text text-transparent">Capabilities</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Every feature your enterprise demands, meticulously engineered for{" "}
          <span className="text-slate-700 font-medium">mission-critical operations</span>
        </p>
      </div>

      {/* Compact 2x2 Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {enterpriseFeaturePillars.map((pillar, idx) => {
          const PillarIcon = pillar.icon;
          const previewFeatures = pillar.features.filter(f => f.highlight).slice(0, 3);
          const totalFeatures = pillar.features.length;

          return (
            <motion.div
              key={idx}
              className="group relative bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveModal(idx)}
            >
              {/* Compact Header */}
              <div className={`bg-gradient-to-r ${pillar.gradient} p-3 sm:p-4`}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white truncate">{pillar.title}</h3>
                    <p className="text-[10px] sm:text-xs text-white/70 truncate">{pillar.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Preview Features */}
              <div className="p-3 sm:p-4">
                <div className="space-y-1.5 sm:space-y-2">
                  {previewFeatures.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-medium text-slate-700 truncate">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* See All Button */}
                <button className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 transition-colors">
                  <span className="text-[10px] sm:text-xs font-semibold">+{totalFeatures - 3} more features</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Feature Modal */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-lg max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${enterpriseFeaturePillars[activeModal].gradient} p-5`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {(() => {
                        const Icon = enterpriseFeaturePillars[activeModal].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{enterpriseFeaturePillars[activeModal].title}</h3>
                      <p className="text-sm text-white/80">{enterpriseFeaturePillars[activeModal].subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <span className="text-white text-lg">×</span>
                  </button>
                </div>
              </div>

              {/* Modal Features */}
              <div className="p-5 overflow-y-auto max-h-[calc(80vh-100px)]">
                <div className="grid gap-2">
                  {enterpriseFeaturePillars[activeModal].features.map((feature, fIdx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <div
                        key={fIdx}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          feature.highlight
                            ? "bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200"
                            : "bg-slate-50"
                        }`}
                      >
                        {feature.highlight ? (
                          <BadgeCheck className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        ) : (
                          <FeatureIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.highlight ? "font-semibold text-slate-800" : "text-slate-600"}`}>
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Operations & Support Bar - Compact */}
      <motion.div
        className="mt-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl p-4 sm:p-6 border border-slate-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">Operations & Support Excellence</h3>
            <p className="text-xs sm:text-sm text-slate-400">White-glove service for mission-critical deployments</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Headphones, label: "24/7 Support" },
              { icon: Award, label: "Dedicated Manager" },
              { icon: Smartphone, label: "Mobile Apps" },
              { icon: Palette, label: "White-Label" },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  <ItemIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[10px] sm:text-xs font-medium text-white">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ============================================================================
// INDUSTRY CARD
// ============================================================================
function IndustryCard({ industry, isEnterprise, index }: { industry: TargetIndustry; isEnterprise: boolean; index: number }) {
  const Icon = industry.icon;

  return (
    <motion.div
      className={`group flex items-center gap-3 p-3 rounded-xl transition-all cursor-default ${
        isEnterprise
          ? "bg-slate-50 border border-slate-200 hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/5 hover:bg-white"
          : "bg-white/70 border border-slate-200/80 hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/5"
      }`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.025 }}
      whileHover={{ y: -1 }}
    >
      <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
        isEnterprise
          ? "bg-purple-100 group-hover:bg-purple-500 text-purple-600 group-hover:text-white"
          : "bg-purple-100/80 group-hover:bg-purple-200 text-purple-600"
      }`}>
        <Icon className="w-4 h-4" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <div className={`text-[13px] font-semibold leading-tight ${isEnterprise ? "text-slate-800" : "text-slate-800"}`}>
          {industry.name}
        </div>
        <div className={`text-[11px] leading-tight ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
          {industry.description}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = productsData[slug];

  if (!product) {
    notFound();
  }

  const isEnterprise = product.mode === "blueprint";

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* HERO */}
        <section className={`relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 ${
          isEnterprise && product.slug === "enterprise-os"
            ? "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"
            : isEnterprise
            ? "bg-gradient-to-r from-[#7e22ce] via-[#a855f7] to-[#f5f3ff]"
            : "bg-gradient-to-br from-slate-50 via-purple-50/40 to-indigo-50/40"
        }`}>
          {isEnterprise && product.slug === "enterprise-os" ? (
            <>
              {/* Premium Enterprise Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,80,180,0.3),transparent)]" />
              <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: "radial-gradient(rgba(212, 175, 55, 0.8) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              {/* Gold accent lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
              <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </>
          ) : isEnterprise ? (
            <>
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
            </>
          ) : (
            <div className="absolute top-[-5%] left-0 right-0 h-[300px] bg-gradient-to-b from-purple-500/10 to-transparent blur-[50px]" />
          )}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Content */}
              <div className="text-center lg:text-left">
                <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  {product.badge && (
                    <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest ${
                      isEnterprise && product.slug === "enterprise-os"
                        ? "bg-gradient-to-r from-[#D4AF37] via-[#F4E4B2] to-[#D4AF37] text-slate-900 shadow-lg shadow-yellow-500/20 border border-[#D4AF37]/30"
                        : isEnterprise
                        ? "bg-white/90 text-purple-700 border border-white/50 shadow-sm"
                        : product.badge === "POPULAR"
                        ? "bg-purple-600 text-white"
                        : "bg-purple-100 text-purple-700 border border-purple-200"
                    }`}>
                      {product.badge === "POPULAR" && <Crown className="w-3 h-3" />}
                      {product.badge === "ENTERPRISE" && <Crown className="w-3.5 h-3.5 text-slate-800" />}
                      {product.badge}
                    </span>
                  )}
                  <span className={`text-[10px] font-semibold tracking-wider uppercase ${isEnterprise ? "text-white/70" : "text-slate-500"}`}>
                    {product.category === "operations" ? "Operations Suite" : "Digital Suite"}
                  </span>
                </motion.div>

                {/* Enterprise Hero with Visual Hierarchy */}
                {isEnterprise && product.slug === "enterprise-os" ? (
                  <>
                    <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                      <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                        {product.title}
                      </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold">
                      <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4B2] to-[#D4AF37] bg-clip-text text-transparent">
                        {product.tagline}
                      </span>
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                      <p className="text-white/60">
                        When <span className="text-white font-medium">off-the-shelf software</span> cannot meet your{" "}
                        <span className="text-[#D4AF37] font-semibold">operational complexity</span>, we architect and build{" "}
                        <span className="text-white font-medium">bespoke systems</span> from the ground up.
                      </p>
                      <p className="mt-3 text-white/60">
                        Enterprise OS delivers <span className="text-white font-medium">custom workflow engines</span>,{" "}
                        <span className="text-white font-medium">real-time analytics</span>, and{" "}
                        <span className="text-white font-medium">seamless integrations</span>—all secured with{" "}
                        <span className="text-[#D4AF37] font-semibold">bank-grade encryption</span> and backed by{" "}
                        <span className="text-[#D4AF37] font-semibold">99.99% uptime SLA</span>.
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.h1 variants={itemVariants} className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                      {product.title}
                    </motion.h1>

                    <motion.p variants={itemVariants} className={`mt-2 text-lg sm:text-xl lg:text-2xl font-medium ${
                      isEnterprise ? "text-white/90" : "text-purple-600"
                    }`}>
                      {product.tagline}
                    </motion.p>

                    <motion.p variants={itemVariants} className={`mt-5 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${isEnterprise ? "text-purple-100/90" : "text-slate-600"}`}>
                      {product.description}
                    </motion.p>
                  </>
                )}

                <motion.div variants={itemVariants} className="mt-6">
                  {isEnterprise && product.slug === "enterprise-os" ? (
                    <div className="flex items-baseline gap-3 justify-center lg:justify-start">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F4E4B2] to-[#D4AF37] bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      {product.priceSubtext && (
                        <span className="text-sm text-white/50">
                          {product.priceSubtext}
                        </span>
                      )}
                    </div>
                  ) : (
                    <>
                      <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                        {product.price}
                      </span>
                      {product.priceSubtext && (
                        <span className={`block sm:inline sm:ml-3 mt-1 sm:mt-0 text-sm ${isEnterprise ? "text-purple-100/70" : "text-slate-500"}`}>
                          {product.priceSubtext}
                        </span>
                      )}
                    </>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                  <PhoneCTA text={product.secondaryCtaText} isEnterprise={isEnterprise} />
                </motion.div>

                {/* Enterprise Trust Badges with Gold Accents */}
                {isEnterprise && product.slug === "enterprise-os" && (
                  <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    {[
                      { icon: Shield, label: "SOC 2 Compliant", gold: true },
                      { icon: Lock, label: "AES-256 Encryption", gold: true },
                      { icon: Activity, label: "99.99% Uptime", gold: false },
                      { icon: Headphones, label: "24/7 Support", gold: false },
                    ].map((badge, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm border ${
                          badge.gold
                            ? "bg-[#D4AF37]/20 border-[#D4AF37]/40"
                            : "bg-white/10 border-white/20"
                        }`}
                      >
                        <badge.icon className={`w-3.5 h-3.5 ${badge.gold ? "text-[#D4AF37]" : "text-white"}`} />
                        <span className={`text-xs font-medium ${badge.gold ? "text-[#D4AF37]" : "text-white/90"}`}>{badge.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Visual */}
              <motion.div variants={itemVariants}>
                {isEnterprise && product.slug === "enterprise-os" ? (
                  <EnterpriseDashboardPreview />
                ) : isEnterprise ? (
                  <TabletBillboard screens={product.carouselScreens} isEnterprise={true} />
                ) : (
                  <TabletBillboard screens={product.carouselScreens} isEnterprise={false} />
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className={`py-12 sm:py-16 ${
          isEnterprise && product.slug === "enterprise-os"
            ? "bg-gradient-to-b from-white via-slate-50 to-white"
            : isEnterprise
            ? "bg-slate-50"
            : "bg-white"
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Enterprise Features - Boundless Capabilities */}
            {isEnterprise && product.slug === "enterprise-os" ? (
              <EnterpriseFeaturesPillars />
            ) : (
              /* Standard Features Grid */
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What&apos;s Included</h2>
                  <p className="mt-2 text-sm text-slate-500">{product.features.length} powerful features</p>
                </div>
                <div className={`grid gap-2 ${
                  product.features.length > 14
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                    : product.features.length > 8
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-2 sm:grid-cols-3"
                }`}>
                  {product.features.map((feature, idx) => (
                    <FeatureItem key={idx} feature={feature} isEnterprise={isEnterprise} index={idx} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* INDUSTRIES */}
        {isEnterprise && product.slug === "enterprise-os" ? (
          <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold tracking-widest text-white uppercase">Enterprise Sectors</span>
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Trusted by <span className="bg-gradient-to-r from-[#D4AF37] via-[#B8962E] to-[#D4AF37] bg-clip-text text-transparent">Industry Leaders</span>
                </h2>
                <p className="mt-3 text-base text-slate-500 max-w-2xl mx-auto">
                  Powering mission-critical operations across diverse enterprise sectors
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {product.targetIndustries.map((industry, idx) => {
                  const Icon = industry.icon;
                  const isHighlight = idx < 3; // First 3 are highlighted
                  return (
                    <motion.div
                      key={idx}
                      className={`group relative flex flex-col items-center p-5 rounded-2xl transition-all cursor-default ${
                        isHighlight
                          ? "bg-gradient-to-b from-slate-900 to-slate-800 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50"
                          : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${
                        isHighlight
                          ? "bg-gradient-to-br from-[#D4AF37] to-[#B8962E] shadow-lg shadow-[#D4AF37]/20"
                          : "bg-purple-100 group-hover:bg-purple-500 text-purple-600 group-hover:text-white"
                      }`}>
                        <Icon className={`w-5 h-5 ${isHighlight ? "text-slate-900" : ""}`} strokeWidth={2} />
                      </div>
                      <div className={`text-sm font-semibold text-center ${isHighlight ? "text-white" : "text-slate-800"}`}>
                        {industry.name}
                      </div>
                      <div className={`text-xs text-center ${isHighlight ? "text-[#D4AF37]" : "text-slate-500"}`}>
                        {industry.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : (
          <section className={`py-12 sm:py-14 ${isEnterprise ? "bg-white" : "bg-slate-50"}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-2xl sm:text-3xl font-bold ${isEnterprise ? "text-slate-900" : "text-slate-900"}`}>
                  {isEnterprise ? "Trusted by Industry Leaders" : "Perfect For Your Industry"}
                </h2>
                <p className={`mt-2 text-sm ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
                  Powering operations across these sectors
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                {product.targetIndustries.map((industry, idx) => (
                  <IndustryCard key={idx} industry={industry} isEnterprise={isEnterprise} index={idx} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        {isEnterprise && product.slug === "enterprise-os" ? (
          <section className="relative py-20 sm:py-28 bg-slate-950 overflow-hidden">
            {/* Sophisticated Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-slate-950 to-slate-950" />
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: "radial-gradient(rgba(212, 175, 55, 0.8) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
              {/* Gold accent lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            </div>

            {/* Floating Gold Orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Premium Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Crown className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">Executive Partnership</span>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  <span className="text-white">Ready to </span>
                  <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4E4B2] to-[#D4AF37] bg-clip-text text-transparent">
                    Architect Your Future?
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Schedule an <span className="text-white font-medium">executive briefing</span> with our solutions architects.{" "}
                  Let&apos;s discuss how Enterprise OS can <span className="text-[#D4AF37] font-medium">transform your operations</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I am interested in Enterprise OS. Please schedule an executive briefing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-base rounded-xl overflow-hidden bg-gradient-to-r from-[#D4AF37] via-[#F4E4B2] to-[#D4AF37] text-slate-900 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/30 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                      animate={{ translateX: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <WhatsAppIcon className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Schedule Executive Briefing</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
                  </motion.a>

                  <motion.a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    Speak to Solutions Architect
                  </motion.a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                  {[
                    { icon: Shield, label: "NDA Available" },
                    { icon: FileCheck, label: "Custom Proposal in 48hrs" },
                    { icon: Award, label: "No Obligation" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-500">
                      <item.icon className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Enterprise Credentials */}
                <div className="pt-8 border-t border-slate-800">
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Trusted by Industry Leaders</p>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    {[
                      { icon: Factory, label: "Manufacturing" },
                      { icon: Landmark, label: "Government" },
                      { icon: Stethoscope, label: "Healthcare" },
                      { icon: Briefcase, label: "Finance" },
                      { icon: GraduationCap, label: "Education" },
                    ].map((sector, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800">
                        <sector.icon className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-xs text-slate-400">{sector.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ) : (
          <section className={`relative py-14 sm:py-20 ${
            isEnterprise
              ? "bg-gradient-to-r from-[#7e22ce] via-[#a855f7] to-[#f5f3ff]"
              : "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"
          }`}>
            {isEnterprise && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }} />
              </div>
            )}

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${isEnterprise ? "text-white" : "text-white"}`}>
                  {isEnterprise ? "Ready to Architect Your Future?" : "Ready to Get Started?"}
                </h2>
                <p className={`text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto ${isEnterprise ? "text-purple-100/90" : "text-white/80"}`}>
                  {isEnterprise
                    ? "Schedule an executive briefing with our solutions architects. Let's discuss how Enterprise OS can transform your operations."
                    : `Join hundreds of Kenyan businesses using ${product.title}`}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                  <PhoneCTA text={PHONE_NUMBER} isEnterprise={isEnterprise} />
                </div>

                <p className={`mt-6 text-xs ${isEnterprise ? "text-white/60" : "text-white/50"}`}>
                  {isEnterprise
                    ? "NDA available • Custom proposal within 48 hours • No obligation"
                    : "Free consultation • No commitment • Response within 24 hours"}
                </p>
              </motion.div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
