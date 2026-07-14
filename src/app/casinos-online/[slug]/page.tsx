import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { AffiliateButtonLink } from "@/components/ui/Button";
import { BrandLogoMark } from "@/components/brands/BrandLogoMark";
import { getBrandBySlug, getBrands, getPaymentMethodById } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBrands().map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return {
    title: `${brand.name} — Análise, Bónus e Avaliação`,
    description: brand.description,
    alternates: { canonical: `/casinos-online/${brand.slug}` },
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10 py-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{ background: `radial-gradient(circle at 15% 0%, ${brand.accent}, transparent 55%)` }}
        />
        <Container className="relative">
          <Link href="/casinos-online" className="text-xs font-semibold text-primary hover:underline">
            ← Voltar ao Ranking
          </Link>
          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <BrandLogoMark logo={brand.logo} name={brand.name} accent={brand.accent} />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{brand.name}</h1>
                  <Badge tone="outline">#{brand.rank}</Badge>
                </div>
                <div className="mt-2">
                  <StarRating rating={brand.rating} votes={brand.votes} size="md" />
                </div>
              </div>
            </div>
            <AffiliateButtonLink
              partnerUrl={brand.affiliateUrl}
              size="lg"
              ariaLabel={`Visitar ${brand.name} (abre em nova aba)`}
            >
              Visitar {brand.name}
            </AffiliateButtonLink>
          </div>
        </Container>
      </section>

      <Container className="grid gap-8 py-10 lg:grid-cols-[1fr_340px] sm:py-14">
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Sobre o {brand.name}</h2>
            <p className="mt-3 leading-relaxed text-gray-300">{brand.description}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="mb-3 flex items-center gap-2 font-display font-bold text-primary-light">
                <span>✓</span> Vantagens
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {brand.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="mb-3 flex items-center gap-2 font-display font-bold text-gray-300">
                <span>✕</span> Pontos a Melhorar
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                {brand.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2">
                    <span className="mt-0.5 text-gray-500">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-white">Métodos de Pagamento</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {brand.paymentMethods.map((methodId) => {
                const method = getPaymentMethodById(methodId);
                if (!method) return null;
                return (
                  <span key={methodId} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-200">
                    {method.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-white">Fornecedores de Jogos</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {brand.gameProviders.map((provider) => (
                <span key={provider} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-200">
                  {provider}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-5">
            <Badge className="mb-3">{brand.badge}</Badge>
            <p className="font-display text-lg font-bold text-white">{brand.bonus.headline}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <dt className="text-gray-400">Depósito Mínimo</dt>
                <dd className="font-semibold text-white">{formatCurrency(brand.bonus.minDeposit)}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <dt className="text-gray-400">Requisito de Aposta</dt>
                <dd className="font-semibold text-white">{brand.bonus.wagering}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <dt className="text-gray-400">Código Promocional</dt>
                <dd className="font-semibold text-primary-light">{brand.bonus.code}</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <dt className="text-gray-400">Tempo de Levantamento</dt>
                <dd className="font-semibold text-white">{brand.withdrawalTime}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-400">Licença</dt>
                <dd className="font-semibold text-white">
                  {brand.licenses[0]?.authority} {brand.licenses[0]?.number}
                </dd>
              </div>
            </dl>
            <AffiliateButtonLink
              partnerUrl={brand.affiliateUrl}
              className="mt-5 w-full justify-center"
              ariaLabel={`Resgatar bónus em ${brand.name} (abre em nova aba)`}
            >
              Resgatar Bónus
            </AffiliateButtonLink>
            <p className="mt-3 text-center text-[11px] text-gray-500">18+ | Termos e condições aplicáveis | Jogue com responsabilidade</p>
          </div>
        </aside>
      </Container>
    </div>
  );
}
