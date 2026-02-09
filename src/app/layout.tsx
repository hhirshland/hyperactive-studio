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
  title: "Hyperactive Studio — Modern Product Studio",
  description:
    "Hyperactive Studio helps ambitious teams turn ideas into shipped, scalable digital products using modern design, engineering, and AI-native workflows.",
  keywords: [
    "product studio",
    "web development",
    "mobile app development",
    "AI workflows",
    "product strategy",
    "digital products",
  ],
  openGraph: {
    title: "Hyperactive Studio — Modern Product Studio",
    description:
      "We help ambitious teams turn ideas into shipped digital products.",
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
