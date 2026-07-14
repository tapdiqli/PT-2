import type { MetadataRoute } from "next";
import { getBrands, getSiteInfo } from "@/lib/data";
import { getGuides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteInfo();
  const baseUrl = `https://${site.domain}`;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/casinos-online`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/guias`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/sobre-nos`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/jogo-responsavel`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/termos-condicoes`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/politica-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const brandRoutes: MetadataRoute.Sitemap = getBrands().map((brand) => ({
    url: `${baseUrl}/casinos-online/${brand.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const guideRoutes: MetadataRoute.Sitemap = getGuides().map((guide) => ({
    url: `${baseUrl}/guias/${guide.slug}`,
    lastModified: new Date(guide.publishedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...brandRoutes, ...guideRoutes];
}
