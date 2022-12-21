import React, { useState, useContext } from "react";
import "./Projects.css";
import Viewer from "react-viewer";
import { ThemeContext } from "../../context";

function Projects() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const theme = useContext(ThemeContext);
  const { darkMode, enEs } = theme.state;

  let imagenes = [
    require("../../img/Chilly.png"),
    require("../../img/Chilly2.png"),
    require("../../img/Chilly3.png"),
    require("../../img/Chilly4.png"),
  ];

  let imagenes2 = [
    require("../../img/WeatherApp.png"),
    require("../../img/WeatherApp2.png"),
    require("../../img/WeatherApp3.png"),
    require("../../img/WeatherApp4.png"),
    require("../../img/WeatherApp5.png"),
    require("../../img/WeatherApp6.png"),
  ];

  let imagenes3 = [
    require("../../img/Foods.png"),
    require("../../img/Foods2.png"),
    require("../../img/Foods3.png"),
    require("../../img/Food4.png"),
    require("../../img/Food5.png"),
    require("../../img/Food6.png"),
  ];

  return (
    <div className="project-container" id="projects">
      <div className="project-title-first">
        {enEs ? `${"My Projects"}` : "Mis Proyectos"}
      </div>
      <div className="project">
        <div className="project-left">
          <div className="project-left-wrapper">
            <h1 className="project-title">Chilly E-Commerce</h1>
            <p>
              {enEs
                ? `${"E-Commerce that fulfills all the functionalities of one, and also has other very special features, such as the option to build your own computer, obtaining only compatible products."}`
                : "E-Commerce que cumple con todas las funcionalidades de una, y además cuenta con otras que son muy especiales, cómo la opción de armar tu propia computadora obteniendo solo productos compatibles."}
            </p>
            <div className="project-to-link">
              <a
                href="https://github.com/cinthiapiera/PF-Chilly"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                {enEs ? `${"Repository"}` : "Repositorio"}
              </a>
              <a
                href="https://chilly-production.up.railway.app"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Deploy
              </a>
            </div>
            <div className="project-con-img">
              {imagenes.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="project-img"
                    className="project-img2"
                    onClick={() => {
                      setVisible(true);
                    }}
                  />
                );
              })}
              <Viewer
                visible={visible}
                onClose={() => {
                  setVisible(false);
                }}
                images={[
                  { src: imagenes[0], alt: "home-page" },
                  { src: imagenes[1], alt: "store-page" },
                  { src: imagenes[2], alt: "detail-page" },
                  { src: imagenes[3], alt: "panel-admin-page" },
                ]}
                zoomable={true}
              />
            </div>
          </div>
        </div>
        <div className="project-medium">
          <div className="project-medium-wrapper">
            <h1 className="project-title">Food's Api</h1>
            <p>
              Aplicación web en la cuál se puede visualizar los climas de las
              ciudades que uno busque a través de una searchbar. El clima que el
              usuario obtendrá, es el clima a horario real en el que haya sido
              buscado.
            </p>
            <div className="project-to-link">
              <a
                href="https://github.com/JosemaCeballos/Weather-App"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                {enEs ? `${"Repository"}` : "Repositorio"}
              </a>
              <a
                href="https://github.com/JosemaCeballos/Weather-App"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Deploy
              </a>
            </div>
            <div className="project-con-img">
              {imagenes3.slice(0, 4).map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="project-img"
                    className="project-img2"
                    onClick={() => {
                      setVisible3(true);
                    }}
                  />
                );
              })}
              <Viewer
                visible={visible3}
                onClose={() => {
                  setVisible3(false);
                }}
                images={[
                  { src: imagenes3[0], alt: "landing-page" },
                  { src: imagenes3[1], alt: "recipes-page" },
                  { src: imagenes3[2], alt: "detail-recipe-page" },
                  { src: imagenes3[3], alt: "create-recipe" },
                  { src: imagenes3[4], alt: "recipes-responsive-page" },
                  { src: imagenes3[5], alt: "detail-responsive-page" },
                ]}
                zoomable={true}
              />
            </div>
          </div>
        </div>
        <div className="project-right">
          <div className="project-right-wrapper">
            <h1 className="project-title">Weather App</h1>
            <p>
              {enEs
                ? `${"Web application in which you can visualize the weather of the cities you are looking for through a searchbar. The weather that the user will get is the real time weather in the city where it has been searched."}`
                : "Aplicación web en la cuál se puede visualizar los climas de las ciudades que uno busque a través de una searchbar. El clima que el usuario obtendrá, es el clima a horario real en el que haya sido buscado."}
            </p>
            <div className="project-to-link">
              <a
                href="https://github.com/JosemaCeballos/PI-Foods/tree/main/PI%20Foods/PI-Food-main"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                {enEs ? `${"Repository"}` : "Repositorio"}
              </a>
              <a
                href="https://github.com/JosemaCeballos/PI-Foods/tree/main/PI%20Foods/PI-Food-main"
                target="__blank"
                className="project-link"
                style={{ color: darkMode ? "white" : "#222" }}
              >
                Deploy
              </a>
            </div>
            <div className="project-con-img">
              {imagenes2.slice(0, 4).map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="project-img"
                    className="project-img2"
                    onClick={() => {
                      setVisible2(true);
                    }}
                  />
                );
              })}
              <Viewer
                visible={visible2}
                onClose={() => {
                  setVisible2(false);
                }}
                images={[
                  { src: imagenes2[0], alt: "weather-app" },
                  { src: imagenes2[1], alt: "weather-app" },
                  { src: imagenes2[4], alt: "weather-responsive-app" },
                  { src: imagenes2[5], alt: "weather-responsive-app" },
                ]}
                zoomable={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
