import type { MetadataRoute } from "next";
import { getSiteInfo } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  const site = getSiteInfo();
  const baseUrl = `https://${site.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
