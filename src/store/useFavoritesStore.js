import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favoriteIds: [],

      isFavorite: (productId) => get().favoriteIds.includes(productId),

      toggleFavorite: (productId) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.includes(productId)
            ? state.favoriteIds.filter((id) => id !== productId)
            : [...state.favoriteIds, productId],
        })),

      removeFavorite: (productId) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.filter((id) => id !== productId),
        })),

      clearFavorites: () => set({ favoriteIds: [] }),

      count: () => get().favoriteIds.length,
    }),
    { name: "favorites-storage" }
  )
);
