import React, { useState } from "react";
import style from "./projectCard.module.css";
import projectsData from "../projects/projectsData";
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
  MDLComponent,
} from "react-mdl";

const ProjectCard = ({ project }) => {
  {
    console.log(project);
  }
  return (
    <>
      <Card shadow={5} style={MDLStyle.card}>
        <h2 style={MDLStyle.h2}>{project.title}</h2>
        <CardTitle
        className={style.cardTitle}
        style={{background: `url(${project.img}) center / cover`, }}
        ></CardTitle>
        <CardText style={{ color: "white" }}>{project.description}</CardText>{" "}
        <CardText style={{ color: "white" }}>
          {project.technologies.map((tech) => {
            return tech + " | ";
          })}
        </CardText>
        <CardActions border>
          <Button className={style.button} >
            Repository
          </Button>
          <button className={style.button}>Deploy</button>
          <a href={project.deploy} target="_blank">
            <Button colored style={MDLStyle.button}>Deploy</Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;

const MDLStyle = {
  h2: {
    background: "none",
    fontSize: "20px",
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
    maxHeight: "70vh",
  },
  button: {
    background: "black",
    color: "white",
    hover: {
      background: "orange !important"
    }
  },
};
