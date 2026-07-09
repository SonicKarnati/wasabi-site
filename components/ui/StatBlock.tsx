import type { Stat } from "@/content/types";
import { VerificationBadge } from "./VerificationBadge";

type StatBlockProps = {
  stat: Stat;
};

export function StatBlock({ stat }: StatBlockProps) {
  return (
    <div className="rounded-lg border border-line bg-white/45 p-5 transition hover:border-wasabi/50">
      <VerificationBadge status={stat.status} />
      <p className="mt-5 font-display text-3xl font-bold leading-tight text-wasabi">{stat.value}</p>
      <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-forest/70">{stat.label}</p>
      {stat.note ? <p className="mt-3 text-sm leading-6 text-muted">{stat.note}</p> : null}
    </div>
  );
}
