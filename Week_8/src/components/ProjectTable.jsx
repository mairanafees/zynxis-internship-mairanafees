import { ArrowUpRight } from "lucide-react";

function ProjectTable({ projects, compact = false }) {
  const displayedProjects = compact
    ? projects.slice(0, 4)
    : projects;

  return (
    <div className="table-wrapper">
      <table className="project-table">
        <thead>
          <tr>
            <th>PROJECT</th>
            <th>CLIENT</th>
            <th>PROGRESS</th>
            <th>STATUS</th>
            <th>DEADLINE</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {displayedProjects.map((project) => (
            <tr key={project.id}>
              <td>
                <div className="project-name-cell">
                  <div className="project-avatar">
                    {project.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{project.name}</strong>
                    <span>{project.category}</span>
                  </div>
                </div>
              </td>

              <td>
                <span className="muted-text">
                  {project.client}
                </span>
              </td>

              <td>
                <div className="progress-cell">
                  <div className="progress-bar">
                    <div
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>

                  <span>
                    {project.progress}%
                  </span>
                </div>
              </td>

              <td>
                <span
                  className={`status-badge ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </td>

              <td>
                <span className="muted-text">
                  {project.deadline}
                </span>
              </td>

              <td>
                <button className="table-action">
                  <ArrowUpRight size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;