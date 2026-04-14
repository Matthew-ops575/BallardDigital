import type { Metadata } from "next";
import { IndustryPage } from "@/lib/industry-page";

export const metadata: Metadata = {
  title: "Real Estate SEO in Utah",
  description:
    "Local SEO and AI search optimization for Utah real estate agents. Neighborhood-level content that puts you in front of buyers and sellers actively searching your market.",
  keywords:
    "real estate seo utah, realtor marketing salt lake city, real estate marketing utah, real estate lead generation utah",
};

export default function RealEstateSeoPage() {
  return (
    <IndustryPage
      badge="Real Estate SEO — Agents, Brokerages, Teams"
      headline="When someone searches &ldquo;living in Draper&rdquo; or &ldquo;best neighborhoods in Sandy,&rdquo; does your name come up?"
      subhead="We help Utah real estate agents build the neighborhood-level content authority that puts you in front of buyers and sellers before they ever contact a portal."
      roiStat="One additional closing covers 12+ months of retainer."
      roiExplanation="The average Utah agent commission on a single transaction runs $8,000-$15,000. One additional closing from improved search visibility pays for an entire year of retainer — multiple times over. Every deal after that is pure upside."
      painPoints={[
        {
          problem: "You're losing leads to Zillow, Realtor.com, and Redfin before prospects even know you exist.",
          solution: "Portals dominate generic searches, but they can't compete on local authority. Neighborhood-level content — the kind that answers 'what's it like to live in Herriman?' — is where agents win. We build that content engine.",
        },
        {
          problem: "Your sphere-of-influence dries up between transactions.",
          solution: "SEO content works between deals. A well-ranked neighborhood guide keeps attracting new prospects year-round, independent of your transaction cycle.",
        },
        {
          problem: "Buyers are asking AI assistants for agent recommendations in specific neighborhoods.",
          solution: "When someone asks ChatGPT 'who's a good realtor in Cottonwood Heights?' — are you there? Our GEO strategy makes sure AI knows your name, your market, and your track record.",
        },
        {
          problem: "You've spent money on IDX sites and lead capture but the SEO never materialized.",
          solution: "IDX sites are commodity — everyone has the same listings. What ranks is original, local content: neighborhood guides, market analysis, school comparisons. That's what we build.",
        },
      ]}
      whatWeDoItems={[
        "Neighborhood and community guide content (the searches portals can't win)",
        "Market-specific landing pages for your target areas",
        "Google Business Profile management with weekly market-relevant posts",
        "Review generation and management across Google and Zillow",
        "Local market blog content (schools, dining, commute, lifestyle)",
        "AI search optimization — entity data, citations, structured content",
        "Agent authority building through digital PR and local mentions",
        "Monthly report: organic traffic, keyword rankings, lead inquiries",
      ]}
      geoAngle={{
        question: "What happens when a relocating family asks ChatGPT for an agent in your market?",
        explanation: "Utah is the 4th fastest-growing state. Families relocating from out of state increasingly ask AI assistants to recommend real estate agents in specific neighborhoods. The agents who appear in those AI answers get the first call. Our GEO strategy builds your digital authority so AI recognizes you as the local expert — backed by the same neighborhood content strategy we use on our own property, TheWasatchGuide.com.",
        items: [
          "Agent entity optimization — structured data, knowledge panel presence, consistent NAP",
          "Neighborhood authority signals — original local content that AI trusts and cites",
          "Review management across Google, Zillow, and Realtor.com",
          "Digital PR and local press mentions that feed AI trust signals",
          "Monthly tracking of AI recommendations for agents in your market",
        ],
      }}
      auditQuestion="Want to see how buyers and sellers find agents in your market — on Google and in AI?"
      auditItems={[
        "Search visibility for your target neighborhoods and cities",
        "AI search check — does ChatGPT recommend you as a local expert?",
        "Competitor comparison against 3-5 agents in your market",
        "Review profile analysis across Google and Zillow",
        "Content gap analysis — what neighborhood content is missing",
      ]}
      faqItems={[
        {
          q: "How is this different from what my brokerage provides?",
          a: "Brokerage-provided websites are templated and shared across dozens or hundreds of agents. You can't rank with a template. We build original, neighborhood-level content under your personal brand — content that only you can rank for because it's about your specific market expertise.",
        },
        {
          q: "What does TheWasatchGuide.com have to do with real estate SEO?",
          a: "TheWasatchGuide.com is our independent local content property — neighborhood guides for Wasatch Front communities that rank in Google right now. It's live proof that the exact content strategy we recommend for agents actually works. We can show you the Search Console data during your audit.",
        },
        {
          q: "How much does real estate SEO cost?",
          a: "Our retainers start at $1,000/month for agents, or $2,000/month with AI search optimization. Every engagement begins with a $500 audit credited toward your project. Given that one additional closing covers 12+ months of retainer, the ROI is among the most straightforward in any industry we serve.",
        },
        {
          q: "How long until I start getting leads from SEO?",
          a: "Neighborhood content typically begins ranking within 60-90 days. Lead flow from organic search builds gradually — most agents see meaningful inbound inquiries within 4-6 months. Unlike ads, this traffic compounds: a neighborhood guide published today keeps attracting prospects for years.",
        },
        {
          q: "Do I own the content you create?",
          a: "Yes. Everything we create — your domain, website, content, analytics, credentials — is registered in your name from day one. If we part ways, you get a clean 14-day handoff. Your site and content keep working for you.",
        },
      ]}
    />
  );
}
