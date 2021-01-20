import React, { useState } from "react";
import { Tabs, Tab, TabsProps } from "react-mdl"
import style from "./projects.module.css"

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={style.tabsContainer}>
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple //este es el que indica cual esta seleccionado
        tabBarProps={{style:{background: "darkorange"}}}
      >
        <Tab style={{color: "white"}}>Web</Tab>
        <Tab style={{color: "white"}}>Mobile</Tab>
        <Tab style={{color: "white"}}>Desktop</Tab>
      </Tabs>
      <section>
        <div style={{color: "white"}}>
          Content for the tab: {activeTab}
        </div>
      </section>
    </div>
  );
};

export default Projects;
