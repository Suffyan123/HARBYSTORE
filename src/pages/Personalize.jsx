import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProduct } from "@/hooks/useProducts";
import { useFabricCanvas } from "@/hooks/useFabricCanvas";
import PersonalizeCanvas from "@/components/features/personalize/components/PersonalizeCanvas";
import ToolSidebar from "@/components/features/personalize/components/ToolSidebar";
import CanvasToolbar from "@/components/features/personalize/components/CanvasToolbar";
import SideSwitcher from "@/components/features/personalize/components/SideSwitcher";
import ProductColorPanel from "@/components/features/personalize/components/panels/ProductColorPanel";
import ImagePanel from "@/components/features/personalize/components/panels/ImagePanel";
import TextPanel from "@/components/features/personalize/components/panels/TextPanel";
import ShapesPanel from "@/components/features/personalize/components/panels/ShapesPanel";
import QRCodePanel from "@/components/features/personalize/components/panels/QRCodePanel";
import LayersPanel from "@/components/features/personalize/components/panels/LayersPanel";

export default function Personalize() {
  const { productId } = useParams();
  const { product, loading } = useProduct(productId);
  const [activeTool, setActiveTool] = useState("product");
  const [activeSide, setActiveSide] = useState("front");
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { canvasElRef, fabricCanvas, selectedObject } = useFabricCanvas();

  useEffect(() => {
    if (product?.colors?.length) setSelectedColor(product.colors[0]);
  }, [product]);

  if (loading || !product) return <p className="text-center py-20">Loading...</p>;

  const productImage = selectedColor?.image || product.image;

  const handleUploadImage = async (url) => {
    const { FabricImage } = await import("fabric");
    const img = await FabricImage.fromURL(url);
    img.scaleToWidth(150);
    img.set({ left: 250, top: 250, originX: "center", originY: "center" });
    fabricCanvas.add(img);
    fabricCanvas.setActiveObject(img);
    fabricCanvas.requestRenderAll();
  };
const panels = {
  product: <ProductColorPanel product={product} selectedColor={selectedColor} onColorChange={setSelectedColor} quantity={quantity} onQuantityChange={setQuantity} fabricCanvas={fabricCanvas} />,
  text: <TextPanel fabricCanvas={fabricCanvas} selectedObject={selectedObject} product={product} />,
  image: <ImagePanel onUploadImage={handleUploadImage} />,
  shapes: <ShapesPanel fabricCanvas={fabricCanvas} selectedObject={selectedObject} product={product} />,
  qrcode: <QRCodePanel fabricCanvas={fabricCanvas} product={product} />,
  layers: <LayersPanel fabricCanvas={fabricCanvas} />,
};
  return (
    <div className="px-6  lg:px-10 py-6 bg-(--white-ghost) flex flex-col">
      <CanvasToolbar fabricCanvas={fabricCanvas} selectedObject={selectedObject} />

      <div className="flex border rounded-xl overflow-hidden ">
        <ToolSidebar activeTool={activeTool} onSelect={setActiveTool} />
        {panels[activeTool]}

        <div className="flex-1 p-6">
          <PersonalizeCanvas canvasElRef={canvasElRef} fabricCanvas={fabricCanvas} productImage={productImage} />
          <SideSwitcher activeSide={activeSide} onSwitch={setActiveSide} frontThumb={product.image} backThumb={product.image} />
        </div>
      </div>
    </div>
  );
}