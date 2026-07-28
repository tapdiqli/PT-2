const signals = ["Julgamento fiável", "Dentro dos padrões locais", "Envolvimento com responsabilidade"];

export function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center gap-4 py-4 sm:gap-7 sm:py-14">
      <div className="flex w-full flex-col items-center gap-2.5 px-4 sm:gap-4">
        <h1 className="text-hero-gradient text-center font-display text-2xl font-bold capitalize leading-[34px] sm:text-4xl sm:font-semibold sm:leading-tight lg:text-[50px]">
          Análise Editorial de Plataformas Digitais — Edição {new Date().getFullYear()}
        </h1>
        <p className="text-center text-base font-light leading-normal text-[#f1f1f1] sm:text-xl sm:font-normal">
          Reunimos informação clara, apresentada de acordo com o enquadramento definido pelo SRIJ, para apoiar a
          compreensão das opções disponíveis.
        </p>
      </div>

      <div className="scrollbar-none flex w-full items-center gap-2.5 overflow-x-auto px-4 sm:justify-center sm:gap-5">
        <span className="rule-left hidden h-px min-w-[30px] shrink-0 sm:block lg:min-w-[80px]" />
        {signals.map((signal) => (
          <span
            key={signal}
            className="bg-pill flex shrink-0 items-center gap-1.5 rounded-[20px] border border-primary/30 px-2.5 py-1.5 text-[13px] font-medium tracking-[0.03em] text-white sm:gap-2 sm:px-4 sm:py-2 sm:text-[15px] sm:font-normal"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-[18px] w-[18px] text-primary-light sm:h-5 sm:w-5">
              <path d="M10 1.6l2.2 1.5 2.6-.3 1 2.4 2.2 1.5-.8 2.5.8 2.5-2.2 1.5-1 2.4-2.6-.3L10 18.4l-2.2-1.6-2.6.3-1-2.4L2 13.2l.8-2.5L2 8.2l2.2-1.5 1-2.4 2.6.3L10 1.6zm-.8 10.9l4.1-4.1-1.2-1.2-2.9 2.9-1.5-1.5-1.2 1.2 2.7 2.7z" />
            </svg>
            {signal}
          </span>
        ))}
        <span className="rule-right hidden h-px min-w-[30px] shrink-0 sm:block lg:min-w-[80px]" />
      </div>
    </section>
  );
}
