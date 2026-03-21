"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../src/components/ProjectCard";
import SectionTitle from "../src/components/SectionTitle";
import {
  consolePreview,
  experience,
  highlights,
  metrics,
  profile,
  projects,
  signals,
  stackGroups,
} from "../src/data/portfolioData";

export default function Page() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="site-shell">
      <div className="page-glow page-glow--left" />
      <div className="page-glow page-glow--right" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand__mark">RK</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span>Theme</span>
          <strong>{theme === "dark" ? "Light" : "Dark"}</strong>
        </button>
      </header>

      <main className="page">
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Data Engineer</p>
            <h1>
              Building pipelines, streaming systems, and analytics backends for
              real downstream use.
            </h1>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-buttons">
              <a className="button button--primary" href="#projects">
                View Projects
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

            <div className="signal-grid">
              {signals.map((signal) => (
                <div key={signal.label} className="signal-card">
                  <span>{signal.label}</span>
                  <p>{signal.value}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-panel__header">
              <span className="dot dot--green" />
              <span className="dot dot--amber" />
              <span className="dot dot--blue" />
              <p>terminal://rohit</p>
            </div>

            <div className="hero-identity">
              <div className="hero-portrait">
                <img src={profile.photo} alt={`${profile.name} portrait`} />
              </div>

              <div className="pipeline-card">
                <div className="pipeline-card__label">Now</div>
                <strong>{profile.title}</strong>
                <p>{profile.employer}</p>
              </div>
            </div>

            <div className="hero-console" aria-label="Engineering console preview">
              {consolePreview.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="metric-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <SectionTitle
            eyebrow="About"
            title="A data engineer focused on the systems behind reliable products."
            body={profile.intro}
          />

          <div className="about-layout">
            <div className="about-panel">
              <p>
                I am a data engineer based in {profile.location}, currently at{" "}
                {profile.employer}. I enjoy building reliable flows from source
                to storage to consumption, especially when the architecture is as
                interesting as the output.
              </p>
              <p>
                I would rather show shipped pipelines, real project depth, and
                the technical direction I am growing into than fill the page
                with generic portfolio noise.
              </p>
            </div>

            <div className="highlight-list">
              {highlights.map((item) => (
                <article key={item} className="highlight-card">
                  <span className="highlight-card__line" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionTitle
            eyebrow="Experience"
            title="Career progression from business analysis into data engineering."
            body="Shown as a compact LinkedIn-style progression so the transition is visible without overpowering the projects."
          />

          <div className="timeline timeline--single">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="timeline-card">
                <span className="timeline-card__kicker">{item.kicker}</span>
                <h3>{item.role}</h3>
                <p className="timeline-card__company">{item.company}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionTitle
            eyebrow="Projects"
            title="Selected builds across streaming, orchestration, APIs, analytics, and lakehouse exploration."
            body="The Iceberg proof of concept is explicitly shown as work in progress."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section" id="stack">
          <SectionTitle
            eyebrow="Stack"
            title="The tools behind ingestion, processing, orchestration, storage, and serving."
          />

          <div className="stack-grid">
            {stackGroups.map((group) => (
              <article key={group.title} className="stack-card">
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Open to interesting data engineering work and technical collaboration."
          />

          <div className="contact-panel">
            <div>
              <p>
                GitHub is the best place to inspect the actual project depth. Use
                the repo links above, then reach out if there is a fit.
              </p>
            </div>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
