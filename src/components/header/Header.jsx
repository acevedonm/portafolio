import React from 'react'
import style from "./header.module.css";
import Typed from "react-typed"
const Header = () => {
    return (
        <div className={style.headerWraper}>
            <div className={style.mainInfo}>
                <h1>Web Developer</h1>
                <Typed className={style.typedText} 
                strings={["HTML/CSS", "JavaScript" , "React", "Redux", "NodeJS","Express" ,"MySQL"]}
                typeSpeed={40}
                backSpeed={60}
                loop>
                </Typed>
            </div>
        </div>
    )
}

export default Header
