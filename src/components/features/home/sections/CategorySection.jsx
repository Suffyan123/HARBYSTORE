import { Link } from "react-router-dom";
import { useCategoryShowcase } from "@/hooks/useCategoryShowcase";

export default function CategorySection() {
  const { categories, loading, error } = useCategoryShowcase();

  if (loading || error || categories.length === 0) return null;

  return (
    <section className="py-16 px-6 lg:px-10 bg-(--white-ghost)">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Print by catagories</h2>
        <p className="text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered
        </p>
      </div>

      <div className="max-w-300 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <Link key={cat.id} to={cat.link} className="text-center group">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 font-semibold">{cat.name}</h3>
            <p className="text-gray-500 text-sm">{cat.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}