import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function ShopSidebar({ categories, activeCategory, onCategoryChange }) {
  const [search, setSearch] = useState("");

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-white rounded-xl p-5 mb-6">
        <h3 className="font-semibold mb-3">Search</h3>
        <div className="flex items-center border rounded-full px-4 py-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Product"
            className="flex-1 outline-none text-sm"
          />
          <FiSearch className="text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-xl p-5">
        <h3 className="font-semibold mb-4">Product Categories</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(cat)}
                className={activeCategory === cat ? "text-[--secondary] font-medium" : ""}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}