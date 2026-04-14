import type { Metadata } from "next";
import { IndustryPage } from "@/lib/industry-page";

export const metadata: Metadata = {
  title: "Orthopedic SEO in Utah",
  description:
    "Local SEO and AI search optimization for orthopedic clinics, sports medicine practices, and physical therapy offices in Utah. Patients search by condition and location — we make sure they find you.",
  keywords:
    "orthopedic seo utah, orthopedic surgeon marketing salt lake city, sports medicine seo utah, physical therapy seo, orthopedic clinic marketing utah",
};

export default function OrthopedicSeoPage() {
  return (
    <IndustryPage
      badge="Orthopedic SEO — Clinics, Sports Medicine, Physical Therapy"
      headline="Patients search for specialists by condition, not by name. Are they finding your practice?"
      subhead="We help Utah orthopedic clinics and sports medicine practices get found by patients searching for specialists — on Google, in AI-powered search, and across every platform patients use to choose a provider."
      roiStat="One surgical patient covers 12+ months of retainer."
      roiExplanation="A single orthopedic surgery case — knee replacement, ACL reconstruction, rotator cuff repair — generates $15,000-$50,000+ in revenue. At our retainer rates, one new surgical patient from improved search visibility pays for the entire year. For physical therapy and sports medicine, 3-5 new patients per month from SEO transforms your growth pipeline."
      painPoints={[
        {
          problem: "Patients search 'knee pain doctor near me' and your competitors show up first.",
          solution: "We optimize for condition-based searches — the way patients actually look for specialists. Not just 'orthopedic surgeon Salt Lake City' but 'torn ACL treatment Utah,' 'best knee replacement surgeon near me,' and hundreds of specific queries your patients are typing right now.",
        },
        {
          problem: "Your referral pipeline is strong but you need direct-to-patient volume.",
          solution: "Referrals are great, but they're someone else's pipeline. SEO builds your own. Patients increasingly skip the PCP referral and search directly for specialists — especially for sports injuries, joint pain, and elective procedures. We put you in front of them.",
        },
        {
          problem: "Patients are asking AI assistants for doctor recommendations and you're not showing up.",
          solution: "When someone asks ChatGPT 'who's the best orthopedic surgeon in Salt Lake City?' — do you appear? Our GEO strategy ensures AI recommends your practice based on your credentials, reviews, and authority signals.",
        },
        {
          problem: "You have great outcomes and reviews but your online presence doesn't reflect it.",
          solution: "We translate your clinical reputation into search visibility. Structured data for your specialties and credentials, review management across Google and Healthgrades, and content that demonstrates expertise — not just lists your services.",
        },
      ]}
      whatWeDoItems={[
        "Condition-specific landing pages (knee replacement, ACL surgery, sports injuries, joint pain)",
        "Provider profile optimization with credentials, specialties, and procedure schema",
        "Google Business Profile management (weekly posts, photos, review responses)",
        "Review generation system across Google, Healthgrades, Vitals, and WebMD",
        "Patient-focused content targeting conditions and symptoms patients search",
        "AI search citation monitoring (ChatGPT, Perplexity, Google AI)",
        "Schema markup for medical specialties, procedures, and provider credentials",
        "Monthly report: new patient inquiries, calls, form submissions, keyword rankings",
      ]}
      geoAngle={{
        question: "What does ChatGPT say when a patient searches for a specialist near them?",
        explanation: "Patients increasingly turn to AI for healthcare recommendations — especially when choosing a specialist for a specific condition. Utah's rapid population growth means thousands of new residents searching for providers every month. AI assistants weigh provider credentials, reviews, published research, and structured data heavily when recommending specialists. If your practice isn't optimized for these signals, AI recommends your competitor instead.",
        items: [
          "Provider entity optimization — structured data so AI knows your specialties, credentials, and procedures",
          "Review signal management — volume, recency, and response rate across Google, Healthgrades, and Vitals",
          "Citation building on medical directories and authoritative health sources",
          "Condition-specific FAQ content structured for AI to parse and cite",
          "Monthly tracking of AI recommendation visibility for your practice and providers",
        ],
      }}
      auditQuestion="Want to see how patients find your practice — in Google and in AI search?"
      auditItems={[
        "Google and Local Pack visibility for condition and specialty keywords",
        "AI search check — does ChatGPT recommend your practice?",
        "Review profile analysis across Google, Healthgrades, Vitals, and WebMD",
        "Competitor comparison against 3-5 nearby practices",
        "Specific action plan with new-patient ROI projection",
      ]}
      faqItems={[
        {
          q: "How much does orthopedic SEO cost in Utah?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. We believe orthopedic practices deserve to know pricing before a sales call.",
        },
        {
          q: "How do you measure success for an orthopedic practice?",
          a: "New patient inquiries, phone calls, and appointment form submissions. Not keyword rankings. Rankings are a means to an end — the end is patients scheduling appointments. We track and report on the metrics that drive your practice's growth.",
        },
        {
          q: "Do you work with multi-provider or multi-location practices?",
          a: "Yes. Multi-provider practices need individual provider profiles optimized, location-specific landing pages, and a review strategy that builds each provider's reputation. Our audit covers all providers and locations, and we price retainers based on scope.",
        },
        {
          q: "How is this different from healthcare marketing companies?",
          a: "National healthcare marketing companies run the same playbook for practices in Utah and Texas. We know the Utah market — neighborhoods, competitors, patient demographics. And we offer GEO (AI search optimization) that healthcare marketing companies aren't touching yet, backed by live proof on TheWasatchGuide.com.",
        },
        {
          q: "Can you help with HIPAA compliance for online content?",
          a: "We focus on SEO and search visibility, not clinical content review. We'll create content that drives patient acquisition — condition guides, procedure explainers, provider profiles — but we recommend your compliance team reviews any clinical claims before publishing. We never publish patient information or testimonials without proper authorization.",
        },
      ]}
    />
  );
}
