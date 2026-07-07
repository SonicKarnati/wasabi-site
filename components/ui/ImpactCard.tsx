import type { ImpactItem } from "@/content/types";
import { VerificationBadge } from "./VerificationBadge";

type ImpactCardProps = {
  item: ImpactItem;
};

export function ImpactCard({ item }: ImpactCardProps) {
  return (
    <article tabIndex={0} className="rounded-lg border border-line bg-white/45 p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta outline-none">
      <VerificationBadge status={item.status} />
      <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest">{item.title}</h3>
      {item.metric ? <p className="mt-4 text-lg font-bold leading-7 text-wasabi">{item.metric}</p> : null}
      <p className="mt-4 leading-7 text-ink/80">{item.description}</p>
    </article>
  );
}
