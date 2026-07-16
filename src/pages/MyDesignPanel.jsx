import { useSavedDesignsStore } from "@/store/useSavedDesignsStore";
import { HiOutlineSearch } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

export default function MyDesignPanel({ fabricCanvas, product }) {
  const designs = useSavedDesignsStore((s) => s.getDesignsForProduct(product.id));

  const loadDesign = (design) => {
    fabricCanvas.loadFromJSON(design.canvasJSON, () => fabricCanvas.renderAll());
  };

  const handleDownload = () => {
    if (!fabricCanvas) return;
    const dataUrl = fabricCanvas.toDataURL({ format: "png", quality: 1 });
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${product.name}-design.png`;
    link.click();
  };

  return (
    <div className="w-[280px] border-r p-5">
      <h3 className="font-semibold text-lg mb-4">My Design</h3>
      <hr className="mb-5" />

      {designs.length === 0 ? (
        <div className="border rounded-lg py-10 flex flex-col items-center justify-center text-gray-400 mb-4">
          <HiOutlineSearch size={28} className="mb-2" />
          <span className="text-sm">No saved designs found</span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {designs.map((d) => (
            <button key={d.id} onClick={() => loadDesign(d)} className="border rounded-lg overflow-hidden">
              <img src={d.thumbnail} alt={d.name} className="w-full h-20 object-cover" />
            </button>
          ))}
        </div>
      )}

      <button onClick={handleDownload} className="w-full bg-gray-800 text-white rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm">
        <FiDownload size={16} /> Download
      </button>
    </div>
  );
}