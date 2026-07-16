import { useEffect } from "react";
import { FabricImage } from "fabric";

export default function PersonalizeCanvas({ canvasElRef, fabricCanvas, productImage }) {
//   useEffect(() => {
    // if (!fabricCanvas || !productImage) return;

//     FabricImage.fromURL(productImage, { crossOrigin: "anonymous" }).then((img) => {
//       img.scaleToWidth(400);
//       img.set({
//         left: fabricCanvas.width / 2,
//         top: fabricCanvas.height / 2,
//         originX: "center",
//         originY: "center",
//         selectable: false,
//         evented: false,
//       });
//       fabricCanvas.backgroundImage = img;
//       fabricCanvas.renderAll();
//     });
//   }, [fabricCanvas, productImage]);

// useEffect(() => {
//   if (!fabricCanvas || !productImage) return;

//   FabricImage.fromURL(productImage, { crossOrigin: "anonymous" }).then((img) => {
//     img.scaleToWidth(400);
//     img.set({
//       left: fabricCanvas.width / 2,
//       top: fabricCanvas.height / 2,
//       originX: "center",
//       originY: "center",
//       selectable: false,
//       evented: false,
//     });
//     fabricCanvas.backgroundImage = img;
//     fabricCanvas.requestRenderAll(); // 👈 use requestRenderAll, not renderAll
//     }, [fabricCanvas, productImage]);
//   });
// PersonalizeCanvas.jsx
useEffect(() => {
  if (!fabricCanvas || !productImage) {
    console.log("Skipping image load:", { fabricCanvas: !!fabricCanvas, productImage });
    return;
  }

  console.log("Attempting to load image:", productImage);

  FabricImage.fromURL(productImage, { crossOrigin: "anonymous" })
    .then((img) => {
      console.log("Image loaded successfully:", img);
      img.scaleToWidth(400);
      img.set({
        left: fabricCanvas.width / 2,
        top: fabricCanvas.height / 2,
        originX: "center",
        originY: "center",
        selectable: false,
        evented: false,
      });
      fabricCanvas.backgroundImage = img;
      fabricCanvas.requestRenderAll();
      console.log("Background set, canvas objects:", fabricCanvas.getObjects());
    })
    .catch((err) => {
      console.error("IMAGE FAILED TO LOAD:", err);
    });
}, [fabricCanvas, productImage]);
  return (
    <div className="rounded-xl overflow-hidden flex items-center justify-center min-h-[500px]">
      <canvas ref={canvasElRef} />
    </div>
  );
}