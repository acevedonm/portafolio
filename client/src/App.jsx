import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import style from "./app.module.css";
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
          className={[style.navBar,"mdl-layout__header"].join(" ")}
          title={
            <Link to="/" className={style.link}>
              Acevedo Nicolás Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link
              to="/certifications"
              className={style.link}
            >
              <FontAwesomeIcon
                icon={faHome}
                size="1x"
                style={{ marginRight: "1px", paddingRight: "1px" }}
              />
              Certifications
            </Link>
            <Link
              to="/aboutme"
              className={style.link}
            >
              <FontAwesomeIcon
                icon={faUser}
                size="1x"
                style={{ marginRight: "1px", paddingRight: "1px" }}
              />
              About Me
            </Link>
            <Link
              to="/projects"
              className={style.link}
            >
              <FontAwesomeIcon
                icon={faLaptopCode}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Projects
            </Link>
            <Link
              to="/contact"
              className={style.link}
            >
              <FontAwesomeIcon
                icon={faHandshake}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Contact
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
