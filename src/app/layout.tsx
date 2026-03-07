import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyperactive Studio — AI Agency for Enterprise Transformation",
  description:
    "Hyperactive Studio is an AI agency that helps enterprises identify high-impact AI opportunities, implement real workflows, and upskill their teams.",
  keywords: [
    "AI agency",
    "enterprise AI",
    "AI readiness assessment",
    "AI workflow implementation",
    "AI consulting",
    "AI upskilling",
    "web development",
    "app development",
  ],
  openGraph: {
    title: "Hyperactive Studio — AI Agency for Enterprise Transformation",
    description:
      "We help enterprises identify high-impact AI opportunities, implement real workflows, and upskill their teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
