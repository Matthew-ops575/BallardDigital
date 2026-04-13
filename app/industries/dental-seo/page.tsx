import type { Metadata } from "next";
import { IndustryPage } from "@/lib/industry-page";

export const metadata: Metadata = {
  title: "Dental SEO in Salt Lake City | Ballard Digital",
  description:
    "Local SEO and AI search optimization for dental practices in Utah. 71% of patients use online reviews. One implant patient covers the entire annual investment.",
  keywords:
    "dental seo salt lake city, dentist marketing utah, dental practice seo, dental marketing ideas utah",
};

export default function DentalSeoPage() {
  return (
    <IndustryPage
      badge="Dental SEO — General, Cosmetic, Implants, Orthodontics"
      headline="71% of patients read online reviews before choosing a dentist. What do they find when they search for yours?"
      subhead="We help Utah dental practices get found by new patients — on Google, in AI-powered search, and everywhere patients look before booking an appointment."
      roiStat="One implant patient covers the entire annual investment."
      roiExplanation="A single dental implant case is worth $3,000-$5,000 to your practice. At our retainer rates, one new implant patient from improved search visibility pays for the entire year. For general dentistry, 3-5 new patients per month from SEO transforms your growth trajectory."
      painPoints={[
        {
          problem: "You have a great practice but new patient flow is inconsistent.",
          solution: "Consistent search visibility means consistent patient flow. We build the organic presence that delivers new patients month after month — not just when you run ads.",
        },
        {
          problem: "Your reviews are strong but you're still not showing up in the Local Pack.",
          solution: "Reviews matter, but they're one signal among many. NAP consistency, GBP optimization, on-page SEO, and entity optimization all feed Local Pack rankings. We fix the full picture.",
        },
        {
          problem: "Patients are asking AI assistants for dentist recommendations and you're nowhere.",
          solution: "When someone asks ChatGPT 'who's the best dentist near Sandy?' — do you appear? Our GEO strategy ensures AI recommends your practice, not just Google.",
        },
        {
          problem: "You've tried SEO before and the agency just sent ranking reports with no real results.",
          solution: "We report on new patient inquiries, calls, and form submissions — not keyword rankings. If the phone isn't ringing more, the SEO isn't working. We're honest about that.",
        },
      ]}
      whatWeDoItems={[
        "Service-specific pages (implants, cosmetic, Invisalign, emergency, pediatric)",
        "Neighborhood and city-targeted landing pages for your service area",
        "Google Business Profile management (weekly posts, photos, review responses)",
        "Review generation system with automated follow-up sequences",
        "Patient-focused blog content targeting questions patients actually search",
        "AI search citation monitoring (ChatGPT, Perplexity, Google AI)",
        "Schema markup for dental procedures, ratings, and practice info",
        "Monthly report: new patient inquiries, calls, traffic, keyword rankings",
      ]}
      geoAngle={{
        question: "What does ChatGPT say when a patient asks for the best dentist near them?",
        explanation: "Patients increasingly ask AI for healthcare recommendations — especially when choosing a new dentist after moving (Utah is the 4th fastest-growing state). AI assistants weigh reviews, practice authority, and structured data heavily when recommending providers. If your practice isn't optimized for these signals, AI recommends your competitor instead.",
        items: [
          "Practice entity optimization — structured data so AI knows your services, location, and credentials",
          "Review signal management — volume, recency, and response rate across Google, Yelp, and Healthgrades",
          "Citation building on dental directories and authoritative health sources",
          "Patient FAQ content structured for AI to parse and cite",
          "Monthly tracking of AI recommendation visibility for your practice",
        ],
      }}
      auditQuestion="Want to see how patients find your practice — in Google and in AI search?"
      auditItems={[
        "Google and Local Pack visibility for dental service keywords",
        "AI search check — does ChatGPT recommend your practice?",
        "Review profile analysis across Google, Yelp, and Healthgrades",
        "Competitor comparison against 3-5 nearby practices",
        "Specific action plan with new-patient ROI projection",
      ]}
      faqItems={[
        {
          q: "How much does dental SEO cost in Utah?",
          a: "Our retainers start at $1,500/month for dental practices, or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. We believe dentists deserve to know pricing before a sales call.",
        },
        {
          q: "How do you measure success for a dental practice?",
          a: "New patient inquiries, phone calls, and appointment form submissions. Not keyword rankings. Rankings are a means to an end — the end is patients in chairs. We track and report on the metrics that matter to your bottom line.",
        },
        {
          q: "We already have a website. Do we need a new one?",
          a: "Our audit will tell you. Many dental websites look fine but are technically weak — slow load times, no schema markup, thin service pages, poor mobile experience. If your site is structurally sound, we optimize it. If it's holding you back, we build a new one on WordPress ($3,000-$5,000) that you own completely.",
        },
        {
          q: "How is this different from dental-specific marketing companies?",
          a: "National dental marketing companies run the same playbook for practices in Utah and Florida. We know the Utah market — neighborhoods, competitors, seasonal patterns. And we offer GEO (AI search optimization) that dental marketing companies aren't touching yet, backed by live proof on TheWasatchGuide.com.",
        },
        {
          q: "Can you help with multiple locations?",
          a: "Yes. Multi-location dental practices need location-specific GBP management, individual landing pages per location, and a citation strategy that avoids NAP conflicts. Our audit covers all locations and we price retainers based on the scope.",
        },
      ]}
    />
  );
}
