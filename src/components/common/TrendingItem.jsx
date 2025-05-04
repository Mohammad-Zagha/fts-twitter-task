"use client";

import { FiMoreHorizontal } from "react-icons/fi";

export default function TrendingItem({ category, title, postCount, icon }) {
  const isArabic = /[\u0600-\u06FF]/.test(title); // Detect Arabic characters

  return (
    <div className="flex justify-between items-start w-full  cursor-pointer">
      <div className="flex flex-col gap-0.5 w-full">
        <span className="text-xs text-[#6e767d]">{category}</span>

        <div
          className={`flex items-center gap-1 w-full  ${
            isArabic ? "flex-row-reverse text-right" : ""
          }`}
        >
          <span className="font-bold text-sm text-white">{title}</span>
          {icon && <span className="w-4 h-4">{icon}</span>}
        </div>

        <span className="text-xs text-[#6e767d]">{postCount}</span>
      </div>

      {!isArabic && <FiMoreHorizontal size={16} className="text-[#6e767d]" />}
    </div>
  );
}
