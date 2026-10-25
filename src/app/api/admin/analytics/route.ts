
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedAdmin } from "@/lib/admin-session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const admin = await getAuthenticatedAdmin();

  if (!admin) {
    return NextResponse.json(
      { success: false, message: "Unauthorized." },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const [
      totalPageViews,
      uniqueVisitors,
      recentPageViews,
      topPages,
      durationStats,
      sessions,
    ] = await Promise.all([
      prisma.pageView.count(),

      prisma.visitor.count(),

      prisma.pageView.findMany({
        take: 10,
        orderBy: { createdAt: "desc" },
        select: {
          path: true,
          title: true,
          referrer: true,
          createdAt: true,
        },
      }),

      prisma.pageView.groupBy({
        by: ["path"],
        _count: { path: true },
        orderBy: { _count: { path: "desc" } },
        take: 10,
      }),

      prisma.visitor.aggregate({
        _avg: { durationSeconds: true },
        _sum: { durationSeconds: true },
      }),

      prisma.visitor.findMany({
        take: 50,
        orderBy: { lastActivityAt: "desc" },
        select: {
          sessionId: true,
          sessionStartedAt: true,
          lastActivityAt: true,
          durationSeconds: true,
          _count: {
            select: { pageViews: true },
          },
          pageViews: {
            take: 1,
            orderBy: { createdAt: "desc" },
            select: {
              path: true,
              createdAt: true,
            },
          },
        },
      }),
    ]);

    return NextResponse.json(
      {
        success: true,
        overview: {
          totalPageViews,
          uniqueVisitors,
          averageSessionDurationSeconds: Math.round(
            durationStats._avg.durationSeconds ?? 0,
          ),
          totalTrackedDurationSeconds:
            durationStats._sum.durationSeconds ?? 0,
        },
        sessions: sessions.map((session) => ({
          sessionId: session.sessionId,
          startedAt: session.sessionStartedAt,
          lastActivityAt: session.lastActivityAt,
          durationSeconds: session.durationSeconds,
          pageViewCount: session._count.pageViews,
          lastPage: session.pageViews[0]?.path ?? "—",
        })),
        topPages: topPages.map((page) => ({
          path: page.path,
          views: page._count.path,
        })),
        recentPageViews,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Admin analytics query failed.", error);

    return NextResponse.json(
      { success: false, message: "Unable to load analytics." },
      {
        status: 500,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
