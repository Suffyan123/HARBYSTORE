import { CiCircleCheck } from "react-icons/ci";
import { brandLogosData } from "@/data/brandLogos";
import { BsHexagon } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const BrandsSection = () => {
  return (
    <section className="bg-(--white-ghost) border-t border-slate-100">
      <div className="max-w-300 mx-auto flex flex-wrap items-center justify-center gap-10 py-10">
        {brandLogosData.map((brand) => (
          <div key={brand.id} className="flex items-center gap-2 text-gray-700 font-medium text-lg">
            <BsHexagon className="text-[#7ED3DE]" size={18} />
            {brand.name.toLowerCase()}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
