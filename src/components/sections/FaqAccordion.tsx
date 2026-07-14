"use client";

import { useState } from "react";
import type { Faq } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  faqs: Faq[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-white sm:text-base">{faq.question}</span>
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-primary transition-transform",
                  isOpen && "rotate-45 bg-primary/15"
                )}
              >
                +
              </span>
            </button>
            <div className={cn("overflow-hidden px-5 transition-all", isOpen ? "max-h-64 pb-5" : "max-h-0")}>
              <p className="text-sm leading-relaxed text-gray-400">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
