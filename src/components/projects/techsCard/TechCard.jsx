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
  {
    console.log(window.screen.width);
  }
  return (
    <Cell
      col={window.screen.width < 980 ? 1 : 3}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={style.card}>
        <img src={ico} alt="tech img"></img>
        <p style={{ textAlign: "center" }}>{name}</p>
      </div>
    </Cell>
  );
}

export default TechCard;
