import React from "react";
import style from "./aboutme.module.css";
import SocialFollow from "../socialFollow/SocialFollow";

const About = () => {
  return (
    <div className={style.globalContainer}>
      <div className={style.bannerText}>
        <h1>SOBRE MI</h1>
        <h2>💻FULL STACK DEVELOPER</h2>
        <p>
          ▪Apasionado de la programación, me encanta encontrar soluciones
          óptimas y rápidas a los problemas, mirandolos desde diferentes
          perspectivas.
          <br></br>
          ▪Muy sociable y también competitivo, en constante aprendizaje. Mi
          curiosidad me ha llevado a estudiar muchas tecnologías de forma
          autodidacta.
          <br></br>
          ▪Nivel intermedio de inglés y mejorando.
          <br></br>
          ▪Estudiando la carrera Lic. en Sistemas en la Universidad Nacional de
          Luján.
          <br></br>
          ▪Actualmente desarrollando proyectos freelance usando metodologias
          agiles (SCRUM) y PERN Stack (postgreSQL, ExpressJS, ReactJS y NodeJS)
          + Sequelize
          <p
            className={[style.separator, style.separatorTransparent].join(" ")}
          ></p>
          <h3>Hard Skills:</h3>
          <p>
            GIT | Javascript | React | Java | Python | HTML | CSS | Redux | Node
            JS | Express | SQL | Sequalize
          </p>
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

export default About;
