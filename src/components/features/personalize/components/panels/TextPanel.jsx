import { useEffect, useState } from "react";
import { Textbox } from "fabric";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";
import { MdFormatOverline } from "react-icons/md";
import { ColorRow, DropdownRow, SliderRow } from "@/components/ui/PanelRow";
import PanelActions from "./PanelActions";

const fonts = ["Arial", "Georgia", "Courier New", "Times New Roman", "Verdana"];

export default function TextPanel({ fabricCanvas, selectedObject, product }) {
  const [text, setText] = useState("Hello");
  const isTextSelected = selectedObject?.type === "textbox";

  useEffect(() => {
    if (isTextSelected) setText(selectedObject.text);
  }, [selectedObject, isTextSelected]);

  const addText = () => {
    if (!fabricCanvas || !text.trim()) return;
    const textbox = new Textbox(text, {
      left: fabricCanvas.width / 2,
      top: fabricCanvas.height / 2,
      originX: "center",
      originY: "center",
      fontSize: 24,
      fill: "#000000",
    });
    fabricCanvas.add(textbox);
    fabricCanvas.setActiveObject(textbox);
    fabricCanvas.requestRenderAll();
  };

  const update = (patch) => {
    if (!isTextSelected) return;
    selectedObject.set(patch);
    fabricCanvas.requestRenderAll();
  };

  const toggle = (prop, onVal, offVal) => update({ [prop]: selectedObject[prop] === onVal ? offVal : onVal });

  return (
    <div className="w-[280px] border-r p-5 overflow-y-auto max-h-[80vh]">
      <h3 className="font-semibold text-lg mb-4">Text</h3>
      <hr className="mb-5" />

      <div className="flex gap-2 mb-3">
        <button onClick={() => toggle("fontWeight", "bold", "normal")} className="border rounded p-2"><FaBold size={14} /></button>
        <button onClick={() => toggle("fontStyle", "italic", "normal")} className="border rounded p-2"><FaItalic size={14} /></button>
        <button onClick={() => toggle("underline", true, false)} className="border rounded p-2"><FaUnderline size={14} /></button>
        <button onClick={() => toggle("linethrough", true, false)} className="border rounded p-2"><FaStrikethrough size={14} /></button>
        <button onClick={() => toggle("overline", true, false)} className="border rounded p-2"><MdFormatOverline size={14} /></button>
      </div>

      <DropdownRow label="Font" value="Arial" onChange={(v) => update({ fontFamily: v })} options={fonts} />
      <DropdownRow label="Size" value="24" onChange={(v) => update({ fontSize: Number(v) })} options={["16", "20", "24", "32", "48", "64"]} />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded-lg p-2 mb-3 text-sm"
        rows={2}
      />
      <button onClick={addText} className="w-full border rounded-lg py-2 text-sm mb-4">Add new text</button>

      <ColorRow label="Text color" value="#000000" onChange={(v) => update({ fill: v })} />
      <DropdownRow label="Outline" value="None" onChange={(v) => update({ strokeWidth: v === "None" ? 0 : 2 })} options={["None", "Thin", "Thick"]} />
      <ColorRow label="Outline Color" value="#000000" onChange={(v) => update({ stroke: v })} />
      <DropdownRow label="Text effects" value="None" onChange={() => {}} options={["None", "Shadow", "Glow"]} />
      <SliderRow label="Radius" value={0} min={0} max={20} onChange={() => {}} />
      <SliderRow label="Spacing" value={0} min={0} max={50} onChange={(v) => update({ charSpacing: v * 10 })} />
      <SliderRow label="Opacity" value={1} min={0} max={1} onChange={(v) => update({ opacity: v })} />

      <PanelActions fabricCanvas={fabricCanvas} product={product} />
    </div>
  );
}