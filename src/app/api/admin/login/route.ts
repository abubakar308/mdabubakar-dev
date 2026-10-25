
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createAdminSessionToken } from "@/lib/auth";

export const runtime = "nodejs";

const COOKIE_NAME = "portfolio_admin_session";

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("email" in body) ||
      !("password" in body)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid request." },
        { status: 400 },
      );
    }

    const { email, password } = body as {
      email: unknown;
      password: unknown;
    };

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      email.length > 254 ||
      password.length > 128
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid request." },
        { status: 400 },
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const passwordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminEmail || !passwordHash) {
      return NextResponse.json(
        { success: false, message: "Authentication is not configured." },
        { status: 500 },
      );
    }

    const emailMatches =
      email.trim().toLowerCase() ===
      adminEmail.trim().toLowerCase();

    const passwordMatches = await bcrypt.compare(
      password,
      passwordHash,
    );

    if (!emailMatches || !passwordMatches) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password." },
        {
          status: 401,
          headers: { "Cache-Control": "no-store" },
        },
      );
    }

    const token = await createAdminSessionToken(
      adminEmail.trim().toLowerCase(),
    );

    const response = NextResponse.json(
      { success: true, message: "Login successful." },
      { headers: { "Cache-Control": "no-store" } },
    );

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 8 * 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to process login." },
      {
        status: 500,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
