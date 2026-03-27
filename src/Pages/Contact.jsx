import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="text" placeholder="Prenom" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Numero de telephone" required />
        <textarea placeholder="Votre message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;