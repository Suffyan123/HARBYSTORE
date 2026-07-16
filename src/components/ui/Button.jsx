import clsx from "clsx";

const variants = {
  black: "bg-slate-900 text-white hover:bg-slate-800",
  white: "bg-white text-slate-900 hover:bg-slate-50",
  green: "bg-[#7FE0E6] text-slate-900 hover:bg-[#6bd6dd]",
};

export default function Button({
  variant = "black",
  children,
  icon: Icon,
  type = "button",
  disabled = false,
  loading = false,
  className,
  ...rest
}) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "px-6 py-3 text-sm transition-colors duration-200",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant] || variants.black,
    className
  );

  return (
    <button type={type} disabled={disabled || loading} className={classes} {...rest}>
      {loading ? "..." : children}
      {!loading && Icon && <Icon size={16} />}
    </button>
  );
}