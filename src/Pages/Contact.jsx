import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="Nom" placeholder="KANTE" required />
        <input type="Prenom" placeholder="Moussa" required />
        <input type="email" placeholder="moukjr10@gmail.com" required />
        <input type="Numero" placeholder="777765826" required />
        <textarea placeholder="Votre message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;