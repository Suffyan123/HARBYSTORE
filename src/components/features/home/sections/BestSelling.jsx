// import { useState } from "react";
import { productData } from "@/data/product.js";
import ProductCard from "@/components/features/product/components/ProductCard";

export default function BestSelling() {
  const products =
       Object.keys(productData)
          .map((cat) => productData[cat]?.[0])
          .filter(Boolean)
          .slice(0, 5)
        || [];

  if (!products || products.length === 0) return null;
  return (
    <section className="py-16 px-6 lg:px-10 bg-(--white-ghost)">
      <div className="text-center mb-10">
        <h2 className="font-semibold text-[32px] lg:text-[40px] mb-10 text-black leading-tight">
          Best sellers 
        </h2>
        <p className="text-[16px] leading-10 text-">There are many variations of passages of Lorem Ipsum available, <br/> but the majority have suffered</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
      </div>
      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
