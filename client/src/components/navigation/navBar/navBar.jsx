import React from "react";
import { Header, Navigation } from "react-mdl";
import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import items from "../items"

const NavBar = () => {
  return (
    <Header
      className={style.navBar}
      title={
        <Link to="/" className={style.link}>
          Acevedo Nicolás Portfolio
        </Link>
      }
      scroll
    >
      <Navigation style={{ display: "flex", justifyContent: "center" }}>
        {items.map((item,i) => {
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
    </Header>
  );
};

export default NavBar;
