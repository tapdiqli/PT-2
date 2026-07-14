"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useAffiliateUrl } from "@/hooks/useAffiliateUrl";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background hover:bg-primary-light shadow-lg shadow-primary/20",
  secondary: "bg-secondary text-white hover:bg-secondary/80",
  outline: "border border-primary/50 text-primary hover:bg-primary/10",
  ghost: "text-white hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

interface ButtonLinkProps extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export function ButtonLink({ href, external, onClick, variant = "primary", size = "md", className, children }: ButtonLinkProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

interface AffiliateButtonLinkProps extends BaseProps {
  /** Real outgoing partner/casino URL. The visitor's gclid is appended automatically. */
  partnerUrl: string;
  ariaLabel?: string;
}

/**
 * CTA button for links that lead offsite to a partner/casino. Always opens
 * in a new tab and automatically appends the visitor's `gclid` (if any) so
 * Google Ads click attribution survives the redirect.
 */
export function AffiliateButtonLink({
  partnerUrl,
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
}: AffiliateButtonLinkProps) {
  const linkUrl = useAffiliateUrl(partnerUrl);

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={ariaLabel}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </a>
  );
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({ onClick, type = "button", variant = "primary", size = "md", className, children }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={cn(base, variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </button>
  );
}
