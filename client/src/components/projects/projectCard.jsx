import React, { useState } from "react";

const projectCard = ({project}) => {
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
                {project.technologies.map((tech) => {
                  return tech + " | ";
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
};

export default projectCard;
