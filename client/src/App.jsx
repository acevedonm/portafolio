import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import style from   "./App.css"

const App = () => {
  return (
   
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title= {<Link style={{textDecoration: 'none', color: 'white'}} to="/">Acevedo Nicolás Portfolio</Link>}
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title="Menu"
          >
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
