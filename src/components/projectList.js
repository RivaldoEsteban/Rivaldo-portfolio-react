import React, { useState } from "react";
import AllProjects from "./allProjects";
import BestProjects from "./bestProjects";
import "../css/project-list.css";

export default function ProjectList() {
  const [state, setState] = useState("project");
  return (
    <section
      className="project-list-container"
      aria-label="project-list"
      id="projects"
    >
      <div className="wrapper">
        <div>
          <h2 className="project-list-title">Proyectos</h2>
          {state === "project" ? (
            <BestProjects setState={setState} />
          ) : (
            <AllProjects setState={setState} />
          )}
        </div>
      </div>
    </section>
  );
}
