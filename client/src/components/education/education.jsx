import React, { useState } from "react";

import style from "./education.module.css";
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

const Education = () => {
  return (
    <div>
      <Cell col={4}>
        <Card shadow={5} className={style.containerCard}>
          <CardTitle
            className={style.cardPhoto}
            style={{
              background: "red",
            }}
          >
            <h2 className={style.h2}></h2>
          </CardTitle>
          <CardText
            className={style.cardText}
            style={{ display: "flex", justifyContent: "right" }}
          >
            descripcion
          </CardText>{" "}
          <CardText className={style.technologies}>
            <p>{"TECNOLOGIES: "}</p>| tecnologias
          </CardText>
        </Card>
      </Cell>
    </div>
  );
};

export default Education;
