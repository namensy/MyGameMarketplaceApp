import { create } from "zustand";
import type { Game } from "@/types/game";

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "newest";

type GameFilterState = {
  selectedCategories: Game["category"][];
  sortBy: SortOption;
  search: string;
  maxPrice: number | null;
  setSearch: (value: string) => void;
  setSortBy: (value: SortOption) => void;
  toggleCategory: (category: Game["category"]) => void;
  setMaxPrice: (value: number | null) => void;
  reset: () => void;
};

export const useGameFilterStore = create<GameFilterState>((set) => ({
  selectedCategories: [],
  sortBy: "featured",
  search: "",
  maxPrice: null,
  setSearch: (search) => set({ search }),
  setSortBy: (sortBy) => set({ sortBy }),
  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((c) => c !== category)
        : [...state.selectedCategories, category],
    })),
  setMaxPrice: (maxPrice) => set({ maxPrice }),
  reset: () =>
    set({
      selectedCategories: [],
      sortBy: "featured",
      search: "",
      maxPrice: null,
    }),
}));
