import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOn, setIsOn] = useState(false);

  return (
    <nav className="navbar">
      <h2>Mon Navbar</h2>

      {/* MENU CENTRE */}
      <div className="nav-center">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/projects">Projets</NavLink>
        <NavLink to="/about">À propos</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      {/* BOUTON ON/OFF */}
      <div className="nav-right">
        <button onClick={() => setIsOn(!isOn)}
         className="login-btn">
          {isOn ? "ON" : "OFF"}
          
        </button>
      </div>
    </nav>
  );
}

export default Navbar;