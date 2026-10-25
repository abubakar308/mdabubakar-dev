
import "server-only";

import { cookies } from "next/headers";
import { verifyAdminSessionToken } from "@/lib/auth";

const COOKIE_NAME = "portfolio_admin_session";

export async function getAuthenticatedAdmin(): Promise<string | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
      return null;
    }

    const email = await verifyAdminSessionToken(token);
    const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (!email || !configuredEmail || email.toLowerCase() !== configuredEmail) {
      return null;
    }

    return email;
  } catch {
    return null;
  }
}
