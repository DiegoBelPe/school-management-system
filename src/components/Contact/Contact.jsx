import React from 'react';
import style from './Contact.module.css';

function Contact() {
  return (
    <div className={style.container__contact}>
      <div>
        <h2 className={style.contact__title}>Contactanos</h2>
      </div>

      <div className={style.contact__section}>

        <div>
          <form className={style.contact_form} box-shadow-1>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre *"
              title="Nombre sólo acepta letras y espacios en blanco"
              pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo *"
              title="Email incorrecto"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              required
            />
            <textarea
              name="comments"
              cols="50"
              rows="10"
              placeholder="Déjame tus comentarios *"
              required
            />
            <input className="btn" type="submit" value="ENVIAR MENSAJE" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
