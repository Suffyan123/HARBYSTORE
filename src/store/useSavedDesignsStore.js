// store/useSavedDesignsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSavedDesignsStore = create(
  persist(
    (set, get) => ({
      designs: [], // [{ id, name, productId, thumbnail, canvasJSON, createdAt }]

      saveDesign: (design) =>
        set((state) => ({
          designs: [...state.designs, { ...design, id: crypto.randomUUID(), createdAt: Date.now() }],
        })),

      deleteDesign: (id) =>
        set((state) => ({ designs: state.designs.filter((d) => d.id !== id) })),

      getDesignsForProduct: (productId) =>
        get().designs.filter((d) => d.productId === productId),
    }),
    { name: "saved-designs-storage" }
  )
);