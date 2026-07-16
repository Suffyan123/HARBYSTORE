import { useDeals } from "@/hooks/useProducts";
import CTA from "@/components/ui/CTA";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { GoArrowUpRight } from "react-icons/go";

export default function DealsSection() {
  const { deal, loading } = useDeals();

  if (loading || !deal?.products?.length) return null;
  const product = deal.products[0];

  return (
    <section className="py-20 px-6 lg:px-10 bg-[#EEFDFF]">
      <div className="max-w-300 mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="relative w-105 h-105 flex items-center justify-center shrink-0">
          <div className="absolute w-85 h-85 rounded-full bg-[#A8E6EE]" />
          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 max-h-100 object-contain"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-[#7ED3DE] text-sm font-medium mb-3">100% Best selling</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Deals of the week never <br /> miss!
          </h2>
          <p className="text-lg mb-6">
            Hot Price: <span className="text-[#7ED3DE] font-semibold">{product.price}</span>
          </p>
          <CountdownTimer endsAt={deal.endsAt} />
          <CTA
            type="elevate"
            title="Shop Now"
            to="/shop"
            icons={GoArrowUpRight}
            className="rounded-full px-8!"
          />
        </div>
      </div>
    </section>
  );
}