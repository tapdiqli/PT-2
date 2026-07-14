import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-noise-gradient">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
      <Container className="relative py-6 sm:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-light">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-ring" />
              Atualizado para {new Date().getFullYear()} · Licenciados SRIJ
            </span>
            <h1 className="mt-4 font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Os melhores <span className="text-primary">casinos online</span> em Portugal, comparados por especialistas
            </h1>
            <p className="my-2 md:my-4 max-w-xl text-xs leading-relaxed text-gray-300 sm:text-base">
              Analisamos bónus, métodos de pagamento locais como MB WAY e Multibanco, e a rapidez de levantamento de cada
              operador licenciado — para que escolha com confiança.
            </p>
            <p className="text-xs text-gray-500">
              Conteúdo apenas para maiores de 18 anos. O jogo pode ser aditivo — jogue com responsabilidade.
            </p>
          </div>

          <div className="hidden lg:block animate-fade-up [animation-delay:120ms] rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Comece agora</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Encontre o casino online ideal para si ou consulte os nossos recursos de jogo responsável.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink href="/casinos-online" size="lg" className="w-full justify-center">
                Ver Ranking Completo
              </ButtonLink>
              <ButtonLink href="/jogo-responsavel" variant="outline" size="lg" className="w-full justify-center">
                Jogo Responsável
              </ButtonLink>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-400">
              <span>🔒 Licenciados SRIJ</span>
              <span>8+ Casinos Avaliados</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
