import React, { useState } from "react";
import { Header, Navigation,HeaderRow } from "react-mdl";
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
        style={{paddingLeft: "15%"}}
      >
        <Navigation  style={{paddingRight: "15%"}}>
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
        </Navigation>
      </Header>
  );
};

export default NavBar;
