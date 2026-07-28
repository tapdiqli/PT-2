import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça o propósito deste espaço editorial: reunir informação clara e contextualizada sobre plataformas digitais com enquadramento SRIJ em Portugal.",
  alternates: { canonical: "/sobre-nos" },
};

const values = [
  {
    title: "Independência",
    description:
      "As nossas análises não são condicionadas por acordos comerciais. Cada plataforma é observada com os mesmos critérios, aplicados de forma consistente.",
  },
  {
    title: "Transparência",
    description:
      "Explicamos com clareza como funcionam as condições comunicadas e os prazos de processamento, sem detalhes escondidos em notas de rodapé.",
  },
  {
    title: "Utilização Consciente",
    description:
      "Recomendamos sempre uma navegação equilibrada e apresentamos apenas plataformas que constam do registo do SRIJ.",
  },
];

const timeline = [
  { year: "2023", event: "Lançamento do projeto, com foco no contexto português." },
  { year: "2024", event: "Ampliação dos critérios editoriais para incluir a observação de prazos de processamento." },
  { year: "2025", event: "Alargamento da cobertura a mais plataformas com licenciamento confirmado." },
  {
    year: `${new Date().getFullYear()}`,
    event: "Revisão semanal dos conteúdos, acompanhando a evolução destes ambientes digitais.",
  },
];

export default function AboutPage() {
  const site = getSiteInfo();

  return (
    <div>
      <section className="border-b border-primary/20 bg-noise-gradient py-14 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Sobre Nós</p>
          <h1 className="text-hero-gradient mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Um espaço independente de consulta editorial
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300">{site.description}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Propósito" title="Os nossos princípios" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-primary/20 bg-white/[0.03] p-6 text-center">
                <h3 className="font-display text-lg font-bold text-primary-light">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-primary/20 bg-surface py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Percurso" title="A nossa história" align="center" className="mx-auto" />
          <div className="mt-10 space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-display text-sm font-bold text-primary-light">
                  {item.year}
                </div>
                <p className="flex-1 pt-2.5 text-sm text-gray-300">{item.event}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl rounded-2xl border border-primary/20 bg-white/[0.03] p-8 text-center">
          <h2 className="font-display text-xl font-bold text-white">Como este projeto se sustenta</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            A consulta do {site.domain} é livre e não tem custos para o visitante. Em certos casos podemos receber uma
            compensação se a navegação for continuada após a saída deste site. Este modelo não influencia a forma como os
            conteúdos são elaborados, nem a ordem pela qual as plataformas são apresentadas.
          </p>
        </Container>
      </section>
    </div>
  );
}
