export const AGE_STORAGE_KEY = "tcc_age_verified";
export const COOKIE_STORAGE_KEY = "tcc_cookie_consent";

export type CookieChoice = "granted" | "denied";

export interface ConsentState {
  ageVerified: boolean;
  cookieChoice: CookieChoice | null;
}

/**
 * Runs before the page paints so returning visitors never see the age gate
 * flash. The gate is server-rendered open by default, and these attributes let
 * CSS hide it (and release the scroll lock) ahead of hydration.
 */
export const consentBootstrapScript = `(function(){try{var d=document.documentElement;if(localStorage.getItem("${AGE_STORAGE_KEY}")==="1"){d.setAttribute("data-age","ok")}if(localStorage.getItem("${COOKIE_STORAGE_KEY}")){d.setAttribute("data-cookies","set")}}catch(e){}})();`;

const SERVER_SNAPSHOT: ConsentState = { ageVerified: false, cookieChoice: null };

let snapshot: ConsentState | null = null;
const listeners = new Set<() => void>();

function readFromStorage(): ConsentState {
  try {
    const cookieValue = window.localStorage.getItem(COOKIE_STORAGE_KEY);

    return {
      ageVerified: window.localStorage.getItem(AGE_STORAGE_KEY) === "1",
      cookieChoice: cookieValue === "granted" || cookieValue === "denied" ? cookieValue : null,
    };
  } catch {
    // Private browsing modes can block storage; consent then lasts one visit.
    return SERVER_SNAPSHOT;
  }
}

function publish(next: ConsentState): void {
  snapshot = next;
  for (const listener of listeners) listener();
}

export function subscribeToConsent(listener: () => void): () => void {
  listeners.add(listener);

  const onStorage = (event: StorageEvent) => {
    if (event.key === AGE_STORAGE_KEY || event.key === COOKIE_STORAGE_KEY) {
      publish(readFromStorage());
    }
  };

  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function getConsentSnapshot(): ConsentState {
  snapshot ??= readFromStorage();
  return snapshot;
}

export function getServerConsentSnapshot(): ConsentState {
  return SERVER_SNAPSHOT;
}

export function confirmAge(): void {
  try {
    window.localStorage.setItem(AGE_STORAGE_KEY, "1");
  } catch {
    // Ignored for the same reason as above.
  }

  document.documentElement.setAttribute("data-age", "ok");
  publish({ ...getConsentSnapshot(), ageVerified: true });
}

export function recordCookieChoice(choice: CookieChoice): void {
  try {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, choice);
  } catch {
    // Ignored for the same reason as above.
  }

  document.documentElement.setAttribute("data-cookies", "set");
  publish({ ...getConsentSnapshot(), cookieChoice: choice });
}
