const proofSlots = [
  "[Placeholder: verified students trained]",
  "[Placeholder: verified projects built]",
  "[Placeholder: verified schools / institutions reached]",
  "[Placeholder: approved student or community story]",
];

export function DesignXProof() {
  return (
    <section className="design-x-proof" aria-labelledby="design-x-proof-title">
      <div className="design-x-section-heading">
        <p className="design-x-kicker">Proof without overclaiming</p>
        <h2 id="design-x-proof-title">Make the proof feel alive, but keep it honest.</h2>
        <p>
          Design-X can dramatize proof slots with motion and editorial pacing. It cannot turn
          missing evidence into final claims.
        </p>
      </div>
      <div className="design-x-proof-grid">
        {proofSlots.map((slot, index) => (
          <article className="design-x-proof-card" key={slot}>
            <span>Proof slot {index + 1}</span>
            <h3>{slot}</h3>
            <p>Needs source approval before production language.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
