// ============================================================================
// PRODUCT DATA - Extracted for code splitting & reduced bundle size
// ============================================================================
import {
  Globe,
  ShoppingCart,
  BarChart3,
  Users,
  Palette,
  Rocket,
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
  Gem,
  Target,
  Briefcase,
  Home,
  Wrench,
  Laptop,
  Smartphone,
  ShoppingBag,
  Lock,
  Eye,
  Cloud,
  GitBranch,
  Settings,
  Calendar,
  PieChart,
  TrendingUp,
  Headphones,
  Award,
  Zap,
  RefreshCw,
  MessageSquare,
  Mail,
  ClipboardCheck,
  BookOpen,
  Boxes,
  FileText,
  LayoutDashboard,
  MonitorDot,
  Receipt,
  ScanLine,
  Banknote,
  CreditCard,
  Database,
  Network,
  Cpu,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================
export type ProductMode = "showroom" | "blueprint";

export interface ProductFeature {
  text: string;
  icon: React.ElementType;
  highlight?: boolean;
}

export interface TargetIndustry {
  name: string;
  icon: React.ElementType;
  description: string;
}

export interface CarouselScreen {
  title: string;
  subtitle: string;
  color: string;
}

export interface ProductData {
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
export const productsData: Record<string, ProductData> = {
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
    tagline: "Your Vision. Our Engineering.",
    description:
      "When off-the-shelf software cannot meet your operational complexity, we architect and build bespoke systems from the ground up. Enterprise OS delivers custom workflow engines, real-time analytics, and seamless integrations—all secured with bank-grade encryption and backed by 99.99% uptime SLA.",
    price: "Custom Quote",
    priceSubtext: "Scope-based pricing • Free consultation",
    badge: "ENTERPRISE",
    features: [
      // Placeholder - Enterprise features are defined in the grouped structure in the page
      { text: "Unlimited Everything", icon: Globe, highlight: true },
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

// Helper to get product slugs for static generation
export function getProductSlugs(): string[] {
  return Object.keys(productsData);
}
