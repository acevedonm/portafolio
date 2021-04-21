import React, { Component } from "react";
import {
  Navigation, Drawer,
  IconButton, Menu, MenuItem, Switch
} from "react-mdl";
import { Link } from "react-router-dom";
import style from "./drawerNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import items from "../items"



const DrawerNavigation = () => {
  return (
    <Drawer className={style.drawer}>
                <IconButton name="more_vert" id="demo-menu-top-right" />
          <Menu target="demo-menu-top-right" valign="top" align="right" ripple>
            <MenuItem>Some Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem disabled>Disabled Action</MenuItem>
            <MenuItem>Yet Another Action</MenuItem>
          </Menu>
      <Navigation>
        {items.map((item, i) => {
          return (
            <Link to={item.href} className={style.link} key={i}>
              <div className={style.drawerItem}>
                <FontAwesomeIcon
                  icon={item.icon}
                  size={item.sizeIcon}
                  style={{ marginBottom: "3px", marginRight: "2px" }}
                />
                {item.label}
              </div>
            </Link>
          );
        })}
        <Switch id="switch2" onChange={() => { console.log("switch") }}></Switch>
      </Navigation>

    </Drawer>
  );
};

export default DrawerNavigation;
