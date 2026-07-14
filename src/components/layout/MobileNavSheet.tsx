"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início", icon: "M3 10.5L12 4l9 6.5V19a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-8.5z" },
  {
    href: "/casinos-online",
    label: "Casinos Online",
    icon: "M4 5a2 2 0 012-2h3.2a1 1 0 01.9.6l.6 1.4H18a2 2 0 012 2v1H4V5zm0 5h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8zm6 2v4h4v-4h-4z",
  },
  {
    href: "/guias",
    label: "Guias",
    icon: "M6 4h9l3 3v13a1 1 0 01-1 1H6a2 2 0 01-2-2V6a2 2 0 012-2zm8 1.5V8h2.5L14 5.5zM8 11h8v2H8v-2zm0 4h8v2H8v-2z",
  },
  {
    href: "/sobre-nos",
    label: "Sobre Nós",
    icon: "M12 3a9 9 0 100 18 9 9 0 000-18zm0 4a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-4 9.5a4 4 0 018 0H8z",
  },
  {
    href: "/contacto",
    label: "Contacto",
    icon: "M4 6h16v12H4V6zm2 2v.2l6 4.5 6-4.5V8H6zm14 8V9.8l-6 4.5-6-4.5V16h12z",
  },
];

interface MobileNavSheetProps {
  open: boolean;
  pathname: string;
  onClose: () => void;
}

export function MobileNavSheet({ open, pathname, onClose }: MobileNavSheetProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div className={cn("fixed inset-0 z-[60] lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={cn(
          "absolute inset-x-0 bottom-0 flex max-h-[88vh] flex-col overflow-hidden rounded-t-[28px] border border-white/10 bg-surface shadow-[0_-24px_80px_rgba(0,0,0,0.55)] transition-transform duration-350 ease-[cubic-bezier(0.32,0.72,0,1)]",
          open ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/20 to-transparent" />

        <div className="relative flex shrink-0 flex-col items-center pt-3 pb-2">
          <span className="h-1 w-12 rounded-full bg-white/20" />
          <div className="mt-4 flex w-full items-center justify-between px-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-light">Navegação</p>
              <p className="font-display text-lg font-bold text-white">Explorar o site</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-primary/40 hover:bg-primary/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto px-4 pb-4">
          <div className="grid gap-2.5">
            {navLinks.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  style={{ animationDelay: open ? `${index * 55}ms` : "0ms" }}
                  className={cn(
                    "animate-menu-item-in group flex items-center gap-4 rounded-2xl border px-4 py-3.5 transition-colors",
                    active
                      ? "border-primary/40 bg-primary/10"
                      : "border-white/8 bg-white/[0.03] hover:border-primary/25 hover:bg-white/[0.05]"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                      active ? "bg-primary text-background" : "bg-white/[0.06] text-primary-light group-hover:bg-primary/15"
                    )}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d={link.icon} />
                    </svg>
                  </span>
                  <span className="flex-1">
                    <span className={cn("block font-semibold", active ? "text-primary-light" : "text-white")}>{link.label}</span>
                    {active ? <span className="text-xs text-primary/80">Página atual</span> : null}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={cn("h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5", active ? "text-primary" : "text-gray-500")}
                  >
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative shrink-0 border-t border-white/10 bg-background/80 px-4 py-4 backdrop-blur-md">
          <ButtonLink href="/casinos-online" size="lg" className="w-full justify-center" onClick={onClose}>
            Ver Ranking Completo
          </ButtonLink>
          <Link
            href="/jogo-responsavel"
            onClick={onClose}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-primary/30 hover:text-white"
          >
            <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-bold text-primary-light">18+</span>
            Jogo Responsável
          </Link>
        </div>
      </div>
    </div>
  );
}
