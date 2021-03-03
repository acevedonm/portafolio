import React, { useState } from "react";
import style from "./projectCard.module.css";
import {
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Grid,
  MDLComponent,
} from "react-mdl";
import TechsCard from './techsCard/TechCard'
import TechsList from "./techsCard/TechsList";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Cell col={4}>
        <Card shadow={5} className={style.containerCard}>
          <h2 className={style.h2}>{project.title}</h2>
          <a href={project.deploy ? project.deploy : null} target="_blank">
            <CardTitle
              className={style.cardPhoto}
              style={{
                background: `url(${project.img}) center / cover`,
              }}
            ></CardTitle>
          </a>
          <CardText
            className={style.cardText}
            style={{ display: "flex", justifyContent: "right" }}
          >
            {project.description}
          </CardText>{" "}
          <CardText className={style.technologies}>
            <p>{"TECNOLOGIES: "}</p>
            <TechsList techs={project.technologies}></TechsList>
          </CardText>
          <CardActions
            border
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Repository Button */}
            {project.repository ? (
              <a href={project.repository} target="_blank">
                <Button className={style.button}>Repository</Button>
              </a>
            ) : (
              <Button className={style.buttonDisabled} disabled>
                Repository
              </Button>
            )}
            {/* Deploy Button */}
            { 
              <a href={project.deploy} target="_blank">
                <Button className={project.deploy ? style.button: style.buttonDisabled}>Deploy</Button>
              </a>
            }
          </CardActions>
        </Card>
      </Cell>
    </>
  );
};

export default ProjectCard;

