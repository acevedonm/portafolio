import React, { useState } from "react";
import { Header, Navigation, Tooltip, Icon, IconButton, Menu, MenuItem, Switch } from "react-mdl";
import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faHome,
  faUserGraduate,
  faLaptopCode,
  faUser,
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import items from "../items";
import Typed from "react-typed"

const NavBar = ({isScrolling}) => {

  const [activeSection, setActiveSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(false)
  const toTheTop = ()=>{
    window.scrollTo({top:0, left: 0, behavior: "smooth"})
  }
  return (
    <Header
      className={`${style.navBar} ${isScrolling>20 ? style.scrolling : null}`}
      title={
        <Link onClick={toTheTop} className={style.logo}>
          <Typed 
                strings={["ACEVEDO NICOLAS"]}
                typeSpeed={200}
                backSpeed={60}
                >
                </Typed>
          </Link>
      }
      transparent
      scroll
      
    >
      <Navigation style={{ paddingRight: "15%"}}>
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
          <MenuItem disabled={false}>Ingles</MenuItem>
          <MenuItem disabled={true}>Español</MenuItem>
        </Menu>
        <div className={style.switchContainer}>
          <Switch id="switch" onChange={()=>setDarkMode(!darkMode)}></Switch>
          <FontAwesomeIcon className={darkMode ?  style.moonDisable : style.moonEnable } icon={faMoon} size="2x"/>
          <FontAwesomeIcon className={darkMode ? style.sunEnable : style.sunDisable} icon={faSun} size="2x"/>
        </div>
      </Navigation>
    </Header>
  );
};

export default NavBar;
