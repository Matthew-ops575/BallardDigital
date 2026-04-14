import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "Thank You | Ballard Digital",
  description: "Your submission has been received. We'll be in touch shortly.",
};

export default function SuccessPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        <section className="bg-background px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent-subtle">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Thank you!
            </h1>
            <p className="mb-8 text-lg text-muted">
              Your submission has been received. We&apos;ll review your
              information and get back to you within one business day.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ridge hover:text-ridge-dark"
            >
              Back to homepage
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
