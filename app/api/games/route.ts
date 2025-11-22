import { NextResponse } from "next/server";
import { mockGames } from "@/lib/mock/games";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") ?? "1");
  const limit = Number(searchParams.get("limit") ?? "9");

  const start = (page - 1) * limit;
  const end = start + limit;
  const pagedGames = mockGames.slice(start, end);
  const totalPages = Math.ceil(mockGames.length / limit);

  return NextResponse.json({
    games: pagedGames,
    total: mockGames.length,
    page,
    totalPages,
  });
}
