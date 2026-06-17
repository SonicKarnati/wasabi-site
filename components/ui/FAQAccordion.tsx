import type { FAQ } from "@/content/types";
import { VerificationBadge } from "./VerificationBadge";

type FAQAccordionProps = {
  faqs: FAQ[];
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-lg border border-line bg-white/45 p-5">
          <summary className="cursor-pointer text-base font-bold text-forest">{faq.question}</summary>
          <div className="mt-4">
            <VerificationBadge status={faq.status} />
            <p className="mt-3 leading-7 text-ink/80">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
