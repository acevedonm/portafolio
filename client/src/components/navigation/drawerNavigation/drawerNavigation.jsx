import React, { Component } from "react";
import { Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import style from "./drawerNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import items from "../items"



const DrawerNavigation = () => {
  return (
    <Drawer className={style.drawer}>
      <Navigation>
        {items.map((item, i) => {
          return (
            <Link to={item.href} className={style.link} key={i}>
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
      </Navigation>
    </Drawer>
  );
};

export default DrawerNavigation;
