import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { getSiteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacte-nos",
  description: "Contacte a equipa editorial para questões, sugestões de correção ou pedidos de esclarecimento.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  const site = getSiteInfo();

  return (
    <div className="py-8 sm:py-10">
      <Container>
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Contacto</p>
        <h1 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">Contacte-nos</h1>
        <p className="mt-2 max-w-xl text-sm text-gray-400">
          Tem uma questão sobre um conteúdo, uma sugestão de correção ou um pedido de esclarecimento editorial?
          Escreva-nos.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-primary/20 bg-white/[0.03] p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Email Geral</p>
              <a href={`mailto:${site.email}`} className="mt-1 block font-semibold text-primary-light hover:underline">
                {site.email}
              </a>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-white/[0.03] p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Tempo de Resposta</p>
              <p className="mt-1 font-semibold text-white">1 a 2 dias úteis</p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-white/[0.03] p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Redes Sociais</p>
              <div className="mt-2 flex gap-3 text-sm">
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-light">
                  Facebook
                </a>
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-light">
                  Instagram
                </a>
                <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-light">
                  X (Twitter)
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-5 text-xs leading-relaxed text-gray-400">
              Procura orientação sobre utilização equilibrada? Contacte diretamente a{" "}
              <a href="https://www.icad.pt/Page/Index/21" target="_blank" rel="noopener noreferrer" className="text-primary-light underline">
                Linha 1414 (ICAD)
              </a>{" "}
              — um recurso independente, que não é operado por nós.
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-white/[0.02] p-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
