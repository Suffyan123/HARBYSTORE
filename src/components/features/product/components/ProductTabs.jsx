// components/features/product/components/ProductTabs.jsx
import { useState } from "react";
import ReviewsList from "./ReviewsList";

const tabs = ["Description", "Additional Information", "Reviews"];

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="px-6 lg:px-10 py-10">
      <div className="max-w-300 mx-auto">
        <div className="flex gap-8 border-b mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-lg transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-black font-medium"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Description" && (
          <p className="text-gray-600 leading-relaxed max-w-4xl">
            {product.description}
          </p>
        )}

        {activeTab === "Additional Information" && (
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 max-w-4xl">
            {Object.entries(product.additionalInfo || {}).map(([key, value]) => (
              <div key={key}>
                <dt className="text-sm text-gray-400 capitalize mb-1">{key}</dt>
                <dd className="text-gray-700">{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {activeTab === "Reviews" && <ReviewsList reviews={product.reviews} />}
      </div>
    </section>
  );
}