type QuoteBlockProps = {
  quote: string;
  attribution?: string;
};

export function QuoteBlock({ quote, attribution }: QuoteBlockProps) {
  return (
    <figure tabIndex={0} className="rounded-lg border border-line bg-white/45 p-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta outline-none">
      <blockquote className="font-display text-3xl italic leading-snug text-wasabi md:text-4xl">
        {quote}
      </blockquote>
      {attribution ? <figcaption className="mt-4 text-sm font-bold text-forest">{attribution}</figcaption> : null}
    </figure>
  );
}
