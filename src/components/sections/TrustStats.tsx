import { Container } from "@/components/ui/Container";

const stats = [
  { value: "8+", label: "Casinos analisados em profundidade" },
  { value: "100%", label: "Operadores licenciados pelo SRIJ" },
  { value: "50+", label: "Métodos de pagamento comparados" },
  { value: "2023", label: "A comparar casinos desde" },
];

export function TrustStats() {
  return (
    <section className="border-b border-white/10 bg-surface">
      <Container className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
