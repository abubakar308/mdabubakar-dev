
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  const response = NextResponse.json(
    { success: true, message: "Logged out successfully." },
    { headers: { "Cache-Control": "no-store" } },
  );

  response.cookies.set("portfolio_admin_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });

  return response;
}
