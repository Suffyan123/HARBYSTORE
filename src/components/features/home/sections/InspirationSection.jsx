import { useInspirationPosts } from "@/hooks/useInspirationPosts";
import CTA from "@/components/ui/CTA";

export default function InspirationSection() {
  const { posts, loading, error } = useInspirationPosts();

  if (loading) return null; // or a skeleton
  if (error || posts.length < 2) return null;

  const [first, second] = posts;

  return (
    <section className="py-16 md:py-24 bg-(--white-ghost)">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: image 1 with badge */}
        <div className="relative">
          <span className="absolute -top-6 -left-6 z-10 flex items-center justify-center w-16 h-16 rounded-full border border-primary text-primary text-2xl font-bold bg-white">
            {first.badge}
          </span>
          <img
            src={first.image}
            alt={first.title}
            className="rounded-2xl w-full h-[420px] object-cover"
          />
        </div>

        {/* Right: heading + copy, then image 2 below on larger screens */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover print ideas and inspiration
          </h2>
          <p className="text-gray-500 mb-8">
            Pick up tips and get inspired by our latest blogs.
          </p>

          <div className="relative mt-10 md:mt-16 md:ml-16">
            <span className="absolute -top-6 -left-6 z-10 flex items-center justify-center w-16 h-16 rounded-full border border-primary text-primary text-2xl font-bold bg-white">
              {second.badge}
            </span>
            <img
              src={second.image}
              alt={second.title}
              className="rounded-2xl w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
