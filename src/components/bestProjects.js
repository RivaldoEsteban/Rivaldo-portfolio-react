import React from "react";
import bestProjects from "../bestProjects";
import Project from "./project";
export default function BestProjects({ setState }) {
  function best() {
    setState("allProjects");
  }

  return (
    <>
      <div className="project-list-content">
        {bestProjects.map((project, id) => {
          return <Project project={project} key={id} />;
        })}
      </div>
      <button className="see-more" onClick={best}>
        Ver más
      </button>
    </>
  );
}
