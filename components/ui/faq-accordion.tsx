"use client";

import React, { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export interface FaqAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: FaqItem[];
  title?: string;
}

const DEFAULT_ITEMS: FaqItem[] = [
  { question: "Are impact numbers final?", answer: "No. Proof remains labeled until source records and public-use approval are clear." },
  { question: "Can programs run for beginners?", answer: "Yes. The program model is framed around guided building, not prior coding confidence." },
  { question: "Can Wasabi adapt to public-sector or community contexts?", answer: "Yes, with scope, language, and evidence expectations agreed before launch." },
];

export function FaqAccordion({
  items = DEFAULT_ITEMS,
  title = "Vengeance UI FAQs",
  className,
  ...props
}: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const baseId = useId();

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("relative mx-auto w-full max-w-3xl font-sans", className)} {...props}>
      {title && (
        <h2 className="mb-8 text-center font-display text-4xl font-semibold text-forest">
          {title}
        </h2>
      )}
      
      <ul className="w-full mx-auto list-none p-0 flex flex-col">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <li
              key={index}
              className={cn(
                "w-full relative transition-all duration-300 ease-in",
                "border-b border-line",
                "last:border-b-0",
                isActive ? "border-terracotta/45" : ""
              )}
            >
              <button
                id={`${baseId}-button-${index}`}
                className={cn(
                  "relative m-0 flex min-h-[64px] w-full cursor-pointer flex-row items-center justify-start px-4 py-4 pl-14 text-left text-base outline-none",
                  "border-l-[6px] transition-colors duration-200 md:border-l-[8px]",
                  isActive 
                    ? "border-l-terracotta bg-white/65 font-bold text-forest" 
                    : "border-l-wasabi/35 bg-transparent font-bold text-forest/80 hover:border-l-wasabi hover:bg-white/45 hover:text-forest"
                )}
                onClick={() => toggleItem(index)}
                aria-expanded={isActive}
                aria-controls={`${baseId}-panel-${index}`}
              >
                <span 
                  className={cn(
                    "absolute left-5 top-1/2 -translate-y-1/2 font-display leading-none transition-all duration-200",
                    isActive ? "text-4xl text-terracotta" : "text-3xl text-wasabi/60"
                  )}
                >
                  {isActive ? "-" : "+"}
                </span>
                
                <span className="pr-8">{item.question}</span>
                
                {/* Chevron */}
                <span 
                  className={cn(
                    "absolute right-6 block h-2 w-2 border-r-[3px] border-t-[3px] transition-transform duration-200 ease-in-out",
                    isActive ? "-rotate-45 border-terracotta" : "rotate-[133deg] border-wasabi/55"
                  )}
                />
              </button>

              <div 
                id={`${baseId}-panel-${index}`}
                aria-labelledby={`${baseId}-button-${index}`}
                className={cn(
                  "grid w-full border-l-[6px] transition-all duration-300 ease-in-out md:border-l-[8px]",
                  isActive ? "grid-rows-[1fr] border-l-terracotta bg-white/65" : "grid-rows-[0fr] border-l-wasabi/35 bg-transparent"
                )}
              >
                <div className="overflow-hidden">
                  <div className="flex w-full flex-row items-start justify-start px-4 pb-6 pl-14 pt-2 text-base font-normal leading-7 text-ink/80">
                    <span className="opacity-90">{item.answer}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FaqAccordion;
