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
  Wrench,
  Laptop,
  Smartphone,
  ShoppingBag,
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
  Calendar,
  PieChart,
  TrendingUp,
  Headphones,
  Award,
  Zap,
  LineChart,
  Key,
  RefreshCw,
  HardDrive,
  Wifi,
  MessageSquare,
  Mail,
  ClipboardCheck,
  Timer,
  BookOpen,
  Boxes,
  FileText,
  FolderSync,
  LayoutDashboard,
  MonitorDot,
  Receipt,
  ScanLine,
  ScrollText,
  Banknote,
  CreditCard,
  QrCode,
} from "lucide-react";
import { use } from "react";
import Navbar from "@/components/Navbar";

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
// TYPES
// ============================================================================
type ProductMode = "showroom" | "blueprint";

interface ProductFeature {
  text: string;
  icon: React.ElementType;
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
      { text: "Smart POS with Touch Interface", icon: MonitorDot, highlight: true },
      { text: "Real-Time Inventory Tracking", icon: Boxes, highlight: true },
      { text: "Daily & Weekly Sales Reports", icon: FileText },
      { text: "Single User License", icon: Users },
      { text: "Thermal Receipt Printing", icon: Receipt },
      { text: "Customer Database", icon: Database },
      { text: "Offline Mode with Auto-Sync", icon: RefreshCw },
      { text: "Email Support", icon: Mail },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Hardware Store", icon: Wrench, description: "Tools & materials" },
      { name: "Pharmacy", icon: Pill, description: "Health products" },
      { name: "Wines & Spirits", icon: Wine, description: "Beverages" },
      { name: "Mini-Mart", icon: Store, description: "Convenience" },
      { name: "Boutique", icon: Shirt, description: "Fashion" },
      { name: "Salon & Spa", icon: Scissors, description: "Beauty" },
      { name: "Cyber Cafe", icon: Monitor, description: "Tech services" },
      { name: "Coffee Shop", icon: Coffee, description: "Cafes" },
      { name: "Gift Shop", icon: Package, description: "Specialty" },
      { name: "Mobile Shop", icon: Smartphone, description: "Phones" },
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
      { text: "Multi-Branch Support (Up to 5)", icon: Building2, highlight: true },
      { text: "AI-Powered Stock Predictions", icon: Cpu, highlight: true },
      { text: "Advanced CRM & Loyalty", icon: Heart, highlight: true },
      { text: "Direct M-Pesa Integration", icon: Banknote },
      { text: "5 User Licenses + Roles", icon: Users },
      { text: "Advanced Analytics", icon: BarChart3 },
      { text: "Supplier Management", icon: Truck },
      { text: "Barcode Scanner Support", icon: ScanLine },
      { text: "Multi-Currency Support", icon: CreditCard },
      { text: "Priority Support (24hr)", icon: Headphones },
      { text: "Quarterly Reviews", icon: Calendar },
      { text: "Data Export", icon: FileText },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Supermarket", icon: ShoppingCart, description: "Grocery" },
      { name: "Wholesaler", icon: Warehouse, description: "Bulk" },
      { name: "Auto Spares", icon: Car, description: "Parts" },
      { name: "Distributor", icon: Truck, description: "Supply" },
      { name: "Hardware Depot", icon: HardHat, description: "Construction" },
      { name: "Restaurant Chain", icon: UtensilsCrossed, description: "Food" },
      { name: "Pharmacy Chain", icon: Heart, description: "Healthcare" },
      { name: "Electronics", icon: Laptop, description: "Tech" },
      { name: "Fashion Outlet", icon: ShoppingBag, description: "Apparel" },
      { name: "Agro Dealer", icon: Package, description: "Farm" },
    ],
    carouselScreens: [
      { title: "Branch Dashboard", subtitle: "All locations", color: "#8B5CF6" },
      { title: "AI Predictions", subtitle: "Smart stock", color: "#6366F1" },
      { title: "CRM & Loyalty", subtitle: "Customers", color: "#A855F7" },
      { title: "M-Pesa", subtitle: "Payments", color: "#22C55E" },
    ],
  },

  // ========== ENTERPRISE OS - THE FLAGSHIP ==========
  "enterprise-os": {
    slug: "enterprise-os",
    mode: "blueprint",
    category: "operations",
    title: "Enterprise OS",
    tagline: "Custom Software. Built for Scale.",
    description:
      "We design and build custom software solutions for government institutions, corporate organizations, and large enterprises. From internal management systems to public-facing platforms—engineered to your exact specifications with enterprise-grade security.",
    price: "Custom Quote",
    priceSubtext: "Scope-based pricing • Free consultation",
    badge: "ENTERPRISE",
    features: [
      // SCALE & INFRASTRUCTURE
      { text: "Unlimited Branches & Locations", icon: Globe, highlight: true },
      { text: "Unlimited User Licenses", icon: Users, highlight: true },
      { text: "Unlimited Transaction Volume", icon: Activity, highlight: true },
      { text: "Dedicated Cloud Infrastructure", icon: Cloud, highlight: true },
      { text: "On-Premise Deployment Option", icon: Server },
      { text: "Multi-Region Data Centers", icon: Database },
      { text: "Auto-Scaling Architecture", icon: Layers },
      { text: "Load Balancing & Redundancy", icon: GitBranch },

      // AI & ANALYTICS
      { text: "Full Josea AI Suite", icon: Cpu, highlight: true },
      { text: "Predictive Demand Forecasting", icon: TrendingUp },
      { text: "Real-Time BI Dashboards", icon: LayoutDashboard },
      { text: "Custom Report Builder", icon: FileCheck },
      { text: "Machine Learning Models", icon: LineChart },
      { text: "Anomaly Detection System", icon: Eye },

      // SECURITY & COMPLIANCE
      { text: "Bank-Grade Encryption (AES-256)", icon: Lock, highlight: true },
      { text: "SOC 2 Type II Compliance", icon: Shield },
      { text: "GDPR & Data Protection", icon: Fingerprint },
      { text: "Role-Based Access Control", icon: Key },
      { text: "Audit Trail & Logging", icon: ScrollText },
      { text: "Two-Factor Authentication", icon: Smartphone },
      { text: "IP Whitelisting", icon: Wifi },
      { text: "Penetration Testing", icon: Target },

      // INTEGRATION & API
      { text: "RESTful API Access", icon: Network, highlight: true },
      { text: "ERP Integration (SAP, Oracle)", icon: Boxes },
      { text: "CRM Connectors (Salesforce)", icon: Users },
      { text: "Payment Gateway APIs", icon: CreditCard },
      { text: "Webhook Automation", icon: Workflow },
      { text: "Custom Integration Development", icon: Settings },
      { text: "SSO & LDAP/Active Directory", icon: Key },
      { text: "Real-Time Data Sync", icon: RefreshCw },

      // OPERATIONS & WORKFLOW
      { text: "Custom Workflow Engine", icon: Workflow },
      { text: "Approval Hierarchies", icon: GitBranch },
      { text: "Multi-Company Consolidation", icon: Building2 },
      { text: "Inter-Branch Transfers", icon: FolderSync },
      { text: "Automated Reordering", icon: RefreshCw },
      { text: "Supplier Portal Access", icon: Truck },
      { text: "Customer Self-Service Portal", icon: Globe },
      { text: "Mobile App (iOS & Android)", icon: Smartphone },

      // SUPPORT & SLA
      { text: "24/7/365 Priority Support", icon: Headphones, highlight: true },
      { text: "Dedicated Account Manager", icon: Award },
      { text: "99.99% Uptime SLA", icon: Activity },
      { text: "4-Hour Response Time", icon: Timer },
      { text: "Quarterly Strategy Sessions", icon: Calendar },
      { text: "On-Site Training Programs", icon: BookOpen },
      { text: "Custom Documentation", icon: FileText },
      { text: "Executive Business Reviews", icon: PieChart },

      // DISASTER RECOVERY
      { text: "Automated Backups (Hourly)", icon: HardDrive },
      { text: "Point-in-Time Recovery", icon: RefreshCw },
      { text: "Geo-Redundant Storage", icon: Globe },
      { text: "Disaster Recovery Plan", icon: Shield },
      { text: "Business Continuity Support", icon: Activity },

      // CUSTOMIZATION
      { text: "White-Label Branding", icon: Palette },
      { text: "Custom Module Development", icon: Boxes },
      { text: "Bespoke Feature Requests", icon: Sparkles },
      { text: "Priority Feature Roadmap", icon: Rocket },
      { text: "Dedicated Engineering Team", icon: Cpu },
    ],
    ctaText: "Schedule Executive Briefing",
    secondaryCtaText: "Speak to Solutions Architect",
    targetIndustries: [
      { name: "Manufacturing", icon: Factory, description: "Production" },
      { name: "Corporate HQ", icon: Building2, description: "Head Office" },
      { name: "Logistics Fleet", icon: Truck, description: "Distribution" },
      { name: "Hospital Network", icon: Stethoscope, description: "Healthcare" },
      { name: "University", icon: GraduationCap, description: "Education" },
      { name: "Government", icon: Landmark, description: "Public Sector" },
      { name: "Franchise Group", icon: Layers, description: "Multi-Brand" },
      { name: "Banking & Finance", icon: Briefcase, description: "Financial" },
      { name: "Retail Conglomerate", icon: Globe, description: "Multi-Chain" },
      { name: "Telecommunications", icon: Network, description: "Telco" },
    ],
    carouselScreens: [
      { title: "Command Center", subtitle: "Enterprise Control", color: "#8B5CF6" },
      { title: "AI Intelligence", subtitle: "Deep Analytics", color: "#7C3AED" },
      { title: "Security Hub", subtitle: "Threat Monitor", color: "#6366F1" },
      { title: "Integration Layer", subtitle: "Connected Systems", color: "#A855F7" },
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
      { text: "5-Page Professional Website", icon: LayoutDashboard, highlight: true },
      { text: "Mobile-First Design", icon: Smartphone, highlight: true },
      { text: "SEO Setup", icon: Target },
      { text: "1 Year Domain & Hosting", icon: Globe },
      { text: "Contact Form", icon: Mail },
      { text: "Social Media Links", icon: MessageSquare },
      { text: "Google Analytics", icon: BarChart3 },
      { text: "SSL Certificate", icon: Lock },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Law Firm", icon: Landmark, description: "Legal" },
      { name: "Consulting", icon: Briefcase, description: "Advisory" },
      { name: "Medical Clinic", icon: Stethoscope, description: "Health" },
      { name: "Restaurant", icon: UtensilsCrossed, description: "Food" },
      { name: "Real Estate", icon: Building, description: "Property" },
      { name: "NGO", icon: Heart, description: "Non-profit" },
      { name: "School", icon: GraduationCap, description: "Education" },
      { name: "Church", icon: Home, description: "Religious" },
      { name: "Agency", icon: Users, description: "Creative" },
      { name: "Contractor", icon: HardHat, description: "Builder" },
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
      { text: "Complete Storefront", icon: Store, highlight: true },
      { text: "M-Pesa & Card Payments", icon: CreditCard, highlight: true },
      { text: "Operations Sync", icon: RefreshCw, highlight: true },
      { text: "Domain & Hosting", icon: Globe },
      { text: "Cart Recovery", icon: ShoppingCart },
      { text: "Product Reviews", icon: MessageSquare },
      { text: "Order Management", icon: ClipboardCheck },
      { text: "Shipping Zones", icon: Truck },
      { text: "Discount Codes", icon: Receipt },
      { text: "Customer Accounts", icon: Users },
      { text: "Wishlist", icon: Heart },
      { text: "Mobile Checkout", icon: Smartphone },
    ],
    ctaText: "Chat with an Advisor",
    secondaryCtaText: "Call Us Now",
    targetIndustries: [
      { name: "Fashion Brand", icon: Shirt, description: "Apparel" },
      { name: "Electronics", icon: Laptop, description: "Tech" },
      { name: "Home & Living", icon: Home, description: "Decor" },
      { name: "Beauty", icon: Sparkles, description: "Cosmetics" },
      { name: "Food & Drink", icon: Coffee, description: "Consumables" },
      { name: "Fitness", icon: Heart, description: "Sports" },
      { name: "Books", icon: BookOpen, description: "Media" },
      { name: "Handmade", icon: Palette, description: "Crafts" },
      { name: "Jewelry", icon: Gem, description: "Accessories" },
      { name: "Kids & Baby", icon: Users, description: "Children" },
    ],
    carouselScreens: [
      { title: "Catalog", subtitle: "Products", color: "#8B5CF6" },
      { title: "Cart", subtitle: "Checkout", color: "#22C55E" },
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
      { text: "Custom Web Application", icon: LayoutDashboard, highlight: true },
      { text: "Full Brand Identity", icon: Palette, highlight: true },
      { text: "Marketing Integrations", icon: Target, highlight: true },
      { text: "Dedicated PM", icon: Award, highlight: true },
      { text: "UI/UX Design", icon: Monitor },
      { text: "Performance Optimization", icon: Zap },
      { text: "Maintenance Packages", icon: Settings },
      { text: "Analytics Dashboard", icon: BarChart3 },
      { text: "A/B Testing", icon: GitBranch },
      { text: "Conversion Optimization", icon: TrendingUp },
      { text: "Content Strategy", icon: FileText },
      { text: "Social Integration", icon: MessageSquare },
      { text: "Email Marketing", icon: Mail },
      { text: "SEO Strategy", icon: Target },
      { text: "Competitor Analysis", icon: Eye },
      { text: "Monthly Reports", icon: PieChart },
    ],
    ctaText: "Speak to an Engineer",
    secondaryCtaText: "Schedule a Call",
    targetIndustries: [
      { name: "Tech Startup", icon: Rocket, description: "Innovation" },
      { name: "Fintech", icon: BarChart3, description: "Finance" },
      { name: "Healthcare", icon: Stethoscope, description: "Health" },
      { name: "EdTech", icon: GraduationCap, description: "Education" },
      { name: "Media", icon: Globe, description: "Publishing" },
      { name: "SaaS", icon: Cloud, description: "Software" },
      { name: "Enterprise", icon: Database, description: "Portals" },
      { name: "Marketplace", icon: ShoppingCart, description: "Platforms" },
      { name: "PropTech", icon: Building, description: "Property" },
      { name: "AgriTech", icon: Target, description: "Agriculture" },
    ],
    carouselScreens: [
      { title: "Brand Identity", subtitle: "Visual system", color: "#8B5CF6" },
      { title: "Custom App", subtitle: "Built for you", color: "#7C3AED" },
      { title: "Marketing", subtitle: "Growth engine", color: "#6366F1" },
      { title: "Analytics", subtitle: "Insights", color: "#A855F7" },
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
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ============================================================================
// ENTERPRISE HERO - ADVANCED NEURAL NETWORK VISUALIZATION
// ============================================================================
function EnterpriseNeuralNetwork() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Core nodes
  const coreNodes = [
    { id: 0, x: 50, y: 50, icon: Cpu, label: "Core AI", size: "xl" },
  ];

  // Orbital nodes
  const orbitalNodes = [
    { id: 1, x: 50, y: 15, icon: Shield, label: "Security" },
    { id: 2, x: 85, y: 35, icon: Database, label: "Data" },
    { id: 3, x: 85, y: 65, icon: Network, label: "Network" },
    { id: 4, x: 50, y: 85, icon: Activity, label: "Analytics" },
    { id: 5, x: 15, y: 65, icon: Cloud, label: "Cloud" },
    { id: 6, x: 15, y: 35, icon: Lock, label: "Encrypt" },
  ];

  // Outer satellite nodes
  const satelliteNodes = [
    { x: 50, y: 2, icon: Globe },
    { x: 92, y: 25, icon: Server },
    { x: 98, y: 50, icon: HardDrive },
    { x: 92, y: 75, icon: Workflow },
    { x: 50, y: 98, icon: BarChart3 },
    { x: 8, y: 75, icon: Users },
    { x: 2, y: 50, icon: Key },
    { x: 8, y: 25, icon: Eye },
  ];

  return (
    <div className="relative w-full h-[350px] sm:h-[420px]">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 rounded-full blur-[80px]" />
      </div>

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Orbital Rings */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        {/* Inner Ring */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="28%"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* Outer Ring */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="42%"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          strokeDasharray="8 4"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {/* Connection Lines from Core to Orbital */}
        {orbitalNodes.map((node, idx) => (
          <motion.line
            key={`line-${idx}`}
            x1="50%"
            y1="50%"
            x2={`${node.x}%`}
            y2={`${node.y}%`}
            stroke="url(#pulseGradient)"
            strokeWidth="1.5"
            strokeOpacity={activeNode === idx ? 0.8 : 0.2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeOpacity: activeNode === idx ? 0.8 : 0.2 }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* Data Flow Particles */}
        {orbitalNodes.map((node, idx) => (
          <motion.circle
            key={`particle-${idx}`}
            r="3"
            fill="#A855F7"
            initial={{ cx: "50%", cy: "50%" }}
            animate={{
              cx: activeNode === idx ? `${node.x}%` : "50%",
              cy: activeNode === idx ? `${node.y}%` : "50%",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 6px #A855F7)" }}
          />
        ))}
      </svg>

      {/* Core Node */}
      {coreNodes.map((node) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {/* Pulse Ring */}
            <motion.div
              className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-purple-500/30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Core */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 border border-purple-400/30">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </motion.div>
            </div>
            <span className="mt-2 text-xs sm:text-sm font-bold text-purple-300">{node.label}</span>
          </motion.div>
        );
      })}

      {/* Orbital Nodes */}
      {orbitalNodes.map((node, idx) => {
        const Icon = node.icon;
        const isActive = activeNode === idx;
        return (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
          >
            <motion.div
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                isActive
                  ? "bg-gradient-to-br from-purple-600 to-violet-600 border-purple-400 shadow-lg shadow-purple-500/40"
                  : "bg-slate-900/80 border-purple-500/30 hover:border-purple-400/50"
              }`}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + idx * 0.3, repeat: Infinity }}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? "text-white" : "text-purple-400"}`} />
            </motion.div>
            <span className={`mt-1 text-[10px] sm:text-xs font-medium ${isActive ? "text-purple-300" : "text-slate-500"}`}>
              {node.label}
            </span>
          </motion.div>
        );
      })}

      {/* Satellite Nodes */}
      {satelliteNodes.map((node, idx) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={`sat-${idx}`}
            className="absolute"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.5 + idx * 0.05 }}
          >
            <motion.div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-900/60 border border-purple-500/20 flex items-center justify-center"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 4 + idx * 0.2, repeat: Infinity }}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500/70" />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating Data Streams */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
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
          ? "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white shadow-purple-500/30 hover:shadow-purple-500/50"
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
      className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl transition-all ${
        isEnterprise
          ? "bg-slate-800/80 border border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 hover:bg-slate-800"
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
// ENTERPRISE FEATURE CARD
// ============================================================================
function EnterpriseFeatureCard({ feature, index }: { feature: ProductFeature; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all border ${
        feature.highlight
          ? "bg-purple-500/10 border-purple-500/30 hover:border-purple-400/50"
          : "bg-slate-800/30 border-slate-700/30 hover:border-slate-600/50"
      }`}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.015 }}
      whileHover={{ x: 2 }}
    >
      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
        feature.highlight
          ? "bg-purple-500/20 text-purple-400"
          : "bg-slate-700/50 text-slate-400"
      }`}>
        <Icon className="w-4 h-4" />
      </div>
      <span className={`text-[13px] leading-tight ${
        feature.highlight ? "font-semibold text-purple-200" : "font-medium text-slate-300"
      }`}>
        {feature.text}
      </span>
    </motion.div>
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
          ? "bg-slate-800/40 hover:bg-slate-800/70 border border-slate-800"
          : "bg-white/60 hover:bg-white border border-slate-100 hover:border-purple-200"
      }`}
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.02 }}
    >
      {feature.highlight ? (
        <BadgeCheck className={`w-4 h-4 flex-shrink-0 ${isEnterprise ? "text-purple-400" : "text-purple-600"}`} />
      ) : (
        <Icon className={`w-4 h-4 flex-shrink-0 ${isEnterprise ? "text-slate-500" : "text-slate-400"}`} />
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
          ? "bg-slate-800/30 border border-slate-700/40 hover:border-purple-500/40 hover:bg-slate-800/60"
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
          ? "bg-slate-700/80 group-hover:bg-purple-500/20 text-slate-400 group-hover:text-purple-400"
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

  // Group features by category for Enterprise
  const featureCategories = isEnterprise && product.slug === "enterprise-os" ? [
    { title: "Scale & Infrastructure", features: product.features.slice(0, 8) },
    { title: "AI & Analytics", features: product.features.slice(8, 14) },
    { title: "Security & Compliance", features: product.features.slice(14, 22) },
    { title: "Integration & API", features: product.features.slice(22, 30) },
    { title: "Operations & Workflow", features: product.features.slice(30, 38) },
    { title: "Support & SLA", features: product.features.slice(38, 46) },
    { title: "Disaster Recovery", features: product.features.slice(46, 51) },
    { title: "Customization", features: product.features.slice(51) },
  ] : null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* HERO */}
        <section className={`relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 ${
          isEnterprise
            ? "bg-gradient-to-b from-slate-950 via-[#0c0a1d] to-slate-950"
            : "bg-gradient-to-br from-slate-50 via-purple-50/40 to-indigo-50/40"
        }`}>
          {isEnterprise ? (
            <>
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "radial-gradient(rgba(139, 92, 246, 0.8) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
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
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider ${
                      isEnterprise
                        ? "bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 border border-purple-500/30"
                        : product.badge === "POPULAR"
                        ? "bg-purple-600 text-white"
                        : "bg-purple-100 text-purple-700 border border-purple-200"
                    }`}>
                      {product.badge === "POPULAR" && <Crown className="w-3 h-3" />}
                      {product.badge === "ENTERPRISE" && <Shield className="w-3 h-3" />}
                      {product.badge}
                    </span>
                  )}
                  <span className={`text-[10px] font-semibold tracking-wider uppercase ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
                    {product.category === "operations" ? "Operations Suite" : "Digital Suite"}
                  </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                  {product.title}
                </motion.h1>

                <motion.p variants={itemVariants} className={`mt-2 text-lg sm:text-xl lg:text-2xl font-medium ${
                  isEnterprise ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400" : "text-purple-600"
                }`}>
                  {product.tagline}
                </motion.p>

                <motion.p variants={itemVariants} className={`mt-5 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 ${isEnterprise ? "text-slate-400" : "text-slate-600"}`}>
                  {product.description}
                </motion.p>

                <motion.div variants={itemVariants} className="mt-6">
                  <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                    {product.price}
                  </span>
                  {product.priceSubtext && (
                    <span className={`block sm:inline sm:ml-3 mt-1 sm:mt-0 text-sm ${isEnterprise ? "text-slate-500" : "text-slate-500"}`}>
                      {product.priceSubtext}
                    </span>
                  )}
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                  <PhoneCTA text={product.secondaryCtaText} isEnterprise={isEnterprise} />
                </motion.div>

                {/* Enterprise Trust Badges */}
                {isEnterprise && product.slug === "enterprise-os" && (
                  <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    {[
                      { icon: Shield, label: "SOC 2" },
                      { icon: Lock, label: "AES-256" },
                      { icon: Activity, label: "99.99% SLA" },
                      { icon: Headphones, label: "24/7" },
                    ].map((badge, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <badge.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-xs font-semibold text-slate-300">{badge.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Visual */}
              <motion.div variants={itemVariants}>
                {isEnterprise && product.slug === "enterprise-os" ? (
                  <EnterpriseNeuralNetwork />
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
        <section className={`py-12 sm:py-16 ${isEnterprise ? "bg-slate-950" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-2xl sm:text-3xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
                {isEnterprise && product.slug === "enterprise-os" ? "Unlimited Capabilities" : "What's Included"}
              </h2>
              <p className={`mt-2 text-sm sm:text-base max-w-2xl mx-auto ${isEnterprise ? "text-slate-400" : "text-slate-500"}`}>
                {isEnterprise && product.slug === "enterprise-os"
                  ? "Every feature you could fathom. Built for enterprises that demand excellence."
                  : `${product.features.length} powerful features`}
              </p>
            </motion.div>

            {/* Enterprise Categorized Features */}
            {featureCategories ? (
              <div className="space-y-8">
                {featureCategories.map((category, catIdx) => (
                  <motion.div
                    key={catIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.05 }}
                  >
                    <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-8 h-px bg-purple-500/50" />
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      {category.features.map((feature, idx) => (
                        <EnterpriseFeatureCard key={idx} feature={feature} index={catIdx * 8 + idx} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* Standard Features Grid */
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
            )}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className={`py-12 sm:py-14 ${isEnterprise ? "bg-[#0c0a1d]" : "bg-slate-50"}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-2xl sm:text-3xl font-bold ${isEnterprise ? "text-white" : "text-slate-900"}`}>
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

        {/* FINAL CTA */}
        <section className={`py-14 sm:py-20 ${
          isEnterprise
            ? "bg-gradient-to-b from-slate-950 via-[#0c0a1d] to-slate-950"
            : "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"
        }`}>
          {isEnterprise && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px]" />
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
              <p className={`text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto ${isEnterprise ? "text-slate-400" : "text-white/80"}`}>
                {isEnterprise
                  ? "Schedule an executive briefing with our solutions architects. Let's discuss how Enterprise OS can transform your operations."
                  : `Join hundreds of Kenyan businesses using ${product.title}`}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppCTA productTitle={product.title} ctaText={product.ctaText} isEnterprise={isEnterprise} />
                <PhoneCTA text={PHONE_NUMBER} isEnterprise={isEnterprise} />
              </div>

              <p className={`mt-6 text-xs ${isEnterprise ? "text-slate-600" : "text-white/50"}`}>
                {isEnterprise
                  ? "NDA available • Custom proposal within 48 hours • No obligation"
                  : "Free consultation • No commitment • Response within 24 hours"}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
