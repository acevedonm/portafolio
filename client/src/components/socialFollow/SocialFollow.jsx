import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons"
import style from "./SocialFollow.module.css";

const SocialFollow = () => {
  return (
    <div className={style.socialContainer}>
            <a
        href="mailto: acevedonm@gmail.com"
        className={[style.social, style.envelope].join(" ")}
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope} size="3x" />
      </a>
      <a
        href="https://github.com/acevedonm"
        className={[style.social, style.github].join(" ")}
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/in/acevedonm/"
        className={[style.social, style.linkedin].join(" ")}
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      <a
        href="https://wa.link/f4jsha"
        className={[style.social, style.whatsapp].join(" ")}
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>
      <a
        href="https://wa.link/f4jsha"
        className={[style.social, style.instagram].join(" ")}
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
    </div>
  );
};

export default SocialFollow;
