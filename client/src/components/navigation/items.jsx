import {
    faHandshake,
    faHome,
    faUserGraduate,
    faLaptopCode,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";

 const items = [
  {
    href: "/portafolio",
    icon: faHome,
    sizeIcon: "1x",
    label: "Home",
  },
  {
    href: "/portafolio/education",
    icon: faUserGraduate,
    sizeIcon: "1x",
    label: "Education",
  },
  { href: "/portafolio/aboutme", icon: faUser, sizeIcon: "1x", label: "About Me" },
  { href: "/portafolio/projects", icon: faLaptopCode, sizeIcon: "1x", label: "Projects" },
  { href: "/portafolio/contact", icon: faHandshake, sizeIcon: "1x", label: "Contact" },
];

export default items;