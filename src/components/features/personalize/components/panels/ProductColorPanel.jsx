import { DropdownRow } from "@/components/ui/PanelRow";
import PanelActions from "./PanelActions";

export default function ProductColorPanel({ product, selectedColor, onColorChange, quantity, onQuantityChange, fabricCanvas }) {
  const total = ((product.basePrice || 0) * quantity).toFixed(2);
  const maxStock = product.stock ?? 10; // fallback if product doesn't define stock yet

  return (
    <div className="w-[280px] border-r p-5">
      <h3 className="font-semibold text-lg mb-4">{product.name}</h3>
      <hr className="mb-5" />

      <p className="mb-2 text-sm text-gray-600">Product Color:</p>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {product.colors?.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color)}
            style={{ backgroundColor: color.hex }}
            className={`w-9 h-9 rounded-full border-2 ${selectedColor?.name === color.name ? "border-black" : "border-transparent"}`}
          />
        ))}
      </div>

      <DropdownRow label="Delivery Term:" value="24 hour" onChange={() => {}} options={["24 hour", "3-5 days", "7 days"]} />

      <p className="mb-2 text-sm text-gray-600">Quantity:</p>
      <div className="flex items-center justify-between border rounded-lg px-3 py-2 mb-4">
        <button
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          className="w-8 h-8 flex items-center justify-center border rounded disabled:opacity-30 disabled:cursor-not-allowed"
        >
          -
        </button>
        <span className="text-sm">{quantity}</span>
        <button
          onClick={() => onQuantityChange(Math.min(maxStock, quantity + 1))}
          disabled={quantity >= maxStock}
          className="w-8 h-8 flex items-center justify-center border rounded disabled:opacity-30 disabled:cursor-not-allowed"
        >
          +
        </button>
      </div>

      <p className="text-2xl font-bold mb-6">${total}</p>

      <PanelActions fabricCanvas={fabricCanvas} product={product} />
    </div>
  );
}