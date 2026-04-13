import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ballard Digital | Utah SEO for the AI Search Era",
  description:
    "Salt Lake City SEO agency combining proven local SEO with Generative Engine Optimization (GEO). Get found on Google, ChatGPT, Perplexity, and AI search. Transparent pricing from $1,500/mo.",
  keywords:
    "Utah SEO, Salt Lake City SEO, local SEO Utah, GEO, generative engine optimization, AI SEO, digital marketing Utah",
  openGraph: {
    title: "Ballard Digital | Utah SEO for the AI Search Era",
    description:
      "Utah SEO consulting backed by live proof. Get found on Google AND in AI answers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
