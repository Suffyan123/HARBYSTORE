import "../styles/hero.css";
import Button from "@/components/ui/Button";
import heroImage from "@/assets/HeroPics/HerbyPics.png";
import CTA from "@/components/ui/CTA";
import { LuArrowUpRight } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section className="hero flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative overflow-hidden px-10 md:px-12 pt-10 md:pt-16">
      <div className="z-30 w-full lg:flex-1 max-w-lg flex flex-col items-center lg:items-start justify-center gap-4 text-center lg:text-left order-1 mx-auto lg:mx-0">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Create and Buy Custom <br />
          Product online
        </h1>
        <p className="leading-relaxed text-gray-600 max-w-[80%] sm:max-w-sm lg:max-w-sm mx-auto lg:mx-0">
          It is a long established fact that a reader will be distracted by the readable content.
        </p>
        <div className="mt-2">
          <CTA  type="outline" to="/Shop" variant="outline" title="Explore More"  icons={LuArrowUpRight} />
        </div>
      </div>
      <div className="hero-banner w-full lg:flex-1 lg:max-w-120 xl:max-w-130 relative order-2 mx-auto lg:mx-0 lg:ml-auto h-65 sm:h-80 md:h-100 lg:h-110 xl:h-120">
        <div className="circle big-circle absolute"></div>
        <div className="circle small-circle absolute"></div>
        <img
          src={heroImage}
          alt=""
          className="absolute right-0 bottom-0 h-full object-contain z-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;