import React, { useState } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl"
import style from "./projects.module.css"
import astridToysIMG from '../images/AstridToys.JPG'
import inmobiliariaMartiniIMG from '../images/InmobiliariaMartini.JPG'

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0)

  const toggleCategories = () => {
    if (activeTab === 0) {
      return (
        <div className="projects-grid">

          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto',  background: 'none'}}>
            <CardTitle style={{ color: 'white', height: '176px',   background: `url(${astridToysIMG}) center / cover`}} >React Project</CardTitle>
            <CardText style={{color: 'white'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <a href='http://astridtoys.herokuapp.com/' target="_blank">
              <Button colored>Deploy</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto',   background: 'none'}}>
            <CardTitle style={{ color: 'white', height: '176px',   background: `url(${inmobiliariaMartiniIMG}) center / cover`}} >Corvid Project</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <Button colored>GitHub</Button>
              <a href='https://www.inmobiliariamartini.com/' target="_blank">
              <Button colored>Deploy</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

        )
      }
      if( activeTab === 1){
        return (
          <div><h2>Proximamente</h2></div>
        )
      }
      if( activeTab === 2){
        return (
          <div><h2>Proximamente</h2></div>
        )
      }
    }

return (
  <div className={style.tabsContainer}>
    <Tabs
      activeTab={activeTab}
      onChange={(tabId) => setActiveTab(tabId)}
      ripple
      tabBarProps={{ style: { background: "black" } }}
    >
      <Tab style={{ color: "white" }}>Web</Tab>
      <Tab style={{ color: "white" }}>Mobile</Tab>
      <Tab style={{ color: "white" }}>Desktop</Tab>
    </Tabs>
    <Grid>
      <Cell col={12}>
        <div className="content" >{toggleCategories()}</div>
      </Cell>
    </Grid>
  </div>
);
};

export default Projects;
