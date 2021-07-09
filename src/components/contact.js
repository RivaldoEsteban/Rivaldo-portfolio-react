import React from "react";
import "../css/contact.css";
import { useForm } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xeqvljyy");
  if (state.succeeded) {
    console.log("mensaje enviado correctamente , revisa tu email");
  }

  return (
    <section className="contacto-container" aria-label="contact" id="contact">
      <form
        className="contacto-content"
        action="https://formspree.io/f/xeqvljyy"
        method="POST"
        id="form"
        onSubmit={handleSubmit}
      >
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-text">
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </p>
        <input type="text" name="name" placeholder="juan carlos" required />
        <input
          type="email"
          name="email"
          placeholder="pepito_x8@gmail.com"
          required
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button type="submit" disabled={state.submitting}>
          Enviar mensaje
        </button>
        <img className="gif-programador" src="gif/programador.gif" alt="" />
        <img className="vector" src="images/vector.svg" alt="" />
      </form>
    </section>
  );
}
