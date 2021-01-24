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
        return (
          <>
            {projectsData.web.map((project) => {
              return (
                <ProjectCard
                  project={project}
                  key={project.id}
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
        ripple
        className={style.tabs}
      >
        <Tab className={style.tab}>Web</Tab>
        <Tab className={style.tab}>Mobile</Tab>
        <Tab className={style.tab}>Other</Tab>
      </Tabs>
      <Grid className={style.grid}>{toggleCategories()}</Grid>
    </div>
  );
};

export default Projects;

