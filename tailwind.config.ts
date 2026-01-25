import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        "brand-dark": "#5B21B6",
        "brand-light": "#4F46E5",
        "brand-accent": "#A5B4FC",
        "surface-ground": "#F8FAFC",
        "surface-card": "#FFFFFF",
        "text-main": "#0F172A",
        "text-muted": "#64748B",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #5B21B6 0%, #4F46E5 100%)",
        "glass-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "fade-in": "spotlight 0.8s ease-out forwards",
        marquee: "marquee linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
