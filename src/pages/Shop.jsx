import { useSearchParams } from "react-router-dom";
import { useProductsByCategory, useCategories } from "@/hooks/useProducts";
import ShopProductCard from "@/components/features/product/components/ShopProductCard";
import ShopSidebar from "@/components/features/shop/components/ShopSidebar";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All Products";

  const { categories } = useCategories();
  const { products, loading, error } = useProductsByCategory(activeCategory);

  const handleCategoryChange = (cat) => {
    if (cat === "All Products") searchParams.delete("category");
    else searchParams.set("category", cat);
    setSearchParams(searchParams);
  };

  if (error) return <p className="text-center py-20">Something went wrong.</p>;

  return (
    <div className="px-6 lg:px-10 py-10 bg-(--white-ghost)">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row gap-8">
        <ShopSidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-8">Custom hoodies & sweatshirts</h1>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}