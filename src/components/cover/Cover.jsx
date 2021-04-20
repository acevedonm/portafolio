import React from "react";
import style from "./cover.module.css";
import video from "../../images/coding.mp4";
import Typed from "react-typed"
const Cover = () => {
  return (
    <div className={style.coverContainer}>
      <video className={style.video} src={video} autoPlay loop muted />
  
                <h1>Acevedo Nicolas</h1>
                <h2>Full Stack Developer</h2>
                <Typed className={style.typedText} 
                strings={["HTML/CSS", "JavaScript" , "React", "Redux", "NodeJS","Express" ,"MySQL"]}
                typeSpeed={40}
                backSpeed={60}
                loop>
                </Typed>

    </div>
  );
};

export default Cover;
