import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in West Jordan, UT | Ballard Digital",
  description:
    "Local SEO and AI search optimization for West Jordan businesses. Get found by customers searching in West Jordan and across the southwest valley.",
  keywords:
    "seo west jordan utah, west jordan seo company, marketing agency west jordan, local seo west jordan ut",
};

export default function WestJordanPage() {
  return (
    <CityPage
      city="West Jordan"
      county="Salt Lake County"
      population="116,000+"
      headline="West Jordan is Utah's fourth-largest city. Are your customers finding you — or driving past you?"
      subhead="We help West Jordan businesses get found on Google, in AI-powered search, and everywhere their customers look before choosing a provider."
      localContext="West Jordan is the fourth-largest city in Utah with over 116,000 residents, stretching from the Oquirrh Mountains to the Jordan River. The Bangerter Highway corridor and Redwood Road create major commercial hubs, while established neighborhoods throughout the city provide a large base of homeowners searching for local services. Despite its size, West Jordan is underserved by local SEO — most agencies focus on Salt Lake City proper, leaving a gap for businesses that serve the southwest valley."
      searchInsight="Underserved market — few agencies target West Jordan specifically"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services-seo",
          description: "HVAC, plumbing, roofing, and electrical companies serving West Jordan's large base of homeowners — a massive market that most agencies overlook.",
        },
        {
          name: "Dental SEO",
          slug: "dental-seo",
          description: "Dental practices competing for patients across the southwest valley — where population density means high demand but search visibility determines who wins.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate-seo",
          description: "Agents serving West Jordan's mix of affordable family homes and new developments — where buyers actively search neighborhoods before contacting an agent.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic-seo",
          description: "Orthopedic and sports medicine practices serving the southwest valley's family-heavy population — youth sports injuries, joint replacements, and active lifestyle care.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "Herriman", slug: "herriman" },
        { name: "Sandy", slug: "sandy" },
        { name: "Draper", slug: "draper" },
        { name: "Murray", slug: "murray" },
        { name: "Lehi", slug: "lehi" },
      ]}
      faqItems={[
        {
          q: "How much does SEO cost for a West Jordan business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "Why don't more agencies target West Jordan?",
          a: "Most Utah SEO agencies focus on Salt Lake City, Park City, or Provo because those names carry cachet. That's actually great news for West Jordan businesses — less competition for local keywords means faster results and lower cost to rank.",
        },
        {
          q: "How long does it take to see results?",
          a: "For West Jordan-specific keywords, competition is relatively low — we typically see movement within 2-3 months. Broader salt lake valley terms take 4-6 months. AI search visibility improvements often show within 4-8 weeks.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
