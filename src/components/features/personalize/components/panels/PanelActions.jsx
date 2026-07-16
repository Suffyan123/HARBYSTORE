// components/features/personalize/components/PanelActions.jsx
import { PiFloppyDiskBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useSavedDesignsStore } from "@/store/useSavedDesignsStore";
import { useCartStore } from "@/store/useCartStore";

export default function PanelActions({ fabricCanvas, product }) {
  const saveDesign = useSavedDesignsStore((s) => s.saveDesign);
  const addToCart = useCartStore((s) => s.addToCart);

  const handleSave = () => {
    if (!fabricCanvas) return;
    const canvasJSON = fabricCanvas.toJSON();
    const thumbnail = fabricCanvas.toDataURL({ format: "png", multiplier: 0.3 });
    saveDesign({ name: `${product.name} design`, productId: product.id, canvasJSON, thumbnail });
    toast.success("Design saved successfully");
  };

  const handleAddToCart = () => {
    addToCart(product, { quantity: 1, custom: true });
    toast.success("Added to cart successfully");
  };

  return (
    <div className="flex flex-col gap-3 mt-4">
      <button onClick={handleSave} className="w-full border rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm">
        <PiFloppyDiskBold size={16} /> Save
      </button>
      <button onClick={handleAddToCart} className="w-full bg-black text-white rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm">
        <FaShoppingCart size={16} /> Add to cart
      </button>
    </div>
  );
}