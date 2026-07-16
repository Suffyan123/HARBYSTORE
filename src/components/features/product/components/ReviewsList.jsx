// components/features/product/components/ReviewsList.jsx
import { FaStar } from "react-icons/fa";

export default function ReviewsList({ reviews = [] }) {
  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet for this product.</p>;
  }

  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl font-bold">{average.toFixed(1)}</span>
        <div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(average) ? "text-yellow-400" : "text-gray-200"}
                size={14}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">{reviews.length} reviews</p>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">{review.user}</p>
              <span className="text-sm text-gray-400">{review.date}</span>
            </div>
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < review.rating ? "text-yellow-400" : "text-gray-200"}
                  size={12}
                />
              ))}
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}