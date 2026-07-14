import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getSiteInfo } from "@/lib/data";

const regSigns = [
  {
    src: "/reg-signs/jogo-responsavel.png",
    alt: "Jogo Responsável",
    href: "https://www.jogoresponsavel.pt",
    width: 177,
    height: 88,
  },
  {
    src: "/reg-signs/icad.png",
    alt: "ICAD — Instituto para os Comportamentos Aditivos e as Dependências",
    href: "https://www.icad.pt",
    width: 256,
    height: 76,
  },
  {
    src: "/reg-signs/gordon-moody.png",
    alt: "Gordon Moody",
    href: "https://www.gordonmoody.org.uk",
    width: 201,
    height: 62,
  },
  {
    src: "/reg-signs/srij.png",
    alt: "SRIJ — Serviço de Regulação e Inspeção de Jogos",
    href: "https://www.srij.turismodeportugal.pt",
    width: 256,
    height: 140,
  },
];

const columns = [
  {
    title: "Explorar",
    links: [
      { href: "/casinos-online", label: "Casinos Online" },
      { href: "/guias", label: "Guias e Estratégias" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/sobre-nos", label: "Sobre Nós" },
      { href: "/contacto", label: "Contacto" },
      { href: "/jogo-responsavel", label: "Jogo Responsável" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/termos-condicoes", label: "Termos e Condições" },
      { href: "/politica-privacidade", label: "Política de Privacidade" },
    ],
  },
];

export function Footer() {
  const site = getSiteInfo();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo.png" alt="Top Cassino Comparador" width={200} height={48} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">{site.description}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-bold text-white">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-primary-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 sm:gap-8">
          {regSigns.map((sign) => (
            <Link
              key={sign.src}
              href={sign.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src={sign.src}
                alt={sign.alt}
                width={sign.width}
                height={sign.height}
                className="h-10 w-auto sm:h-12"
                unoptimized
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-relaxed text-gray-400">
          <p>
            <strong className="text-gray-200">Aviso importante:</strong> {site.name} é um site independente de comparação e
            informação sobre casinos online, destinado a maiores de 18 anos residentes em Portugal. Não somos um operador de
            jogo, não processamos apostas nem pagamentos. Podemos receber uma compensação de afiliação pelos operadores
            listados quando um utilizador se regista através dos nossos links — isto não influencia as nossas avaliações
            nem implica qualquer custo adicional para o jogador. O jogo pode ser aditivo: jogue sempre de forma
            responsável e apenas com operadores licenciados pelo{" "}
            <a href="https://www.srij.turismodeportugal.pt" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-light">
              SRIJ
            </a>
            . Precisa de ajuda? Contacte a Linha 1414 (ICAD), gratuita e confidencial.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>
            © {year} {site.domain}. Todos os direitos reservados.
          </p>
          <p>Jogue com responsabilidade · Apenas +18 · Licenciado pelo SRIJ</p>
        </div>
      </Container>
    </footer>
  );
}
