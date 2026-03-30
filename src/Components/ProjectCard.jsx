import React from "react";
import { NavLink } from "react-router-dom";

function ProjectCard({ title, image }) {
  return (
    <NavLink to={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`} className="project-card">

      <img src={image} alt={title} className="project-img" />

      <h3>{title}</h3>

     

    </NavLink>
  );
}

export default ProjectCard;