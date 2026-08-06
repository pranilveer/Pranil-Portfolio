'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function DualToggleButtons() {
  const [active, setActive] = useState<"portfolio" | "hire">("portfolio");

  const goTo = (target: string) => {
    window.location.href = target;
  };

  const options = [
    { key: "portfolio", label: "Portfolio", target: "#" },
    { key: "hire", label: "Hire Me", target: "#" },
  ];

  return (
    <div className="flex border-b-2 border-white bg-white/10 backdrop-blur-[5px] rounded-full gap-2 p-[6px] w-fit h-[56px] items-center justify-center">
      {options.map((option) => (
        <button
          key={option.key}
          onMouseEnter={() => setActive(option.key as typeof active)}
          onClick={() => goTo(option.target)}
          className={`group flex items-center justify-center gap-2 px-4 py-2 rounded-[60px] transition-all duration-300 ease-in-out cursor-pointer
            ${
              active === option.key
                ? "bg-[#FD853A] text-white font-medium text-base w-[180px] h-[44px] border border-[#D0D5DD] shadow-md"
                : "bg-transparent text-white font-light text-sm w-[120px] h-[40px]"
            }`}
        >
          {option.label}
          <ArrowUpRight
            size={14}
            className={`transition-all duration-300 ${
              active === option.key
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-1 group-hover:opacity-100"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
