// // import { useState } from "react";
// // import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
// // import Button from "@/components/ui/Button";
// // import CTA from "@/components/ui/CTA";
// // import LoginPromptModal from "@/components/ui/LoginPromptModal";
// // import { useAuth } from "@/hooks/useAuth";
// // import { useCartStore } from "@/store/useCartStore";
// // import { useFavoritesStore } from "@/store/useFavoritesStore";
// // import { useNavigate } from "react-router-dom";

// // const sizes = ["XL", "L", "M", "S", "2XL", "3XL"];
// // const colors = ["#E6B800", "#E63946", "#A8C6F0", "#4CAF50", "#7B1E1E", "#1B3A5C"];

// // export default function ProductInfo({ product }) {
// //   const [selectedSize, setSelectedSize] = useState(sizes[0]);
// //   const [selectedColor, setSelectedColor] = useState(colors[0]);
// //   const [quantity, setQuantity] = useState(1);
// //   const [showLoginModal, setShowLoginModal] = useState(false);

// //   const { isLoggedIn } = useAuth();
// //   const addToCart = useCartStore((s) => s.addToCart);
// //   const isFavorited = useFavoritesStore((s) => s.favoriteIds.includes(product.id));
// //   const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
// //   const navigate = useNavigate();

// //   const handleAddToCart = () => {
// //     // no auth check — guest-friendly, matches design
// //     addToCart(product, { size: selectedSize, color: selectedColor, quantity });
// //   };

// //   const handlePersonalize = () => {
// //     if (!isLoggedIn) {
// //       setShowLoginModal(true);
// //       return;
// //     }
// //     navigate(`/personalize/${product.id}`);
// //   };

// //   return (
// //     <div>
// //       <p className="text-green-600 text-sm font-medium mb-2">In Stock</p>
// //       <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

// //       <div className="flex items-center gap-2 mb-4">
// //         {Array.from({ length: 5 }).map((_, i) => (
// //           <FaStar key={i} className="text-yellow-400" size={14} />
// //         ))}
// //         <span className="text-sm text-blue-600">34 Reviews</span>
// //       </div>

// //       <hr className="mb-4" />

// //       <p className="text-gray-600 mb-6">
// //         There are many variations of passages of Lorem Ipsum available, but the
// //         majority have suffered alteration in some form, by injected humour, or
// //         randomised words.
// //       </p>

// //       <p className="font-medium mb-2">Choose Size</p>
// //       <div className="flex gap-2 mb-6">
// //         {sizes.map((size) => (
// //           <button
// //             key={size}
// //             onClick={() => setSelectedSize(size)}
// //             className={`w-10 h-10 text-sm rounded border ${
// //               selectedSize === size ? "border-black bg-black text-white" : "border-gray-300"
// //             }`}
// //           >
// //             {size}
// //           </button>
// //         ))}
// //       </div>

// //       <p className="font-medium mb-2">Choose Color</p>
// //       <div className="flex gap-2 mb-6">
// //         {colors.map((color) => (
// //           <button
// //             key={color}
// //             onClick={() => setSelectedColor(color)}
// //             style={{ backgroundColor: color }}
// //             className={`w-8 h-8 rounded ${
// //               selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""
// //             }`}
// //           />
// //         ))}
// //       </div>

// //       <p className="font-medium mb-2">Quantity</p>
// //       <div className="flex items-center gap-6 mb-6">
// //         <div className="flex items-center border rounded-full overflow-hidden">
// //           <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-2">-</button>
// //           <span className="px-4">{quantity}</span>
// //           <button onClick={() => setQuantity((q) => q + 1)} className="px-4 py-2">+</button>
// //         </div>
// //         <span className="text-2xl font-bold">{product.price}</span>
// //       </div>

// //       <div className="flex gap-4 mb-6">
// //         <Button variant="black" onClick={handleAddToCart} className="flex-1">
// //           Add to cart
// //         </Button>
// //         <CTA type="outline" title="Personalize" onClick={handlePersonalize} to="#" />
// //       </div>

// //       <button
// //         onClick={() => toggleFavorite(product.id)}
// //         className="flex items-center gap-2 text-gray-700"
// //       >
// //         {isFavorited ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
// //         Add to favourite list
// //       </button>

// //       <LoginPromptModal
// //         open={showLoginModal}
// //         onClose={() => setShowLoginModal(false)}
// //         redirectTo={`/product/${product.id}`}
// //       />
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
// import Button from "@/components/ui/Button";
// import LoginPromptModal from "@/components/ui/LoginPromptModal";
// import { useAuth } from "@/hooks/useAuth";
// import { useCartStore } from "@/store/useCartStore";
// import { useFavoritesStore } from "@/store/useFavoritesStore";
// import { useNavigate } from "react-router-dom";

// export default function ProductInfo({ product, selectedColor, onColorChange }) {
//   const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const { isLoggedIn } = useAuth();
//   const addToCart = useCartStore((s) => s.addToCart);
//   const isFavorited = useFavoritesStore((s) => s.favoriteIds.includes(product.id));
//   const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
//   const navigate = useNavigate();

//   const totalPrice = (product.basePrice * quantity).toFixed(2);

//   const handleAddToCart = () => {
//     addToCart(product, { size: selectedSize, color: selectedColor?.name, quantity });
//   };

//   const handlePersonalize = () => {
//     if (!isLoggedIn) {
//       setShowLoginModal(true);
//       return;
//     }
//     navigate(`/personalize/${product.id}`);
//   };

//   return (
//     <div>
//       <p className={product.inStock ? "text-green-600" : "text-red-500"} style={{ fontSize: 14, marginBottom: 8 }}>
//         {product.inStock ? "In Stock" : "Out of Stock"}
//       </p>
//       <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

//       <div className="flex items-center gap-2 mb-4">
//         {Array.from({ length: 5 }).map((_, i) => (
//           <FaStar key={i} className="text-yellow-400" size={14} />
//         ))}
//         <span className="text-sm text-blue-600">{product.reviews?.length || 0} Reviews</span>
//       </div>

//       <hr className="mb-4" />

//       <p className="text-gray-600 mb-6">{product.description}</p>

//       <p className="font-medium mb-2">Choose Size</p>
//       <div className="flex gap-2 mb-6 flex-wrap">
//         {product.sizes?.map((size) => (
//           <button
//             key={size}
//             onClick={() => setSelectedSize(size)}
//             className={`w-10 h-10 text-sm rounded border ${
//               selectedSize === size ? "border-black bg-black text-white" : "border-gray-300"
//             }`}
//           >
//             {size}
//           </button>
//         ))}
//       </div>

//       <p className="font-medium mb-2">Choose Color</p>
//       <div className="flex gap-2 mb-6">
//         {product.colors?.map((color) => (
//           <button
//             key={color.name}
//             onClick={() => onColorChange(color)}
//             style={{ backgroundColor: color.hex }}
//             aria-label={color.name}
//             className={`w-8 h-8 rounded ${
//               selectedColor?.name === color.name ? "ring-2 ring-offset-2 ring-black" : ""
//             }`}
//           />
//         ))}
//       </div>

//       <p className="font-medium mb-2">Quantity</p>
//       <div className="flex items-center gap-6 mb-6">
//         <div className="flex items-center border rounded-full overflow-hidden">
//           <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-2">-</button>
//           <span className="px-4">{quantity}</span>
//           <button onClick={() => setQuantity((q) => q + 1)} className="px-4 py-2">+</button>
//         </div>
//         <span className="text-2xl font-bold">${totalPrice}</span>
//       </div>

//       <div className="flex gap-4 mb-6">
//         <Button variant="black" onClick={handleAddToCart} className="flex-1">
//           Add to cart
//         </Button>
//         <Button variant="green" onClick={handlePersonalize} className="flex-1">
//           Personalize
//         </Button>
//       </div>

//       <button onClick={() => toggleFavorite(product.id)} className="flex items-center gap-2 text-gray-700">
//         {isFavorited ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
//         Add to favourite list
//       </button>

//       <LoginPromptModal
//         open={showLoginModal}
//         onClose={() => setShowLoginModal(false)}
//         redirectTo={`/product/${product.id}`}
//       />
//     </div>
//   );
// }


import { useState } from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { useCartStore } from "@/store/useCartStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useNavigate } from "react-router-dom";

export default function ProductInfo({ product, selectedColor, onColorChange }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((s) => s.addToCart);
  const isFavorited = useFavoritesStore((s) => s.favoriteIds.includes(product.id));
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const navigate = useNavigate();

  const totalPrice = (product.basePrice * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart(product, { size: selectedSize, color: selectedColor?.name, quantity });
  };

  const handlePersonalize = () => {
    // TODO: re-enable login gate once auth/backend is ready —
    // wrap this in an isLoggedIn check + LoginPromptModal again at that point
    navigate(`/personalize/${product.id}`);
  };

  return (
    <div>
      <p className={product.inStock ? "text-green-600" : "text-red-500"} style={{ fontSize: 14, marginBottom: 8 }}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400" size={14} />
        ))}
        <span className="text-sm text-blue-600">{product.reviews?.length || 0} Reviews</span>
      </div>

      <hr className="mb-4" />

      <p className="text-gray-600 mb-6">{product.description}</p>

      <p className="font-medium mb-2">Choose Size</p>
      <div className="flex gap-2 mb-6 flex-wrap">
        {product.sizes?.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`w-10 h-10 text-sm rounded border ${
              selectedSize === size ? "border-black bg-black text-white" : "border-gray-300"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <p className="font-medium mb-2">Choose Color</p>
      <div className="flex gap-2 mb-6">
        {product.colors?.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color)}
            style={{ backgroundColor: color.hex }}
            aria-label={color.name}
            className={`w-8 h-8 rounded ${
              selectedColor?.name === color.name ? "ring-2 ring-offset-2 ring-black" : ""
            }`}
          />
        ))}
      </div>

      <p className="font-medium mb-2">Quantity</p>
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center border rounded-full overflow-hidden">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-2">-</button>
          <span className="px-4">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className="px-4 py-2">+</button>
        </div>
        <span className="text-2xl font-bold">${totalPrice}</span>
      </div>

      <div className="flex gap-4 mb-6">
        <Button variant="black" onClick={handleAddToCart} className="flex-1">
          Add to cart
        </Button>
        <Button variant="green" onClick={handlePersonalize} className="flex-1">
          Personalize
        </Button>
      </div>

      <button onClick={() => toggleFavorite(product.id)} className="flex items-center gap-2 text-gray-700">
        {isFavorited ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        Add to favourite list
      </button>
    </div>
  );
}