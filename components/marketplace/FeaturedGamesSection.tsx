"use client";

import { useGames } from "@/hooks/useGames";
import { Game } from "@/types/game";
import Image from "next/image";
import Link from "next/link";
import { useGameFilters } from "@/hooks/useGameFilters";

const FeaturedGamesSection = () => {
  const { games, isLoading, isError } = useGames({ page: 1, limit: 9 });
  const { filteredGames } = useGameFilters(games);

  if (isLoading) {
    return <div className="text-sm text-slate-400">Loading games...</div>;
  }

  if (isError) {
    return <div className="text-sm text-red-400">Failed to load games.</div>;
  }

  return (
    <>
      {/* GAMES GRID (ใช้ filteredGames จาก Zustand filters) */}
      {filteredGames.map((game: Game) => (
        <article
          key={game.id}
          className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-slate-950/60 transition hover:border-indigo-500/60 hover:bg-slate-900"
        >
          <div className="space-y-3">
            {/* พื้นที่แทนรูปภาพ (ยังไม่ใช้ image จริง) */}
            <div className="h-32 w-full rounded-xl bg-linear-to-br from-slate-800 via-slate-900 to-indigo-900/60 opacity-90 transition group-hover:opacity-100">
              {game.thumbnailUrl && (
                <Image
                  src={game.thumbnailUrl}
                  width={400}
                  height={100}
                  alt={`${game.title} thumbnail`}
                  className="w-full h-full rounded-xl object-cover"
                />
              )}
            </div>

            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {game.title}
                </h3>
                <p className="text-xs text-slate-400">{game.genres.join(' • ')}</p>
              </div>
              {game.highlight && (
                <span className="rounded-full bg-indigo-500/20 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-indigo-200">
                  {game.highlight}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="font-medium text-slate-50">
                {game.price}
              </span>
              <span className="text-xs text-amber-300">
                ★ {game.rating.toFixed(1)}
              </span>
            </div>
          </div>

          <Link
            href={`/games/${game.id}`}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-indigo-400 hover:bg-slate-950/80"
          >
            View details
          </Link>
        </article>
      ))
      }
    </>
  )
}

export default FeaturedGamesSection