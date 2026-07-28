import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { getSiteInfo } from "@/lib/data";

const regSigns = {
  icad: {
    src: "/reg-signs/icad.png",
    alt: "ICAD — Instituto para os Comportamentos Aditivos e as Dependências",
    href: "https://www.icad.pt",
    width: 256,
    height: 76,
  },
  gordonMoody: {
    src: "/reg-signs/gordon-moody.png",
    alt: "Gordon Moody",
    href: "https://www.gordonmoody.org.uk",
    width: 201,
    height: 62,
  },
  jogoResponsavel: {
    src: "/reg-signs/jogo-responsavel.png",
    alt: "Jogo Responsável",
    href: "https://www.jogoresponsavel.pt",
    width: 177,
    height: 88,
  },
  srij: {
    src: "/reg-signs/srij.png",
    alt: "SRIJ — Serviço de Regulação e Inspeção de Jogos",
    href: "https://www.srij.turismodeportugal.pt/pt/sos-jogadores/autoexclusao-e-proibicao",
    width: 256,
    height: 140,
  },
};

const footerLinks = [
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/contacto", label: "Contacte-nos" },
  { href: "/politica-privacidade", label: "Privacidade e Transparência" },
  { href: "/termos-condicoes", label: "Condições de Utilização" },
  { href: "/cookies-tecnologias", label: "Cookies e Tecnologias" },
];

function StripCell({ children }: { children: ReactNode }) {
  return <div className="flex items-center justify-center px-2 lg:px-4">{children}</div>;
}

function RegSign({ sign }: { sign: (typeof regSigns)[keyof typeof regSigns] }) {
  return (
    <Link
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
        className="h-7 w-auto lg:h-9"
        unoptimized
      />
    </Link>
  );
}

export function Footer() {
  const site = getSiteInfo();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-footer-gradient">
      <Container className="py-10 sm:py-12">
        <div className="flex justify-center">
          <Link href="/" className="inline-flex items-center">
            <Image src="/logo.png" alt="Top Cassino Comparador" width={260} height={40} className="h-7 w-auto sm:h-10" />
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <h4 className="text-[15px] font-bold text-white">Nota sobre parcerias</h4>
          <p className="text-[13px] leading-relaxed text-muted">
            Alguns links presentes no {site.domain} direcionam para serviços externos. Em certos casos, podemos receber
            uma compensação se a navegação for continuada após a saída deste site.
          </p>
          <p className="text-[13px] leading-relaxed text-muted">
            Este modelo não influencia a forma como os conteúdos são elaborados nem a maneira como as plataformas são
            apresentadas. As análises seguem critérios editoriais próprios, aplicados de forma consistente.
          </p>
          <p className="text-[13px] leading-relaxed text-muted">
            Nenhuma plataforma recebe destaque por motivo de parceria. Os conteúdos podem ser ajustados ao longo do
            tempo, de acordo com a observação contínua destes ambientes digitais.
          </p>
        </div>

        <div className="bg-strip my-8 grid grid-cols-3 items-center gap-y-6 px-4 py-5 sm:grid-cols-6 sm:gap-y-0 sm:divide-x sm:divide-white/10 lg:px-8">
          <StripCell>
            <RegSign sign={regSigns.icad} />
          </StripCell>
          <StripCell>
            <svg viewBox="0 0 28 32" aria-label="Ligação segura SSL" role="img" className="h-8 w-7 text-white/70 lg:h-9 lg:w-8">
              <path d="M9 14V9.5a5 5 0 0110 0V14" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="3.5" y="14" width="21" height="15" rx="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="14" y="24.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="currentColor">
                SSL
              </text>
            </svg>
          </StripCell>
          <StripCell>
            <RegSign sign={regSigns.gordonMoody} />
          </StripCell>
          <StripCell>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/60 text-[11px] font-bold text-white/70 lg:h-10 lg:w-10 lg:text-xs">
              18+
            </span>
          </StripCell>
          <StripCell>
            <RegSign sign={regSigns.jogoResponsavel} />
          </StripCell>
          <StripCell>
            <RegSign sign={regSigns.srij} />
          </StripCell>
        </div>

        <div className="text-[13px] leading-relaxed text-muted">
          <p>
            O {site.domain} é um website de carácter informativo e editorial, desenvolvido para disponibilizar conteúdos
            organizados, análises e referências relacionadas com ambientes de entretenimento digital. O acesso ao
            website é destinado exclusivamente a utilizadores maiores de 18 anos, em conformidade com as práticas
            aplicáveis a este tipo de conteúdo.
          </p>
          <p>
            A consulta dos conteúdos não requer registo, criação de conta ou fornecimento de dados pessoais
            identificáveis. Toda a informação apresentada tem uma finalidade exclusivamente informativa, procurando
            apoiar uma leitura clara, contextualizada e consciente, sem substituir o julgamento individual de cada
            visitante. O website não opera serviços próprios nem gere contas de utilizador, funcionando como um espaço
            independente de consulta editorial.
          </p>
          <p>
            Recomendamos que a navegação seja efetuada de forma equilibrada e responsável, respeitando sempre os limites
            pessoais de cada utilizador. Para leitores que desejem aprofundar o tema da utilização consciente ou que
            procurem orientação adicional, existem recursos independentes e especializados que disponibilizam
            informação, apoio e aconselhamento geral, nomeadamente através de{" "}
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-light"
            >
              www.begambleaware.org
            </a>{" "}
            e{" "}
            <a
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-light"
            >
              www.gamcare.org
            </a>
            . Em Portugal está igualmente disponível a Linha 1414 do ICAD, gratuita e confidencial.
          </p>
          <p>
            Estes recursos externos são fornecidos a título informativo e funcionam de forma autónoma, fora do âmbito
            editorial e operacional do {site.domain}. O enquadramento aplicável ao setor é definido pelo{" "}
            <a
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-light"
            >
              SRIJ
            </a>
            .
          </p>
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm capitalize text-white underline transition-colors hover:text-primary-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-6 text-center text-xs text-gray-500">
          © {year} {site.domain} · Direitos Reservados
        </p>
      </Container>
    </footer>
  );
}
