import React, { useState } from "react";

function Projects() {
  const [show, setShow] = useState(false);

  return (
    <section>
      <h2>Mes Projets</h2>

      {/* bouton */}
      <button onClick={() => setShow(!show)}>
        {show ? "Masquer les projets" : "Afficher les projets"}
      </button>

      {/* liste */}
      {show && (
        <ul>
          <li>📱 Application mobile de gestion de tâches</li>
          <li>🌐 Site e-commerce avec React</li>
          <li>👥 Application de gestion des utilisateurs (API)</li>
          <li>📝 Blog dynamique avec JavaScript</li>
        </ul>
      )}
    </section>
  );
}

export default Projects;