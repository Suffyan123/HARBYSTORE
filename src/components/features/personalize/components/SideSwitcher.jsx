export default function SideSwitcher({ activeSide, onSwitch, frontThumb, backThumb }) {
  return (
    <div className="flex gap-4 mt-4">
      <button onClick={() => onSwitch("front")} className="text-center">
        <img src={frontThumb} className={`w-16 h-16 object-cover rounded border-2 ${activeSide === "front" ? "border-black" : "border-transparent"}`} />
        <p className={activeSide === "front" ? "font-medium" : "text-gray-400"}>Front</p>
      </button>
      <button onClick={() => onSwitch("back")} className="text-center">
        <img src={backThumb} className={`w-16 h-16 object-cover rounded border-2 ${activeSide === "back" ? "border-black" : "border-transparent"}`} />
        <p className={activeSide === "back" ? "font-medium" : "text-gray-400"}>Back</p>
      </button>
    </div>
  );
}