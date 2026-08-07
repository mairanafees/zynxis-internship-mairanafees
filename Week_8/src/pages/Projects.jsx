import { Plus } from "lucide-react";

import PageHeader from "../components/PageHeader";
import ProjectTable from "../components/ProjectTable";

import { projects } from "../data/dashboardData";

function Projects() {
  return (
    <div className="page-content">
      <PageHeader
        eyebrow="WORKSPACE"
        title="Projects"
        description="Track and manage all active and completed client projects."
        action={
          <button className="primary-button">
            <Plus size={18} />
            New Project
          </button>
        }
      />

      <div className="project-summary">
        <div>
          <span>ALL PROJECTS</span>
          <strong>12</strong>
        </div>

        <div>
          <span>ACTIVE</span>
          <strong>6</strong>
        </div>

        <div>
          <span>IN PROGRESS</span>
          <strong>4</strong>
        </div>

        <div>
          <span>COMPLETED</span>
          <strong>2</strong>
        </div>
      </div>

      <div className="dashboard-card full-table-card">
        <ProjectTable projects={projects} />
      </div>
    </div>
  );
}

export default Projects;