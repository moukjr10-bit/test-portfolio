import React from "react";
import photo from "../assets/photo/photo.jpg";

function Home() {
  return (
    <section className="home">

       <img src={photo} alt="Photo de profil" className="profile-img" />

       <div>
         <h1>Bienvenue sur mon portfolio</h1>
              <h2>Je suis Moussa Kanté</h2>
            <p>
               Je suis étudiant en développement web et mobile à l’ISEP, passionné par la création
               d’applications modernes et performantes. J’ai réalisé plusieurs projets en React et
               JavaScript, et je cherche toujours à améliorer mes compétences.
            </p>
      </div>
    </section>
  );
}

export default Home;