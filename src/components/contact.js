import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <section className="contacto-container" aria-label="contact" id="contact">
      <form className="contacto-content">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-text">
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </p>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electronico" required />
        <button>
          <a
            href="mailto:rivadoestebang@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar mensaje
          </a>
        </button>
        <img className="gif-programador" src="gif/programador.gif" alt="" />
        <img className="vector" src="images/vector.svg" alt="" />
      </form>
    </section>
  );
}
