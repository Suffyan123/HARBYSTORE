import { useState } from "react";
import { Circle, Rect, Triangle } from "fabric";
import { ColorRow, SliderRow } from "@/components/ui/PanelRow";
import PanelActions from "./PanelActions";

const shapeFactories = {
  circle: (opts) => new Circle({ radius: 40, ...opts }),
  square: (opts) => new Rect({ width: 80, height: 80, ...opts }),
  rectangle: (opts) => new Rect({ width: 100, height: 60, ...opts }),
  triangle: (opts) => new Triangle({ width: 80, height: 80, ...opts }),
};

export default function ShapesPanel({ fabricCanvas, selectedObject, product }) {
  const [fillColor, setFillColor] = useState("#000000");
  const [outline, setOutline] = useState(0);
  const [outlineColor, setOutlineColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);

  const addShape = (type) => {
    if (!fabricCanvas) return;
    const shape = shapeFactories[type]({
      fill: fillColor,
      stroke: outlineColor,
      strokeWidth: outline,
      opacity,
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      originX: "center",
      originY: "center",
    });
    fabricCanvas.add(shape);
    fabricCanvas.setActiveObject(shape);
    fabricCanvas.requestRenderAll();
  };

  const isShapeSelected = ["circle", "rect", "triangle"].includes(selectedObject?.type);

  const update = (patch) => {
    if (!isShapeSelected) return;
    selectedObject.set(patch);
    fabricCanvas.requestRenderAll();
  };

  return (
    <div className="w-[280px] border-r p-5 overflow-y-auto max-h-[80vh]">
      <h3 className="font-semibold text-lg mb-4">Shapes</h3>
      <hr className="mb-5" />

      <div className="grid grid-cols-4 gap-2 mb-6">
        <button onClick={() => addShape("circle")} className="border rounded p-3 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gray-400" />
        </button>
        <button onClick={() => addShape("square")} className="border rounded p-3 flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-400" />
        </button>
        <button onClick={() => addShape("rectangle")} className="border rounded p-3 flex items-center justify-center">
          <div className="w-7 h-5 bg-gray-400" />
        </button>
        <button onClick={() => addShape("triangle")} className="border rounded p-3 flex items-center justify-center">
          <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-gray-400" />
        </button>
      </div>

      <ColorRow
        label="Fill color"
        value={fillColor}
        onChange={(v) => { setFillColor(v); update({ fill: v }); }}
      />
      <SliderRow
        label="Outline"
        value={outline}
        min={0}
        max={10}
        step={1}
        onChange={(v) => { setOutline(v); update({ strokeWidth: v }); }}
      />
      <ColorRow
        label="Outline Color"
        value={outlineColor}
        onChange={(v) => { setOutlineColor(v); update({ stroke: v }); }}
      />
      <SliderRow
        label="Opacity"
        value={opacity}
        min={0}
        max={1}
        onChange={(v) => { setOpacity(v); update({ opacity: v }); }}
      />

      <PanelActions fabricCanvas={fabricCanvas} product={product} />
    </div>
  );
}