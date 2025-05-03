import React from "react";
import clsx from "clsx";

export function Button({
  children,
  variant = "default",
  onClick,
  className = "",
  type = "button",
}) {
  const baseStyles =
    "px-4 py-1 rounded-full text-sm font-semibold transition-colors cursor-pointer";
  const variantStyles = {
    default: "bg-white text-black ",
    outline: "ring-[0.75px] text-white  hover:bg-gray-50/10",
    icon: "size-7 !p-1 hover:bg-gray-50/10 ring-[0.75px] ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
}
