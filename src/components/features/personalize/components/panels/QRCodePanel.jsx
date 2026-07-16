import { useState } from "react";
import QRCode from "qrcode";
import { FabricImage } from "fabric";
import { ColorRow, DropdownRow, SliderRow } from "@/components/ui/PanelRow";
import PanelActions from "./PanelActions";

export default function QRCodePanel({ fabricCanvas, product }) {
  const [url, setUrl] = useState("");
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [level, setLevel] = useState("Low");
  const [border, setBorder] = useState("none");
  const [version, setVersion] = useState(1);

  const correctionMap = { Low: "L", Medium: "M", Quartile: "Q", High: "H" };

  const addQRCode = async () => {
    if (!fabricCanvas || !url.trim()) return;

    const dataUrl = await QRCode.toDataURL(url, {
      width: 200,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: correctionMap[level],
      version: version || undefined,
    });

    const img = await FabricImage.fromURL(dataUrl);
    img.set({
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      originX: "center",
      originY: "center",
      ...(border !== "none" && {
        stroke: "#000000",
        strokeWidth: border === "thin" ? 2 : 6,
      }),
    });
    img.scaleToWidth(100);
    fabricCanvas.add(img);
    fabricCanvas.setActiveObject(img);
    fabricCanvas.requestRenderAll();
  };

  return (
    <div className="w-[280px] border-r p-5 overflow-y-auto max-h-[80vh]">
      <h3 className="font-semibold text-lg mb-4">Scan QR</h3>
      <hr className="mb-5" />

      <div className="flex gap-2 mb-4">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="http://your-web-url.com"
          className="flex-1 border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <ColorRow label="Foreground color" value={fgColor} onChange={setFgColor} />
      <ColorRow label="Background color" value={bgColor} onChange={setBgColor} />
      <DropdownRow
        label="Correction level"
        value={level}
        onChange={setLevel}
        options={["Low", "Medium", "Quartile", "High"]}
      />
      <DropdownRow
        label="Border"
        value={border}
        onChange={setBorder}
        options={["none", "thin", "thick"]}
      />
      <SliderRow label="Version range" value={version} min={1} max={40} onChange={setVersion} />

      <div className="border rounded-lg p-3 text-xs text-gray-500 mb-4">
        Note!! QR codes are not always legible. try it before continouning
      </div>

      <button onClick={addQRCode} className="w-full bg-black text-white rounded-lg py-2.5 text-sm mb-4">
        Add QR Code
      </button>

      <PanelActions fabricCanvas={fabricCanvas} product={product} />
    </div>
  );
}