import { inspirationPostsData } from "@/data/inspirationPosts";
export async function getInspirationPosts(limit = 2) {
  const sorted = [...inspirationPostsData].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  return Promise.resolve(sorted.slice(0, limit));
}