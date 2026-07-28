import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BrandList } from "@/components/brands/BrandList";
import { Container } from "@/components/ui/Container";
import { getBrands } from "@/lib/data";

export const metadata: Metadata = {
  title: "Análise Editorial de Plataformas Digitais — Edição 2026",
  description:
    "Informação clara sobre plataformas digitais com enquadramento SRIJ em Portugal: condições, métodos de pagamento locais e observações editoriais independentes.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const brands = getBrands();

  return (
    <>
      <Hero />

      <section>
        <Container>
          <div className="my-10">
            <BrandList brands={brands} />
          </div>
        </Container>
      </section>
    </>
  );
}
