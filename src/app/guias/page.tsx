import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { getGuides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guias sobre Casinos Online",
  description:
    "Guias e artigos independentes sobre segurança, pagamentos, bónus e jogo responsável nos casinos online em Portugal.",
  alternates: { canonical: "/guias" },
};

export default function GuidesPage() {
  const guides = getGuides();
  const [featured, ...rest] = guides;

  return (
    <div className="py-8 sm:py-10">
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Blog & Guias</p>
        <h1 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
          Guias sobre Casinos Online em Portugal
        </h1>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Link
            href={`/guias/${featured.slug}`}
            className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-secondary/50 via-surface to-background p-6 lg:col-span-2 lg:min-h-[280px]"
          >
            <Badge className="mb-3 w-fit">{featured.category}</Badge>
            <h2 className="font-display text-xl font-bold text-white transition-colors group-hover:text-primary-light sm:text-2xl">
              {featured.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-gray-300">{featured.excerpt}</p>
            <p className="mt-3 text-xs text-gray-500">{featured.readTime} de leitura</p>
          </Link>

          <div className="flex flex-col gap-4">
            {rest.slice(0, 2).map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}`}
                className="group flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/30"
              >
                <Badge tone="muted" className="mb-2">
                  {guide.category}
                </Badge>
                <h3 className="font-display font-bold text-white transition-colors group-hover:text-primary-light">
                  {guide.title}
                </h3>
                <p className="mt-2 text-xs text-gray-400">{guide.readTime} de leitura</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <section className="mt-14 py-4">
        <Container>
          <h2 className="mb-6 font-display text-xl font-bold text-white">Todos os artigos</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guias/${guide.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-primary/30 hover:bg-white/[0.04]"
              >
                <Badge tone="outline" className="mb-3 w-fit">
                  {guide.category}
                </Badge>
                <h3 className="font-display font-bold text-white transition-colors group-hover:text-primary-light">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-400">{guide.excerpt}</p>
                <p className="mt-4 text-xs text-gray-500">
                  {guide.readTime} de leitura ·{" "}
                  {new Date(guide.publishedAt).toLocaleDateString("pt-PT", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
