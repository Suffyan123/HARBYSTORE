// components/features/product/components/ShopProductCard.jsx
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavoritesStore } from "@/store/useFavoritesStore";

const swatchColors = ["#D98880", "#8E44AD", "#52BE80", "#2C3E7A", "#7B241C", "#E74C3C"];

export default function ShopProductCard({ product }) {
  const isFavorited = useFavoritesStore((s) => s.favoriteIds.includes(product.id));
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  const handleFavoriteClick = (e) => {
    e.preventDefault();   // stop the parent <Link> from navigating
    e.stopPropagation();  // stop the click from bubbling further, just in case
    toggleFavorite(product.id);
  };

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="bg-gray-100 relative rounded-xl overflow-hidden h-64 flex items-center justify-center mb-4">
        <button
          type="button"
          aria-label="Toggle favorite"
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 text-black hover:text-red-500 transition-colors"
        >
          {isFavorited ? (
            <FaHeart className="text-red-500" size={16} />
          ) : (
            <FaRegHeart size={16} />
          )}
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>

      <div className="flex items-center gap-2 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400" size={13} />
        ))}
        <span className="text-sm text-blue-600">34 Reviews</span>
      </div>

      <div className="flex gap-1.5 mb-2">
        {swatchColors.map((color) => (
          <span key={color} style={{ backgroundColor: color }} className="w-5 h-5 rounded" />
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-1">XS- 3XL</p>
      <p className="font-bold mb-2">{product.price}</p>
      <p className="text-sm text-gray-500">
        Shipping from{" "}
        <span className="font-medium text-gray-700">Australia, England USA & Germany</span>
      </p>
    </Link>
  );
}