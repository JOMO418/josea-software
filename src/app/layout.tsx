import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppCTA from "@/components/FloatingWhatsAppCTA";
import JoseaAI from "@/components/JoseaAI";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josea Software Solutions | Business Software That Grows With You",
  description:
    "Enterprise-grade software solutions tailored to help your business scale and succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}

        {/* Floating CTAs - Stacked bottom-right */}
        {/* WhatsApp at bottom (z-40), Josea AI above it (z-40), AI chat window (z-50) */}
        <FloatingWhatsAppCTA />
        <JoseaAI />
      </body>
    </html>
  );
}
