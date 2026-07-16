import { useState } from "react";
import { useProductsByCategory, useCategories } from "@/hooks/useProducts";
import ProductCard from "@/components/features/product/components/ProductCard";

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const { categories } = useCategories();
  const { products, loading, error } = useProductsByCategory(activeCategory);

  if (error) return null;

  return (
    <section className="py-16 px-6 lg:px-10 bg-(--white-ghost)">
      <div className="text-center mb-10">
        <h2 className="font-semibold text-[32px] lg:text-[40px] text-black leading-tight">
          Discover Print Made <br /> You Custom
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-[20px] transition-all duration-300
            ${activeCategory === cat ? "text-(--secondary)" : "text-[--black-200]"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}