import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import style from "./app.module.css";
import "./app.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faHome,
  faLaptop,
  faLaptopCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {

  return (
    <div>
      <Layout>
        <Header
          className={style.navBar}
          title={
            <Link to="/" className={style.link}>
              Acevedo Nicolás Portfolio
            </Link>
          }
          scroll
        >
          <Navigation style={{display: "flex", justifyContent: "center"}}>
            <Link
              to="/certifications"
              className={style.link}
            >
              <div style={{ background: "red",display: "flex" , justifyContent: "center", alignItems: "center"}}>
              <FontAwesomeIcon
                icon={faHome}
                size="1x"
                style={{ marginRight: "1px", paddingRight: "1px" }}
              />  
              Certifications
              </div>
            </Link>
            <Link
              to="/aboutme"
              className={style.link}
            >
              <div style={{ background: "red",display: "flex" , justifyContent: "center", alignItems: "center"}}>
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                style={{ marginRight: "1px", paddingRight: "1px" }}
              />
              About Me
              </div>
            </Link>
            <Link
              to="/projects"
              className={style.link}
            >
               <div style={{ background: "red",display: "flex" , justifyContent: "center", alignItems: "center"}}>
              <FontAwesomeIcon
                icon={faLaptopCode}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Projects
              </div>
            </Link>
            <Link
              to="/contact"
              className={style.link}
            >
              <div style={{display: "flex" , justifyContent: "center", alignItems: "center"}}>
              <FontAwesomeIcon
                icon={faHandshake}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Contact
              </div>
            </Link>
          </Navigation>
        </Header>
        <Drawer className={style.drawer}>
          <Navigation>
            <Link to="/" className={style.link}>Home</Link>  
            <Link to="/certifications" className={style.link}>Certifications</Link>
            <Link to="/aboutme" className={style.link}>About Me</Link>
            <Link to="/projects" className={style.link}>Projects</Link>
            <Link to="/contact" className={style.link}>Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          {/* INSERTO EL ROUTER EN EL CONTENIDO DE LA WEB */}
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
