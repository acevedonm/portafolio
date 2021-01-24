import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import style from "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faHome,
  faLaptop,
  faLaptopCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const colorYellow = '#d3a625'
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: colorYellow }} to="/">
              Acevedo Nicolás Portfolio
            </Link>
          }
          scroll
        >
          <Navigation className={style.navBar}>
            <Link to="/resume" style={{color:colorYellow, fontWeight: 'bold'}}>
              <FontAwesomeIcon
                color={colorYellow}
                icon={faHome}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Resume
            </Link>
            <Link to="/aboutme" style={{color:colorYellow, fontWeight: 'bold'}}>
              <FontAwesomeIcon
                color={colorYellow}
                icon={faUser}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              About Me
            </Link>
            <Link to="/projects" style={{color:colorYellow, fontWeight: 'bold'}}>
              <FontAwesomeIcon
                color={colorYellow}
                icon={faLaptopCode}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Projects
            </Link>
            <Link to="/contact" style={{color:colorYellow, fontWeight: 'bold'}}>           
              <FontAwesomeIcon
                color={colorYellow}
                icon={faHandshake}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer title="Menu"  style={{background: 'black', color: '#d3a625'}}>
          <Navigation style={{borderColor: 'red'}}>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
