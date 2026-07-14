import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { getGuideBySlug, getGuides } from "@/data/guides";
import { getFeaturedBrands } from "@/lib/data";
import { BrandCard } from "@/components/brands/BrandCard";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guias/${guide.slug}` },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const topBrands = getFeaturedBrands(3);

  return (
    <div className="py-8 sm:py-10">
      <Container className="max-w-3xl">
        <Link href="/guias" className="text-xs font-semibold text-primary hover:underline">
          ← Voltar aos Guias
        </Link>
        <Badge className="mt-4 mb-3 w-fit">{guide.category}</Badge>
        <h1 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{guide.title}</h1>
        <p className="mt-3 text-sm text-gray-400">
          {guide.readTime} de leitura ·{" "}
          {new Date(guide.publishedAt).toLocaleDateString("pt-PT", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-8 space-y-6">
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-lg font-bold text-white">{section.heading}</h2>
              <p className="mt-2 leading-relaxed text-gray-300">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-relaxed text-gray-400">
          Este artigo tem fins meramente informativos e não constitui aconselhamento financeiro ou profissional. Jogue
          sempre com responsabilidade e apenas em operadores licenciados pelo SRIJ.
        </div>
      </Container>

      <section className="mt-14 border-t border-white/10 bg-surface py-14">
        <Container>
          <h2 className="mb-6 font-display text-xl font-bold text-white">Casinos recomendados</h2>
          <div className="space-y-4">
            {topBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} compact />
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/casinos-online" variant="outline">
              Ver Ranking Completo
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
