import { ScrollReveal } from "./ScrollReveal";

const beats = [
  {
    label: "Problem",
    title: "AI access is spreading faster than confidence.",
    body: "The source strategy is clear: access alone does not create judgment, fluency, or the ability to build.",
  },
  {
    label: "Opportunity",
    title: "Capability appears when people make something real.",
    body: "Wasabi frames learning around the first real build: projects, workflows, prototypes, portfolios, and visible proof.",
  },
  {
    label: "Shift",
    title: "The Wasabi Moment is a change in self-belief.",
    body: "The page can feel cinematic, but the story stays human: people become capable by creating.",
  },
];

export function DesignXProblem() {
  return (
    <section className="design-x-problem" id="design-x-problem">
      <div className="design-x-sticky-copy">
        <p className="design-x-kicker">Problem to opportunity</p>
        <h2>The gap is not technology. The gap is capability.</h2>
      </div>
      <div className="design-x-beat-stack">
        {beats.map((beat, index) => (
          <ScrollReveal key={beat.title} delay={index === 1 ? "one" : index === 2 ? "two" : undefined}>
            <article className="design-x-beat-card">
              <span>{beat.label}</span>
              <h3>{beat.title}</h3>
              <p>{beat.body}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
