import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { profile } from "../data/portfolioData";

function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <Reveal>
        <div className="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Open to data engineering work and technical collaboration."
          />
          <p className="contact__copy">
            GitHub shows the real depth — start with the repos above, then reach
            out if there's a fit.
          </p>
          <div className="contact__links">
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
      </Reveal>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js</span>
      </footer>
    </section>
  );
}

export default Contact;
