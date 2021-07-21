import React from "react";
import allProjects from "../allProjects";
import Project from "./project";

export default function AllProjects() {
  return (
    <>
      <div className="project-list-content">
        {allProjects.map((project, id) => {
          return <Project project={project} key={id} />;
        })}
      </div>
    </>
  );
}
