import type { FAQ } from "@/content/types";
import { VerificationBadge } from "./VerificationBadge";

type FAQAccordionProps = {
  faqs: FAQ[];
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-lg border border-line bg-white/45 p-5 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta outline-none">
          <summary className="cursor-pointer text-base font-bold text-forest transition-colors hover:text-wasabi">{faq.question}</summary>
          <div className="mt-4 transition-all duration-300">
            <VerificationBadge status={faq.status} />
            <p className="mt-3 leading-7 text-ink/80">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
