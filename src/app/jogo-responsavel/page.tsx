import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jogo Responsável",
  description:
    "Informação e recursos sobre jogo responsável em Portugal: sinais de alerta, ferramentas de autocontrolo e linhas de apoio gratuitas como a Linha 1414.",
  alternates: { canonical: "/jogo-responsavel" },
};

const warningSigns = [
  "Jogar mais tempo ou dinheiro do que tinha planeado",
  "Tentar recuperar perdas apostando valores cada vez maiores",
  "Sentir ansiedade, irritabilidade ou culpa relacionada com o jogo",
  "Pedir dinheiro emprestado ou usar poupanças para jogar",
  "Esconder hábitos de jogo de familiares ou amigos",
  "Negligenciar trabalho, estudos ou relações pessoais por causa do jogo",
];

const tools = [
  {
    title: "Limites de Depósito",
    description: "Defina um limite diário, semanal ou mensal para os valores que deposita na sua conta de jogo.",
  },
  {
    title: "Limites de Tempo de Sessão",
    description: "Configure alertas ou encerramentos automáticos após um determinado período de jogo contínuo.",
  },
  {
    title: "Pausa Temporária (Time-Out)",
    description: "Suspenda o acesso à sua conta por um período definido, entre 24 horas e várias semanas.",
  },
  {
    title: "Autoexclusão",
    description: "Solicite a autoexclusão junto do operador ou através do Registo de Autoexclusão do SRIJ, válido para todos os operadores licenciados.",
  },
];

export default function ResponsibleGamblingPage() {
  const site = getSiteInfo();

  return (
    <div>
      <section className="border-b border-white/10 bg-secondary/20 py-12 sm:py-16">
        <Container className="max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-bold text-white">
            🔒 Apenas +18 anos
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">Jogo Responsável</h1>
          <p className="mt-4 leading-relaxed text-gray-300">
            O jogo deve ser sempre uma forma de entretenimento, nunca uma fonte de rendimento ou uma forma de resolver
            problemas financeiros. Nesta página encontra informação, ferramentas e contactos de apoio gratuito
            disponíveis em Portugal.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Autoavaliação"
            title="Sinais de alerta a que deve estar atento"
            description="Se se identifica com vários dos pontos abaixo, considere procurar apoio especializado."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {warningSigns.map((sign) => (
              <div key={sign} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <span className="mt-0.5 text-primary">⚠</span>
                <p className="text-sm text-gray-300">{sign}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-surface py-16">
        <Container>
          <SectionHeading
            eyebrow="Ferramentas"
            title="Ferramentas de jogo seguro"
            description="Os operadores licenciados pelo SRIJ são obrigados a disponibilizar as seguintes ferramentas de autocontrolo."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div key={tool.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-display font-bold text-primary-light">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{tool.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Apoio Gratuito" title="Linhas de apoio em Portugal" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {site.helplines.map((helpline) => (
              <div key={helpline.name} className="rounded-2xl border border-primary/20 bg-primary/[0.05] p-5">
                <h3 className="font-display font-bold text-white">{helpline.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{helpline.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <a href={`tel:${helpline.phone.replace(/\s/g, "")}`} className="font-bold text-primary-light">
                    📞 {helpline.phone}
                  </a>
                  {helpline.email && (
                    <a href={`mailto:${helpline.email}`} className="text-gray-300 hover:text-primary-light">
                      {helpline.email}
                    </a>
                  )}
                  <a href={helpline.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 underline hover:text-primary-light">
                    Visitar site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-surface py-16">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Proteção de Menores" title="O jogo é estritamente para maiores de 18 anos" />
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            O acesso a casinos online é legalmente restrito a pessoas com 18 ou mais anos em Portugal. Se partilha o
            computador ou dispositivo móvel com menores, recomendamos a instalação de software de controlo parental,
            como o{" "}
            <a href="https://www.gamban.com" target="_blank" rel="noopener noreferrer" className="text-primary-light underline">
              Gamban
            </a>
            ,{" "}
            <a href="https://www.betblocker.org" target="_blank" rel="noopener noreferrer" className="text-primary-light underline">
              BetBlocker
            </a>{" "}
            ou{" "}
            <a href="https://www.netnanny.com" target="_blank" rel="noopener noreferrer" className="text-primary-light underline">
              Net Nanny
            </a>
            , que ajudam a bloquear o acesso a sites de jogo em dispositivos partilhados.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-300">
            Todos os operadores apresentados neste site são licenciados pelo{" "}
            <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="text-primary-light underline">
              SRIJ
            </a>{" "}
            e têm a obrigação legal de verificar a idade e identidade dos seus utilizadores antes de permitir qualquer
            depósito.
          </p>
        </Container>
      </section>
    </div>
  );
}
