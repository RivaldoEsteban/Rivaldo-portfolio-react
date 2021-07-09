import React, { useRef } from "react";
import "../css/project.css";

export default function Project({ project }) {
  const image = useRef(null);
  function handleProject() {
    image.current.src = project.gif;
  }
  function handleImage() {
    image.current.src = project.background;
  }
  return (
    <div
      className="project-container"
      id={project.id}
      onMouseEnter={handleProject}
      onMouseLeave={handleImage}
    >
      <div className="project">
        <img
          className="project-gif"
          src={project.background}
          alt={project.name}
          ref={image}
        />
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
