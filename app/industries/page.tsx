import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Home,
  Users,
  BarChart3,
} from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "Industries We Serve | Ballard Digital",
  description:
    "SEO and AI search optimization for home services, dental, real estate, and orthopedic businesses in Utah. Deep industry expertise with proven ROI.",
  keywords:
    "seo for home services utah, dental seo utah, real estate seo utah, orthopedic seo utah",
};

const industries = [
  {
    icon: Shield,
    name: "Home Services",
    slug: "home-services",
    examples: "HVAC, Plumbing, Electrical, Roofing",
    description:
      "Emergency-driven search with high close rates. We know how homeowners find and choose service providers — and we make sure they find you.",
  },
  {
    icon: Users,
    name: "Dental Practices",
    slug: "dental",
    examples: "General, Cosmetic, Implants, Orthodontics",
    description:
      "71% of patients use online reviews before choosing a dentist. We optimize for new patient acquisition across Google and AI search.",
  },
  {
    icon: Home,
    name: "Real Estate",
    slug: "real-estate",
    examples: "Residential Agents, Brokerages, Teams",
    description:
      "Neighborhood-level content and local authority that puts agents in front of buyers and sellers actively searching their market.",
  },
  {
    icon: BarChart3,
    name: "Orthopedics",
    slug: "orthopedic",
    examples: "Orthopedic Clinics, Sports Medicine, Physical Therapy",
    description:
      "Patients search for specialists by condition and location. We put your practice in front of them — on Google and in AI recommendations.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        <section className="bg-background px-6 py-16 pt-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Industries
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Industries we serve
            </h1>
            <p className="mb-12 max-w-2xl text-lg text-muted">
              We work with local service businesses across Utah. These are
              the industries where we have deep experience — but if you serve
              local customers, we can help.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/30"
                >
                  <ind.icon className="mb-4 h-8 w-8 text-accent" />
                  <h2 className="mb-1 text-xl font-semibold text-foreground group-hover:text-accent-dark">
                    {ind.name}
                  </h2>
                  <p className="mb-3 text-sm text-ridge">{ind.examples}</p>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {ind.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-ridge">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-accent/30 bg-accent-subtle p-8 text-center">
              <h2 className="mb-2 text-lg font-semibold text-foreground">
                Don&apos;t see your industry?
              </h2>
              <p className="mb-4 text-sm text-muted">
                If you serve local customers in Utah, we can likely help. Get
                in touch and we&apos;ll give you an honest assessment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-ridge hover:text-ridge-dark"
              >
                Contact us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
