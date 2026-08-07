function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-content">
        <span>{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-list">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;