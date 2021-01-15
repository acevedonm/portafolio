import React from "react"
import { Grid, Cell } from "react-mdl"
import style from "./landingpage.module.css"



const LandingPage = () => {

    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className={style.landingGridColor}>
                <Cell col={12}>
                    <img src="https://cdn.pixabay.com/photo/2017/12/16/06/41/avatar-3022215_960_720.jpg"
                        alt="avatar"
                        className={style.avatarImg}></img>
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