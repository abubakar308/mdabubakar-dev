
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "portfolio_analytics_session";

function getSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const controller = new AbortController();

    async function trackPageView() {
      try {
        const sessionId = getSessionId();

        await fetch("/api/analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId,
            path: pathname,
            title: document.title,
            referrer: document.referrer || "",
          }),
          keepalive: true,
          signal: controller.signal,
        });
      } catch {
        // Analytics should never break the portfolio.
      }
    }

    void trackPageView();

    return () => controller.abort();
  }, [pathname]);

  return null;
}
