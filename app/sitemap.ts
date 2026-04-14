import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `https://ballarddigital.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // Core pages
    {
      url: "https://ballarddigital.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://ballarddigital.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://ballarddigital.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ballarddigital.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://ballarddigital.com/results",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://ballarddigital.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Service pages
    {
      url: "https://ballarddigital.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/services/web-design",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/services/local-seo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/services/ai-search-optimization",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/services/google-business-profile",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/services/content-marketing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/services/technical-seo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Industry pages
    {
      url: "https://ballarddigital.com/industries",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ballarddigital.com/industries/home-services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/industries/dental",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/industries/real-estate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://ballarddigital.com/industries/orthopedic",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // City pages
    ...[
      "draper",
      "sandy",
      "lehi",
      "west-jordan",
      "provo",
      "ogden",
      "herriman",
      "cottonwood-heights",
      "park-city",
      "murray",
    ].map((city) => ({
      url: `https://ballarddigital.com/areas/${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Blog posts
    ...blogUrls,
  ];
}
