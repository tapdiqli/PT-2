import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { HowWeRank } from "@/components/sections/HowWeRank";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BrandTable } from "@/components/brands/BrandTable";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBrands, getFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Melhores Casinos Online em Portugal 2026",
  description:
    "Compare os melhores casinos online licenciados pelo SRIJ em Portugal. Bónus, MB WAY, Multibanco e avaliações honestas e independentes.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const brands = getBrands();
  const faqs = getFaqs();

  return (
    <>
      <Hero />

      <section>
        <Container>
          <div className="my-10">
            <BrandTable brands={brands} />
          </div>
        </Container>
      </section>

      <TrustStats />
      <HowWeRank />

      <section className="border-t border-white/10 bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Perguntas Frequentes"
            title="Ainda tem dúvidas?"
            description="Respondemos às perguntas mais comuns sobre casinos online em Portugal."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
