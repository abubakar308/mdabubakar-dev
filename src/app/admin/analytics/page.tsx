
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AnalyticsData = {
  success: boolean;
  overview: {
    totalPageViews: number;
    uniqueVisitors: number;
    averageSessionDurationSeconds: number;
    totalTrackedDurationSeconds: number;
  };
  topPages: {
    path: string;
    views: number;
  }[];
  recentPageViews: {
    path: string;
    title: string | null;
    referrer: string | null;
    createdAt: string;
  }[];
};

function formatDuration(totalSeconds: number): string {
  const seconds = Math.max(0, Math.floor(totalSeconds));

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }

  if (minutes > 0) {
    return `${minutes}m ${remainingSeconds}s`;
  }

  return `${remainingSeconds}s`;
}

export default function AdminAnalyticsPage() {
  const router = useRouter();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadAnalytics() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/analytics", {
        cache: "no-store",
        credentials: "same-origin",
      });

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to load analytics.");
      }

      setData(result as AnalyticsData);
    } catch {
      setError("Analytics load করা যায়নি। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadAnalytics();
  }, []);

  async function handleLogout() {
    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
        credentials: "same-origin",
      });

      if (response.ok) {
        router.replace("/admin/login");
        router.refresh();
      } else {
        setError("Logout failed. Please try again.");
      }
    } catch {
      setError("Logout failed. Please try again.");
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-neutral-950 text-neutral-300">
        Loading analytics...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-400">
              PORTFOLIO ADMIN
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              Analytics Dashboard
            </h1>
            <p className="mt-2 text-sm text-neutral-400">
              Website traffic and page performance.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => void loadAnalytics()}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/10"
            >
              Refresh
            </button>
            <button
              onClick={() => void handleLogout()}
              className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-300 hover:bg-red-500/20"
            >
              Logout
            </button>
          </div>
        </header>

        {error && (
          <p role="alert" className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-300">
            {error}
          </p>
        )}

        {data && (
          <>

<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <p className="text-sm text-neutral-400">Total Page Views</p>
    <p className="mt-3 text-4xl font-bold">
      {data.overview.totalPageViews.toLocaleString()}
    </p>
  </article>

  <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <p className="text-sm text-neutral-400">Visitor Sessions</p>
    <p className="mt-3 text-4xl font-bold">
      {data.overview.uniqueVisitors.toLocaleString()}
    </p>
  </article>

  <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <p className="text-sm text-neutral-400">Average Session Duration</p>
    <p className="mt-3 text-4xl font-bold">
      {formatDuration(
        data.overview.averageSessionDurationSeconds
      )}
    </p>
    <p className="mt-2 text-xs text-neutral-500">
      Average tracked active time per session
    </p>
  </article>

  <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <p className="text-sm text-neutral-400">Total Tracked Duration</p>
    <p className="mt-3 text-4xl font-bold">
      {formatDuration(
        data.overview.totalTrackedDurationSeconds
      )}
    </p>
    <p className="mt-2 text-xs text-neutral-500">
      Combined tracked active time
    </p>
  </article>
</section>


            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="mb-5 text-xl font-semibold">Top Pages</h2>

              {data.topPages.length === 0 ? (
                <p className="text-sm text-neutral-400">No page views yet.</p>
              ) : (
                <div className="space-y-4">
                  {data.topPages.map((page) => {
                    const maxViews = Math.max(
                      ...data.topPages.map((item) => item.views),
                      1,
                    );

                    return (
                      <div key={page.path}>
                        <div className="mb-2 flex justify-between gap-4 text-sm">
                          <span className="break-all text-neutral-200">
                            {page.path}
                          </span>
                          <span className="shrink-0 text-neutral-400">
                            {page.views}
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-cyan-400"
                            style={{
                              width: `${(page.views / maxViews) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="mb-5 text-xl font-semibold">
                Recent Page Views
              </h2>

              {data.recentPageViews.length === 0 ? (
                <p className="text-sm text-neutral-400">No recent visits.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead className="border-b border-white/10 text-neutral-400">
                      <tr>
                        <th className="pb-3 pr-4 font-medium">Page</th>
                        <th className="pb-3 pr-4 font-medium">Referrer</th>
                        <th className="pb-3 font-medium">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.recentPageViews.map((view, index) => (
                        <tr
                          key={`${view.createdAt}-${view.path}-${index}`}
                          className="border-b border-white/5"
                        >
                          <td className="break-all py-4 pr-4">
                            <div>{view.path}</div>
                            {view.title && (
                              <div className="mt-1 text-xs text-neutral-500">
                                {view.title}
                              </div>
                            )}
                          </td>
                          <td className="max-w-48 break-all py-4 pr-4 text-neutral-400">
                            {view.referrer || "Direct"}
                          </td>
                          <td className="whitespace-nowrap py-4 text-neutral-400">
                            {new Date(view.createdAt).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
