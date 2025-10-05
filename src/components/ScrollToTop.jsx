import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Scrolls to top on PUSH/REPLACE navigations.
 * Keeps position on back/forward (POP) and when navigating to #hash anchors.
 */
export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash, search } = useLocation();
  const navType = useNavigationType(); // 'PUSH' | 'REPLACE' | 'POP'

  useEffect(() => {
    if (hash) return;           // allow in-page anchor jumps
    if (navType === "POP") return; // keep browser's restore on back/forward
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search, hash, navType, behavior]);

  return null;
}
