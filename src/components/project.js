import React from "react";
import "../css/project.css";

export default function Project({ project }) {
  return (
    <div className="project-container" id={project.id}>
      <div className="project">
        <img className="project-gif" src={project.background} alt="" />
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-buttons">
            <a
              className="view-project-button"
              href={project.linkProject}
              target="_blank"
              rel="noreferrer"
            >
              Ver proyecto
            </a>
            <a
              className="view-code-button"
              href={project.linkRepo}
              rel="noreferrer"
              target="_blank"
            >
              <i className="icon-github"></i> Ver código
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
