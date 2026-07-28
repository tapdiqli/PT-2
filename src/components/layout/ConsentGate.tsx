"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import {
  confirmAge,
  getConsentSnapshot,
  getServerConsentSnapshot,
  recordCookieChoice,
  subscribeToConsent,
  type CookieChoice,
} from "@/lib/consent";

export function ConsentGate() {
  const { ageVerified, cookieChoice } = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );
  const [declined, setDeclined] = useState(false);

  function answerCookies(choice: CookieChoice) {
    recordCookieChoice(choice);
  }

  if (declined) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#011f18] px-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/70 font-display text-lg font-extrabold text-white">
          18+
        </span>
        <h2 className="mt-3 font-display text-lg font-bold leading-8 tracking-tight text-white sm:text-xl">
          Acesso restrito
        </h2>
        <p className="mt-1 max-w-sm text-sm text-white sm:text-base">
          É necessário cumprir a idade mínima para continuar.
        </p>
      </div>
    );
  }

  return (
    <>
      {ageVerified ? null : (
        <div
          data-consent="age-gate"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-[#011f18]/90 px-4 py-8 backdrop-blur-[22px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
        >
          <div className="flex w-full max-w-[420px] flex-col items-center gap-3 rounded-xl bg-gradient-to-b from-white/20 to-[#999999]/20 p-4 pb-3">
            <h2
              id="age-gate-title"
              className="text-center font-display text-lg font-bold leading-7 text-white sm:text-[22px] sm:leading-[30px]"
            >
              Conteúdo reservado a maiores de 18 anos.
            </h2>
            <p className="text-center text-sm leading-6 text-white sm:text-base">
              Antes de continuar, é necessária a validação da idade. Para orientação ou apoio relacionado com práticas
              digitais equilibradas, estão disponíveis recursos externos em{" "}
              <a
                href="https://www.begambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                www.begambleaware.org
              </a>{" "}
              ou{" "}
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                www.gamcare.org
              </a>
              .
            </p>
            <div className="flex w-full flex-col gap-2.5">
              <button
                type="button"
                onClick={() => setDeclined(true)}
                className="h-12 w-full cursor-pointer rounded-lg border border-[#bdbdbd] text-base font-normal tracking-[0.01em] text-white transition-colors hover:bg-white/10"
              >
                Sair
              </button>
              <button
                type="button"
                onClick={confirmAge}
                className="h-12 w-full cursor-pointer rounded-lg bg-gradient-to-b from-accent-light to-accent text-[15px] font-bold leading-6 tracking-[0.01em] text-black transition-all hover:from-[#fff366] hover:to-[#937b1b]"
              >
                Idade confirmada
              </button>
            </div>
          </div>
        </div>
      )}

      {ageVerified && cookieChoice === null ? (
        <div className="fixed inset-x-0 bottom-0 z-[98] flex flex-col items-center justify-between gap-3 bg-white px-3 py-2.5 shadow-[0_-20px_30px_0_rgba(0,0,0,0.8)] sm:flex-row sm:gap-10 sm:px-8 sm:py-4">
          <button
            type="button"
            onClick={() => answerCookies("denied")}
            aria-label="Fechar aviso de cookies"
            className="absolute right-1 top-1 flex h-[18px] w-[18px] cursor-pointer items-center justify-center text-[#404040] sm:right-1.5 sm:top-1.5 sm:h-5 sm:w-5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <p className="text-[13px] font-medium text-[#404040] sm:text-[15px]">
            Utilizamos cookies essenciais para garantir uma navegação fluida. Saiba mais na nossa{" "}
            <Link href="/cookies-tecnologias" className="text-[#404040] underline underline-offset-2">
              Cookies e Tecnologias.
            </Link>
          </p>

          <div className="flex w-full items-center justify-center gap-2 sm:w-[488px]">
            <button
              type="button"
              onClick={() => answerCookies("denied")}
              className="flex h-10 w-full max-w-[171.5px] cursor-pointer items-center justify-center rounded-[10px] border border-[#686868] bg-white p-3 text-sm font-bold leading-6 tracking-[0.02em] text-[#686868] transition-colors hover:bg-[#f4f4f4] sm:max-w-[240px]"
            >
              Não permitir
            </button>
            <button
              type="button"
              onClick={() => answerCookies("granted")}
              className="flex h-10 w-full max-w-[171.5px] cursor-pointer items-center justify-center rounded-[10px] bg-[#023129] p-3 text-sm font-bold leading-6 tracking-[0.02em] text-white transition-colors hover:bg-[#01201a] sm:max-w-[240px]"
            >
              Permitir
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
