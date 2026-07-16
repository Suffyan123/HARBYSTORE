import { useState } from "react";
import { Link,  } from "react-router-dom";
import { FaRegEye, FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { TbArrowUpRight  } from "react-icons/tb";

import CTA from "../../../ui/CTA";


export default function ProductCard({ product }) {
  const [isActive, setIsActive] = useState(false);
  // const navigate = useNavigate();
  const isFavorited = useFavoritesStore((state) =>
    state.favoriteIds.includes(product.id)
  );
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="w-69"
    >
      <div
        className={`flex flex-col items-center rounded-[10px] p-4 transition-all duration-300 ease-in-out
          ${isActive ? "bg-white shadow-xl" : "bg-transparent shadow-none"}`}
      >
        <div className="relative w-60 h-60 bg-white rounded-lg overflow-hidden flex items-center justify-center">
          {isActive && product.discount && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded z-20">
              {product.discount} OFF
            </span>
          )}

          {isActive && (
            <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
              <button
                type="button"
                aria-label="Add to favorites"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(product.id);
                }}
                className="text-black hover:text-red-500 transition-colors"
              >
                {isFavorited ? (
                  <FaHeart className="w-5 h-5 text-red-500" />
                ) : (
                  <FaRegHeart className="w-5 h-5" />
                )}
              </button>
              <Link
                type="button"
                aria-label="View product"
                to="/products/:id"
                className="text-black hover:text-red-500 transition-colors"
              >
                <FaRegEye className="w-5 h-5" />
              </Link>
            </div>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-full p-3"
          />
        </div>
        <div className="text-center w-198.5 h-17.5 flex flex-col justify-center mt-4">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-lg font-semibold mt-1">{product.price}</p>
        </div>

        {isActive && (
          <CTA  type="elevate"  title="Personalization" to="/Shop" icons={TbArrowUpRight} />
        )}
      </div>
    </div>
  );
}
