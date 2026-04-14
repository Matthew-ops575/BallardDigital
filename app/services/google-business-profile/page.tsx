import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Image,
  MessageSquare,
  TrendingUp,
  FileSearch,
} from "lucide-react";
import { InnerNavbar, InnerFooter, FaqSchema } from "@/lib/components";

export const metadata: Metadata = {
  title: "Google Business Profile Management in Utah",
  description:
    "GBP optimization for Utah businesses. Your Google Business Profile is how most local customers find you. We make sure it works.",
  keywords:
    "google business profile optimization utah, gbp management salt lake city, google my business optimization utah",
};

const faqs = [
  {
    q: "Is GBP management included in your retainers?",
    a: "Yes. Google Business Profile management is included in every retainer tier. If you only need GBP management as a standalone service, contact us for pricing.",
  },
  {
    q: "I already have a Google Business Profile. What more is there to do?",
    a: "Having a profile is step one. Optimizing it is step two — and most businesses skip it. Categories, attributes, weekly posts, review strategy, photo updates, and Q&A management all feed the algorithm that decides who shows up in the Local Pack.",
  },
  {
    q: "How quickly can GBP optimization show results?",
    a: "GBP changes can impact Local Pack rankings within weeks — faster than most other SEO work. It's often the quickest win in a local SEO engagement.",
  },
  {
    q: "Do I keep access to my profile?",
    a: "Always. You're the owner. We have manager access. If we part ways, nothing changes for your profile.",
  },
];

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <InnerNavbar />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden pb-16 pt-8">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-sand-light">
              <MapPin className="h-4 w-4" />
              Google Business Profile
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-hero-fg md:text-5xl md:leading-[1.15]">
              Your most important local asset.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/50">
              Your Google Business Profile drives more calls, directions, and
              website visits than any other single channel. Most businesses
              set it up once and forget it. We manage it like the revenue
              driver it is.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-xl bg-ridge px-8 py-4 text-base font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
            >
              Get Your Free Presence Score
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Why GBP Matters */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Why it matters
              </span>
            </div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              The Local Pack is where decisions happen
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                When someone searches &quot;plumber near me&quot; or
                &quot;dentist Salt Lake City,&quot; Google shows three
                businesses in the Local Pack — the map results at the top of
                the page. Those three businesses get the majority of clicks
                and calls.
              </p>
              <p>
                Your Google Business Profile is what determines whether
                you&apos;re in that top three. Reviews, photos, posts,
                categories, attributes, and how consistently Google sees your
                business information across the web — all of it feeds the
                algorithm that decides who shows up.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                What we manage
              </span>
            </div>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Full GBP management
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: FileSearch,
                  title: "Profile Optimization",
                  description:
                    "Categories, attributes, service areas, business description, and every field Google uses to match you with searches. Most profiles have gaps — we fill them.",
                },
                {
                  icon: MessageSquare,
                  title: "Weekly Posts",
                  description:
                    "Regular Google Business posts that signal to Google your business is active and relevant. Updates, offers, and content tailored to what your customers search.",
                },
                {
                  icon: Star,
                  title: "Review Management",
                  description:
                    "Review monitoring, response within 24 hours, and a systematic approach to generating new reviews — without begging or incentivizing.",
                },
                {
                  icon: Image,
                  title: "Photos & Media",
                  description:
                    "Regular photo updates that show Google (and customers) your business is active. Businesses with 100+ photos get 520% more calls than average.",
                },
                {
                  icon: MapPin,
                  title: "Q&A Management",
                  description:
                    "We monitor and respond to questions on your profile, and proactively add FAQs that address common customer queries before they ask.",
                },
                {
                  icon: TrendingUp,
                  title: "Monthly Reporting",
                  description:
                    "Profile views, search queries, calls, direction requests, and website clicks — tied to the actions that actually drive revenue.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <item.icon className="mb-4 h-6 w-6 text-accent" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-background px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-border pb-6">
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-alt px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
              How does your Google Business Profile score?
            </h2>
            <p className="mb-8 text-muted">
              Our free audit includes a GBP health check — we&apos;ll show
              you what&apos;s optimized, what&apos;s missing, and what your
              competitors are doing better.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 rounded-xl bg-ridge px-8 py-4 text-base font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
            >
              Get My Free Presence Score
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
