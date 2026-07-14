import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-secondary/40 via-background to-background p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="relative">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Pronto para encontrar o seu próximo casino favorito?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-300 sm:text-base">
              Compare bónus, métodos de pagamento e avaliações reais de operadores licenciados pelo SRIJ — tudo num só
              lugar.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="/casinos-online" size="lg">
                Comparar Casinos
              </ButtonLink>
              <ButtonLink href="/guias" variant="outline" size="lg">
                Ver Guias e Dicas
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
