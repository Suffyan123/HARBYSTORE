import { useEffect, useState } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

export default function LayersPanel({ fabricCanvas }) {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    if (!fabricCanvas) return;
    const sync = () => setObjects([...fabricCanvas.getObjects()]);
    fabricCanvas.on("object:added", sync);
    fabricCanvas.on("object:removed", sync);
    sync();
    return () => {
      fabricCanvas.off("object:added", sync);
      fabricCanvas.off("object:removed", sync);
    };
  }, [fabricCanvas]);

  const toggleLock = (obj) => {
    const locked = !obj.lockMovementX;
    obj.set({ lockMovementX: locked, lockMovementY: locked, selectable: !locked });
    fabricCanvas.requestRenderAll();
    setObjects([...fabricCanvas.getObjects()]);
  };

  const removeLayer = (obj) => {
    fabricCanvas.remove(obj);
  };

  const labelFor = (obj) => {
    if (obj.type === "textbox") return `Text: ${obj.text.slice(0, 12)}`;
    if (obj.type === "image") return "Image";
    return obj.type;
  };

  return (
    <div className="w-[280px] border-r p-5">
      <h3 className="font-semibold text-lg mb-4">Layers</h3>
      <hr className="mb-5" />

      <div className="space-y-2">
        {objects.map((obj, i) => (
          <div
            key={i}
            onClick={() => fabricCanvas.setActiveObject(obj)}
            className="flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer"
          >
            <span className="text-sm">{labelFor(obj)}</span>
            <div className="flex gap-2">
              <button onClick={(e) => { e.stopPropagation(); toggleLock(obj); }}>
                {obj.lockMovementX ? <FaLock size={14} /> : <FaLockOpen size={14} />}
              </button>
              <button onClick={(e) => { e.stopPropagation(); removeLayer(obj); }}>
                <HiOutlineX size={14} />
              </button>
            </div>
          </div>
        ))}
        {objects.length === 0 && <p className="text-sm text-gray-400">No layers yet</p>}
      </div>
    </div>
  );
}