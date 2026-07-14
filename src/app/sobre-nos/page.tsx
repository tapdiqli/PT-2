import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a missão do TopCassinoComparador: ajudar jogadores portugueses a escolher casinos online licenciados com confiança e transparência.",
  alternates: { canonical: "/sobre-nos" },
};

const values = [
  {
    title: "Independência",
    description: "As nossas avaliações não são influenciadas por comissões de afiliação. Testamos cada operador com os mesmos critérios.",
  },
  {
    title: "Transparência",
    description: "Explicamos claramente como funcionam os bónus, requisitos de aposta e taxas — sem letras pequenas escondidas.",
  },
  {
    title: "Jogo Responsável",
    description: "Promovemos ativamente práticas de jogo seguro e apenas recomendamos operadores licenciados pelo SRIJ.",
  },
];

const timeline = [
  { year: "2023", event: "Lançamento do TopCassinoComparador com foco no mercado português." },
  { year: "2024", event: "Expansão da metodologia de avaliação para incluir testes reais de levantamento." },
  { year: "2025", event: "Parceria com mais operadores licenciados SRIJ e lançamento da secção de guias." },
  { year: `${new Date().getFullYear()}`, event: "Continuamos a atualizar avaliações semanalmente para a comunidade portuguesa." },
];

export default function AboutPage() {
  const site = getSiteInfo();

  return (
    <div>
      <section className="border-b border-white/10 bg-noise-gradient py-14 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Sobre Nós</p>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ajudamos jogadores portugueses a escolher com confiança
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-300">{site.description}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Missão" title="Os nossos princípios" align="center" className="mx-auto" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <h3 className="font-display text-lg font-bold text-primary-light">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-surface py-16 sm:py-20">
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
        <Container className="max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <h2 className="font-display text-xl font-bold text-white">Como nos financiamos</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            O {site.name} é gratuito para os utilizadores. Recebemos uma comissão de afiliação dos operadores quando um
            jogador se regista através dos nossos links — sem qualquer custo adicional para o jogador. Esta compensação
            nunca influencia a ordem das nossas recomendações ou o conteúdo das nossas avaliações.
          </p>
        </Container>
      </section>
    </div>
  );
}
