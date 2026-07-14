"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início", description: "Página principal", icon: "M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-4 0h4" },
  { href: "/casinos-online", label: "Casinos Online", description: "Ranking completo", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
  { href: "/guias", label: "Guias", description: "Dicas e estratégias", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { href: "/sobre-nos", label: "Sobre Nós", description: "Quem somos", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { href: "/contacto", label: "Contacto", description: "Fale connosco", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

interface MobileBottomNavProps {
  open: boolean;
  pathname: string;
  onClose: () => void;
}

export function MobileBottomNav({ open, pathname, onClose }: MobileBottomNavProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu de navegação">
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className="animate-mobile-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="animate-mobile-sheet absolute inset-x-0 bottom-0">
        <div className="relative overflow-hidden rounded-t-[28px] border border-white/10 border-b-0 bg-surface shadow-[0_-24px_80px_rgba(20,184,166,0.18)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3">
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-white/20" />

            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Navegação</p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">Explorar o site</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition-colors hover:border-primary/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="space-y-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    style={{ animationDelay: `${index * 55 + 80}ms` }}
                    className={cn(
                      "mobile-nav-item flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-colors",
                      isActive
                        ? "border-primary/40 bg-primary/[0.12]"
                        : "border-white/8 bg-white/[0.03] hover:border-primary/25 hover:bg-white/[0.05]"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                        isActive ? "bg-primary text-background" : "bg-white/[0.06] text-primary-light"
                      )}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5">
                        <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-white">{link.label}</span>
                      <span className="block text-xs text-gray-400">{link.description}</span>
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 shrink-0 text-gray-500">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 space-y-3">
              <ButtonLink href="/casinos-online" size="lg" className="mobile-nav-item w-full justify-center" onClick={onClose}>
                Ver Ranking Completo
              </ButtonLink>
              <div className="mobile-nav-item flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-xs text-gray-400">
                <span className="rounded-full border border-white/10 px-2.5 py-1 font-bold text-gray-300">+18</span>
                <Link href="/jogo-responsavel" onClick={onClose} className="font-semibold text-primary-light hover:underline">
                  Jogo Responsável
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
