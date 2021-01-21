import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import style from "./SocialFollow.module.css";

const SocialFollow = () => {
  return (
    <div className={style.socialContainer}>
      <a
        href="https://www.instagram.com/nico.acevedo/"
        className={[style.social, style.instagram].join(" ")}
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a
        href="https://www.facebook.com/nicoacevedoo/"
        className={[style.social, style.facebook].join(" ")}
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a
        href="https://github.com/acevedonm"
        className={[style.social, style.github].join(" ")}
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/in/acevedonm/"
        className={[style.social, style.linkedin].join(" ")}
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </div>
  );
};

export default SocialFollow;
