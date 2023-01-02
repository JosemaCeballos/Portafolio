import React, { useContext } from "react";
import "./About.css";
import Me from "../../img/facherito.jpeg";
import html from "../../img/html.png";
import css from "../../img/css.png";
import javascript from "../../img/javascript.png";
import typescript from "../../img/typescript.png";
import react from "../../img/react.png";
import redux from "../../img/redux.png";
import nodejs from "../../img/nodejs.png";
import express from "../../img/pngegg.png";
import sql from "../../img/sql.png";
import postgresql from "../../img/postgresql.png";
import sequelize from "../../img/sequelize.png";
import git from "../../img/git.png";
import { ThemeContext } from "../../context";

function About() {
  const theme = useContext(ThemeContext);
  const { enEs } = theme.state;

  return (
    <div className="about" id="about-me">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Me} alt="my-ph" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">{enEs ? `${"About me"}` : "Sobre mí"}</h1>
        <p className="about-sub">
          {enEs
            ? `${"Web developer, technology lover, self-taught in new technologies, with great skills in the creation of applications."}`
            : "Desarrollador web, amante de la tecnología, autodidacta de nuevas tecnologías, con grandes habilidades en la creación de aplicaciones web"}
        </p>
        <p className="about-desc">
          {enEs
            ? `${"I have a great ability to work as part of a team and aim at new projects with greater enthusiasm. I highlight above all my desire to continue learning, helping and teaching in order to strengthen and obtain new skills."}`
            : "Poseo una gran capacidad para trabajar en equipo y apuntar a nuevos proyectos con mayor entusiasmo. Destaco sobre todo mis ganas de seguir aprendiendo, ayudando y enseñando para así fortalecer y poder obtener nuevas habilidades."}
        </p>
        <div className="about-technology">
          <img src={html} alt="html-logo" className="about-technology-img" />
          <img src={css} alt="css-logo" className="about-technology-img" />
          <img src={typescript} alt="typescript-logo" className="about-technology-img" />
          <img
            src={javascript}
            alt="javascript-logo"
            className="about-technology-img"
          />
        </div>
        <div className="about-technology">
          <img src={react} alt="react-logo" className="about-technology-img" />
          <img src={redux} alt="redux-logo" className="about-technology-img" />
          <img
            src={nodejs}
            alt="nodejs-logo"
            className="about-technology-img"
          />
          <img
            src={express}
            alt="express-logo"
            className="about-technology-img"
          />
        </div>
        <div className="about-technology">
          <img src={sql} alt="sql-logo" className="about-technology-img" />
          <img
            src={postgresql}
            alt="postgresql-logo"
            className="about-technology-img"
          />
          <img
            src={sequelize}
            alt="sequelize-logo"
            className="about-technology-img"
          />
          <img src={git} alt="git-logo" className="about-technology-img" />
        </div>
      </div>
    </div>
  );
}

export default About;
