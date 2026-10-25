
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type PageViewPayload = {
  sessionId?: string;
  path?: string;
  title?: string;
  referrer?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PageViewPayload;

    const { sessionId, path, title, referrer } = body;

    // Validate required fields
    const validSessionId =
      typeof sessionId === "string" &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        sessionId,
      );

    if (
      !validSessionId ||
      typeof path !== "string" ||
      !path.startsWith("/") ||
      path.length > 500
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid analytics payload." },
        { status: 400 },
      );
    }

    const userAgent = request.headers.get("user-agent");
    const safeTitle =
      typeof title === "string" ? title.slice(0, 200) : null;
    const safeReferrer =
      typeof referrer === "string" ? referrer.slice(0, 1000) : null;

    await prisma.$transaction(async (tx) => {
      const visitor = await tx.visitor.upsert({
        where: { sessionId },
        create: {
          sessionId,
          userAgent,
          referrer: safeReferrer,
        },
        update: {
          lastSeen: new Date(),
          userAgent,
          referrer: safeReferrer,
        },
      });

      await tx.pageView.create({
        data: {
          visitorId: visitor.id,
          path,
          title: safeTitle,
          referrer: safeReferrer,
        },
      });
    });

    return NextResponse.json(
      { success: true, message: "Page view recorded." },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to record page view." },
      { status: 500 },
    );
  }
}
