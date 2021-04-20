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
import About from "./components/aboutme/aboutme.jsx";

const App = () => {
  return (
    <div>
      <Layout fixedHeader>
        <NavBar />
        <DrawerNavigation />
        <Content>
          
          <Main />
          <About></About>
          <Projects></Projects>
        </Content>
        <Footer size="mini" style={{ backgroundColor: "white" }}>
          <FooterSection type="left" logo="Titulo o logo">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
