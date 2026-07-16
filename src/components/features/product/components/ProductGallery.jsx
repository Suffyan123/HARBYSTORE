// import { useState } from "react";
// import { FaRegEye } from "react-icons/fa";

// export default function ProductGallery({ images = [] }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   if (images.length === 0) return null;

//   return (
//     <div className="flex gap-4">
//       <div className="flex flex-col gap-3">
//         {images.map((img, i) => (
//           <button
//             key={i}
//             onClick={() => setActiveIndex(i)}
//             className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
//               i === activeIndex ? "border-[--secondary]" : "border-transparent"
//             }`}
//           >
//             <img src={img} alt={`thumbnail-${i}`} className="w-full h-full object-cover" />
//           </button>
//         ))}
//       </div>

//       <div className="relative flex-1 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center min-h-105">
//         <button className="absolute top-4 right-4 z-10 text-gray-600">
//           <FaRegEye size={18} />
//         </button>
//         <img src={images[activeIndex]} alt="product" className="max-h-400 object-contain" />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";

export default function ProductGallery({ mainImage, thumbnails = [] }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {thumbnails.slice(0, 4).map((img, i) => (
          <div key={i} className="w-20 h-20 rounded-lg overflow-hidden border">
            <img src={img} alt={`thumbnail-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="relative flex-1 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center min-h-[420px]">
        <button className="absolute top-4 right-4 z-10 text-gray-600">
          <FaRegEye size={18} />
        </button>
        <img src={mainImage} alt="product" className="max-h-[400px] object-contain" />
      </div>
    </div>
  );
}