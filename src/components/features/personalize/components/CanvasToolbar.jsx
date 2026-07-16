import {
  HiOutlineInformationCircle,
  HiOutlineTrash,
} from "react-icons/hi";
// import {
//   LuFlipHorizontal, LuFlipVertical, LuRotateCw, LuCopy,
//   LuLock, LuUnlock, LuGroup, LuUngroup, LuUndo2, LuRedo2, LuEye,
//   LuBringToFront, LuSendToBack, LuGrid3x3, LuAlignCenterHorizontal,
//   LuAlignCenterVertical, LuSquareDashedMousePointer, LuEraser,
// } from "react-icons/lu";
import { ActiveSelection } from "fabric";
import { RiFlipHorizontalFill,RiFlipVerticalFill } from "react-icons/ri";
import { LuRotateCw } from "react-icons/lu";
import { LuCopy,LuLock,LuLockKeyholeOpen,LuGroup,LuUngroup,LuUndo2 ,LuRedo2,LuEye,LuBringToFront,LuSendToBack,LuGrid3X3,LuAlignCenterHorizontal,LuAlignCenterVertical,LuSquareDashedMousePointer,LuEraser} from "react-icons/lu";


// import { RiFlipVerticalFill } from "ract-icons/ri";

export default function CanvasToolbar({ fabricCanvas, selectedObject }) {
  const withCanvas = (fn) => () => {
    if (!fabricCanvas) return;
    fn();
    fabricCanvas.requestRenderAll();
  };

  const selectAll = withCanvas(() => {
    fabricCanvas.discardActiveObject();
    const sel = new ActiveSelection(fabricCanvas.getObjects(), { canvas: fabricCanvas });
    fabricCanvas.setActiveObject(sel);
  });

  const clearCanvas = withCanvas(() => {
    fabricCanvas.getObjects().forEach((obj) => fabricCanvas.remove(obj));
  });

  const centerH = withCanvas(() => selectedObject && fabricCanvas.centerObjectH(selectedObject));
  const centerV = withCanvas(() => selectedObject && fabricCanvas.centerObjectV(selectedObject));

  const flipH = withCanvas(() => selectedObject?.set("flipX", !selectedObject.flipX));
  const flipV = withCanvas(() => selectedObject?.set("flipY", !selectedObject.flipY));
  const rotate = withCanvas(() => selectedObject?.rotate(((selectedObject.angle || 0) + 90) % 360));

  const duplicate = () => {
    if (!selectedObject || !fabricCanvas) return;
    selectedObject.clone().then((cloned) => {
      cloned.set({ left: selectedObject.left + 20, top: selectedObject.top + 20 });
      fabricCanvas.add(cloned);
      fabricCanvas.setActiveObject(cloned);
      fabricCanvas.requestRenderAll();
    });
  };

  const bringToFront = withCanvas(() => selectedObject && fabricCanvas.bringObjectToFront(selectedObject));
  const sendToBack = withCanvas(() => selectedObject && fabricCanvas.sendObjectToBack(selectedObject));

  const toggleLock = withCanvas(() => {
    if (!selectedObject) return;
    const locked = !selectedObject.lockMovementX;
    selectedObject.set({
      lockMovementX: locked, lockMovementY: locked,
      lockRotation: locked, lockScalingX: locked, lockScalingY: locked,
    });
  });

  const groupSelection = withCanvas(() => {
    if (selectedObject?.type === "activeselection") {
      selectedObject.toGroup();
    }
  });

  const ungroupSelection = withCanvas(() => {
    if (selectedObject?.type === "group") {
      selectedObject.toActiveSelection();
    }
  });

  const deleteSelected = withCanvas(() => {
    if (!selectedObject) return;
    fabricCanvas.remove(selectedObject);
    fabricCanvas.discardActiveObject();
  });

  const undo = () => fabricCanvas?.fire("custom:undo");
  const redo = () => fabricCanvas?.fire("custom:redo");

  const togglePreview = withCanvas(() => {
    const preview = !fabricCanvas.__previewMode;
    fabricCanvas.__previewMode = preview;
    fabricCanvas.selection = !preview;
    fabricCanvas.forEachObject((o) => (o.selectable = !preview));
    fabricCanvas.discardActiveObject();
  });

  const buttons = [
    { icon: HiOutlineInformationCircle, action: () => {}, label: "Info" },
    { icon: LuSquareDashedMousePointer, action: selectAll, label: "Select All" },
    { icon: LuEraser, action: clearCanvas, label: "Clear" },
    { icon: LuGrid3X3, action: () => {}, label: "Grid" },
    { icon: LuAlignCenterHorizontal, action: centerH, label: "Center H" },
    { icon: LuAlignCenterVertical, action: centerV, label: "Center V" },
    { icon: RiFlipHorizontalFill, action: flipH, label: "Flip H" },
    { icon: RiFlipVerticalFill, action: flipV, label: "Flip V" },
    { icon: LuRotateCw, action: rotate, label: "Rotate" },
    { icon: LuCopy, action: duplicate, label: "Duplicate" },
    { icon: LuBringToFront, action: bringToFront, label: "Bring to front" },
    { icon: LuLock, action: toggleLock, label: "Lock/Unlock" },
    { icon: LuGroup, action: groupSelection, label: "Group" },
    { icon: LuUngroup, action: ungroupSelection, label: "Ungroup" },
    { icon: LuSendToBack, action: sendToBack, label: "Send to back" },
    { icon: HiOutlineTrash, action: deleteSelected, label: "Delete" },
    { icon: LuUndo2, action: undo, label: "Undo" },
    { icon: LuRedo2, action: redo, label: "Redo" },
    { icon: LuEye, action: togglePreview, label: "Preview" },
  ];

  return (
    <div className="flex items-center gap-1 border rounded-xl p-2 mb-4 w-fit">
      {buttons.map(({ icon: Icon, action, label }, i) => (
        <button
          key={i}
          onClick={action}
          aria-label={label}
          title={label}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-700"
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}