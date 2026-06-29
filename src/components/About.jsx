import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { profile, signals, consolePreview } from "../data/portfolioData";

function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <SectionTitle eyebrow="About" title="Engineer behind the pipelines." />
      </Reveal>

      <div className="about">
        <Reveal className="about__main">
          <div className="about__portrait">
            <img src={profile.photo} alt={`${profile.name} portrait`} />
          </div>
          <div className="about__bio">
            <p className="about__lead">{profile.intro}</p>
            <p className="about__meta">
              Based in {profile.location} · currently at {profile.employer}.
            </p>
            <ul className="signals">
              {signals.map((signal) => (
                <li key={signal.label}>
                  <span className="signals__label">{signal.label}</span>
                  <span className="signals__value">{signal.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="about__console" delay={0.1}>
          <div className="console">
            <div className="console__bar">
              <span />
              <span />
              <span />
              <p>pipeline.sh</p>
            </div>
            <div className="console__body">
              {consolePreview.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
