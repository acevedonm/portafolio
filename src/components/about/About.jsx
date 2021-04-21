import React, { useState } from "react";
import style from "./about.module.css";
import imageNicoCordoba from "../../images/nicoCordoba.jpg";
import imageProfile from "../../images/profileAvatar.jpg";

const About = () => {
  var [image, setImage] = useState("../../images/nicoCordoba.jpg");

  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutDesc}>
        <h2>Hi! I'm Nico</h2>
        <h3>About me</h3>
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
          <br></br>
          ▪En mi tiempo libre voy al gimnasio o practico fútbol, el deporte que
          mas me gusta. Aunque mi hobbie preferido son los video juegos, soy un
          Gamer con todas las letras!
        </p>
        <p
          className={[style.separator, style.separatorTransparent].join(" ")}
        ></p>
      </div>
        <div className={style.aboutImg}>
          {/*         <img src={imageNicoCordoba} alt="about img" 
     onMouseOver={e => (e.currentTarget.src = imageProfile)} 
     onMouseOut={e => (e.currentTarget.src = imageNicoCordoba)}/> */}
          <img src={imageNicoCordoba} alt="about img" className={style.imageTop}/>
          <img src={imageProfile} alt="about img" className={style.imageBottom}/>
      </div>
    </div>
  );
};

export default About;
