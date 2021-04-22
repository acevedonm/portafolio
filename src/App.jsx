import React, { useState, useEffect } from "react";
import { Layout, Content, FooterSection, FooterLinkList } from "react-mdl";
import Main from "./components/main.jsx";
import "./style/mdl.css";
import "./App.css"
import NavBar from "./components/navigation/navBar/NavBar";
import DrawerNavigation from "./components/navigation/drawerNavigation/drawerNavigation";
import Cover from "./components/cover/Cover.jsx";
import Projects from "./components/projects/projects.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Header from "./components/header/Header.jsx";
import Motivation from "./components/motivation/Motivation.jsx";
import Footer from "./components/footer/Footer.jsx";
import SocialFollow from "./components/socialFollow/SocialFollow.jsx";

const App = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar isScrolling={scrollHeight} />
      <DrawerNavigation />
      <Content>
        <Cover></Cover>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Motivation></Motivation>
        <Footer></Footer>
        </Content>
    </div>
  );
};

export default App;
