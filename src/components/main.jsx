import React from "react";
import Home from "./home/home.jsx";
import Skills from "./skills/Skills.jsx";
import Contact from "./contact";
import Project from "./projects/projects.jsx";
import Education from "./education/education";
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header"
import Cover from "./cover/Cover.jsx";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/portafolio" component={Home}></Route>
      <Route  path="/portafolio/aboutme" component={Skills}></Route>
      <Route  path="/portafolio/contact" component={Contact}></Route>
      <Route  path="/portafolio/projects" component={Project}></Route>
      <Route  path="/portafolio/education" component={Education}></Route>
      <Route  path="/portafolio/header" component={Header}></Route>
      <Route  path="/portafolio/cover" component={Cover}></Route>
    </Switch>
  );
};

export default Main;

