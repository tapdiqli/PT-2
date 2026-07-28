import type { MetadataRoute } from "next";
import { getSiteInfo } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteInfo();
  const baseUrl = `https://${site.domain}`;
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/sobre-nos`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/politica-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/termos-condicoes`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/cookies-tecnologias`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
