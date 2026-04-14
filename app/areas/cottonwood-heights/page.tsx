import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Cottonwood Heights, UT | Ballard Digital",
  description:
    "Local SEO and AI search optimization for Cottonwood Heights businesses. Get found by customers searching in Cottonwood Heights and the east bench of the Salt Lake Valley.",
  keywords:
    "seo cottonwood heights utah, cottonwood heights seo company, marketing agency cottonwood heights, local seo cottonwood heights ut",
};

export default function CottonwoodHeightsPage() {
  return (
    <CityPage
      city="Cottonwood Heights"
      county="Salt Lake County"
      population="34,000+"
      headline="Cottonwood Heights residents have high expectations — and they search before they choose."
      subhead="We help Cottonwood Heights businesses get found on Google, in AI-powered search, and everywhere their customers look before making a decision."
      localContext="Cottonwood Heights sits at the mouth of Big and Little Cottonwood Canyons — gateway to Snowbird, Alta, Brighton, and Solitude. The city's affluent demographic, proximity to world-class recreation, and established neighborhoods make it a high-value market for local businesses. Residents here have strong household incomes, high expectations for service quality, and they thoroughly research providers online before making a decision. Businesses that show up with a strong online presence — reviews, content, search visibility — win. Those that rely on location alone are losing ground to competitors who invest in being found."
      searchInsight="Affluent demographic with thorough online research habits"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services-seo",
          description: "HVAC, plumbing, and electrical companies serving Cottonwood Heights' established homes — where homeowners invest in quality and search for the best-reviewed providers.",
        },
        {
          name: "Dental SEO",
          slug: "dental-seo",
          description: "Dental practices serving an affluent patient base that values quality and researches providers extensively before booking an appointment.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate-seo",
          description: "Agents serving the east bench market — high-value properties with canyon access, where buyers research neighborhoods in depth before contacting an agent.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic-seo",
          description: "Orthopedic and sports medicine practices at the gateway to Utah's best skiing — serving skiers, snowboarders, hikers, and climbers year-round.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "Sandy", slug: "sandy" },
        { name: "Draper", slug: "draper" },
        { name: "Murray", slug: "murray" },
        { name: "Herriman", slug: "herriman" },
        { name: "Park City", slug: "park-city" },
      ]}
      localProof={{
        description: "TheWasatchGuide.com — our independent content property — already features neighborhood guides and local content for Cottonwood Heights and the canyon communities, ranking in Google right now. We don't just say we know your market. We can show you Search Console data from content about your community.",
        link: "https://thewasatchguide.com",
      }}
      faqItems={[
        {
          q: "How much does SEO cost for a Cottonwood Heights business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "Is Cottonwood Heights too small for local SEO?",
          a: "Not at all. The city itself has 34,000 residents, but your service area likely includes Sandy, Murray, Holladay, and the surrounding east bench — hundreds of thousands of potential customers. City pages help you rank for the specific location searches that residents actually type.",
        },
        {
          q: "How long does it take to see results?",
          a: "For Cottonwood Heights-specific keywords, competition is low — we typically see movement within 2-3 months. Broader Salt Lake Valley terms take 4-6 months. AI search visibility improvements often show within 4-8 weeks.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
