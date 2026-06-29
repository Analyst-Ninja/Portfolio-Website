import { profile, metrics } from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="eyebrow">{profile.title} · {profile.location}</p>
      <h1 className="hero__title">
        Building pipelines that move data, <span>reliably</span>.
      </h1>
      <p className="hero__summary">{profile.summary}</p>

      <div className="hero__actions">
        <a className="button button--primary" href="#work">
          View work
        </a>
        <a
          className="button button--ghost"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>

      <dl className="hero__metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="metric">
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Hero;
