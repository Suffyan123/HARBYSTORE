// import { useParams, Link } from "react-router-dom";
// import { useProduct } from "@/hooks/useProducts";
// import ProductGallery from "@/components/features/product/components/ProductGallery";
// import ProductInfo from "@/components/features/product/components/ProductInfo";
// import RelatedProducts from "@/components/features/product/components/RelatedProducts";

// export default function Product() {
//   const { id } = useParams();
//   const { product, loading, error } = useProduct(id);

//   if (loading) return <p className="text-center py-20">Loading...</p>;
//   if (error || !product) return <p className="text-center py-20">Product not found.</p>;

//   const images = [product.image, product.image, product.image, product.image];

//   return (
//     <>
//       <div className="px-6 lg:px-10 py-4 text-sm text-gray-500">
//         <Link to="/">Home page</Link> {">"} <Link to="/shop">Shop</Link> {">"} {product.name}
//       </div>

//       <div className="max-w-300 mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 py-10">
//         <ProductGallery images={images} />
//         <ProductInfo product={product} />
//       </div>

//       <RelatedProducts productId={product.id} />
//     </>
//   );
// }

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProduct } from "@/hooks/useProducts";
import ProductGallery from "@/components/features/product/components/ProductGallery";
import ProductInfo from "@/components/features/product/components/ProductInfo";
import ProductTabs from "@/components/features/product/components/ProductTabs";
import RelatedProducts from "@/components/features/product/components/RelatedProducts";

export default function Product() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (product?.colors?.length) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (error || !product) return <p className="text-center py-20">Product not found.</p>;

  const displayImage = selectedColor?.image || product.image;

  return (
    <>
      <div className="px-6 lg:px-10 py-4 text-sm text-gray-500">
        <Link to="/">Home page</Link> {">"} <Link to="/shop">Shop</Link> {">"} {product.name}
      </div>

      <div className="max-w-300 mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 py-10">
        <ProductGallery mainImage={displayImage} thumbnails={product.colors?.map((c) => c.image)} />
        <ProductInfo
          product={product}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
      </div>

      <ProductTabs product={product} />
      <RelatedProducts productId={product.id} />
    </>
  );
}