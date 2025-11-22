import { useMemo } from "react";
import type { Game } from "@/types/game";
import { useGameFilterStore } from "@/lib/store/useGameFilterStore";

export const GAME_CATEGORIES: Game["category"][] = [
  "Action",
  "RPG",
  "Strategy",
  "Sports",
  "Puzzle",
];

export function useGameFilters(games: Game[]) {
  const {
    selectedCategories,
    sortBy,
    search,
    maxPrice,
    setSearch,
    setSortBy,
    setMaxPrice,
    toggleCategory,
  } = useGameFilterStore();

  const prices = useMemo(() => games.map((g) => g.price), [games]);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPriceFromData = prices.length ? Math.max(...prices) : 0;
  const effectiveMaxPrice = maxPrice ?? maxPriceFromData;

  const filteredGames = useMemo(() => {
    let result = [...games];

    if (selectedCategories.length > 0) {
      result = result.filter((game) =>
        selectedCategories.includes(game.category)
      );
    }

    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (game) =>
          game.title.toLowerCase().includes(term) ||
          game.genres.some((g) => g.toLowerCase().includes(term)) ||
          game.tags?.some((t) => t.toLowerCase().includes(term))
      );
    }

    if (maxPriceFromData > 0 && effectiveMaxPrice > 0) {
      result = result.filter((game) => game.price <= effectiveMaxPrice);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case "featured":
      default:
        break;
    }

    return result;
  }, [
    games,
    selectedCategories,
    sortBy,
    search,
    effectiveMaxPrice,
    maxPriceFromData,
  ]);

  return {
    filteredGames,
    selectedCategories,
    sortBy,
    search,
    maxPrice: effectiveMaxPrice,
    minPrice,
    maxPriceFromData,
    setSearch,
    setSortBy,
    setMaxPrice,
    toggleCategory,
  };
}
