import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center py-16">
      <Container className="max-w-md text-center">
        <p className="font-display text-6xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white">Página não encontrada</h1>
        <p className="mt-3 text-sm text-gray-400">
          A página que procura pode ter sido movida ou já não existe. Volte ao início para continuar a explorar.
        </p>
        <ButtonLink href="/" className="mt-6">
          Voltar ao Início
        </ButtonLink>
      </Container>
    </div>
  );
}
