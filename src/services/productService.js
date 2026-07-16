import { productData } from "@/data/product";

export async function getCategories() {
  const categories = Object.keys(productData).filter(
    (cat) => productData[cat]?.length > 0
  );
  return Promise.resolve(["All Products", ...categories]);
}

export async function getProductsByCategory(category) {
  if (category === "All Products") {
    // one representative product per category, first 5
    const preview = Object.keys(productData)
      .map((cat) => productData[cat]?.[0])
      .filter(Boolean)
      .slice(0, 5);
    return Promise.resolve(preview);
  }
  return Promise.resolve(productData[category] || []);
}

export async function getProductById(id) {
  const all = Object.values(productData).flat();
  return Promise.resolve(all.find((p) => p.id === id) || null);
}


export async function getBestSellers(limit = 4) {
  const all = Object.values(productData).flat();
  return Promise.resolve(all.slice(0, limit));
}

export async function getDeals() {
  const all = Object.values(productData).flat();
  const deals = all.filter((p) => p.discount);
  return Promise.resolve({
    products: deals.slice(0, 1),      // the featured deal product
    endsAt: "2026-07-20T00:00:00Z",   // countdown target — later comes from backend
  });
}

export async function getRelatedProducts(productId, limit = 4) {
  const all = Object.values(productData).flat();
  return Promise.resolve(all.filter((p) => p.id !== productId).slice(0, limit));
}


// export async function getProductById(id) {
//   const all = Object.values(productData).flat();
//   return Promise.resolve(all.find((p) => p.id === id) || null);
// }

// export async function getRelatedProducts(productId, limit = 4) {
//   const all = Object.values(productData).flat();
//   return Promise.resolve(all.filter((p) => p.id !== productId).slice(0, limit));
// }