"use client";

import { useEffect } from "react";
import { captureGclid } from "@/lib/tracking";

/**
 * Mounted once in the root layout. Captures `gclid` from the landing URL on
 * every page load so it is available for outgoing partner links regardless
 * of which page the visitor entered the site on.
 */
export function GclidCapture() {
  useEffect(() => {
    captureGclid();
  }, []);

  return null;
}
