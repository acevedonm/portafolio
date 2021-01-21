import React from "react";
import style from './aboutme.module.css'

const About = () => {
  return (
    <div>
      <h1>SOBRE MI</h1>
      <h2>💻FULL STACK DEVELOPER</h2>
      <p>
        <p>
          ▪Apasionado de la programación, me encanta encontrar soluciones
          óptimas y rápidas a los problemas, mirandolos desde diferentes
          perspectivas.
        </p>
        <p>
          ▪Muy sociable y también competitivo, en constante aprendizaje. Mi
          curiosidad me ha llevado a estudiar muchas tecnologías de forma
          autodidacta.
        </p>
        <p>▪Nivel intermedio de inglés y mejorando. </p>
        <p>
          ▪Estudiando la carrera Lic. en Sistemas en la Universidad Nacional de Luján.{" "}
        </p>
        <p>
          ▪Actualmente desarrollando proyectos freelance usando metodologias
          agiles (SCRUM) y PERN Stack (postgreSQL, ExpressJS, ReactJS y NodeJS)
          + Sequelize
        </p>
        <h3>Hard Skills:</h3>
        <p>
          GIT | Javascript | React | Java | Python | HTML | CSS | Redux | Node
          JS | Express | SQL | Sequalize
        </p>
        <h3>Soft Skills:</h3>
        <p>
          Adaptable | Muy Versátil | Control Emocional | Sociable | Autocrítico |
          Receptivo | Comunicativo | Trabajo en Equipo | Habilidad para Trabajar
          Bajo Presión.
        </p>
        <p>
          Contacto: 📩acevedonm@gmail.com 📲 +542323-611132
          💻https://github.com/acevedonm
        </p>
      </p>
      {               /*  <div className={style.bannerText}>
                    <h1>Full Stack Developer</h1>
                    <p>HTML/CSS | JavaScript | React | Redux | NodeJS | Express | MySQL</p>
                    <div className={[style.separator, style.separatorTransparent].join(" ")}></div>
                </div> */}
    </div>
  );
};

export default About;
