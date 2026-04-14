import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Clock } from "lucide-react";
import { InnerNavbar, InnerFooter } from "@/lib/components";

export const metadata: Metadata = {
  title: "Contact Ballard Digital | Salt Lake City SEO",
  description:
    "Get in touch with Ballard Digital. Local SEO and AI search optimization for Utah businesses. Free audit available.",
};

export default function ContactPage() {
  return (
    <>
      <InnerNavbar />
      <main className="pt-24 pb-20">
        <section className="bg-background px-6 py-16 pt-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="accent-line" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Contact
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get in touch
            </h1>
            <p className="mb-12 max-w-2xl text-lg text-muted">
              Have a question or want to discuss your business? Reach out
              directly — no sales team, no runaround.
            </p>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Info */}
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@ballarddigital.com"
                        className="text-sm text-ridge hover:text-ridge-dark"
                      >
                        hello@ballarddigital.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        Location
                      </h3>
                      <p className="text-sm text-muted">
                        Salt Lake City, Utah
                      </p>
                      <p className="text-sm text-muted">
                        Serving the entire Wasatch Front
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 text-accent" />
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        Response time
                      </h3>
                      <p className="text-sm text-muted">
                        Typically within one business day
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-accent/30 bg-accent-subtle p-6">
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    Want a free audit instead?
                  </h3>
                  <p className="mb-4 text-sm text-muted">
                    Skip the conversation and get a scored assessment of your
                    digital presence — Google, directories, reviews, and AI
                    search visibility.
                  </p>
                  <Link
                    href="/#audit"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ridge hover:text-ridge-dark"
                  >
                    Get your free presence score
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success" className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Business name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Your business"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      placeholder="Tell us about your business and what you're looking for"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-ridge py-3.5 text-sm font-semibold text-white transition-all hover:bg-ridge-dark glow-ridge"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
