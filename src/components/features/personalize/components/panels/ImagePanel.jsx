import { useState } from "react";

export default function ImagePanel({ onUploadImage }) {
//   const [prompt, setPrompt] = useState("");

  const handleGenerateClick = () => {
    // No AI model / backend wired yet — placeholder only, per requirements
    console.log("Generate Image by AI clicked — not implemented yet");
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    onUploadImage?.(url);
  };

  return (
    <div className="w-[280px] border-r p-5">
      <h3 className="font-semibold text-lg mb-4">Image</h3>
      <hr className="mb-5" />

      <button
        onClick={handleGenerateClick}
        className="w-full bg-black text-white rounded-lg py-2.5 text-sm mb-4"
      >
        Generate Image by AI
      </button>

      <div className="border rounded-lg py-8 flex flex-col items-center justify-center text-gray-400 mb-4">
        <span className="text-sm">No uploaded images found</span>
      </div>

      <label className="block w-full border rounded-lg py-2.5 text-sm text-center cursor-pointer mb-4">
        Upload image
        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      </label>
    </div>
  );
}