import HeroSection from "@/components/features/home/sections/HeroSection";
import InfoStripSection from "@/components/features/home/sections/InfoStripSection";
import BannerSection from "@/components/features/home/sections/BannerSection";
import ProductSection from "@/components/features/home/sections/ProductSection";
import DealsSection from "@/components/features/home/sections/DealsSection";
import BestSelling from "@/components/features/home/sections/BestSelling";
import InspirationSection from "../components/features/home/sections/InspirationSection"
import CategorySection from "@/components/features/home/sections/CategorySection";
import TestimonialSection from "@/components/features/home/sections/TestimonialSection";
import BrandsSection from "@/components/features/home/sections/BrandSection";
import NewsletterSection from "@/components/features/home/sections/NewsletterSection";

const Home = () => {
  return (
    <>
      {/* TopBar, Navbar, and Footer now live in Layout.jsx and wrap every
          page automatically via the router — no need to render them here */}

      <HeroSection />
      <InfoStripSection />
      <BannerSection />

      <ProductSection />

      <DealsSection />
      <BestSelling />
      {/* <PrintIdeas /> */}

      <InspirationSection />
      <CategorySection />
      <TestimonialSection />
      <BrandsSection />
      <NewsletterSection onSubscribe={(email) => console.log("subscribe:", email)} />
    </>
  );
};

export default Home;
