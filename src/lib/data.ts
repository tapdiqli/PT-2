import rawData from "@/data/data.json";
import type { Brand, Faq, PaymentMethod, SiteData, SiteInfo } from "@/lib/types";

const data = rawData as unknown as SiteData;

export function getSiteInfo(): SiteInfo {
  return data.site;
}

export function getBrands(): Brand[] {
  return [...data.brands].sort((a, b) => a.rank - b.rank);
}

export function getFeaturedBrands(limit?: number): Brand[] {
  const featured = getBrands().filter((brand) => brand.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return data.brands.find((brand) => brand.slug === slug);
}

export function getPaymentMethods(): PaymentMethod[] {
  return data.paymentMethods;
}

export function getPaymentMethodById(id: string): PaymentMethod | undefined {
  return data.paymentMethods.find((method) => method.id === id);
}

export function getFaqs(): Faq[] {
  return data.faqs;
}

export function getTopBrand(): Brand {
  return getBrands()[0];
}
