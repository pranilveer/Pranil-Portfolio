'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DualToggleButtons() {
  const [active, setActive] = useState<"portfolio" | "hire">("portfolio");

  return (
    <div className="flex border-b-2 border-white bg-white/10 backdrop-blur-[5px] rounded-full gap-2 p-[6px] w-[280px] h-[56px] items-center justify-center">
      {/* Portfolio Button */}
      <button
        onMouseEnter={() => setActive("portfolio")}
        className={`group flex items-center justify-center gap-2 px-4 py-2 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "portfolio"
              ? "bg-[#FD853A] text-white font-medium text-base w-[150px] h-[44px] border border-[#D0D5DD] shadow-md"
              : "bg-transparent text-white font-light text-sm w-[100px] h-[40px]"
          }`}
      >
        Portfolio
        <ArrowUpRight
          size={14}
          className={`transition-all duration-300 ${
            active === "portfolio"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1 group-hover:opacity-100"
          }`}
        />
      </button>

      {/* Hire Me Button */}
      <button
        onMouseEnter={() => setActive("hire")}
        className={`group flex items-center justify-center gap-2 px-4 py-2 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
          ${
            active === "hire"
              ? "bg-[#FD853A] text-white font-medium text-base w-[150px] h-[44px] border border-[#D0D5DD] shadow-md"
              : "bg-transparent text-white font-light text-sm w-[100px] h-[40px]"
          }`}
      >
        Hire me
        <ArrowUpRight
          size={14}
          className={`transition-all duration-300 ${
            active === "hire"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
}
