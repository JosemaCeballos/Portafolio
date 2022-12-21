import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../context";

function Footer() {
  const theme = useContext(ThemeContext);
  const { enEs } = theme.state;
  return (
    <div className="footer">
      {enEs
        ? `${"Portfolio created by José Maria Ceballos"}`
        : "Portafolio creado por José Maria Ceballos"}
    </div>
  );
}

export default Footer;
