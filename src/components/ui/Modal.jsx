export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        {title && (
          <div className="bg-[#A8E6EE] px-5 py-3 font-semibold">{title}</div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}