import type { Metadata } from "next";
import { CityPage } from "@/lib/city-page";

export const metadata: Metadata = {
  title: "SEO & AI Search Optimization in Ogden, UT",
  description:
    "Local SEO and AI search optimization for Ogden businesses. Get found by customers searching in Ogden, Weber County, and across northern Utah.",
  keywords:
    "seo ogden utah, ogden seo company, marketing agency ogden, local seo ogden ut, weber county seo",
};

export default function OgdenPage() {
  return (
    <CityPage
      city="Ogden"
      county="Weber County"
      population="87,000+"
      headline="Get found in Ogden."
      subhead="We help Ogden businesses get found on Google, in AI-powered search, and everywhere their customers look before making a decision."
      localContext="Ogden has undergone a remarkable transformation — from a quiet railroad city to one of Utah's most dynamic markets. The revitalized 25th Street district, growing outdoor recreation economy, and proximity to three major ski resorts have brought new residents and businesses to the area. Weber State University adds a younger demographic, while established neighborhoods in South Ogden and North Ogden house families with strong local spending. The result is a competitive market where businesses need to stand out online — but most Ogden businesses are still underinvesting in search visibility compared to the Salt Lake Valley."
      searchInsight="Growing market with less SEO competition than SLC"
      industries={[
        {
          name: "Home Services SEO",
          slug: "home-services",
          description: "HVAC, plumbing, roofing, and electrical companies serving Ogden and Weber County — where homeowners search locally and competition for SEO is still relatively low.",
        },
        {
          name: "Dental SEO",
          slug: "dental",
          description: "Dental practices competing for patients in Ogden's growing market — where new residents are actively searching for providers after moving to the area.",
        },
        {
          name: "Real Estate SEO",
          slug: "real-estate",
          description: "Agents serving Ogden's resurgent housing market — from downtown condos to mountain-view properties in the foothills, where buyer interest is surging.",
        },
        {
          name: "Orthopedic SEO",
          slug: "orthopedic",
          description: "Orthopedic and sports medicine practices serving Ogden's outdoor recreation community — skiers, mountain bikers, and trail runners from Snowbasin to the Bonneville Shoreline Trail.",
        },
      ]}
      services={[
        { name: "AI Search Optimization (GEO)", slug: "ai-search-optimization" },
        { name: "Local SEO", slug: "local-seo" },
        { name: "Technical SEO", slug: "technical-seo" },
        { name: "SEO Web Design", slug: "web-design" },
      ]}
      nearbyAreas={[
        { name: "Park City", slug: "park-city" },
        { name: "Murray", slug: "murray" },
        { name: "Sandy", slug: "sandy" },
        { name: "Draper", slug: "draper" },
      ]}
      faqItems={[
        {
          q: "How much does SEO cost for an Ogden business?",
          a: "Our retainers start at $1,500/month for local SEO or $2,000-$2,500/month with AI search optimization included. Every engagement begins with a $500 scored audit credited toward your project. See our pricing page for full details.",
        },
        {
          q: "Is Ogden less competitive than Salt Lake City for SEO?",
          a: "Yes, significantly. Most Utah SEO agencies focus on the Salt Lake Valley, so Ogden and Weber County keywords have less competition. That means faster results and a strong first-mover advantage for businesses that invest now.",
        },
        {
          q: "Do you serve businesses in Layton and Davis County too?",
          a: "Yes. We serve businesses across the Wasatch Front — from Ogden to Provo. If your customers search for local services in northern Utah, we can help.",
        },
        {
          q: "What makes you different from other SEO agencies?",
          a: "Three things: we offer AI search optimization (GEO) as a core service, not an afterthought. We have live proof of local search results through TheWasatchGuide.com. And we publish transparent pricing — no sales call required to know what things cost.",
        },
      ]}
    />
  );
}
