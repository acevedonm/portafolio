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
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Acevedo Nicolás Portfolio
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/resume">
              <FontAwesomeIcon
                color="white"
                icon={faHome}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Resume
            </Link>
            <Link to="/aboutme">
              <FontAwesomeIcon
                color="white"
                icon={faUser}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              About Me
            </Link>
            <Link to="/projects">
              <FontAwesomeIcon
                color="white"
                icon={faLaptopCode}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />
              Projects
            </Link>
            <Link to="/contact">           
              <FontAwesomeIcon
                color="white"
                icon={faHandshake}
                size="1x"
                style={{ margin: "1px", padding: "1px" }}
              />Contact
            </Link>
          </Navigation>
        </Header>
        <Drawer title="Menu" style={{background: "black", color:'red'}}>
          <Navigation>
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
