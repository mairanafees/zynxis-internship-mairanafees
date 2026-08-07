import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Weather Dashboard",
    category: "API APPLICATION",
    description:
      "A responsive weather application that retrieves live weather information through an external API.",
    image:
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=75",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "E-Commerce Interface",
    category: "WEB APPLICATION",
    description:
      "A modern shopping interface featuring product cards, cart interactions, and responsive layouts.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=75",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Analytics Dashboard",
    category: "DATA INTERFACE",
    description:
      "A clean dashboard interface designed to present information through organized visual components.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=75",
    tech: ["React", "UI", "Charts"],
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">02 — PROJECTS</p>

        <h2>Selected frontend work.</h2>

        <p>
          Images below use native browser lazy loading so resources are
          downloaded when they become relevant to the user.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;