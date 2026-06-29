import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { stackGroups } from "../data/portfolioData";

function StackSection() {
  return (
    <section className="section" id="stack">
      <Reveal>
        <SectionTitle
          eyebrow="Toolbox"
          title="The stack, mapped to the pipeline."
          body="From the first event to the final query — the tools I reach for at each stage."
        />
      </Reveal>

      <div className="stack-grid">
        {stackGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="stack-card">
              <p className="stack-card__stage">
                <span className="stack-card__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {group.title}
              </p>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default StackSection;
