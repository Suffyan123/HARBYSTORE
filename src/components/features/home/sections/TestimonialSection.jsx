import { useState } from "react";
import { useTestimonials } from "@/hooks/useTestimonials";

export default function TestimonialSection() {
  const { testimonials, loading, error } = useTestimonials();
  const [activeIndex, setActiveIndex] = useState(0);

  if (loading || error || testimonials.length === 0) return null;
  const active = testimonials[activeIndex];

  return (
    <section className="py-20 px-6 lg:px-10 bg-(--white-ghost)">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[#7ED3DE] text-sm font-medium tracking-wide mb-3">
          OUR CLIENTS SAY
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Here&apos;s what our users <br /> speak about us
        </h2>
      </div>

      {/* Testimonial card */}
      <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center gap-12 mb-10">
        <div className="relative w-56 h-56 shrink-0">
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#A8E6EE]" />
          <img
            src={active.photo}
            alt={active.name}
            className="relative z-10 w-56 h-56 rounded-full object-cover"
          />
        </div>

        <div className="text-left max-w-xl">
          <p className="text-gray-600 leading-relaxed mb-6">{active.quote}</p>
          <p className="font-semibold">{active.name}</p>
          <p className="text-gray-500 text-sm">{active.role}</p>
        </div>
      </div>

      {/* Carousel dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mb-16">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-[#7ED3DE]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

    </section>
  );
}