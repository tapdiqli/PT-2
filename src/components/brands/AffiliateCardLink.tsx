"use client";

import type { ReactNode } from "react";
import { useAffiliateUrl } from "@/hooks/useAffiliateUrl";

interface AffiliateCardLinkProps {
  /** Real outgoing partner/casino URL. The visitor's gclid is appended automatically. */
  partnerUrl: string;
  id?: string;
  className?: string;
  ariaLabel: string;
  children: ReactNode;
}

/**
 * Wraps an entire brand/partner card in a single outgoing `<a>` so the whole
 * card is clickable, per Google Ads gambling-policy card requirements.
 */
export function AffiliateCardLink({ partnerUrl, id, className, ariaLabel, children }: AffiliateCardLinkProps) {
  const linkUrl = useAffiliateUrl(partnerUrl);

  return (
    <a id={id} href={linkUrl} target="_blank" rel="noopener noreferrer sponsored" aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}
