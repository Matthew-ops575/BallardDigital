import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "Results & Case Studies | Ballard Digital",
  description:
    "Real results from real Utah businesses. Case studies showing the impact of local SEO and AI search optimization on leads, calls, and revenue.",
};

export default function ResultsPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        <section className="bg-background px-6 py-16 pt-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Results
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Case studies
            </h1>
            <p className="mb-12 max-w-2xl text-lg text-muted">
              Real results from real Utah businesses. We&apos;ll be publishing
              detailed case studies here as our first clients see results.
            </p>

            <div className="rounded-2xl border border-border bg-surface p-12 text-center">
              <p className="mb-2 text-lg font-semibold text-foreground">
                Coming soon
              </p>
              <p className="mb-6 text-muted">
                Our first case studies are in progress. In the meantime, we
                share real Search Console data and live rankings during every
                audit — so you can see proof before you commit.
              </p>
              <Link
                href="/#audit"
                className="inline-flex items-center gap-2 text-sm font-medium text-ridge hover:text-ridge-dark"
              >
                Get your free presence score
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
