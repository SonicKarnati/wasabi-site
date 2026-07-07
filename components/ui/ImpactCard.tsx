import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ImpactItem } from "@/content/types";
import { VerificationBadge } from "./VerificationBadge";

type ImpactCardProps = {
  item: ImpactItem;
};

export function ImpactCard({ item }: ImpactCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-white/45 p-6 transition hover:border-wasabi hover:shadow-md">
      <VerificationBadge status={item.status} />
      <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-forest">{item.title}</h3>
      {item.metric ? <p className="mt-4 text-lg font-bold leading-7 text-wasabi">{item.metric}</p> : null}
      <p className="mt-4 leading-7 text-ink/80">{item.description}</p>
      <Link
        href="/#contact"
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold text-wasabi underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        Partner on this <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
