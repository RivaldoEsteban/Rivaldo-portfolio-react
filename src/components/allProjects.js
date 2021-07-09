import React from "react";
import allProjects from "../allProjects";
import Project from "./project";

export default function AllProjects({ setState }) {
  function all() {
    setState("bestProjects");
  }

  return (
    <>
      <div className="project-list-content">
        {allProjects.map((project, id) => {
          return <Project project={project} key={id} />;
        })}
      </div>
      <button className="see-more" onClick={all}>
        Ver más
      </button>
    </>
  );
}
