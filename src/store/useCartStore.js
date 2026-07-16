import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [], // [{ productId, quantity, size, color }]

      addToCart: (product, options = {}) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === product.id &&
                   i.size === options.size &&
                   i.color === options.color
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i === existing ? { ...i, quantity: i.quantity + (options.quantity || 1) } : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                quantity: options.quantity || 1,
                size: options.size,
                color: options.color,
              },
            ],
          };
        }),

      removeFromCart: (productId, size, color) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.size === size && i.color === color)
          ),
        })),

      updateQuantity: (productId, size, color, quantity) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.size === size && i.color === color
              ? { ...i, quantity }
              : i
          ),
        })),

      clearCart: () => set({ items: [] }),

      itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "cart-storage" }
  )
);