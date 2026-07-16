import { useBanners } from "@/hooks/useBanners";
import CTA from "@/components/ui/CTA";
import { GoArrowUpRight } from "react-icons/go";

export default function BannerSection() {
  const { banners, loading } = useBanners();
  if (loading) return null;

  return (
    <section className="w-full px-4 md:px-10 py-6 bg-(--white-ghost)">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {banners.map((item) => {
          const isColoredCard = !!item.bg;
          return (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden h-[200px] md:h-[240px] flex items-center"
              style={{
                backgroundColor: item.bg || "transparent",
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: isColoredCard ? "right bottom" : "center",
                backgroundSize: isColoredCard ? "contain" : "cover",
              }}
            >
              <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                <div>
                  <p className="text-white text-[24px] md:text-[28px] font-bold leading-tight">
                    {item.title}
                  </p>
                  <h2 className="text-white text-[24px] md:text-[28px] font-bold leading-tight">
                    {item.subtitle}
                  </h2>
                </div>
                <CTA
                  type="static"
                  title={item.cta}
                  to={item.link}
                  icons={GoArrowUpRight}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}