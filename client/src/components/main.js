import React from "react";
import LandingPage from "./landingpage.jsx";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Project from "./projects";
import Resume from "./resume";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route  path="/aboutme" component={AboutMe}></Route>
      <Route  path="/contact" component={Contact}></Route>
      <Route  path="/projects" component={Project}></Route>
      <Route  path="/resume" component={Resume}></Route>
    </Switch>
  );
};

export default Main;
