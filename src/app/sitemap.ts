import type { MetadataRoute } from "next";
import { getProjects, getInsights } from "@/sanity/lib/queries";

const siteUrl = "https://www.kanseptplus.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, insights] = await Promise.all([getProjects(), getInsights()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, priority: 1.0, changeFrequency: "monthly" },
    { url: `${siteUrl}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${siteUrl}/projects`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${siteUrl}/who-we-are`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${siteUrl}/insights`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${siteUrl}/contact`, priority: 0.7, changeFrequency: "yearly" },
  ];

  const projectRoutes: MetadataRoute.Sitemap =
    projects?.map((p) => ({
      url: `${siteUrl}/projects/${p.slug.current}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })) ?? [];

  const insightRoutes: MetadataRoute.Sitemap =
    insights?.map((i) => ({
      url: `${siteUrl}/insights/${i.slug.current}`,
      lastModified: i.publishedAt ? new Date(i.publishedAt) : undefined,
      priority: 0.6,
      changeFrequency: "yearly" as const,
    })) ?? [];

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
