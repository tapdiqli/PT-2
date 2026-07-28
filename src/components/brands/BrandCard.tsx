import type { Brand } from "@/lib/types";
import { BrandLogoMark } from "@/components/brands/BrandLogoMark";
import { AffiliateCardLink } from "@/components/brands/AffiliateCardLink";
import { Stars } from "@/components/ui/Stars";
import { calculateRating, calculateStars } from "@/lib/ranking";
import { formatRating } from "@/lib/utils";

interface BrandCardProps {
  brand: Brand;
  /** Position in the rendered list, starting at 1. Drives rating, stars and badge. */
  order: number;
}

export function BrandCard({ brand, order }: BrandCardProps) {
  const rating = calculateRating(order);
  const stars = calculateStars(order);

  return (
    <AffiliateCardLink
      id={brand.slug}
      partnerUrl={brand.affiliateUrl}
      ariaLabel={`Explorar ${brand.name} (abre em nova aba)`}
      className="bg-card-radial scroll-mt-28 block rounded-2xl border border-primary/20 p-3 transition-colors hover:border-primary/40"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-6">
        <div className="flex items-center justify-between gap-4 md:contents">
          <div className="relative shrink-0 md:order-1">
            <BrandLogoMark logo={brand.logo} name={brand.name} accent={brand.accent} />
            <span className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-background bg-primary text-[11px] font-bold text-background">
              {order}
            </span>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-1 md:order-3">
            <div className="flex items-center gap-1">
              <span className="font-display text-2xl font-bold leading-none text-white lg:text-[28px]">
                {formatRating(rating)}
              </span>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6 text-accent lg:h-7 lg:w-7">
                <path d="M12 2l2.9 6.3 6.9.8-5.1 4.6 1.4 6.8L12 17.1 5.9 20.5l1.4-6.8-5.1-4.6 6.9-.8L12 2z" />
              </svg>
            </div>
            <Stars value={stars} />
          </div>
        </div>

        <p className="font-semibold leading-snug text-white md:order-2 md:max-w-[15rem] lg:max-w-[17rem] lg:text-[17px]">
          {brand.bonus.headline}
        </p>

        <span className="flex items-center justify-center rounded-full bg-gradient-to-b from-accent-light to-accent px-6 py-2.5 text-[15px] font-semibold text-black shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:order-4 md:w-[11rem] md:shrink-0 lg:w-[13.75rem]">
          Explorar agora
        </span>
      </div>
    </AffiliateCardLink>
  );
}
