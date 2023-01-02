import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../context";

function Footer() {
  const theme = useContext(ThemeContext);
  const { enEs } = theme.state;
  return (
    <>
      <div className="footer">
        {enEs
          ? `${"Portfolio created by José Maria Ceballos"}`
          : "Portafolio creado por José Maria Ceballos"}
      </div>
      <div className="none">
        Desarrollador web Full Stack, entusiasta y amante de la tecnología,
        autodidacta para el aprendizaje de nuevas habilidades, con capacidad en
        la creación de aplicaciones utilizando tecnologías web destacando la
        solución de problemas en el entorno y en equipo mediante el uso de
        tecnologías web. Me gusta incrementar mis habilidades blandas y
        tecnológicas para ser un valor agregado potencial en cualquier grupo de
        trabajo, buscando aprender nuevas herramientas, técnicas y formas de
        aumentar la productividad y eficiencia. Busco colaborar en proyectos que
        tengan impacto, para obtener un crecimiento y aprendizaje para lograr
        mejorar como profesional y persona. Mi fascinación es la tecnología, el
        mundo del desarrollo y la creación de aplicaciones y funcionalidades web
        de la mano de la programación. Realice el bootcamp de desarrollador web
        fullstack en SOY HENRY, más de 800 horas donde aprendí diversas
        tecnologías como: HTML, CSS, JS, React, Redux, Redux Toolkit,
        Typescript, Node, Express, PosgresSQL, Sequileze, NodeJS, Express,
        Styled Component, Sass, entre otras. Además de esto, poseo algunos
        conocimientos en diseño y en responsive design, cosa que es de lo que
        más disfruto al momento de trabajar con el rol de desarrollador front
        end. Mi pasión es el aprendizaje y aplicar dicho conocimiento en
        resolver problemas y crear aplicaciones web de impacto, y a su vez,
        aprender de otras personas para así poder mis conocimientos sobre el
        desarrollo web.
        <br />
        Esta etiqueta fue usada de manera estrategica para ser beneficiado por
        la busqueda de google, para así optimizar la cantidad de contenido a
        mostrar sin cargar excesivamente mi página web. Espero disfruten del
        diseño que implemente a mi portafolio y puedan indagar en las librerías
        usadas para el diseño del mismo, saludos!.
      </div>
    </>
  );
}

export default Footer;
