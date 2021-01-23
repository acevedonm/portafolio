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
  return (
    <>
    <Cell col={4} className={style.containerCard} >
      <Card shadow={5} >
        <h2 className={style.h2}>{project.title}</h2>
{/*         <a href={project.deploy ? project.deploy : null} target="_blank">
        </a> */}
          <CardTitle
            className={style.cardTitle}
            style={{ background: `url(${project.img}) center / cover` }}
          ></CardTitle>
        
        <CardText style={{ color: "white" }}>{project.description}</CardText>{" "}
        <CardText style={{ color: "white" }}>
          | {project.technologies.map((tech) => {
            return tech + " | ";
          })}
        </CardText>
        <CardActions
          border
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a
            href={project.repository ? project.repository : null}
            target="_blank"
          >
            <Button className={style.button}>Repository</Button>
          </a>
          <a href={project.deploy ? project.deploy : null} target="_blank">
            <Button className={style.button}>Deploy</Button>
          </a>
        </CardActions>
      </Card>
 
      </Cell>
    </>
  );
};

export default ProjectCard;

const MDLStyle = {
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
};
