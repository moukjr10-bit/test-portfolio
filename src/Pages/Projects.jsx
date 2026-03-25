import React from "react";
import projects from "../Data/Project";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <section className="projects">

      <h1>Mes Projets</h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;