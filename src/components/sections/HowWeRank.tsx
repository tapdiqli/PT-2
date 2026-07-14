import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Verificação de Licença",
    description: "Confirmamos que o operador possui licença ativa do SRIJ e cumpre os requisitos legais em Portugal.",
  },
  {
    number: "02",
    title: "Segurança e Justiça",
    description: "Avaliamos encriptação, RNG certificado e políticas de proteção de dados dos jogadores.",
  },
  {
    number: "03",
    title: "Bónus e Termos",
    description: "Analisamos requisitos de aposta, valores mínimos e a transparência dos termos de cada promoção.",
  },
  {
    number: "04",
    title: "Pagamentos Locais",
    description: "Testamos depósitos e levantamentos via MB WAY, Multibanco e outros métodos populares em Portugal.",
  },
];

export function HowWeRank() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Metodologia"
          title="Como avaliamos cada casino online"
          description="A nossa equipa segue um processo rigoroso e independente antes de recomendar qualquer operador."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="font-display text-3xl font-extrabold text-primary/40">{step.number}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
