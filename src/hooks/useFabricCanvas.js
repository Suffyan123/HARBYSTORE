import { useCallback, useRef, useState } from "react";
import { Canvas } from "fabric";

export function useFabricCanvas() {
  const canvasInstanceRef = useRef(null);
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const [selectedObject, setSelectedObject] = useState(null);

  const canvasElRef = useCallback((node) => {
    // cleanup old instance if the node changes/unmounts
    if (canvasInstanceRef.current) {
      canvasInstanceRef.current.dispose();
      canvasInstanceRef.current = null;
      setFabricCanvas(null);
    }

    if (!node) return; // node is null on unmount — nothing more to do

    const canvas = new Canvas(node, {
      width: 500,
      height: 500,
      backgroundColor: "#f3f4f6",
      preserveObjectStacking: true,
    });

    const syncSelection = () => setSelectedObject(canvas.getActiveObject() || null);
    canvas.on("selection:created", syncSelection);
    canvas.on("selection:updated", syncSelection);
    canvas.on("selection:cleared", () => setSelectedObject(null));

    // --- undo/redo history ---
    const history = { stack: [], index: -1, applying: false };

    const pushHistory = () => {
      if (history.applying) return; // don't record while replaying undo/redo
      history.stack = history.stack.slice(0, history.index + 1);
      history.stack.push(JSON.stringify(canvas.toJSON()));
      history.index++;
    };

    canvas.on("object:added", pushHistory);
    canvas.on("object:modified", pushHistory);
    canvas.on("object:removed", pushHistory);

    // capture the initial empty state so the very first undo has somewhere to go
    pushHistory();

    canvas.on("custom:undo", () => {
      if (history.index <= 0) return;
      history.index--;
      history.applying = true;
      canvas.loadFromJSON(history.stack[history.index], () => {
        canvas.renderAll();
        history.applying = false;
      });
    });

    canvas.on("custom:redo", () => {
      if (history.index >= history.stack.length - 1) return;
      history.index++;
      history.applying = true;
      canvas.loadFromJSON(history.stack[history.index], () => {
        canvas.renderAll();
        history.applying = false;
      });
    });

    canvasInstanceRef.current = canvas;
    setFabricCanvas(canvas);
  }, []);

  return { canvasElRef, fabricCanvas, selectedObject };
}