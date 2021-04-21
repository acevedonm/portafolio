import React from "react";
import {
  Layout,
  Content,
  Footer,
  FooterSection,
  FooterLinkList,
} from "react-mdl";
import Main from "./components/main.jsx";
import "./style/mdl.css";
import NavBar from "./components/navigation/navBar/navBar";
import DrawerNavigation from "./components/navigation/drawerNavigation/drawerNavigation";
import Cover from "./components/cover/Cover.jsx";
import Projects from "./components/projects/projects.jsx";
import About from "./components/about/About.jsx";
import AboutMe from "./components/aboutme/AboutMe.jsx";
import Header from "./components/header/Header.jsx";

const App = () => {
  return (

    <Layout fixedHeader>

      <NavBar />
      <DrawerNavigation />
      <Content>
        <Cover></Cover>
        <About></About>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Header></Header>
      </Content>
      {/*         <Footer size="mini" style={{ backgroundColor: "white" }}>
          <FooterSection type="left" logo="Titulo o logo">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer> */}
    </Layout>

  );
};

export default App;
