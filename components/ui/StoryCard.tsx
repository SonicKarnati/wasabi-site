import type { Story } from "@/content/types";
import { VerificationBadge } from "./VerificationBadge";

type StoryCardProps = {
  story: Story;
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article tabIndex={0} className="rounded-lg border border-dashed border-wasabi/40 bg-white/35 p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta outline-none">
      <VerificationBadge status={story.status} />
      <h3 className="mt-5 font-display text-3xl font-semibold text-forest">{story.title}</h3>
      <p className="mt-4 leading-7 text-ink/80">{story.summary}</p>
    </article>
  );
}
