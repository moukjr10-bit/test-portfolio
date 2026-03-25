import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <h2>Mon Portfolio</h2>

      {/* MENU CENTRE */}
      <div className="nav-center">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/projects">Projets</NavLink>
        <NavLink to="/about">À propos</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* LOGIN DROITE */}
      <div className="nav-right">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;