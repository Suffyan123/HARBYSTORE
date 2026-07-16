import { useMemo,useState } from "react";
import { Link } from "react-router-dom";
import CTA from "@/components/ui/CTA"
import { productData } from "@/data/product.js";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import ProductCard from "@/components/features/product/components/ProductCard";

export default function Favorites() {
  const [active, setActive] = useState(false);
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const favoriteProducts = useMemo(() => {
    const allProducts = Object.values(productData).flat();
    return allProducts.filter((product) => favoriteIds.includes(product.id));
  }, [favoriteIds]);

  if (favoriteProducts.length === 0) {
    return (
      <section className="py-24 px-6 text-center">
        <h1 className="text-3xl font-semibold mb-3">No favorites yet</h1>
        <p className="text-gray-500 mb-6">
          Tap the heart icon on any product to save it here.
        </p>
        <CTA type="elevate"  title="Browse products" to="/" className={active ? "link-elevate active" : "link-elevate"} onClick={() => setActive(true)} />
      </section>
    );
  }

  return (
    <section className="py-16 px-6 lg:px-10">
      <div className="text-center mb-10">
        <h1 className="font-semibold text-[32px] lg:text-[40px] text-black leading-tight">
          Your Favorites
        </h1>
        <p className="text-gray-500 mt-2">
          {favoriteProducts.length} item{favoriteProducts.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
