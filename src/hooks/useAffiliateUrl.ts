"use client";

import { useEffect, useState } from "react";
import { appendGclidToUrl, getStoredGclid } from "@/lib/tracking";

/**
 * Returns the given partner URL with the visitor's `gclid` (captured earlier
 * in the session from a Google Ads click) appended, so the click identifier
 * persists across every outgoing CTA and brand-card redirect.
 */
export function useAffiliateUrl(partnerUrl: string): string {
  const [linkUrl, setLinkUrl] = useState(partnerUrl);

  useEffect(() => {
    const gclid = getStoredGclid();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- gclid only exists in localStorage, so it can only be read after mount.
    setLinkUrl(appendGclidToUrl(partnerUrl, gclid));
  }, [partnerUrl]);

  return linkUrl;
}
