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
import "../../style/mdl.css"
import projectsData from "../projects/projectsData";
import ProjectCard from "./projectCard.jsx";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleCategories = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            {projectsData.web.map((project) => {
              return (
                <ProjectCard
                  project={project}
                  key={project.name}
                ></ProjectCard>
              );
            })}
          </>
        );
        break;
      case 1:
        return (
          <>
            {projectsData.mobile.map((project) => {
              return (
                <ProjectCard
                  project={project}
                  colNum={projectsData.mobile.length}
                ></ProjectCard>
              );
            })}
          </>
        );
        break;
      case 2:
        if (activeTab === 2)
          return (
            <>
              {projectsData.other.map((project) => {
                return (
                  <ProjectCard
                    project={project}
                    colNum={projectsData.other.length}
                  ></ProjectCard>
                );
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
        className={style.tabs}
      >
        <Tab className={ (activeTab==0) ? style.tabActive : style.tab}>Web</Tab>
        <Tab className={(activeTab==1) ? style.tabActive : style.tab}>Mobile</Tab>
        <Tab className={(activeTab==2) ? style.tabActive : style.tab}>Other</Tab>
      </Tabs>
      <Grid className={style.grid}>{toggleCategories()}</Grid>
    </div>

  );
};

export default Projects;

