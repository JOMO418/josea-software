"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// ============================================================================
// DATA
// ============================================================================

const industries = [
  { name: "Pharmacy & Healthcare", image: "/industry-pharmacy.png" },
  { name: "Auto Parts & Retail", image: "/industry-spare-parts.png" },
  { name: "Logistics & Distribution", image: "/industry-logistics.png" },
  { name: "Property Management", image: "/industry-rental.png" },
  { name: "Education & Schools", image: "/industry-school.png" },
  { name: "Corporate & HR", image: "/industry-office-hr.png" },
];

const industryOptions = [
  "Retail (General)",
  "Pharmacy / Healthcare",
  "Auto Parts / Spare Parts",
  "Logistics / Distribution",
  "Property / Rental Management",
  "Education / School",
  "Corporate / HR",
  "Restaurant / Hospitality",
  "Manufacturing",
  "Other",
];

const locationOptions = [
  "Single location",
  "2-5 locations",
  "6-10 locations",
  "10+ locations",
];

const primaryNeedOptions = [
  "Operations software (POS, inventory, CRM)",
  "Website / E-commerce platform",
  "Both operations and digital presence",
  "Custom enterprise solution",
];

// Realistic revenue ranges for Kenya
const revenueOptions = [
  "Under KES 50K",
  "KES 50K - 200K",
  "KES 200K - 500K",
  "KES 500K - 1M",
  "Over KES 1M",
  "Prefer not to say",
];

interface BusinessIntake {
  businessName: string;
  industry: string;
  locations: string;
  primaryNeed: string;
  revenueRange: string;
}

// ============================================================================
// ROUTING LOGIC
// ============================================================================

function determineRouting(formData: BusinessIntake): string {
  const { primaryNeed, locations, revenueRange } = formData;

  // Route to Digital
  if (primaryNeed === "Website / E-commerce platform") {
    if (revenueRange.includes("Under") || revenueRange.includes("50K - 200K")) {
      return "/suites/digital?highlight=business-web&message=recommended";
    } else {
      return "/suites/digital?highlight=ecommerce-pro&message=recommended";
    }
  }

  // Route to Operations
  if (primaryNeed === "Operations software (POS, inventory, CRM)") {
    if (locations === "Single location") {
      return "/suites/operations?highlight=retail-lite&message=recommended";
    }
    if (locations === "2-5 locations") {
      return "/suites/operations?highlight=retail-pro&message=recommended";
    }
    if (locations === "6-10 locations" || locations === "10+ locations") {
      return "/suites/operations?highlight=enterprise-os&message=recommended";
    }
  }

  // Both operations and digital
  if (primaryNeed === "Both operations and digital presence") {
    if (revenueRange.includes("Under") || revenueRange.includes("50K - 200K")) {
      return "/suites/operations?highlight=retail-pro&message=recommended";
    } else {
      return "/suites/operations?highlight=enterprise-os&message=recommended";
    }
  }

  // Custom enterprise solution
  if (primaryNeed === "Custom enterprise solution") {
    return "/suites/operations?highlight=enterprise-os&message=recommended";
  }

  return "/suites/operations";
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-purple-300 via-purple-100 to-white" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${playfair.className} text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight`}
        >
          Solutions Built for Your Industry.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`${inter.className} text-slate-700 text-lg max-w-3xl mx-auto mb-12 leading-relaxed`}
        >
          From retail to logistics, pharmacy to property—we architect systems
          that understand your specific operational challenges.
        </motion.p>

        {/* Compact Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Carousel container */}
          <div className="relative h-[220px] sm:h-[250px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={industries[currentSlide].image}
                  alt={industries[currentSlide].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  priority={currentSlide === 0}
                />

                {/* Industry name overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end justify-center pb-6">
                  <span
                    className={`${inter.className} text-white text-lg font-semibold tracking-wide`}
                  >
                    {industries[currentSlide].name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-purple-600"
                    : "w-2 bg-purple-300 hover:bg-purple-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className={`${inter.className} text-sm font-medium`}>
            Find Your Solution Below
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// INTAKE FORM SECTION
// ============================================================================

function IntakeFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState<BusinessIntake>({
    businessName: "",
    industry: "",
    locations: "",
    primaryNeed: "",
    revenueRange: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetRoute = determineRouting(formData);
    router.push(targetRoute);
  };

  const inputClasses =
    "w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-white";
  const labelClasses = `${inter.className} block text-sm font-medium text-slate-700 mb-2`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`${playfair.className} text-4xl sm:text-5xl font-semibold text-slate-900 mb-4`}
          >
            Tell Us About Your Business.
          </h2>
          <p className={`${inter.className} text-slate-600 text-base`}>
            We&apos;ll recommend the perfect solution for your needs.
          </p>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg"
        >
          {/* Field 1: Business Name */}
          <div>
            <label className={labelClasses}>Business Name</label>
            <input
              type="text"
              required
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              placeholder="e.g., Amani Pharmacy"
              className={inputClasses}
            />
          </div>

          {/* Field 2: Industry */}
          <div>
            <label className={labelClasses}>Industry</label>
            <select
              required
              value={formData.industry}
              onChange={(e) =>
                setFormData({ ...formData, industry: e.target.value })
              }
              className={inputClasses}
            >
              <option value="">Select your industry</option>
              {industryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Field 3: Number of Locations */}
          <div>
            <label className={labelClasses}>Number of Locations</label>
            <select
              required
              value={formData.locations}
              onChange={(e) =>
                setFormData({ ...formData, locations: e.target.value })
              }
              className={inputClasses}
            >
              <option value="">Select number of locations</option>
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Field 4: Primary Need */}
          <div>
            <label className={labelClasses}>What do you need most?</label>
            <select
              required
              value={formData.primaryNeed}
              onChange={(e) =>
                setFormData({ ...formData, primaryNeed: e.target.value })
              }
              className={inputClasses}
            >
              <option value="">Select your primary need</option>
              {primaryNeedOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Field 5: Revenue Range */}
          <div>
            <label className={labelClasses}>Monthly Revenue Range</label>
            <select
              required
              value={formData.revenueRange}
              onChange={(e) =>
                setFormData({ ...formData, revenueRange: e.target.value })
              }
              className={inputClasses}
            >
              <option value="">Select revenue range</option>
              {revenueOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Get My Solution &rarr;
          </button>

          {/* Privacy note */}
          <p
            className={`${inter.className} text-xs text-slate-500 text-center mt-4`}
          >
            We respect your privacy. Your information helps us recommend the
            right solution.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function IndustriesPage() {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <Navbar />
      <HeroSection />
      <IntakeFormSection />
      <Footer />
    </main>
  );
}
