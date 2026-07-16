import { categoryShowcaseData } from "@/data/categories";

// later: fetch("/api/categories/showcase")
export async function getCategoryShowcase() {
  return Promise.resolve(categoryShowcaseData);
}