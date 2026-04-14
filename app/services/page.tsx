import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  MapPin,
  Code,
  Palette,
  FileText,
  Star,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "SEO Services in Utah | Ballard Digital",
  description:
    "Local SEO, AI search optimization, technical SEO, and web design for Utah businesses. See our full service offerings and transparent pricing.",
  keywords:
    "seo services utah, seo services salt lake city, local seo utah, ai search optimization, technical seo utah",
};

const services = [
  {
    icon: Palette,
    name: "Web Design",
    slug: "web-design",
    description:
      "Custom websites built for search — fast, mobile-first, with schema markup and lead capture from day one.",
  },
  {
    icon: MapPin,
    name: "Local SEO",
    slug: "local-seo",
    description:
      "The full strategy — directory citations, on-page optimization, review management, local content, and the technical signals that determine who ranks in your market.",
  },
  {
    icon: Bot,
    name: "AI Search Optimization (GEO)",
    slug: "ai-search-optimization",
    description:
      "Get found in ChatGPT, Perplexity, and Google AI Overviews — not just traditional blue links.",
  },
  {
    icon: Star,
    name: "Google Business Profile",
    slug: "google-business-profile",
    description:
      "Your most important local asset — optimized, managed, and updated weekly so you show up in the Local Pack.",
  },
  {
    icon: FileText,
    name: "Content Marketing",
    slug: "content-marketing",
    description:
      "Blog posts, service pages, and local content built around what your customers actually search — designed to rank and convert.",
  },
  {
    icon: Code,
    name: "Technical SEO",
    slug: "technical-seo",
    description:
      "Site speed, crawlability, schema markup, Core Web Vitals, and the technical foundation your rankings depend on.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        <section className="bg-background px-6 py-16 pt-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Services
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What we do
            </h1>
            <p className="mb-12 max-w-2xl text-lg text-muted">
              Every engagement starts with a $500 audit and follows the same
              path: audit, build, grow. Here&apos;s what we offer.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/30"
                >
                  <svc.icon className="mb-4 h-8 w-8 text-accent" />
                  <h2 className="mb-2 text-xl font-semibold text-foreground group-hover:text-accent-dark">
                    {svc.name}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {svc.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-ridge">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 text-sm font-medium text-ridge hover:text-ridge-dark"
              >
                See pricing for all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
