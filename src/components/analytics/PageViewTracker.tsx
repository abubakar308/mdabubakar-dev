
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "portfolio_analytics_session";
const HEARTBEAT_INTERVAL_MS = 30_000;

function getSessionId(): string {
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
    let active = true;
    let heartbeatTimer: ReturnType<typeof setInterval> | undefined;
    let controller: AbortController | undefined;

    try {
      const sessionId = getSessionId();

      const sendActivity = async () => {
        if (!active || document.visibilityState !== "visible") return;

        controller?.abort();
        controller = new AbortController();

        try {
          await fetch("/api/analytics/activity", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sessionId,
              path: window.location.pathname,
            }),
            credentials: "same-origin",
            keepalive: true,
            signal: controller.signal,
          });
        } catch {
          // Analytics failures must not interrupt the portfolio.
        }
      };

      const sendPageView = async () => {
        try {
          await fetch("/api/analytics", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sessionId,
              path: pathname,
              title: document.title,
              referrer: document.referrer || "",
            }),
            credentials: "same-origin",
            keepalive: true,
          });
        } catch {
          // Analytics failures must not interrupt the portfolio.
        }
      };

      void sendPageView();
      void sendActivity();

      heartbeatTimer = setInterval(() => {
        void sendActivity();
      }, HEARTBEAT_INTERVAL_MS);

      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          void sendActivity();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        active = false;

        if (heartbeatTimer) clearInterval(heartbeatTimer);

        controller?.abort();

        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    } catch {
      return () => {
        active = false;
      };
    }
  }, [pathname]);

  return null;
}
