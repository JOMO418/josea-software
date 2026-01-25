"use client";

import Image from "next/image";

// M-PESA - Using actual logo from Wikipedia (working)
const MPesaLogo = () => (
  <div className="h-8 sm:h-10 flex items-center">
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png"
      alt="M-Pesa"
      width={120}
      height={48}
      className="h-full w-auto object-contain"
      unoptimized
    />
  </div>
);

// Equity Bank - Authentic SVG recreation with correct branding
const EquityBankLogo = () => (
  <svg viewBox="0 0 180 50" className="h-8 sm:h-10 w-auto">
    {/* Equity maroon/burgundy color: #722F37 or #8B1538 */}
    {/* The iconic house/shelter shape with person */}
    <g transform="translate(0, 5)">
      {/* House/Shelter outline */}
      <path
        d="M20 35V18L5 28v7h15zM20 18l15 10v7H20V18z"
        fill="#8B1A29"
      />
      {/* Roof */}
      <path
        d="M2 30l18-15 18 15"
        stroke="#8B1A29"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Person silhouette in center */}
      <circle cx="20" cy="22" r="4" fill="#F4A300" />
      <path
        d="M20 27c-4 0-7 3-7 6h14c0-3-3-6-7-6z"
        fill="#F4A300"
      />
    </g>
    {/* Equity Text */}
    <text x="45" y="32" fill="#8B1A29" style={{ fontSize: "22px", fontWeight: 700, fontFamily: "Arial Black, sans-serif" }}>
      Equity
    </text>
  </svg>
);

// KRA - Kenya Revenue Authority authentic recreation
const KRALogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
    {/* KRA Shield/Emblem */}
    <g transform="translate(2, 5)">
      {/* Shield shape */}
      <path
        d="M18 0C8 0 0 5 0 12v15c0 10 18 18 18 18s18-8 18-18V12c0-7-8-12-18-12z"
        fill="#006600"
      />
      <path
        d="M18 3C10 3 3 7 3 13v14c0 8 15 15 15 15s15-7 15-15V13c0-6-7-10-15-10z"
        fill="#CC0000"
      />
      <path
        d="M18 6C11 6 6 9 6 14v13c0 7 12 12 12 12s12-5 12-12V14c0-5-5-8-12-8z"
        fill="#000000"
      />
      {/* White K */}
      <text x="12" y="28" fill="white" style={{ fontSize: "16px", fontWeight: 800, fontFamily: "Arial Black, sans-serif" }}>
        K
      </text>
    </g>
    {/* KRA Text */}
    <text x="44" y="22" fill="#006600" style={{ fontSize: "20px", fontWeight: 800, fontFamily: "Arial Black, sans-serif" }}>
      KRA
    </text>
    <text x="44" y="36" fill="#333333" style={{ fontSize: "8px", fontWeight: 600, fontFamily: "Arial, sans-serif" }}>
      Kenya Revenue Authority
    </text>
  </svg>
);

// eTIMS - Electronic Tax Invoice Management System authentic recreation
const EtimsLogo = () => (
  <svg viewBox="0 0 140 50" className="h-8 sm:h-10 w-auto">
    {/* eTIMS uses green color scheme */}
    {/* Document/Receipt icon */}
    <g transform="translate(2, 5)">
      <rect x="0" y="0" width="32" height="40" rx="3" fill="#006B3F" />
      {/* Receipt lines */}
      <rect x="5" y="8" width="22" height="2" rx="1" fill="white" opacity="0.9" />
      <rect x="5" y="14" width="18" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="5" y="20" width="22" height="2" rx="1" fill="white" opacity="0.9" />
      <rect x="5" y="26" width="15" height="2" rx="1" fill="white" opacity="0.7" />
      {/* Checkmark */}
      <circle cx="24" cy="32" r="6" fill="#F4A300" />
      <path d="M21 32l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    {/* eTIMS Text */}
    <text x="40" y="20" fill="#006B3F" style={{ fontSize: "8px", fontWeight: 500, fontFamily: "Arial, sans-serif" }}>
      e
    </text>
    <text x="46" y="28" fill="#006B3F" style={{ fontSize: "22px", fontWeight: 800, fontFamily: "Arial Black, sans-serif" }}>
      TIMS
    </text>
    <text x="40" y="42" fill="#666666" style={{ fontSize: "7px", fontWeight: 500, fontFamily: "Arial, sans-serif" }}>
      Electronic Tax Invoice
    </text>
  </svg>
);

// Swiftline Logistics - Professional logistics company
const SwiftlineLogisticsLogo = () => (
  <svg viewBox="0 0 150 50" className="h-8 sm:h-10 w-auto">
    <g transform="translate(0, 5)">
      <rect x="0" y="5" width="32" height="28" rx="3" fill="#FF6B00" />
      {/* Truck/delivery icon */}
      <rect x="4" y="10" width="18" height="12" rx="2" fill="white" />
      <rect x="22" y="14" width="8" height="8" rx="1" fill="white" />
      <circle cx="10" cy="28" r="4" fill="#333" />
      <circle cx="10" cy="28" r="2" fill="white" />
      <circle cx="26" cy="28" r="4" fill="#333" />
      <circle cx="26" cy="28" r="2" fill="white" />
    </g>
    <text x="38" y="26" fill="#2D3748" style={{ fontSize: "16px", fontWeight: 700, fontFamily: "Arial, sans-serif" }}>
      Swiftline
    </text>
    <text x="38" y="38" fill="#FF6B00" style={{ fontSize: "9px", fontWeight: 600, fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
      LOGISTICS
    </text>
  </svg>
);

// Motorspares Kenya - Auto parts enterprise
const MotorsparesLogo = () => (
  <svg viewBox="0 0 170 50" className="h-8 sm:h-10 w-auto">
    <g transform="translate(2, 5)">
      {/* Gear icon */}
      <circle cx="18" cy="20" r="16" fill="none" stroke="#1A365D" strokeWidth="4" />
      <circle cx="18" cy="20" r="8" fill="#1A365D" />
      <circle cx="18" cy="20" r="4" fill="white" />
      {/* Gear teeth */}
      <path d="M18 2v6M18 32v6M2 20h6M28 20h6M6 8l4 4M28 28l4 4M6 32l4-4M28 12l4-4" stroke="#C53030" strokeWidth="3" strokeLinecap="round" />
    </g>
    <text x="42" y="22" fill="#1A365D" style={{ fontSize: "15px", fontWeight: 700, fontFamily: "Arial, sans-serif" }}>
      Motorspares
    </text>
    <text x="42" y="36" fill="#C53030" style={{ fontSize: "11px", fontWeight: 600, fontFamily: "Arial, sans-serif", letterSpacing: "2px" }}>
      KENYA
    </text>
  </svg>
);

// Harvest Link - Agricultural supply chain
const HarvestLinkLogo = () => (
  <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
    <g transform="translate(2, 5)">
      {/* Leaf/Plant icon */}
      <ellipse cx="18" cy="24" rx="14" ry="12" fill="#2F855A" />
      <path d="M18 12c0 0 6 5 6 12s-6 12-6 12" stroke="#68D391" strokeWidth="2.5" fill="none" />
      <path d="M18 12c0 0-6 5-6 12s6 12 6 12" stroke="#68D391" strokeWidth="2.5" fill="none" />
      <path d="M18 6v8" stroke="#2F855A" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 4l6 6 6-6" stroke="#2F855A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <text x="40" y="26" fill="#2F855A" style={{ fontSize: "16px", fontWeight: 700, fontFamily: "Arial, sans-serif" }}>
      HarvestLink
    </text>
    <text x="40" y="40" fill="#68D391" style={{ fontSize: "9px", fontWeight: 600, fontFamily: "Arial, sans-serif", letterSpacing: "1px" }}>
      AGRI SUPPLIES
    </text>
  </svg>
);

// BuildMart - Construction & hardware supplies
const BuildMartLogo = () => (
  <svg viewBox="0 0 150 50" className="h-8 sm:h-10 w-auto">
    <g transform="translate(2, 5)">
      {/* Building bars */}
      <rect x="0" y="20" width="10" height="20" fill="#D69E2E" />
      <rect x="12" y="12" width="10" height="28" fill="#B7791F" />
      <rect x="24" y="4" width="10" height="36" fill="#975A16" />
    </g>
    <text x="42" y="26" fill="#744210" style={{ fontSize: "17px", fontWeight: 800, fontFamily: "Arial, sans-serif" }}>
      BuildMart
    </text>
    <text x="42" y="40" fill="#D69E2E" style={{ fontSize: "8px", fontWeight: 600, fontFamily: "Arial, sans-serif", letterSpacing: "0.5px" }}>
      HARDWARE & SUPPLIES
    </text>
  </svg>
);

// All logos array
const logos = [
  { id: "mpesa", component: <MPesaLogo /> },
  { id: "equity", component: <EquityBankLogo /> },
  { id: "kra", component: <KRALogo /> },
  { id: "etims", component: <EtimsLogo /> },
  { id: "swiftline", component: <SwiftlineLogisticsLogo /> },
  { id: "motorspares", component: <MotorsparesLogo /> },
  { id: "harvestlink", component: <HarvestLinkLogo /> },
  { id: "buildmart", component: <BuildMartLogo /> },
];

const TrustedBy = () => {
  // Duplicate for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/60 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v40H0V0zm39 0h1v40h-1V0z'/%3E%3Cpath d='M0 0h40v1H0V0zm0 39h40v1H0v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
            Trusted by Kenya&apos;s Leading Enterprises
          </p>
        </div>

        {/* Marquee Container with Gradient Fade Mask */}
        <div
          className="relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* CSS Animated Marquee - Fast on mobile (10s), medium tablet (18s), slow desktop (28s) */}
          <div className="flex animate-marquee [animation-duration:10s] sm:[animation-duration:18s] lg:[animation-duration:28s] hover:[animation-play-state:paused]">
            {/* First set of logos */}
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 shrink-0">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  {logo.component}
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 shrink-0">
              {logos.map((logo) => (
                <div
                  key={`${logo.id}-dup`}
                  className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  {logo.component}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-slate-200/60 mx-auto max-w-3xl">
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="text-center px-2 sm:px-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">500+</p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">Active Businesses</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-slate-200" />
            <div className="text-center px-2 sm:px-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">KES 2B+</p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">Processed Monthly</p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-slate-200" />
            <div className="text-center px-2 sm:px-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">99.9%</p>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
