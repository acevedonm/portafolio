import React from "react";
import TechCard from "./TechCard";
import style from "./TechList.module.css";
import Lottie from "react-lottie";
import developer from "../../../lotties/developer.json";
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

const defaultOption = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function TechsList({ techs,lottieOn }) {
  return (
    <div className={style.container}>
      <Grid>
        {techs.map((tech) => {
          return <TechCard name={tech.name} ico={tech.ico}></TechCard>;
        })}
        {lottieOn ? (
          <Lottie
            options={{ animationData: developer, ...defaultOption }}
            width={200}
            height={200}
          ></Lottie>
        ) : (
          <></>
        )}
      </Grid>
    </div>
  );
}

export default TechsList;
