"use client";

import { useMemo, useState } from "react";
import { ProgramCard } from "@/components/ui/ProgramCard";
import type { Program } from "@/content/types";

type ProgramExplorerProps = {
  programs: Program[];
};

const FILTERS = [
  { id: "all", label: "All programs" },
  { id: "students", label: "Students & schools" },
  { id: "community", label: "Community & SHG" },
  { id: "public", label: "Public sector" },
  { id: "builders", label: "Startups & hackathons" },
] as const;

const CATEGORY: Record<string, string> = {
  "ai-learner": "students",
  "school-movements": "students",
  "co-branded-bootcamps": "students",
  "shg-enterprise": "community",
  "public-empowerment": "public",
  "builder-events": "builders",
};

export function ProgramExplorer({ programs }: ProgramExplorerProps) {
  const [active, setActive] = useState<string>("all");

  const visible = useMemo(
    () => (active === "all" ? programs : programs.filter((p) => CATEGORY[p.id] === active)),
    [active, programs],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter programs by audience">
        {FILTERS.map((filter) => {
          const on = filter.id === active;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(filter.id)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                on
                  ? "border-wasabi bg-wasabi text-white shadow-sm"
                  : "border-line bg-white/55 text-forest hover:border-wasabi hover:text-wasabi"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted">No programs in this track yet.</p>
      ) : null}
    </div>
  );
}
