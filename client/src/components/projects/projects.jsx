import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";
import style from "./projects.module.css";
import projectsData from "../projects/projectsData";
import ProjectCard from "./projectCard.jsx";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleCategories = () => {
    switch (activeTab) {
      case 0:
        let long = projectsData.web.length;
        let cantWorking = 0
        while (long % 3 !== 0) {
          cantWorking++;
          long++
        }
        for (let i = 0; i < cantWorking; i++) {
          return <ProjectCard project={projectsData.working[0]}></ProjectCard> 
        }
        return (
          <>
            {projectsData.web.map((project) => {
              return (
              <ProjectCard project={project}></ProjectCard>)
            })}
          </>
        );
        break;
      case 1:
        return (
          <>
            {projectsData.mobile.map((project) => {
              return <ProjectCard project={project}></ProjectCard>;
            })}
          </>
        );
        break;
      case 2:
        if (activeTab === 2)
          return (
            <>
              {projectsData.other.map((project) => {
                return <ProjectCard project={project}></ProjectCard>;
              })}
            </>
          );
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.tabsContainer}>
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple
        tabBarProps={{ style: MDLStyle.tabs }}
      >
        <Tab style={{ color: "white" }}>Web</Tab>
        <Tab style={{ color: "white" }}>Mobile</Tab>
        <Tab style={{ color: "white" }}>Other</Tab>
      </Tabs>
      <Grid>{toggleCategories()}</Grid>
    </div>
  );
};

export default Projects;

const MDLStyle = {
  tabs: {
      background: "none",
      color: "#FFFFFF",
      textShadow: "0 0 10px #FFFFFF",
  }
};
