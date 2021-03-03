import React from "react";
import {
    Cell,
    Grid,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    MDLComponent,
  } from "react-mdl";

  import style from "./TechCard.module.css";

function TechCard({ name, ico }) {
  return (
    <Cell col={3}>
        <div className={style.card}>
          <img src={ico} alt='tech img'></img>
          <p>{name}</p>
        </div>
    </Cell>
  );
}

export default TechCard;
