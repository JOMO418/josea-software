"use client";

import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Phone,
  Shield,
  Zap,
  Server,
  Network,
  Database,
  Lock,
  Cpu,
  Globe,
  ShoppingCart,
  BarChart3,
  Users,
  Palette,
  Rocket,
  ArrowRight,
  Store,
  Pill,
  Wine,
  Scissors,
  Monitor,
  Building2,
  Truck,
  Factory,
  GraduationCap,
  Landmark,
  Warehouse,
  Car,
  UtensilsCrossed,
  Building,
  HardHat,
  Stethoscope,
  Package,
  Layers,
  Coffee,
  Shirt,
  Heart,
  Sparkles,
  CircleCheck,
  Gem,
  Crown,
  Target,
  Briefcase,
  Home,
  Cog,
  Wrench,
  Laptop,
  Smartphone,
  ShoppingBag,
  BadgeCheck,
} from "lucide-react";
import { use } from "react";
import Navbar from "@/components/Navbar";

// ============================================================================
// WHATSAPP ICON COMPONENT
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
// TYPES
// ============================================================================
type ProductMode = "showroom" | "blueprint";

interface ProductFeature {
  text: string;
  highlight?: boolean;
}

interface TargetIndustry {
  name: string;
  icon: React.ElementType;
  description: string;
}

interface CarouselScreen {
  title: string;
  subtitle: string;
  color: string;
}

interface ProductData {
  slug: string;
  mode: ProductMode;
  category: "operations" | "digital";
  title: string;
  tagline: string;
  description: string;
  price: string;
  priceSubtext?: string;
  badge?: string;
  features: ProductFeature[];
  ctaText: string;
  secondaryCtaText: string;
  targetIndustries: TargetIndustry[];
  carouselScreens: CarouselScreen[];
}

// ============================================================================
// PRODUCT DATA
// ============================================================================
const productsData: Record<string, ProductData> = {
  "retail-lite": {
    slug: "retail-lite",
    mode: "showroom",
    category: "operations",
    title: "Retail Lite",
    tagline: "Start Your Digital Journey",
    description:
      "The perfect entry point for single-store retailers. Smart POS, inventory tracking, and sales reporting—everything you need to run a modern retail operation.",
    price: "KES 25,000",
    priceSubtext: "One-time • No monthly fees",
    badge: "STARTER",
    features: [
      { text: "Smart POS with Touch Interface", highlight: true },
      { text: "Real-Time Inventory Tracking", highlight: true },
      { text: "Daily & Weekly Sales Reports" },
      { text: "Single User License" },
      { text: "Thermal Receipt Printing" },
      { text: "Customer Database" },
      { text: "Offline Mode with Auto-Sync" },
      { text: "Email Support" },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Hardware Store", icon: Wrench, description: "Tools & building materials" },
      { name: "Pharmacy", icon: Pill, description: "Medicine & health products" },
      { name: "Wines & Spirits", icon: Wine, description: "Beverage retailers" },
      { name: "Mini-Mart", icon: Store, description: "Convenience stores" },
      { name: "Boutique", icon: Shirt, description: "Fashion & apparel" },
      { name: "Salon & Spa", icon: Scissors, description: "Beauty services" },
      { name: "Cyber Cafe", icon: Monitor, description: "Internet services" },
      { name: "Coffee Shop", icon: Coffee, description: "Cafes & eateries" },
      { name: "Gift Shop", icon: Package, description: "Specialty retail" },
      { name: "Mobile Shop", icon: Smartphone, description: "Phone accessories" },
    ],
    carouselScreens: [
      { title: "Point of Sale", subtitle: "Quick checkout", color: "#8B5CF6" },
      { title: "Inventory", subtitle: "Stock tracking", color: "#6366F1" },
      { title: "Reports", subtitle: "Sales analytics", color: "#A855F7" },
      { title: "Customers", subtitle: "CRM database", color: "#7C3AED" },
    ],
  },

  "retail-pro": {
    slug: "retail-pro",
    mode: "showroom",
    category: "operations",
    title: "Retail Pro",
    tagline: "Scale with Intelligence",
    description:
      "For growing SMEs that need multi-branch support and AI-powered insights. Predictive stock management, advanced CRM, and direct M-Pesa integration.",
    price: "KES 45,000",
    priceSubtext: "One-time • 1 year support included",
    badge: "POPULAR",
    features: [
      { text: "Multi-Branch Support (Up to 5)", highlight: true },
      { text: "AI-Powered Stock Predictions", highlight: true },
      { text: "Advanced CRM & Loyalty Programs", highlight: true },
      { text: "Direct M-Pesa Integration" },
      { text: "5 User Licenses + Roles" },
      { text: "Advanced Analytics Dashboard" },
      { text: "Supplier Management" },
      { text: "Barcode Scanner Support" },
      { text: "Multi-Currency Support" },
      { text: "Priority Support (24hr)" },
      { text: "Quarterly Business Reviews" },
      { text: "Data Export (Excel, PDF)" },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Supermarket", icon: ShoppingCart, description: "Grocery chains" },
      { name: "Wholesaler", icon: Warehouse, description: "Bulk distributors" },
      { name: "Auto Spares", icon: Car, description: "Vehicle parts" },
      { name: "Distributor", icon: Truck, description: "Supply chain" },
      { name: "Hardware Depot", icon: HardHat, description: "Construction supplies" },
      { name: "Restaurant Chain", icon: UtensilsCrossed, description: "Food service" },
      { name: "Pharmacy Chain", icon: Heart, description: "Healthcare retail" },
      { name: "Electronics", icon: Laptop, description: "Tech retail" },
      { name: "Fashion Outlet", icon: ShoppingBag, description: "Multi-brand stores" },
      { name: "Agro Dealer", icon: Package, description: "Farm supplies" },
    ],
    carouselScreens: [
      { title: "Branch Dashboard", subtitle: "All locations", color: "#8B5CF6" },
      { title: "AI Predictions", subtitle: "Smart stock", color: "#6366F1" },
      { title: "CRM & Loyalty", subtitle: "Customers", color: "#A855F7" },
      { title: "M-Pesa", subtitle: "Payments", color: "#22C55E" },
    ],
  },

  "enterprise-os": {
    slug: "enterprise-os",
    mode: "blueprint",
    category: "operations",
    title: "Enterprise OS",
    tagline: "Built for Scale. Engineered for Complexity.",
    description:
      "Comprehensive operating system for large-scale enterprises. Custom infrastructure, unlimited scalability, deep AI analytics, and dedicated engineering support.",
    price: "Custom Quote",
    priceSubtext: "Tailored to your operations",
    badge: "ENTERPRISE",
    features: [
      { text: "Unlimited Branches & Users", highlight: true },
      { text: "Full AI Suite: Deep Analytics", highlight: true },
      { text: "Dedicated API Access (ERP/SAP)", highlight: true },
      { text: "24/7 Account Manager", highlight: true },
      { text: "On-Premise Deployment Options" },
      { text: "99.9% Uptime SLA" },
      { text: "Custom Module Development" },
      { text: "White-Label Options" },
      { text: "Role-Based Access Control" },
      { text: "Multi-Company Consolidation" },
      { text: "Real-Time BI Dashboards" },
      { text: "Automated Compliance" },
      { text: "Disaster Recovery" },
      { text: "SSO & LDAP Integration" },
      { text: "Custom Workflows" },
      { text: "Dedicated Infrastructure" },
      { text: "Priority Updates" },
      { text: "Quarterly Strategy Sessions" },
      { text: "On-Site Training" },
      { text: "24/7 Phone Support" },
    ],
    ctaText: "Speak to an Engineer",
    secondaryCtaText: "Schedule a Call",
    targetIndustries: [
      { name: "Manufacturing", icon: Factory, description: "Production facilities" },
      { name: "Corporate HQ", icon: Building2, description: "Head offices" },
      { name: "Logistics", icon: Truck, description: "Fleet management" },
      { name: "Hospital Network", icon: Stethoscope, description: "Healthcare systems" },
      { name: "University", icon: GraduationCap, description: "Higher education" },
      { name: "Government", icon: Landmark, description: "Public sector" },
      { name: "Franchise", icon: Layers, description: "Chain management" },
      { name: "Banking", icon: Briefcase, description: "Financial services" },
      { name: "Retail Group", icon: Globe, description: "Conglomerates" },
      { name: "Telecom", icon: Network, description: "Communications" },
    ],
    carouselScreens: [
      { title: "Command Center", subtitle: "Enterprise view", color: "#D4AF37" },
      { title: "AI Analytics", subtitle: "Intelligence", color: "#94A3B8" },
      { title: "Integration Hub", subtitle: "Connected", color: "#D4AF37" },
      { title: "Compliance", subtitle: "Reporting", color: "#94A3B8" },
    ],
  },

  "business-sites": {
    slug: "business-sites",
    mode: "showroom",
    category: "digital",
    title: "Business Sites",
    tagline: "Your Digital Foundation",
    description:
      "Professional websites that establish credibility and capture leads. Strong online presence without e-commerce complexity.",
    price: "KES 15,000",
    priceSubtext: "One-time • 1 year hosting included",
    badge: "STARTER",
    features: [
      { text: "5-Page Professional Website", highlight: true },
      { text: "Mobile-First Design", highlight: true },
      { text: "SEO Setup (Google Maps)" },
      { text: "1 Year Domain & Hosting" },
      { text: "Contact Form + Notifications" },
      { text: "Social Media Links" },
      { text: "Google Analytics" },
      { text: "SSL Certificate" },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Law Firm", icon: Landmark, description: "Legal services" },
      { name: "Consulting", icon: Briefcase, description: "Advisory firms" },
      { name: "Medical Clinic", icon: Stethoscope, description: "Healthcare" },
      { name: "Restaurant", icon: UtensilsCrossed, description: "Food service" },
      { name: "Real Estate", icon: Building, description: "Property" },
      { name: "NGO", icon: Heart, description: "Non-profit" },
      { name: "School", icon: GraduationCap, description: "Education" },
      { name: "Church", icon: Home, description: "Religious org" },
      { name: "Agency", icon: Users, description: "Creative services" },
      { name: "Contractor", icon: HardHat, description: "Construction" },
    ],
    carouselScreens: [
      { title: "Homepage", subtitle: "First impression", color: "#8B5CF6" },
      { title: "About", subtitle: "Your story", color: "#6366F1" },
      { title: "Services", subtitle: "Offerings", color: "#A855F7" },
      { title: "Contact", subtitle: "Lead capture", color: "#7C3AED" },
    ],
  },

  "e-commerce": {
    slug: "e-commerce",
    mode: "showroom",
    category: "digital",
    title: "E-Commerce Pro",
    tagline: "Sell Online, 24/7",
    description:
      "Complete online storefront with integrated payments. M-Pesa, card gateways, inventory sync, and abandoned cart recovery.",
    price: "KES 35,000",
    priceSubtext: "One-time • Start selling immediately",
    badge: "SELL ONLINE",
    features: [
      { text: "Complete Online Storefront", highlight: true },
      { text: "M-Pesa & Card Payments", highlight: true },
      { text: "Josea Operations Sync", highlight: true },
      { text: "1 Year Domain & Hosting" },
      { text: "Abandoned Cart Recovery" },
      { text: "Product Reviews" },
      { text: "Order Management" },
      { text: "Shipping Zones" },
      { text: "Discount Codes" },
      { text: "Customer Accounts" },
      { text: "Wishlist Feature" },
      { text: "Mobile Checkout" },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Fashion Brand", icon: Shirt, description: "Clothing & apparel" },
      { name: "Electronics", icon: Laptop, description: "Tech products" },
      { name: "Home & Living", icon: Home, description: "Furniture & decor" },
      { name: "Beauty", icon: Sparkles, description: "Cosmetics" },
      { name: "Food & Drink", icon: Coffee, description: "Consumables" },
      { name: "Fitness", icon: Heart, description: "Sports gear" },
      { name: "Books", icon: Package, description: "Media & publishing" },
      { name: "Handmade", icon: Palette, description: "Artisan crafts" },
      { name: "Jewelry", icon: Gem, description: "Accessories" },
      { name: "Kids & Baby", icon: Users, description: "Children's products" },
    ],
    carouselScreens: [
      { title: "Product Catalog", subtitle: "Showcase", color: "#8B5CF6" },
      { title: "Shopping Cart", subtitle: "Checkout", color: "#22C55E" },
      { title: "Payments", subtitle: "M-Pesa", color: "#6366F1" },
      { title: "Orders", subtitle: "Tracking", color: "#A855F7" },
    ],
  },

  growth: {
    slug: "growth",
    mode: "blueprint",
    category: "digital",
    title: "Growth Suite",
    tagline: "Full-Service Digital Transformation",
    description:
      "Comprehensive digital transformation. Custom web apps, brand identity, marketing integrations, and dedicated project management.",
    price: "Custom Quote",
    priceSubtext: "Based on project scope",
    badge: "ENTERPRISE",
    features: [
      { text: "Custom Web Application", highlight: true },
      { text: "Full Brand Identity", highlight: true },
      { text: "Marketing Integrations", highlight: true },
      { text: "Dedicated Project Manager", highlight: true },
      { text: "UI/UX Design" },
      { text: "Performance Optimization" },
      { text: "Maintenance Packages" },
      { text: "Analytics Dashboard" },
      { text: "A/B Testing" },
      { text: "Conversion Optimization" },
      { text: "Content Strategy" },
      { text: "Social Integration" },
      { text: "Email Marketing" },
      { text: "SEO Strategy" },
      { text: "Competitor Analysis" },
      { text: "Monthly Reports" },
    ],
    ctaText: "Speak to an Engineer",
    secondaryCtaText: "Schedule a Call",
    targetIndustries: [
      { name: "Tech Startup", icon: Rocket, description: "Innovation" },
      { name: "Fintech", icon: BarChart3, description: "Financial tech" },
      { name: "Healthcare", icon: Stethoscope, description: "Healthtech" },
      { name: "EdTech", icon: GraduationCap, description: "Education" },
      { name: "Media", icon: Globe, description: "Publishing" },
      { name: "SaaS", icon: Cpu, description: "Software" },
      { name: "Enterprise", icon: Database, description: "Portals" },
      { name: "Marketplace", icon: ShoppingCart, description: "Platforms" },
      { name: "PropTech", icon: Building, description: "Real estate tech" },
      { name: "AgriTech", icon: Target, description: "Agriculture" },
    ],
    carouselScreens: [
      { title: "Brand Identity", subtitle: "Visual system", color: "#D4AF37" },
      { title: "Custom App", subtitle: "Built for you", color: "#94A3B8" },
      { title: "Marketing", subtitle: "Growth engine", color: "#D4AF37" },
      { title: "Analytics", subtitle: "Insights", color: "#94A3B8" },
    ],
  },
};

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

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
      <div
        className="absolute inset-0 blur-3xl opacity-30 scale-110"
        style={{
          background: isEnterprise
            ? "radial-gradient(ellipse, rgba(212,175,55,0.3), transparent 70%)"
            : "radial-gradient(ellipse, rgba(139,92,246,0.35), transparent 70%)",
        }}
      />

      {/* Tablet Frame */}
      <div className="relative rounded-[2rem] p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl">
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
              idx === currentIndex
                ? isEnterprise ? "w-6 bg-amber-400" : "w-6 bg-purple-400"
                : "w-1.5 bg-slate-600"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ============================================================================
// BLUEPRINT DIAGRAM (Enterprise)
// ============================================================================
function BlueprintDiagram() {
  const nodes = [
    { id: 1, x: 50, y: 18, icon: Server, label: "Core", main: true },
    { id: 2, x: 18, y: 50, icon: Database, label: "Data" },
    { id: 3, x: 82, y: 50, icon: Shield, label: "Security" },
    { id: 4, x: 30, y: 82, icon: Cpu, label: "Process" },
    { id: 5, x: 70, y: 82, icon: Network, label: "Network" },
  ];

  const connections = [
    [1, 2], [1, 3], [2, 4], [3, 5], [4, 5],
  ];

  return (
    <div className="relative w-full h-[220px] sm:h-[260px]">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>
        {connections.map(([from, to], idx) => {
          const f = nodes.find((n) => n.id === from)!;
          const t = nodes.find((n) => n.id === to)!;
          return (
            <motion.line
              key={idx}
              x1={`${f.x}%`} y1={`${f.y}%`} x2={`${t.x}%`} y2={`${t.y}%`}
              stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
            />
          );
        })}
      </svg>

      {nodes.map((node, idx) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.08, type: "spring" }}
          >
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <div className={`relative flex items-center justify-center rounded-full border ${
                node.main
                  ? "w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/20"
                  : "w-10 h-10 bg-slate-800/80 border-slate-600/50"
              }`}>
                <Icon className={node.main ? "w-6 h-6 text-amber-400" : "w-4 h-4 text-slate-400"} />
              </div>
            </motion.div>
            <span className={`mt-1 text-[10px] font-medium ${node.main ? "text-amber-400/80" : "text-slate-500"}`}>
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
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
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 font-bold text-sm rounded-xl shadow-lg transition-all overflow-hidden ${
        isEnterprise
          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 shadow-amber-500/25 hover:shadow-amber-500/40"
          : "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-green-500/25 hover:shadow-green-500/40"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
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
      className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl transition-all ${
        isEnterprise
          ? "bg-slate-800 border border-slate-700 text-slate-300 hover:border-amber-500/40 hover:text-amber-400"
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
// FEATURE ITEM
// ============================================================================
function FeatureItem({ feature, isEnterprise, index }: { feature: ProductFeature; isEnterprise: boolean; index: number }) {
  return (
    <motion.div
      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all ${
        isEnterprise
          ? "bg-slate-800/40 hover:bg-slate-800/70 border border-slate-800"
          : "bg-white/60 hover:bg-white border border-slate-100 hover:border-purple-200"
      }`}
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02 }}
    >
      {feature.highlight ? (
        <BadgeCheck className={`w-4 h-4 flex-shrink-0 ${isEnterprise ? "text-amber-400" : "text-purple-600"}`} />
      ) : (
        <CircleCheck className={`w-4 h-4 flex-shrink-0 ${isEnterprise ? "text-slate-500" : "text-slate-400"}`} />
      )}
      <span className={`text-[13px] leading-tight ${feature.highlight ? "font-semibold" : "font-medium"} ${isEnterprise ? "text-slate-300" : "text-slate-700"}`}>
        {feature.text}
      </span>
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
          ? "bg-slate-800/30 border border-slate-700/40 hover:border-amber-500/30 hover:bg-slate-800/60"
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
          ? "bg-slate-700/80 group-hover:bg-amber-500/20 text-slate-400 group-hover:text-amber-400"
          : "bg-purple-100/80 group-hover:bg-purple-200 text-purple-600"
      }`}>
        <Icon className="w-4 h-4" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <div className={`text-[13px] font-semibold leading-tight ${isEnterprise ? "text-slate-200" : "text-slate-800"}`}>
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
        <section className={`relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 ${
          isEnterprise
            ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-br from-slate-50 via-purple-50/40 to-indigo-50/40"
        }`}>
          {isEnterprise ? (
            <>
              <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
              <div className="absolute inset-0 opacity-[0.015]" style={{
                backgroundImage: "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }} />
            </>
          ) : (
            <div className="absolute top-[-5%] left-0 right-0 h-[300px] bg-gradient-to-b from-purple-500/10 to-transparent blur-[50px]" />
          )}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Content */}
              <div className="text-center lg:text-left">
                <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  {product.badge && (
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                      isEnterprise
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/25"
                        : product.badge === "POPULAR"
                        ? "bg-purple-600 text-white"
                        : "bg-purple-100 text-purple-700 border border-purple-200"
                    }`}>
                      {product.badge === "POPULAR" && <Crown className="w-3 h-3" />}
                      {product.badge === "ENTERPRISE" && <Gem className="w-3 h-3" />}
                      {product.badge}
                    </span>
                  )}
                  <span className={`text-[10px] font-semibold tracking-wider uppercase ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
                    {product.category === "operations" ? "Operations Suite" : "Digital Suite"}
                  </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                  {product.title}
                </motion.h1>

                <motion.p variants={itemVariants} className={`mt-1 text-lg sm:text-xl font-medium ${
                  isEnterprise ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200" : "text-purple-600"
                }`}>
                  {product.tagline}
                </motion.p>

                <motion.p variants={itemVariants} className={`mt-4 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 ${isEnterprise ? "text-slate-400" : "text-slate-600"}`}>
                  {product.description}
                </motion.p>

                <motion.div variants={itemVariants} className="mt-5">
                  <span className={`text-2xl sm:text-3xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                    {product.price}
                  </span>
                  {product.priceSubtext && (
                    <span className={`ml-2 text-sm ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
                      {product.priceSubtext}
                    </span>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                  <PhoneCTA text={product.secondaryCtaText} isEnterprise={isEnterprise} />
                </motion.div>
              </div>

              {/* Visual */}
              <motion.div variants={itemVariants}>
                {isEnterprise ? (
                  <div className="space-y-6">
                    <BlueprintDiagram />
                    <TabletBillboard screens={product.carouselScreens} isEnterprise={true} />
                  </div>
                ) : (
                  <TabletBillboard screens={product.carouselScreens} isEnterprise={false} />
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className={`py-10 sm:py-12 ${isEnterprise ? "bg-slate-950" : "bg-white"}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-xl sm:text-2xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                What&apos;s Included
              </h2>
              <p className={`mt-1 text-sm ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
                {product.features.length} powerful features
              </p>
            </motion.div>

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
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className={`py-10 sm:py-12 ${isEnterprise ? "bg-slate-900" : "bg-slate-50"}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-xl sm:text-2xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                Perfect For Your Industry
              </h2>
              <p className={`mt-1 text-sm ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
                Trusted by businesses across these sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
              {product.targetIndustries.map((industry, idx) => (
                <IndustryCard key={idx} industry={industry} isEnterprise={isEnterprise} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={`py-12 sm:py-14 ${
          isEnterprise
            ? "bg-gradient-to-b from-slate-900 to-slate-950"
            : "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"
        }`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                Ready to Get Started?
              </h2>
              <p className={`text-sm sm:text-base mb-6 ${isEnterprise ? "text-slate-400" : "text-white/80"}`}>
                Join hundreds of Kenyan businesses using {product.title}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                <PhoneCTA text={PHONE_NUMBER} isEnterprise={isEnterprise} />
              </div>

              <p className={`mt-5 text-xs ${isEnterprise ? "text-slate-600" : "text-white/50"}`}>
                Free consultation • No commitment • Response within 24 hours
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
