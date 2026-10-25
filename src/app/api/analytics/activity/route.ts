
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const SESSION_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Count only bounded intervals so a long inactive period isn't counted.
const MAX_ACTIVITY_INTERVAL_SECONDS = 60;

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      !("sessionId" in body) ||
      !("path" in body)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid payload." },
        { status: 400 },
      );
    }

    const { sessionId, path } = body as {
      sessionId: unknown;
      path: unknown;
    };

    if (
      typeof sessionId !== "string" ||
      !SESSION_ID_PATTERN.test(sessionId) ||
      typeof path !== "string" ||
      !path.startsWith("/") ||
      path.length > 500
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid payload." },
        { status: 400 },
      );
    }

    const visitor = await prisma.visitor.findUnique({
      where: { sessionId },
      select: {
        id: true,
        lastActivityAt: true,
      },
    });

    if (!visitor) {
      return NextResponse.json(
        { success: false, message: "Session not found." },
        { status: 404 },
      );
    }

    const now = new Date();
    const elapsedSeconds = Math.floor(
      (now.getTime() - visitor.lastActivityAt.getTime()) / 1000,
    );

    const safeIncrement =
      elapsedSeconds > 0 && elapsedSeconds <= MAX_ACTIVITY_INTERVAL_SECONDS
        ? elapsedSeconds
        : 0;

    await prisma.visitor.update({
      where: { id: visitor.id },
      data: {
        lastActivityAt: now,
        durationSeconds: { increment: safeIncrement },
      },
    });

    return NextResponse.json(
      { success: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to record activity." },
      { status: 500 },
    );
  }
}
