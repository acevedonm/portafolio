import React, { useState } from "react";
import { Header, Navigation, Tooltip, Icon, IconButton, Menu, MenuItem, Switch } from "react-mdl";
import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import items from "../items";

const NavBar = () => {

  const [activeSection, setActiveSection] = useState("Home");


  return (
    <Header
      className={style.navBar}
      title={
        <Link className={style.logo}>
          ACEVEDO NICOLAS
          </Link>
      }
      transparent
      scroll
      style={{ paddingLeft: "15%" }}
    >
      <Navigation style={{ paddingRight: "15%", background: "white" }}>
        {items.map((item, i) => {
          return (
            <Link
              to={item.href}
              className={
                activeSection == item.label ? style.linkActive : style.link
              }
              key={i}
              onClick={() => setActiveSection(item.label)}
            >
              <div className={style.navBarItem}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size={item.sizeIcon}
                  style={{ marginRight: "1px", paddingRight: "1px" }}
                />
                {item.label}
              </div>
            </Link>
          );
        })}
        {/* Lower left */}
        <IconButton name="more_vert" id="demo-menu-lower-left" />
        <Menu target="demo-menu-lower-left">
          <MenuItem>Ingles</MenuItem>
          <MenuItem disabled>Español</MenuItem>


        </Menu>
        <Tooltip label="Follow">
          <Icon name="add" />
        </Tooltip>
        <div className={style.switchContainer}>
          <Switch id="switch2" onChange={() => { console.log("switch") }}></Switch>
          <span>Oscure Mode</span>
        </div>
      </Navigation>
    </Header>
  );
};

export default NavBar;
