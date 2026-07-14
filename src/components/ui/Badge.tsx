import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "muted" | "outline";
}

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  primary: "bg-primary/15 text-primary-light border border-primary/30",
  muted: "bg-white/5 text-gray-300 border border-white/10",
  outline: "bg-transparent text-primary border border-primary/40",
};

export function Badge({ children, className, tone = "primary" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
