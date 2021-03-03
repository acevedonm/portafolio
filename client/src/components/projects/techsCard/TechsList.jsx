import React from "react";
import TechCard from "./TechCard";
import style from './TechList.module.css'
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

function TechsList({ techs }) {
  return (
    <div className={styleMedia.container}>
        <Grid>
      {techs.map((tech) => {
        return <TechCard name={tech.name} ico={tech.ico}></TechCard>;
      })}
      {/* techs.length<5 ? lootie : <></> */}
      </Grid>
    </div>
  );
}

export default TechsList;
