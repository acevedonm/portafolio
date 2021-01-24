import React from "react"
import { Grid, Cell } from "react-mdl"
import style from "./home.module.css"
import image from "../../images/Profile_avatar3.png"
import SocialFollow from "../socialFollow/SocialFollow"





const Home = () => {

    return (
        <div className={style.globalContainer}>
            <Grid className={style.gridContainer}>
                <Cell col={12}>
                    <div className={style.containerIMG}>
                    <img src={image}
                        alt="Profile Image"
                        className={style.avatarImg}></img>
                        </div>
                </Cell>

                <div className={style.bannerText}>
                    <h1>Full Stack Developer</h1>
                    <p>HTML/CSS | JavaScript | React | Redux | NodeJS | Express | MySQL</p>
                    <div className={[style.separator, style.separatorTransparent].join(" ")}></div>
                    <div>
                        <SocialFollow></SocialFollow>
                       
                    </div>
                </div>
            </Grid>
        </div>
    )
}

export default Home;