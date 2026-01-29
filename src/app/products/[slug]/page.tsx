"use client";

import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
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
  Calendar,
  Sparkles,
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
const WHATSAPP_NUMBER = "254746554150";
const PHONE_NUMBER = "+254 746554150";
const PHONE_LINK = "tel:+254746554150";

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
// RETAIL PRO MEDIA CAROUSEL - Video + Image
// ============================================================================
function RetailProMediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % 2;
        setIsVideoPlaying(next === 0);
        return next;
      });
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Premium glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />

      {/* Main visual container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-purple-200/50 bg-slate-900">
        <AnimatePresence mode="wait">
          {currentIndex === 0 ? (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video w-full"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/billboard.mp4" type="video/mp4" />
              </video>
              {/* Video label */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-purple-600/90 backdrop-blur-sm rounded-full">
                <span className="text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Live Demo
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video w-full bg-gradient-to-br from-slate-50 to-slate-100"
            >
              <Image
                src="/hero-devices.png"
                alt="Retail Pro on multiple devices"
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              {/* Image label */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-violet-600/90 backdrop-blur-sm rounded-full">
                <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
                  Multi-Device
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsVideoPlaying(idx === 0);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Feature badges below */}
      <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
        <div className="px-3 py-1.5 bg-white rounded-full border border-purple-100 shadow-sm">
          <span className="text-xs text-slate-700 font-medium">AI-Powered Insights</span>
        </div>
        <div className="px-3 py-1.5 bg-white rounded-full border border-purple-100 shadow-sm">
          <span className="text-xs text-slate-700 font-medium">Multi-Branch Ready</span>
        </div>
        <div className="px-3 py-1.5 bg-white rounded-full border border-purple-100 shadow-sm">
          <span className="text-xs text-slate-700 font-medium">M-Pesa Integration</span>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// RETAIL LITE DEVICE VISUAL - Single Image
// ============================================================================
function RetailLiteDeviceVisual() {
  return (
    <motion.div
      className="relative w-full max-w-xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Premium glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />

      {/* Main visual container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-violet-200/50 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/hero-devices.png"
            alt="Retail Lite on multiple devices"
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 576px"
            priority
          />
        </div>

        {/* Floating badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-violet-600/95 backdrop-blur-sm rounded-full shadow-lg">
          <span className="text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Smartphone className="w-3 h-3" />
            Cross-Platform
          </span>
        </div>
      </div>

      {/* Feature badges below */}
      <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
        <div className="px-3 py-1.5 bg-white rounded-full border border-violet-100 shadow-sm">
          <span className="text-xs text-slate-700 font-medium">Smart POS</span>
        </div>
        <div className="px-3 py-1.5 bg-white rounded-full border border-violet-100 shadow-sm">
          <span className="text-xs text-slate-700 font-medium">Offline-Ready</span>
        </div>
        <div className="px-3 py-1.5 bg-white rounded-full border border-violet-100 shadow-sm">
          <span className="text-xs text-slate-700 font-medium">One-Time Payment</span>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// WHATSAPP CTA
// ============================================================================
function WhatsAppCTA({ productTitle, ctaText, isEnterprise }: { productTitle: string; ctaText: string; isEnterprise?: boolean }) {
  // Different messages based on CTA type
  const isDemoRequest = ctaText.toLowerCase().includes('briefing') || ctaText.toLowerCase().includes('schedule');
  const isEngineerRequest = ctaText.toLowerCase().includes('engineer');

  let messageText: string;
  if (isDemoRequest) {
    messageText = `Hello Josea Team, I'm interested in scheduling a demo of ${productTitle}. Could you please arrange a convenient time for a demonstration? Thank you.`;
  } else if (isEngineerRequest) {
    messageText = `Hello Josea Team, I'd like to speak with an engineer about ${productTitle}. Could you connect me with your technical team? Thank you.`;
  } else {
    messageText = `Hi Josea Team, I'm interested in ${productTitle}. Could you share more information about how it can help my business?`;
  }

  const message = encodeURIComponent(messageText);
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
      className={`group relative flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
        feature.highlight
          ? "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 border-2 border-violet-300 shadow-sm hover:shadow-md hover:shadow-violet-200/50"
          : "bg-white hover:bg-slate-50 border border-slate-200 hover:border-violet-200 shadow-sm hover:shadow-md"
      }`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      whileHover={{ y: -2 }}
    >
      {/* Icon with gradient background */}
      <div
        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
          feature.highlight
            ? "bg-gradient-to-br from-violet-500 to-purple-600 shadow-md shadow-purple-300/50"
            : "bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-violet-100 group-hover:to-purple-100"
        }`}
      >
        {feature.highlight ? (
          <BadgeCheck className="w-5 h-5 text-white" strokeWidth={2} />
        ) : (
          <Icon className="w-4.5 h-4.5 text-slate-600 group-hover:text-violet-600 transition-colors" strokeWidth={1.5} />
        )}
      </div>

      {/* Text */}
      <div className="flex-1 pt-0.5">
        <span
          className={`text-sm leading-snug block ${
            feature.highlight ? "font-semibold text-slate-900" : "font-medium text-slate-700"
          }`}
          style={feature.highlight ? { fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" } : {}}
        >
          {feature.text}
        </span>
      </div>

      {/* Highlight badge for premium features */}
      {feature.highlight && (
        <div className="absolute -top-1.5 -right-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md">
            <Sparkles className="w-3 h-3 text-white" strokeWidth={2.5} />
          </div>
        </div>
      )}
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
          <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">Enterprise Platform</span>
        </motion.div>
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold"
          style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
        >
          <span className="text-slate-900">Complete </span>
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#B8962E] to-[#D4AF37] bg-clip-text text-transparent">Feature Set</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          48 enterprise capabilities organized across infrastructure, security, intelligence, and integration domains.{" "}
          <span className="text-slate-800 font-medium">Unlimited users, unlimited scale, unlimited growth.</span>
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

      {/* Enterprise Services & Support */}
      <motion.div
        className="mt-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {/* Support SLAs */}
        <div className="p-5 border-b border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Headphones className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-bold text-white">Enterprise Support SLAs</h3>
              </div>
              <p className="text-xs text-slate-400">
                24/7/365 engineering support with dedicated account manager and quarterly business reviews
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Critical</div>
                <div className="text-sm font-bold text-[#D4AF37]">&lt;4hrs</div>
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-center">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Standard</div>
                <div className="text-sm font-bold text-white">&lt;24hrs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="p-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white">Dedicated CSM</div>
                <div className="text-[10px] text-slate-400">Account Manager</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white">Mobile Apps</div>
                <div className="text-[10px] text-slate-400">iOS & Android</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Palette className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white">White-Label</div>
                <div className="text-[10px] text-slate-400">Full Branding</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-white">Training</div>
                <div className="text-[10px] text-slate-400">On-site Available</div>
              </div>
            </div>
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
        <section className={`relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-12 ${
          isEnterprise && product.slug === "enterprise-os"
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            : isEnterprise
            ? "bg-gradient-to-r from-[#7e22ce] via-[#a855f7] to-[#f5f3ff]"
            : "bg-gradient-to-br from-slate-50 via-purple-50/40 to-indigo-50/40"
        }`}>
          {isEnterprise && product.slug === "enterprise-os" ? (
            <>
              {/* Minimal Professional Background */}
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: "radial-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
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

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            {isEnterprise && product.slug === "enterprise-os" ? (
              <motion.div
                className="text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Badge */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-widest bg-gradient-to-r from-[#D4AF37] via-[#F4E4B2] to-[#D4AF37] text-slate-900 shadow-lg shadow-yellow-500/20 border border-[#D4AF37]/30">
                    <Crown className="w-3.5 h-3.5 text-slate-800" />
                    {product.badge}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  <span className="text-white">{product.title}</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                  variants={itemVariants}
                  className="mt-3 text-lg sm:text-xl font-medium text-[#D4AF37]"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  {product.tagline}
                </motion.p>

                {/* Core Value Proposition - Compact */}
                <motion.p
                  variants={itemVariants}
                  className="mt-5 text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed"
                >
                  Bespoke enterprise systems engineered for organizations requiring{" "}
                  <span className="text-white font-medium">deep customization beyond standard ERP platforms</span>.{" "}
                  Built on cloud-native architecture with{" "}
                  <span className="text-[#D4AF37] font-medium">bank-grade security</span> and{" "}
                  <span className="text-[#D4AF37] font-medium">99.99% uptime guarantee</span>.
                </motion.p>

                {/* Technical Credentials - Clean Grid */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto"
                >
                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <Shield className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Security</span>
                    </div>
                    <p className="text-[10px] text-slate-400">SOC 2 Type II</p>
                    <p className="text-[10px] text-slate-400">AES-256</p>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <Activity className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Reliability</span>
                    </div>
                    <p className="text-[10px] text-slate-400">99.99% Uptime</p>
                    <p className="text-[10px] text-slate-400">Multi-Region</p>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <Network className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Integration</span>
                    </div>
                    <p className="text-[10px] text-slate-400">REST/GraphQL</p>
                    <p className="text-[10px] text-slate-400">ERP Connectors</p>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <InfinityIcon className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Scale</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Unlimited Users</p>
                    <p className="text-[10px] text-slate-400">Auto-Scaling</p>
                  </div>
                </motion.div>

                {/* Pricing */}
                <motion.div variants={itemVariants} className="mt-6">
                  <div className="inline-flex flex-col items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-xl sm:text-2xl font-bold text-white"
                        style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                      >
                        {product.price}
                      </span>
                    </div>
                    {product.priceSubtext && (
                      <span className="text-xs text-slate-500">{product.priceSubtext}</span>
                    )}
                    <div className="flex items-center gap-4 mt-1 pt-2 border-t border-slate-800">
                      <div className="flex items-center gap-1.5">
                        <Banknote className="w-3 h-3 text-[#D4AF37]" />
                        <span className="text-[10px] text-slate-400">Flexible Payment Terms</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FileCheck className="w-3 h-3 text-[#D4AF37]" />
                        <span className="text-[10px] text-slate-400">ROI Analysis Included</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                  <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                  <PhoneCTA text={product.secondaryCtaText} isEnterprise={isEnterprise} />
                </motion.div>

                {/* Support Badge */}
                <motion.div variants={itemVariants} className="mt-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <Headphones className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-xs text-slate-400">24/7 Engineering Support • &lt;4hr Critical Response SLA</span>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
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
                        isEnterprise
                          ? "bg-white/90 text-purple-700 border border-white/50 shadow-sm"
                          : product.badge === "POPULAR"
                          ? "bg-purple-600 text-white"
                          : "bg-purple-100 text-purple-700 border border-purple-200"
                      }`}>
                        {product.badge === "POPULAR" && <Crown className="w-3 h-3" />}
                        {product.badge}
                      </span>
                    )}
                    <span className={`text-[10px] font-semibold tracking-wider uppercase ${isEnterprise ? "text-white/70" : "text-slate-500"}`}>
                      {product.category === "operations" ? "Operations Suite" : "Digital Suite"}
                    </span>
                  </motion.div>

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

                  <motion.div variants={itemVariants} className="mt-6">
                    <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                      {product.price}
                    </span>
                    {product.priceSubtext && (
                      <span className={`block sm:inline sm:ml-3 mt-1 sm:mt-0 text-sm ${isEnterprise ? "text-purple-100/70" : "text-slate-500"}`}>
                        {product.priceSubtext}
                      </span>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start flex-wrap">
                    {/* Book a Demo CTA - Primary for Retail products */}
                    {(product.slug === "retail-lite" || product.slug === "retail-pro") && (
                      <motion.a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          `Hello Josea Team, I'd like to schedule a live demo of ${product.title}. Could you please arrange a demonstration at your earliest convenience? Thank you.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-full transition-all bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-xl shadow-purple-500/30"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book a Demo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </motion.a>
                    )}
                    <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                    <PhoneCTA text={product.secondaryCtaText} isEnterprise={isEnterprise} />
                  </motion.div>
                </div>

                {/* Visual */}
                <motion.div variants={itemVariants}>
                  {isEnterprise ? (
                    <TabletBillboard screens={product.carouselScreens} isEnterprise={true} />
                  ) : product.slug === "retail-pro" ? (
                    <RetailProMediaCarousel />
                  ) : product.slug === "retail-lite" ? (
                    <RetailLiteDeviceVisual />
                  ) : (
                    <TabletBillboard screens={product.carouselScreens} isEnterprise={false} />
                  )}
                </motion.div>
              </motion.div>
            )}
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS - Enterprise OS Only */}
        {isEnterprise && product.slug === "enterprise-os" && (
          <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
                  <Server className="w-3.5 h-3.5 text-slate-600" />
                  <span className="text-[10px] font-semibold tracking-wider text-slate-600 uppercase">Technical Foundation</span>
                </div>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  Platform <span className="text-purple-700">Specifications</span>
                </h2>
              </motion.div>

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Architecture */}
                <motion.div
                  className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Layers className="w-4 h-4 text-purple-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">Architecture</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">•</span>
                      <span>Containerized microservices (Docker/Kubernetes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">•</span>
                      <span>PostgreSQL primary, MongoDB for unstructured data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">•</span>
                      <span>Redis caching layer with automatic failover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">•</span>
                      <span>Event-driven architecture (RabbitMQ/Kafka)</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Performance */}
                <motion.div
                  className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Gauge className="w-4 h-4 text-emerald-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">Performance</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">•</span>
                      <span>99.99% uptime SLA (52 min annual downtime)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">•</span>
                      <span>API response time &lt;200ms (p95)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">•</span>
                      <span>Horizontal auto-scaling to 10,000+ concurrent users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5">•</span>
                      <span>Multi-region geo-redundant deployment</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Security & Compliance */}
                <motion.div
                  className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-[#B8962E]" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">Security</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B8962E] mt-0.5">•</span>
                      <span>AES-256 encryption (data at rest & in transit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B8962E] mt-0.5">•</span>
                      <span>SOC 2 Type II certified infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B8962E] mt-0.5">•</span>
                      <span>GDPR & data protection compliance ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B8962E] mt-0.5">•</span>
                      <span>Annual penetration testing & vulnerability scans</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Deployment & Support */}
                <motion.div
                  className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Cloud className="w-4 h-4 text-blue-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">Deployment</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Cloud (AWS/Azure/GCP) or on-premise options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Dedicated engineer during deployment (4-8 weeks)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>24/7 support with &lt;4hr critical response SLA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Dedicated account manager & quarterly reviews</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Integration & Technology Stack */}
              <motion.div
                className="mt-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {/* Integration Layer */}
                <div className="p-5 border-b border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Network className="w-4 h-4 text-[#D4AF37]" />
                        <h3 className="text-sm font-bold text-white">Enterprise Integration Layer</h3>
                      </div>
                      <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                        Production-grade API endpoints with OpenAPI/Swagger documentation. Pre-built connectors for SAP, Oracle EBS, Salesforce, Microsoft Dynamics, QuickBooks, Xero. SSO/LDAP/Active Directory integration. Custom API development and dedicated integration support included.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-white whitespace-nowrap">REST API</span>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-white whitespace-nowrap">GraphQL</span>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-white whitespace-nowrap">Webhooks</span>
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-medium text-white whitespace-nowrap">OAuth 2.0</span>
                    </div>
                  </div>
                </div>

                {/* Technology Stack */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-4 h-4 text-[#D4AF37]" />
                    <h3 className="text-sm font-bold text-white">Technology Stack</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Backend</p>
                      <div className="space-y-1">
                        <div className="text-xs text-slate-300">Node.js / Python</div>
                        <div className="text-xs text-slate-300">Microservices (Docker)</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Database</p>
                      <div className="space-y-1">
                        <div className="text-xs text-slate-300">PostgreSQL 15+</div>
                        <div className="text-xs text-slate-300">MongoDB / Redis</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Infrastructure</p>
                      <div className="space-y-1">
                        <div className="text-xs text-slate-300">Kubernetes</div>
                        <div className="text-xs text-slate-300">AWS / Azure / GCP</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">Monitoring</p>
                      <div className="space-y-1">
                        <div className="text-xs text-slate-300">Prometheus / Grafana</div>
                        <div className="text-xs text-slate-300">ELK Stack Logging</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ENTERPRISE SUMMARY - What's Included */}
        {isEnterprise && product.slug === "enterprise-os" && (
          <section className="py-10 sm:py-12 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2
                  className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  Enterprise OS <span className="text-purple-700">Includes</span>
                </h2>
                <p className="text-sm text-slate-600">
                  Comprehensive platform with unlimited scale, dedicated support, and full customization
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Core Platform */}
                <motion.div
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Server className="w-4 h-4 text-purple-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">Core Platform</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Unlimited users, branches, transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Custom workflow engines & automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Full source code access & documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Cloud or on-premise deployment</span>
                    </li>
                  </ul>
                </motion.div>

                {/* AI & Analytics */}
                <motion.div
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-blue-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">AI & Analytics</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Complete Josea AI suite included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Real-time BI dashboards & reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Predictive analytics & ML models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Custom KPI tracking & alerts</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Enterprise Support */}
                <motion.div
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Headphones className="w-4 h-4 text-emerald-700" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">Enterprise Support</h3>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>24/7/365 engineering support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Priority bug fixes & feature requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-3.5 h-3.5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Quarterly business reviews & planning</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURES */}
        <section className={`py-12 sm:py-16 ${
          isEnterprise && product.slug === "enterprise-os"
            ? "bg-white"
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
          <section className="py-12 sm:py-14 bg-white border-y border-slate-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-slate-600" />
                  <span className="text-[10px] font-semibold tracking-wider text-slate-600 uppercase">Deployed Across Sectors</span>
                </div>
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 mb-2"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  Mission-Critical <span className="text-purple-700">Deployments</span>
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                  Enterprise OS powers operations for regulated industries requiring{" "}
                  <span className="font-medium text-slate-800">high security</span>,{" "}
                  <span className="font-medium text-slate-800">compliance</span>, and{" "}
                  <span className="font-medium text-slate-800">zero-downtime availability</span>
                </p>
              </motion.div>

              {/* Industry Cards - Professional Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {product.targetIndustries.map((industry, idx) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="group relative bg-slate-50 border border-slate-200 rounded-xl p-4 hover:bg-white hover:border-purple-300 hover:shadow-md transition-all cursor-default"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 group-hover:border-purple-300 flex items-center justify-center mb-2.5 transition-all">
                          <Icon className="w-5 h-5 text-slate-600 group-hover:text-purple-700 transition-colors" strokeWidth={1.5} />
                        </div>
                        <div className="text-xs font-semibold text-slate-800 mb-0.5">
                          {industry.name}
                        </div>
                        <div className="text-[10px] text-slate-500 leading-tight">
                          {industry.description}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Compliance & Standards Bar */}
              <motion.div
                className="mt-8 bg-slate-900 rounded-xl p-5 border border-slate-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <h3 className="text-sm font-bold text-white">Compliance & Standards</h3>
                    </div>
                    <p className="text-xs text-slate-400">
                      Built to meet stringent regulatory requirements across all deployment sectors
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "SOC 2 Type II" },
                      { label: "ISO 27001" },
                      { label: "GDPR Ready" },
                      { label: "HIPAA Compatible" },
                      { label: "PCI DSS" },
                    ].map((item, idx) => (
                      <div key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                        <span className="text-[10px] font-medium text-slate-300">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
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
          <section className="relative py-14 sm:py-16 bg-slate-950 overflow-hidden border-t border-slate-900">
            {/* Minimal Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: "radial-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }} />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">Executive Consultation</span>
                </motion.div>

                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
                  style={{ fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif" }}
                >
                  <span className="text-white">Request </span>
                  <span className="text-[#D4AF37]">Technical Proposal</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Schedule a consultation with our solutions architects to discuss your requirements.{" "}
                  Receive a <span className="text-white font-medium">comprehensive technical proposal</span> within 48 hours including{" "}
                  system architecture diagrams, integration roadmap, security assessment, and transparent cost analysis.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                  <motion.a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Josea Team, I'm interested in scheduling a technical consultation for Enterprise OS. Please arrange a convenient time for a detailed discussion. Thank you.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold text-sm rounded-xl overflow-hidden bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.a>

                  <motion.a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Solutions Architect
                  </motion.a>
                </div>

                {/* What You Get */}
                <div className="mb-8 p-5 rounded-xl bg-slate-900/50 border border-slate-800 max-w-3xl mx-auto">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Proposal Includes</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { icon: FileCheck, label: "System Architecture" },
                      { icon: Network, label: "Integration Plan" },
                      { icon: Shield, label: "Security Audit" },
                      { icon: Banknote, label: "Cost Breakdown" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <item.icon className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                        <span className="text-xs text-slate-300">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process & Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800">
                    <Shield className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-xs font-semibold text-white mb-1">NDA Available</p>
                    <p className="text-[10px] text-slate-500">Confidentiality guaranteed</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800">
                    <Timer className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-xs font-semibold text-white mb-1">48-Hour Turnaround</p>
                    <p className="text-[10px] text-slate-500">Detailed technical proposal</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800">
                    <Award className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
                    <p className="text-xs font-semibold text-white mb-1">No Obligation</p>
                    <p className="text-[10px] text-slate-500">Architecture review included</p>
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
                  <PhoneCTA text={product.secondaryCtaText} isEnterprise={isEnterprise} />
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
