import { useRelatedProducts } from "@/hooks/useProducts";
import ShopProductCard from "@/components/features/product/components/ShopProductCard";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ productId }) {
  const { products, loading } = useRelatedProducts(productId, 4);
  if (loading || products.length === 0) return null;

  return (
    <section className="py-16 px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>
      {/* <div className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
    </section>
  );
}