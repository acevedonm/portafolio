import React from "react";
import SocialFollow from "../socialFollow/SocialFollow";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerInfo}>
          <h1>Acevedo Nicolas</h1>
      </div>
      <div className={style.footerContact}>
      <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className={style.footerSns}>
        <div className={style.designBy}> Design by Acevedo Nicolas</div>
        <div className={style.links}><SocialFollow></SocialFollow></div>
      </div>
    </footer>
  );
};

export default Footer;
