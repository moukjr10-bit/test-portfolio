import React from "react";
import projects from "../Data/Project";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <section className="projects">

      <h1>Mes Projets</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;