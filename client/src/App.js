import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div style={{ height: "300px", position: "relative" }}>
      <Layout
        style={{
          background:
            "url('https://justresults.co.nz/wp-content/uploads/2015/10/web-developer-banner.png') center / cover",
        }}
      >
        <Header transparent title="Acevedo Nicolas" style={{ color: "white" }}>
          <Navigation>
            <Link to="resume">Resume</Link>
            <Link to="aboutme">About Me</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <Link to="resume">Resume</Link>
            <Link to="aboutme">About Me</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main></Main>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
