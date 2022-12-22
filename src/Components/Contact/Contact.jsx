import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import whatsapp from "../../img/whatsapp.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const { darkMode, enEs } = theme.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_58tatnh",
      "template_xl2oujr",
      formRef.current,
      "5CNFvc4LJJCmVsmg4"
    );
    setDone(!done);
  };

  const creationStatus = () => {
    if (done === true) {
      Swal.fire({
        icon: "success",
        text: "Mensaje enviado con éxtio",
        confirmButtonText: "Great!",
        customClass: {
          container: "popup-container",
          popup: "popup",
          confirmButton: "confirm",
          denyButton: "deny",
          cancelButton: "cancel",
        },
      }).then((r) => {
        if (r.isConfirmed) {
          setDone(!done);
        }
      });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">
            {enEs ? `${"Contact me"}` : "Contactame"}
          </h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img
                src={whatsapp}
                alt="whatsapp-logo"
                className="contact-icon"
              />
              <a
                style={{ color: darkMode && "white" }}
                href="http://wa.me/+5493816856060"
                target="__blank"
                className="contact-link"
              >
                +54 9 3816856060
              </a>
            </div>
            <div className="contact-info-item">
              <img
                src={linkedin}
                alt="linkedin-logo"
                className="contact-icon"
              />
              <a
                style={{ color: darkMode && "white" }}
                href="https://www.linkedin.com/in/jose-maria-ceballos-a3379524a/"
                target="__blank"
                className="contact-link"
              >
                José Maria Ceballos
              </a>
            </div>
            <div className="contact-info-item">
              <img src={github} alt="github-logo" className="contact-icon" />
              <a
                style={{ color: darkMode && "white" }}
                href="https://github.com/JosemaCeballos"
                target="__blank"
                className="contact-link"
              >
                JosemaCeballos
              </a>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>
              {enEs ? `${"Do you want to contact me?"}` : "¿Deseas contactarme?"}
            </b>
            {enEs
              ? `${" Write your message here:"}`
              : " Escribe tu mensaje aquí:"}
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333", color: darkMode ? "#FFFFFF" : "#222" }}
              type="text"
              placeholder={enEs ? "Name" : "Nombre"}
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333", color: darkMode ? "#FFFFFF" : "#222" }}
              type="text"
              placeholder={enEs ? "Subject" : "Asunto"}
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333", color: darkMode ? "#FFFFFF" : "#222" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333", color: darkMode ? "#FFFFFF" : "#222" }}
              rows="5"
              placeholder={
                enEs
                  ? "Write here the message..."
                  : "Escribe aquí el mensaje..."
              }
              name="message"
            />
            <button onClick={creationStatus()}>
              {enEs ? "Send" : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
