import Link from "next/link";

export function ResponsibleGamingBar() {
  return (
    <div className="border-b border-white/10 bg-secondary/90 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-center text-[11px] font-medium sm:text-xs">
        <span className="hidden sm:inline">🔒</span>
        <span>
          Conteúdo +18. Jogar pode ser aditivo — jogue com responsabilidade.{" "}
          <Link href="/jogo-responsavel" className="underline underline-offset-2 hover:text-primary-light">
            Linha de apoio 1414
          </Link>
        </span>
      </div>
    </div>
  );
}
