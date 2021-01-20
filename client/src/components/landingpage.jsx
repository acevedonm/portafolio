import React from "react"
import { Grid, Cell } from "react-mdl"
import style from "./landingpage.module.css"
import image from "../images/Profile_avatar2.jpeg"



const LandingPage = () => {

    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className={style.landingGridColor}>
                <Cell col={12}>
                    <div style={{borderRadius: "10%"}}>
                    <img src={image}
                        alt="Profile Image"
                        className={style.avatarImg}></img>
                        </div>
                </Cell>

                <div className={style.bannerText}>
                    <h1>Full Stack Developer</h1>
                    <hr></hr>
                    <p>HTML/CSS | JavaScript | React | Redux | NodeJS | Express | MySQL</p>
                </div>
            </Grid>
        </div>
    )
}

export default LandingPage;