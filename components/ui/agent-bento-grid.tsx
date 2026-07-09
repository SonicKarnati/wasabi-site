"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, FileCheck2, Layers3, MessageSquareText, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CapabilityCard = {
  title: string;
  description: string;
  icon: ReactNode;
  visual: ReactNode;
  className?: string;
};

function FeatCard({
  title,
  description,
  icon,
  children,
  className,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex min-h-[260px] flex-col overflow-hidden rounded-lg border border-cream/15 bg-cream/8 p-5 text-cream shadow-sm backdrop-blur",
        className,
      )}
    >
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-3xl font-semibold leading-tight text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-cream/76">{description}</p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-md border border-cream/20 bg-cream/10 text-terracotta">
          {icon}
        </span>
      </div>
      <div className="relative z-10 mt-5 flex flex-1 items-end">{children}</div>
    </motion.article>
  );
}

function FlowVisual() {
  return (
    <div className="grid w-full grid-cols-4 items-center gap-2">
      {["Listen", "Design", "Build", "Show"].map((label, index) => (
        <div key={label} className="relative">
          <div className="grid aspect-square place-items-center rounded-md border border-cream/20 bg-cream/10 text-xs font-bold uppercase tracking-[0.08em] text-cream">
            {label}
          </div>
          {index < 3 ? <span className="absolute left-full top-1/2 h-px w-2 bg-terracotta" /> : null}
        </div>
      ))}
    </div>
  );
}

function ProofVisual() {
  return (
    <div className="w-full space-y-3">
      {["Source noted", "Status labeled", "Claim reviewed"].map((label, index) => (
        <div key={label} className="flex items-center gap-3 rounded-md border border-cream/15 bg-forest/35 p-3">
          <span className="grid size-7 place-items-center rounded-full bg-wasabi text-xs font-black text-white">
            {index + 1}
          </span>
          <span className="text-sm font-bold text-cream">{label}</span>
        </div>
      ))}
    </div>
  );
}

function OutputVisual() {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {["Website", "Catalog", "Pitch", "POC"].map((label) => (
        <div key={label} className="rounded-md border border-cream/15 bg-cream/10 p-4">
          <div className="h-1.5 w-10 rounded-full bg-terracotta" />
          <p className="mt-4 text-sm font-bold text-cream">{label}</p>
        </div>
      ))}
    </div>
  );
}

function CommunityVisual() {
  return (
    <div className="relative h-36 w-full">
      {["Students", "Schools", "SHGs", "Govt"].map((label, index) => (
        <span
          key={label}
          className={cn(
            "absolute rounded-full border border-cream/20 bg-cream/10 px-3 py-2 text-xs font-bold text-cream",
            index === 0 && "left-4 top-2",
            index === 1 && "right-8 top-8",
            index === 2 && "bottom-4 left-12",
            index === 3 && "bottom-8 right-2",
          )}
        >
          {label}
        </span>
      ))}
      <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-terracotta text-xs font-black uppercase tracking-[0.08em] text-white">
        Hub
      </span>
    </div>
  );
}

function StoryVisual() {
  return (
    <div className="w-full rounded-md border border-dashed border-terracotta/60 bg-cream/10 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-terracotta">Pending approval</p>
      <p className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
        Stories publish only after consent and source review.
      </p>
    </div>
  );
}

const cards: CapabilityCard[] = [
  {
    title: "Program Flow",
    description: "Every engagement moves from context to practical outputs.",
    icon: <Workflow size={21} />,
    visual: <FlowVisual />,
  },
  {
    title: "Proof Discipline",
    description: "Source, status, and claim readiness stay visible.",
    icon: <FileCheck2 size={21} />,
    visual: <ProofVisual />,
  },
  {
    title: "Builder Outputs",
    description: "Participants leave with things they can show and improve.",
    icon: <Layers3 size={21} />,
    visual: <OutputVisual />,
  },
  {
    title: "Many Communities",
    description: "One build-first model adapts across audiences.",
    icon: <BookOpenCheck size={21} />,
    visual: <CommunityVisual />,
    className: "lg:col-span-2",
  },
  {
    title: "Review-Safe Stories",
    description: "Human stories stay placeholders until permission is clear.",
    icon: <MessageSquareText size={21} />,
    visual: <StoryVisual />,
  },
];

export interface AgentBentoGridProps {
  className?: string;
}

export function AgentBentoGrid({ className }: AgentBentoGridProps) {
  return (
    <div className={cn("grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      {cards.map((card) => (
        <FeatCard
          key={card.title}
          title={card.title}
          description={card.description}
          icon={card.icon}
          className={card.className}
        >
          {card.visual}
        </FeatCard>
      ))}
    </div>
  );
}

export default AgentBentoGrid;
