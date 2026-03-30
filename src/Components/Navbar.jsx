import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar">
      
      <h2>Mon Portfolio</h2>

      {/* MENU NORMAL */}
      <div className="nav-center">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/projects">Projets</NavLink>
        <NavLink to="/about">À propos</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* DROITE */}
      <div className="nav-right">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

        {/* MENU ICON */}
        <IoMenu 
          className="menu-icon" 
          onClick={() => setOpenMenu(!openMenu)} 
          size={30} 
        />
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${openMenu ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setOpenMenu(false)}>Accueil</NavLink>
        <NavLink to="/projects" onClick={() => setOpenMenu(false)}>Projets</NavLink>
        <NavLink to="/about" onClick={() => setOpenMenu(false)}>À propos</NavLink>
        <NavLink to="/contact" onClick={() => setOpenMenu(false)}>Contact</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;