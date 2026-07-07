import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Story } from "@/content/types";
import { VerificationBadge } from "./VerificationBadge";

type StoryCardProps = {
  story: Story;
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-dashed border-wasabi/40 bg-white/35 p-6 transition hover:border-wasabi hover:bg-white/50">
      <VerificationBadge status={story.status} />
      <h3 className="mt-5 font-display text-3xl font-semibold text-forest">{story.title}</h3>
      <p className="mt-4 leading-7 text-ink/80">{story.summary}</p>
      <Link
        href="/#contact"
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold text-wasabi underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        Request this story <ArrowRight aria-hidden="true" size={15} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
