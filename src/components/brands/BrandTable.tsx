import type { Brand } from "@/lib/types";
import { BrandLogoMark } from "@/components/brands/BrandLogoMark";
import { AffiliateCardLink } from "@/components/brands/AffiliateCardLink";
import { StarRating } from "@/components/ui/StarRating";
import { formatCurrency } from "@/lib/utils";

interface BrandTableProps {
  brands: Brand[];
}

export function BrandTable({ brands }: BrandTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <div className="hidden grid-cols-[3fr_2fr_1.4fr_1fr_1.2fr] gap-4 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-wide text-gray-400 lg:grid">
        <span>Casino</span>
        <span>Bónus de Boas-Vindas</span>
        <span>Depósito Mín.</span>
        <span>Avaliação</span>
        <span className="text-right">Ação</span>
      </div>
      <div className="divide-y divide-white/10">
        {brands.map((brand) => (
          <AffiliateCardLink
            key={brand.id}
            id={`bonus-${brand.slug}`}
            partnerUrl={brand.affiliateUrl}
            ariaLabel={`Resgatar bónus em ${brand.name} (abre em nova aba)`}
            className="scroll-mt-28 grid grid-cols-1 gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] lg:grid-cols-[3fr_2fr_1.4fr_1fr_1.2fr] lg:items-center"
          >
            <div className="flex items-center gap-3">
              <BrandLogoMark logo={brand.logo} name={brand.name} accent={brand.accent} />
              <div className="flex flex-col justify-center gap-2">
                <p className="font-semibold uppercase text-white">{brand.name}</p>
                <div className="lg:hidden">
                  <StarRating rating={brand.rating} size="sm" />
                </div>
              </div>
            </div>
            <div className="text-center text-sm text-primary-light lg:text-left">{brand.bonus.headline}</div>
            <div className="hidden text-sm text-gray-200 lg:block">{formatCurrency(brand.bonus.minDeposit)}</div>
            <div className="hidden lg:block">
              <StarRating rating={brand.rating} size="sm" />
            </div>
            <div className="lg:text-right">
              <span className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-3 py-2.5 text-sm font-semibold text-background shadow-lg shadow-primary/20 lg:inline-flex lg:w-auto lg:py-1.5">
                Resgatar
              </span>
            </div>
          </AffiliateCardLink>
        ))}
      </div>
    </div>
  );
}
