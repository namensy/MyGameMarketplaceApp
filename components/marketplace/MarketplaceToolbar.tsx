"use client";
// Sticky toolbar สำหรับหน้า marketplace
// ใช้ Zustand ผ่าน useGameFilters เพื่อควบคุม filter/search/sort
import { GAME_CATEGORIES, useGameFilters } from "@/hooks/useGameFilters";
import type { SortOption } from "@/lib/store/useGameFilterStore";
import { useGames } from "@/hooks/useGames";
import { Search } from "lucide-react";

const tabs = ["Discover", "Browse", "News"] as const;
const activeTab = "Discover"; // ภายหลังสามารถเปลี่ยนให้ผูกกับ route หรือ state ได้

const MarketplaceToolbar = () => {
  const { games, isLoading, isError } = useGames({ page: 1, limit: 9 });
  const {
    selectedCategories,
    sortBy,
    search,
    maxPrice,
    minPrice,
    maxPriceFromData,
    setSearch,
    setSortBy,
    setMaxPrice,
    toggleCategory,
  } = useGameFilters(games);

  if (isLoading) {
    return <div className="text-sm text-slate-400">Loading games...</div>;
  }

  if (isError) {
    return <div className="text-sm text-red-400">Failed to load games.</div>;
  }

  return (
    <>{/* FILTER & SORT BAR */}
      <div className="mb-4 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-2 text-[11px] uppercase tracking-wide text-slate-400">
            Categories
          </span>
          {GAME_CATEGORIES.map((category) => {
            const active = selectedCategories.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => toggleCategory(category)}
                className={`rounded-full border px-3 py-1 text-[11px] font-medium transition ${active
                  ? "border-indigo-400 bg-indigo-500/20 text-indigo-100"
                  : "border-slate-700 text-slate-200 hover:border-indigo-400 hover:bg-slate-900"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2">
            <div className="flex w-full items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search games"
                className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {maxPriceFromData > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Price ≤</span>
                <span className="text-[11px] font-medium text-slate-100">
                  {maxPrice}
                </span>
                <input
                  type="range"
                  min={minPrice}
                  max={maxPriceFromData}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="h-1 w-32 cursor-pointer accent-indigo-500"
                />
              </div>
            )}

            <div className="flex items-center gap-1">
              <span className="text-[11px] text-slate-400">Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-2 py-1 text-[11px] text-slate-100 focus:border-indigo-400 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <section className="sticky top-0 z-20 mt-6 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
          <form
            role="search"
            className="flex max-w-sm items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300"
          >
            <div className="flex w-full items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5">
              <Search className="h-3 w-3 text-slate-500" />
              <input
                type="search"
                placeholder="Search store"
                className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </form>

          <nav
            aria-label="Marketplace sections"
            className="flex items-center gap-6 text-sm"
          >
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  className={`transition-colors ${isActive
                    ? "text-slate-50"
                    : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </nav>
        </div>
      </section>
    </>
  );
};

export default MarketplaceToolbar;