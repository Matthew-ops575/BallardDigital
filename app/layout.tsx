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
  metadataBase: new URL("https://ballarddigital.com"),
  title: {
    default: "Ballard Digital | Utah SEO for the AI Search Era",
    template: "%s",
  },
  description:
    "Salt Lake City SEO consulting combining proven local SEO with Generative Engine Optimization (GEO). Get found on Google, ChatGPT, Perplexity, and AI search. Transparent pricing.",
  keywords:
    "Utah SEO, Salt Lake City SEO, local SEO Utah, GEO, generative engine optimization, AI SEO, digital marketing Utah",
  alternates: {
    canonical: "https://ballarddigital.com",
  },
  openGraph: {
    title: "Ballard Digital | Utah SEO for the AI Search Era",
    description:
      "Utah SEO consulting backed by live proof. Get found on Google AND in AI answers.",
    url: "https://ballarddigital.com",
    siteName: "Ballard Digital",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ballard Digital — Utah SEO for the AI Search Era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ballard Digital | Utah SEO for the AI Search Era",
    description:
      "Utah SEO consulting backed by live proof. Get found on Google AND in AI answers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
