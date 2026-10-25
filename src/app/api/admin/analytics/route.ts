
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
      {
        status: 401,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }

  try {
    const [
      totalPageViews,
      uniqueVisitors,
      recentPageViews,
      topPages,
      durationStats,
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
        topPages: topPages.map((page) => ({
          path: page.path,
          views: page._count.path,
        })),
        recentPageViews,
      },
      {
        headers: { "Cache-Control": "no-store" },
      },
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
