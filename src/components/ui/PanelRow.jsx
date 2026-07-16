// components/ui/PanelRow.jsx
export function ColorRow({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between border rounded-lg px-3 py-2 mb-3">
      <span className="text-sm text-gray-600">{label}</span>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-10 h-6 rounded cursor-pointer border-0"
      />
    </div>
  );
}

export function DropdownRow({ label, value, onChange, options }) {
  return (
    <div className="flex items-center justify-between border rounded-lg px-3 py-2 mb-3">
      <span className="text-sm text-gray-600">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-sm outline-none bg-transparent"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export function SliderRow({ label, value, onChange, min = 0, max = 1, step = 0.01 }) {
  return (
    <div className="flex items-center justify-between border rounded-lg px-3 py-2 mb-3">
      <span className="text-sm text-gray-600">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-24"
      />
    </div>
  );
}