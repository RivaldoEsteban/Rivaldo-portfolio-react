import React from "react";
import Contact from "./contact";
import ProjectList from "./projectList";
export default function Main() {
  return (
    <main className="main-container">
      <ProjectList />
      <Contact />
    </main>
  );
}
