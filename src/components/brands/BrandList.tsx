import type { Brand } from "@/lib/types";
import { BrandCard } from "@/components/brands/BrandCard";

interface BrandListProps {
  brands: Brand[];
}

export function BrandList({ brands }: BrandListProps) {
  return (
    <div className="space-y-4">
      {brands.map((brand, index) => (
        <BrandCard key={brand.id} brand={brand} order={index + 1} />
      ))}
    </div>
  );
}
