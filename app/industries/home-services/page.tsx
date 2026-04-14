import type { Metadata } from "next";
import { IndustryPage } from "@/lib/industry-page";

export const metadata: Metadata = {
  title: "HVAC & Home Services SEO in Utah",
  description:
    "Local SEO and AI search optimization for HVAC, plumbing, electrical, and roofing companies in Utah. One furnace install covers 6-12 months of retainer. Transparent pricing.",
  keywords:
    "hvac seo utah, plumbing seo utah, roofing seo utah, home services marketing salt lake city, hvac marketing utah",
};

export default function HomeServicesSeoPage() {
  return (
    <IndustryPage
      badge="Home Services SEO — HVAC, Plumbing, Electrical, Roofing"
      headline="Your customers Google &ldquo;furnace repair near me&rdquo; at 2 AM. Do they find you?"
      subhead="We help Utah home service companies dominate local search and AI-powered recommendations — so the phone rings before your competitor's does."
      roiStat="One furnace install covers 6-12 months of retainer."
      roiExplanation="The average HVAC install runs $3,000-$8,000. A single job from improved search visibility more than pays for months of SEO investment. That's not aspirational math — it's verifiable, and we'll show you the projection during your audit."
      painPoints={[
        {
          problem: "You're paying for Google Ads but the leads dry up the moment you stop.",
          solution: "SEO and GEO build assets you own. A blog post that ranks keeps delivering leads for years. An ad stops the second you stop paying.",
        },
        {
          problem: "Your Google Business Profile hasn't been touched in months.",
          solution: "We manage your GBP weekly — posts, photos, review responses, Q&A — because Google rewards active profiles with better Local Pack placement.",
        },
        {
          problem: "Homeowners are asking ChatGPT for recommendations and you're not showing up.",
          solution: "Our GEO strategy optimizes your entity data, reviews, and citations so AI assistants recommend you — not just Google.",
        },
        {
          problem: "You know SEO matters but you're too busy running jobs to figure it out.",
          solution: "You're an expert in your trade, not digital marketing. That's the point. We bridge the gap so you focus on the work and we focus on the visibility.",
        },
      ]}
      whatWeDoItems={[
        "2-4 SEO-optimized service area pages per month",
        "Google Business Profile management (weekly posts, review monitoring)",
        "Service-specific content (AC repair, furnace install, water heater, etc.)",
        "Neighborhood and city-targeted landing pages",
        "Review generation system (email/text templates, QR cards)",
        "AI search citation monitoring (ChatGPT, Perplexity, Google AI)",
        "Monthly report: traffic, keyword rankings, leads, calls, GBP views",
        "Directory monitoring and NAP consistency",
      ]}
      geoAngle={{
        question: "What happens when a homeowner asks ChatGPT for the best HVAC company in your area?",
        explanation: "More homeowners are using AI assistants to find service providers — especially for urgent needs like a broken furnace or AC. If your business isn't being recommended in those AI answers, you're losing calls to competitors who are. Our GEO strategy ensures your business is visible in ChatGPT, Perplexity, and Google AI Overviews alongside traditional search results.",
        items: [
          "Entity optimization so AI models know your business, services, and service area",
          "Citation building on the authoritative sources AI references",
          "Review signal management — AI heavily weights review quality and recency",
          "Structured content that AI can parse and recommend",
          "Monthly AI visibility monitoring — we track what AI says about you",
        ],
      }}
      auditQuestion="Want to see how your HVAC company shows up in Google AND AI search?"
      auditItems={[
        "Google and Local Pack visibility for your service keywords",
        "AI search check — do ChatGPT and Perplexity recommend you?",
        "Competitor comparison against 3-5 local companies",
        "Review profile analysis and improvement plan",
        "Specific action plan with ROI projection",
      ]}
      faqItems={[
        {
          q: "How much does SEO cost for an HVAC company in Utah?",
          a: "Our retainers start at $1,000/month for traditional local SEO, or $2,000-$2,500/month with AI search optimization (GEO) included. Every engagement starts with a $500 audit that's credited toward your project. We publish our pricing because we believe you should know what things cost before a sales call.",
        },
        {
          q: "How long until I see results?",
          a: "Most home service clients see measurable improvements in Google Business Profile visibility within 60-90 days. Organic rankings for competitive service keywords typically take 3-6 months to build. AI search citations develop over 2-4 months. We report on progress monthly with specific metrics tied to leads and calls, not vanity numbers.",
        },
        {
          q: "Do I need a new website?",
          a: "Not always. Our audit will tell you. If your current site is structurally sound, we optimize what you have. If it needs rebuilding, we include a custom WordPress site in Phase 2 ($2,500-$5,000). You own the domain and everything we build — registered in your name from day one.",
        },
        {
          q: "What's the difference between your SEO and what the big agencies offer?",
          a: "Most agencies sell generic SEO packages, lock you into long contracts, and hand your account to a junior after the sale. We're a consulting practice — the person who does the audit does the work. We also offer GEO (AI search optimization) backed by TheWasatchGuide.com — a live content property with real Google rankings you can verify yourself.",
        },
        {
          q: "Do you require a long-term contract?",
          a: "No. After your initial audit and build phase, retainers are month-to-month with 30-day cancellation notice. We earn your business every month through results.",
        },
      ]}
    />
  );
}
