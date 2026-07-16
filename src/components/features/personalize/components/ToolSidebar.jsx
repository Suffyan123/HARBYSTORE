import clsx from "clsx";
import {
  HiOutlineCube,
  HiOutlinePhotograph,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { LuType, LuShapes, LuLayers, LuUser } from "react-icons/lu";
import { MdOutlineQrCode2 } from "react-icons/md";
import { BsCollection } from "react-icons/bs";

export const tools = [
  { id: "product", icon: HiOutlineCube, label: "Product" },
  { id: "text", icon: LuType, label: "Text" },
  { id: "image", icon: HiOutlinePhotograph, label: "Image" },
  { id: "shapes", icon: LuShapes, label: "Shapes" },
  { id: "clipart", icon: BsCollection, label: "Clipart" },
  { id: "qrcode", icon: MdOutlineQrCode2, label: "QR Code" },
  { id: "layers", icon: LuLayers, label: "Layers" },
  { id: "mydesign", icon: LuUser, label: "My Design" },
];

export default function ToolSidebar({ activeTool, onSelect }) {
  return (
    <div className="flex flex-col border-r w-[70px] shrink-0">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => onSelect(tool.id)}
          aria-label={tool.label}
          className={clsx(
            "h-[70px] flex items-center justify-center border-b transition-colors",
            activeTool === tool.id ? "bg-[--secondary] text-white" : "hover:bg-gray-50 text-gray-700"
          )}
        >
          <tool.icon size={26} />
        </button>
      ))}
    </div>
  );
}