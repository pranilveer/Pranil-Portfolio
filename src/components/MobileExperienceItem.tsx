"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CustomeText from "@/components/ui/CustomeText";
import type { Experience } from "@/data/data";

export default function MobileExperienceItem({ exp }: { exp: Experience }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0 mt-2">
          <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#1D2939] bg-white" />
          <div className={`absolute top-1 left-1 w-4 h-4 rounded-full ${exp.dotColor}`} />
        </div>

        <div className="flex-1">
          <CustomeText title={exp.company} className="font-semibold text-[#1D2939] text-[20px] sm:text-[24px] mb-1" />
          <CustomeText title={`${exp.duration} • ${exp.location}`} className="text-[#98A2B3] text-[14px] sm:text-[16px] mb-2" />
          <div className="flex items-center justify-between">
            <CustomeText title={exp.role} className="font-semibold text-[#1D2939] text-[18px] sm:text-[20px] mb-2" />
            {exp.highlights.length > 0 && (
              <button
                type="button"
                aria-expanded={open}
                aria-label={open ? "Collapse highlights" : "Show highlights"}
                onClick={() => setOpen((prev) => !prev)}
                className="flex-shrink-0 w-8 h-8 mb-2 ml-3 flex items-center justify-center rounded-full border border-[#FD853A] text-[#FD853A] transition-transform duration-300 ease-in-out"
              >
                <ChevronDown size={18} className={`transition-transform duration-300 ease-in-out ${open ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
          {exp.highlights.length > 0 && (
            <ul
              className={`flex flex-col gap-1.5 overflow-hidden transition-all duration-300 ease-in-out ${
                open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {exp.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[#98A2B3] text-[14px] sm:text-[16px] leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FD853A] flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
