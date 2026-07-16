import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

const variants = {
  static: "link-static",
  outline: "link-outline",
  elevate: "link-elevate",
};

const activeVariants = {
  static: "link-static-active",
  outline: "link-outline-active",
  elevate: "link-elevate-active",
};


export default function CTA({ type = "elevate", title, to,icons:Icon,className, ...rest }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e) => {
    setIsClicked(true);
    // onClick?.(e); // still call any onClick passed from parent
  };
  const classes = clsx(
    "inline-flex items-center justify-center rounded-btn font-medium  gap-2",
    "px-4 py-2  sm:px-5 sm:py-2.5 s md:px-6 md:py-3  text-[16px]",
    isClicked
      ? activeVariants[type] || activeVariants.elevate  // clicked state per-type
      : variants[type] || variants.elevate,              // normal state per-type
    className
  );

  return (
    <RouterLink to={to} className={classes} {...rest}  onClick={handleClick}>
      {title}
      {Icon && <Icon className="text-lg" />}
    </RouterLink>
  );
}
