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
  Button
} from "react-mdl";
import style from "./projects.module.css";
import projectsData from "../projects/projectsData";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const returnProjectsCards = () =>{

  }

  const toggleCategories = () => {
    if (activeTab === 0) {
      return (
        <>
          {projectsData.web.map((project) => {
            return (
              <Cell col={6}>
                <Card shadow={5} style={inLineStyle.card}>
                  <CardTitle
                    style={{
                      color: "white",
                      height: "176px",
                      background: `url(${project.img}) center / cover`,
                    }}
                  >
                    React Project
                  </CardTitle>
                  <CardText style={{ color: "white" }}>
                    {project.description}
                  </CardText>{" "}
                  <CardText style={{ color: "white" }}>
                    {project.technologies.map((tech)=>{
                      return (
                        tech+" | "
                      )
                    })}
                  </CardText>
                  <CardActions border>
                    <Button colored>Repository</Button>
                    <a href={project.deploy} target="_blank">
                      <Button colored>Deploy</Button>
                    </a>
                  </CardActions>
                </Card>
              </Cell>
            );
          })}
        </>
      );
    }
    if (activeTab === 1) {
      return (
        <>
          {projectsData.mobile.map((project) => {
            return (
              <Cell col={6}>
                <Card shadow={5} style={inLineStyle.card}>
                  <CardTitle
                    style={{
                      color: "white",
                      height: "176px",
                      background: `url(${project.img}) center / cover`,
                    }}
                  >
                    React Project
                  </CardTitle>
                  <CardText style={{ color: "white" }}>
                    {project.description}
                  </CardText>{" "}
                  <CardText style={{ color: "white" }}>
                    {project.technologies.map((tech)=>{
                      return (
                        tech+" | "
                      )
                    })}
                  </CardText>
                  <CardActions border>
                    <Button colored>Repository</Button>
                    <a href={project.deploy} target="_blank">
                      <Button colored>Deploy</Button>
                    </a>
                  </CardActions>
                </Card>
              </Cell>
            );
          })}
        </>
      );
    }
    if (activeTab === 2) {
      return (
        <>
          {projectsData.other.map((project) => {
            return (
              <Cell col={6}>
                <Card shadow={5} style={inLineStyle.card}>
                  <CardTitle
                    style={{
                      color: "white",
                      height: "176px",
                      background: `url(${project.img}) center / cover`,
                    }}
                  >
                    React Project
                  </CardTitle>
                  <CardText style={{ color: "white" }}>
                    {project.description}
                  </CardText>{" "}
                  <CardText style={{ color: "white" }}>
                    {project.technologies.map((tech)=>{
                      return (
                        tech+" | "
                      )
                    })}
                  </CardText>
                  <CardActions border>
                    <Button colored>Repository</Button>
                    <a href={project.deploy} target="_blank">
                      <Button colored>Deploy</Button>
                    </a>
                  </CardActions>
                </Card>
              </Cell>
            );
          })}
        </>
      );
    }
  };

  return (
    <div className={style.tabsContainer}>
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        ripple
        tabBarProps={{ style: inLineStyle.tabs }}
      >
        <Tab style={{ color: "white" }}>Web</Tab>
        <Tab style={{ color: "white" }}>Mobile</Tab>
        <Tab style={{ color: "white" }}>Desktop</Tab>
      </Tabs>
      <Grid>{toggleCategories()}</Grid>
    </div>
  );
};

export default Projects;

const inLineStyle = {
  tabs: {
    background: "none",
    color: "#FFFFFF",
    textShadow: "0 0 10px #FFFFFF",
  },
  card: {
    webkitBoxShadow:
      "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 12px 12px 15px 5px rgba(0,0,0,0)",
    boxShadow:
      "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 12px 12px 15px 5px rgba(0,0,0,0)",
    minWidth: "450",
    margin: "auto",
    background: "none",
  },
};
