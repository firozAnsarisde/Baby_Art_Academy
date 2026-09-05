"use client";

import { useState } from "react";
import { IconChevron } from "./Icons";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-mehndi-100 rounded-2xl border border-mehndi-100 bg-ivory">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-body text-[15.5px] font-medium text-charcoal">{item.q}</span>
                <IconChevron
                  className={`h-5 w-5 shrink-0 text-terracotta-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 font-body text-[14.5px] leading-relaxed text-charcoal-light sm:px-6">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
