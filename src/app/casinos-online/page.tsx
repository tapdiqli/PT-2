import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BrandListInteractive } from "@/components/brands/BrandListInteractive";
import { BrandTable } from "@/components/brands/BrandTable";
import { getBrands } from "@/lib/data";

export const metadata: Metadata = {
  title: "Casinos Online em Portugal — Ranking Completo",
  description:
    "Ranking completo dos melhores casinos online licenciados pelo SRIJ em Portugal, com bónus, métodos de pagamento e avaliações detalhadas.",
  alternates: { canonical: "/casinos-online" },
};

export default function CasinosOnlinePage() {
  const brands = getBrands();

  return (
    <div className="py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Ranking {new Date().getFullYear()}</p>
            <h1 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
              Casinos Online em Portugal
            </h1>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-gray-400">
            Atualizado semanalmente · Apenas +18
          </div>
        </div>

        <div className="mt-6">
          <div className="lg:hidden">
            <BrandTable brands={brands} />
          </div>
          <div className="hidden lg:block">
            <BrandListInteractive brands={brands} />
          </div>
        </div>
      </Container>
    </div>
  );
}
