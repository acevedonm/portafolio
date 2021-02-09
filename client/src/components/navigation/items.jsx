import {
    faHandshake,
    faHome,
    faUserGraduate,
    faLaptopCode,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";

 const items = [
  {
    href: "/",
    icon: faHome,
    sizeIcon: "1x",
    label: "Home",
  },
  {
    href: "/education",
    icon: faUserGraduate,
    sizeIcon: "1x",
    label: "Education",
  },
  { href: "/aboutme", icon: faUser, sizeIcon: "1x", label: "About Me" },
  { href: "/projects", icon: faLaptopCode, sizeIcon: "1x", label: "Projects" },
  { href: "/contact", icon: faHandshake, sizeIcon: "1x", label: "Contact" },
];

export default items;