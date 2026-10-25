
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "same-origin",
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Login failed. Please try again.");
        return;
      }

      router.replace("/admin/analytics");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium text-cyan-400">
            PORTFOLIO ADMIN
          </p>
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-sm text-neutral-400">
            Sign in to access your private analytics.
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-neutral-300">
            Admin email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            required
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-400"
            placeholder="admin@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm text-neutral-300">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            maxLength={128}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-400"
            placeholder="Enter your password"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-black transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-xs text-neutral-500">
          Authorized access only.
        </p>
      </form>
    </main>
  );
}
