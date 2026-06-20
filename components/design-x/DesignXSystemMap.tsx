const nodes = [
  "Students",
  "Mentors",
  "Prompts",
  "Projects",
  "Portfolios",
  "Community outcomes",
];

export function DesignXSystemMap() {
  return (
    <section className="design-x-system" aria-labelledby="design-x-system-title">
      <div className="design-x-section-heading">
        <p className="design-x-kicker">System map</p>
        <h2 id="design-x-system-title">A learning system that moves from exposure to output.</h2>
        <p>
          The Higgsfield curriculum map video is planned. Until it exists, this SVG motion map keeps
          the section animated without inventing proof.
        </p>
      </div>
      <div className="design-x-map-wrap">
        <svg className="design-x-map-lines" viewBox="0 0 1000 420" role="img" aria-label="Animated system map connecting students, mentors, prompts, projects, portfolios, and community outcomes">
          <path d="M100 210 C220 60 350 60 470 210 S730 360 900 210" />
          <path d="M100 210 C240 340 370 340 500 210 S740 80 900 210" />
          <path d="M180 130 L820 290" />
          <path d="M180 290 L820 130" />
        </svg>
        {nodes.map((node, index) => (
          <div className={`design-x-map-node design-x-map-node-${index + 1}`} key={node}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {node}
          </div>
        ))}
      </div>
    </section>
  );
}
