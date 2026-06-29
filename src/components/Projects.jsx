import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section" id="work">
      <Reveal>
        <SectionTitle
          eyebrow="Selected work"
          title="Pipelines, streams, and the systems around them."
          body="End-to-end builds across ingestion, processing, storage, and serving. Each links to its repository."
        />
      </Reveal>

      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
