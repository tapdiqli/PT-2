const GCLID_STORAGE_KEY = "tcc_gclid";

/**
 * Reads `gclid` from the current URL (present when a visitor arrives via a
 * Google Ads click) and persists it so it can be re-attached to outgoing
 * partner links visited later in the session, even on different pages.
 */
export function captureGclid(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid");

  if (gclid) {
    window.localStorage.setItem(GCLID_STORAGE_KEY, gclid);
  }
}

export function getStoredGclid(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(GCLID_STORAGE_KEY);
}

/**
 * Appends the stored `gclid` to a partner/affiliate URL, respecting any
 * existing query string on that URL.
 */
export function appendGclidToUrl(url: string, gclid: string | null): string {
  if (!gclid) return url;

  return `${url}${encodeURIComponent(gclid)}`;
}
