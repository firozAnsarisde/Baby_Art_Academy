"use client";

import { useState } from "react";
import { IconChevron } from "./Icons";

interface Module {
  title: string;
  lessons: string[];
}

export default function ModuleAccordion({ modules }: { modules: Module[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {modules.map((mod, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={mod.title}
            className="overflow-hidden rounded-2xl border border-mehndi-100 bg-ivory"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
              aria-controls={`module-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mehndi-50 font-body text-[13px] font-medium text-mehndi-700">
                  {i + 1}
                </span>
                <span className="font-display text-[17px] text-charcoal">{mod.title}</span>
              </span>
              <IconChevron
                className={`h-5 w-5 shrink-0 text-terracotta-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`module-panel-${i}`}
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="flex flex-col gap-2 px-5 pb-5 pl-16 sm:px-6 sm:pl-16">
                  {mod.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="font-body text-[14.5px] text-charcoal-light before:mr-2 before:content-['–']"
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
