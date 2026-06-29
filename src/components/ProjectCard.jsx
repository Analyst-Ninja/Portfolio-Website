function ProjectCard({ project }) {
  return (
    <article
      className={`project-card project-card--${project.accent}`}
      data-accent={project.accent}
    >
      <div className="project-card__head">
        <span className="status-pill">{project.status}</span>
        <h3>{project.title}</h3>
      </div>

      <p className="project-card__summary">{project.summary}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="tag-row">
        {project.stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>

      <div className="project-card__links">
        <a href={project.repo} target="_blank" rel="noreferrer">
          Repository <span aria-hidden="true">↗</span>
        </a>
        {project.live ? (
          <a
            className="project-card__links-demo"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live demo <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
