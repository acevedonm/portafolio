import React from "react";
import style from "./aboutme.module.css";
import SocialFollow from "../socialFollow/SocialFollow";
import techs from "../projects/data/techs";
import TechsList from "../projects/techsCard/TechsList";

const AboutMe = () => {
  var techsArray = [];
  for (const property in techs) {
    techsArray.push(techs[property]);
  }

  return (
    <div className={style.globalContainer}>
      <div className={style.bannerText}>
        <p>
          <p
            className={[style.separator, style.separatorTransparent].join(" ")}
          ></p>
          <h3>Hard Skills:</h3>

          <TechsList techs={techsArray}></TechsList>

          <h3>Soft Skills:</h3>
          <p>
            Adaptable | Muy Versátil | Control Emocional | Sociable |
            Autocrítico | Receptivo | Comunicativo | Trabajo en Equipo |
            Habilidad para Trabajar Bajo Presión.
          </p>
          <p
            className={[style.separator, style.separatorTransparent].join(" ")}
          ></p>
          <p>
            Contacto: 📩acevedonm@gmail.com 📲 +542323-611132
            💻https://github.com/acevedonm
          </p>
        </p>
        <div className={style.socialBar}>
          <SocialFollow></SocialFollow>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
