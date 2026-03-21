function ProjectCard({ project }) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card__top">
        <span className={`status-pill status-pill--${project.accent}`}>
          {project.status}
        </span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>

      <ul className="project-highlights">
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

      <div className="project-links">
        <a href={project.repo} target="_blank" rel="noreferrer">
          View Repository
        </a>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noreferrer">
            Open Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
