import React from "react";
import Project from "./project";
import projectData from "../project-data";
import "../css/project-list.css";

export default function ProjectList() {
  function handleProjects() {
    console.log("hola");
  }
  return (
    <section className="project-list-container" aria-label="project-list">
      <div className="wrapper">
        <div>
          <h2 className="project-list-title">Proyectos</h2>
          <div className="project-list-content">
            {projectData.map((project, id) => {
              return <Project project={project} key={id} />;
            })}
          </div>
        </div>
        <button className="see-more" onClick={handleProjects}>
          Ver más
        </button>
      </div>
    </section>
  );
}
