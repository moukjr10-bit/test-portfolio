import React from "react";

function ProjectCard({ title, image }) {
  return (
    <div className="project-card">

      <img src={image} alt={title} className="project-img" />

      <h3>{title}</h3>

     

    </div>
  );
}

export default ProjectCard;