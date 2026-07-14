import type { Brand } from "@/lib/types";
import { BrandCard } from "@/components/brands/BrandCard";

interface BrandListInteractiveProps {
  brands: Brand[];
}

export function BrandListInteractive({ brands }: BrandListInteractiveProps) {
  return (
    <div className="space-y-4">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}
