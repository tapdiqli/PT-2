import rawData from "@/data/data.json";
import type { Brand, SiteData, SiteInfo } from "@/lib/types";

const data = rawData as unknown as SiteData;

export function getSiteInfo(): SiteInfo {
  return data.site;
}

export function getBrands(): Brand[] {
  return [...data.brands].sort((a, b) => a.rank - b.rank);
}
