import type { Brand } from "@/lib/types";
import { BrandLogoMark } from "@/components/brands/BrandLogoMark";
import { AffiliateCardLink } from "@/components/brands/AffiliateCardLink";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";

interface BrandCardProps {
  brand: Brand;
  compact?: boolean;
}

export function BrandCard({ brand, compact }: BrandCardProps) {
  return (
    <AffiliateCardLink
      id={brand.slug}
      partnerUrl={brand.affiliateUrl}
      ariaLabel={`Visitar ${brand.name} (abre em nova aba)`}
      className="scroll-mt-28 block rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-4 transition-colors hover:border-primary/30 sm:p-5"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex items-center gap-4 lg:contents">
          <div className="relative shrink-0">
            <BrandLogoMark logo={brand.logo} name={brand.name} accent={brand.accent} />
            <span className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full border border-background bg-primary text-[11px] font-bold text-background">
              {brand.rank}
            </span>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-2.5 lg:min-w-[180px] lg:shrink-0">
            <h3 className="font-display text-base font-bold uppercase text-white sm:text-lg">{brand.name}</h3>
            <StarRating rating={brand.rating} votes={brand.votes} size="md" />
          </div>
        </div>

        <div className="flex-1 lg:border-x lg:border-white/10 lg:px-8">
          <Badge className="mb-2">{brand.badge}</Badge>
          <p className="font-semibold text-primary-light">{brand.bonus.headline}</p>
          {!compact && (
            <ul className="mt-2 space-y-1 text-xs text-gray-300 sm:text-sm">
              {brand.pros.slice(0, 2).map((pro) => (
                <li key={pro} className="flex items-start gap-1.5">
                  <span className="mt-0.5 text-primary">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 lg:w-[200px] lg:shrink-0 lg:flex-col lg:items-stretch">
          <div className="text-xs text-gray-400">
            <p>
              Depósito mín. <span className="font-semibold text-white">{formatCurrency(brand.bonus.minDeposit)}</span>
            </p>
            <p>
              Licença <span className="font-semibold text-white">{brand.licenses[0]?.authority}</span>
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-background shadow-lg shadow-primary/20">
            Ver Oferta
          </span>
        </div>
      </div>
    </AffiliateCardLink>
  );
}
