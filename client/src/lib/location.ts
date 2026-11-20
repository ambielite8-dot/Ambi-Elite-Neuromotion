import { useSyncExternalStore } from "react";

/**
 * Preview builds (VITE_ARTIFACT=1) run inside a hosted frame where only a plain
 * "#name" hash is allowed, so routes map to "#six-laws" etc. and the in-page
 * fragment ("/research#ref-x") is kept in memory. Normal builds use real paths.
 */
export const IS_PREVIEW = import.meta.env.VITE_ARTIFACT === "1";

let pendingFragment = "";

/** The in-page target (e.g. "ref-gilbert1992") for the current navigation, if any. */
export function getFragment(): string {
  if (IS_PREVIEW) {
    const f = pendingFragment;
    pendingFragment = "";
    return f;
  }
  return window.location.hash.replace(/^#/, "");
}

const subscribe = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const ROUTES = ["neuromotion", "six-laws", "why-now", "nst", "research", "athletics", "apparel", "foundation", "donate", "contact"];
const snapshot = () => {
  const h = window.location.hash.replace(/^#/, "");
  return ROUTES.includes(h) ? `/${h}` : "/";
};

/** wouter location hook for preview builds. */
export function usePreviewLocation(): [string, (to: string) => void] {
  const loc = useSyncExternalStore(subscribe, snapshot);
  const navigate = (to: string) => {
    const [path, frag = ""] = to.split("#");
    pendingFragment = frag;
    const name = path.replace(/^\//, "");
    if (name === (window.location.hash.replace(/^#/, "") || "") && !frag) return;
    window.location.hash = name;
    if (!name) history.replaceState(null, "", window.location.pathname + window.location.search);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };
  return [loc, navigate];
}
