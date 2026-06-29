import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { experience, totalExperience } from "../data/portfolioData";

function Timeline() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <SectionTitle
          eyebrow={`Experience · ${totalExperience}`}
          title="From analytics to data engineering."
        />
      </Reveal>

      <ol className="timeline">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.company} className="timeline__item" delay={i * 0.08}>
            <span className="timeline__dot" aria-hidden="true" />
            <div className="timeline__content">
              <p className="timeline__kicker">{item.kicker}</p>
              <h3>
                {item.role} <span>· {item.company}</span>
              </h3>
              <p className="timeline__period">{item.period}</p>
              <p className="timeline__desc">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export default Timeline;
