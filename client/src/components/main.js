import React from "react";
import Home from "./home/home.jsx";
import AboutMe from "./aboutme/aboutme.jsx";
import Contact from "./contact";
import Project from "./projects/projects.jsx";
import Resume from "./resume";
import { Switch, Route } from "react-router-dom";


const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route  path="/aboutme" component={AboutMe}></Route>
      <Route  path="/contact" component={Contact}></Route>
      <Route  path="/projects" component={Project}></Route>
      <Route  path="/resume" component={Resume}></Route>
    </Switch>
  );
};

export default Main;

