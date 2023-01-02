import React, { useContext } from "react";
import Me from "../../img/facherito.jpeg";
import "./Intro.css";
import { ThemeContext } from "../../context";

function Intro() {
  const theme = useContext(ThemeContext);
  const { enEs, darkMode } = theme.state;

  return (
    <div className="info" id="sobre-mí">
      <div className="info-left">
        <div className="info-left-wrapper">
          <h2 className="info-intro">
            {enEs ? "Hi, my name is" : "Hola, mi nombre es"}
          </h2>
          <h1 className="info-name">José Ceballos</h1>
          <div className="info-title">
            <div className="info-title-wrapper">
              <div className="info-title-item">Web Developer</div>
              <div className="info-title-item">Front End</div>
              <div className="info-title-item">Back End</div>
              <div className="info-title-item">
                {enEs ? "Content Creator" : "Creador de Contenido"}
              </div>
              <div className="info-title-item">
                {enEs ? "And more :D" : "Y más :D"}
              </div>
            </div>
          </div>
          <p className="info-desc">
            {enEs
              ? "I am a web developer who focuses on the small details, and on simple, accessible and adaptable designs. Design and development services for clients of all sizes, specializing in the creation of modern and stylish websites, web services and online stores."
              : "Soy un desarrollador web que se enfoca en los pequeños detalles y en diseños simples, accesibles y adaptables. Diseño y desarrollo servicios para clientes de todos los tamaños, especializada en la creación de sitios web modernos y con estilo, servicios web y tiendas en línea."}
          </p>
          <div className="info-to-link">
            <a
              href={require("../../img/CV José Maria Ceballos.pdf")}
              id="enlaceDescargarPDF"
              style={{ color: darkMode ? "white" : "#222" }}
              download="Curriculum José Maria"
            >
              {enEs ? "Download CV" : "Descargar CV"}
            </a>
          </div>
        </div>
      </div>
      <div className="info-right">
        <div className="info-bg"></div>
        <img src={Me} alt="my-fotito" className="info-img" />
      </div>
    </div>
  );
}

export default Intro;
