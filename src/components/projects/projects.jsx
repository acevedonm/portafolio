import React, { useState } from "react";
import { Tabs, Tab, Grid } from "react-mdl";
import style from "./projects.module.css";
import "../../style/mdl.css";
import projectsData from "./data/projectsData";
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
                <ProjectCard project={project} key={project.name}></ProjectCard>
              );
            })}
          </>
        );

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

      default:
        break;
    }
  };

  return (
    <div className={style.tabsContainer}>
      <h2
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      > MYPROJECTS
      </h2>
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        className={style.tabs}
      >
        <Tab className={activeTab === 0 ? style.tabActive : style.tab}>Web</Tab>
        <Tab className={activeTab === 1 ? style.tabActive : style.tab}>
          Mobile
        </Tab>
      </Tabs>
      <Grid className={style.grid}>{toggleCategories()}</Grid>
    </div>
  );
};

export default Projects;
