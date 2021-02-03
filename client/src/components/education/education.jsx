import React, {useState} from "react";

import style from "./education.module.css"
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

  const [activeTab, setActiveTab] = useState(0);

  const toggleCategories = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
          </>
        );
        break;
      case 1:
        return (
          <>
          </>
        );
        break;
      case 2:
        if (activeTab === 2)
          return (
            <>
              
            </>
          );
        break;
      default:
        break;
    }
  };


  
  return (
    <div className={style.tabsContainer}>
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId)}
        className={style.tabs}
      >
        <Tab className={ (activeTab==0) ? style.tabActive : style.tab}>Descargar CV</Tab>
        <Tab className={(activeTab==1) ? style.tabActive : style.tab}>Additional Training</Tab>
        <Tab className={(activeTab==1) ? style.tabActive : style.tab}>Skills</Tab>
        {/* en skills irian los iconitos de las tecnologias con un hover scale */}
      </Tabs>
      <Grid className={style.grid}>{toggleCategories()}</Grid>
    </div>
  );
};

export default Education;
