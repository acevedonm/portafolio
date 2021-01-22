//INFO SOBRE MIS PROYECTOS

import astridToysIMG from "../../images/AstridToys.JPG";
import inmobiliariaMartiniIMG from "../../images/InmobiliariaMartini.JPG";

const projectsData = {
  web: [
    {
      title: "Astrid Toys",
      description: "description",
      img: astridToysIMG,
      deploy: "http://astridtoys.herokuapp.com/",
      repository: "https://github.com/acevedonm/ecommerce-ft06-g06",
      technologies: [
        "SCRUM",
        "React",
        "Redux",
        "Node",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "Bootstrap",
      ],
    },
    {
      title: "Inmobiliaria Martini",
      description: "description",
      img: inmobiliariaMartiniIMG,
      deploy: "https://www.inmobiliariamartini.com/",
      repository: null,
      technologies: [],
    },
  ],
  mobile: [],
  other: [
    {
      title: "Inmobiliaria Martini",
      description: "description",
      img: inmobiliariaMartiniIMG,
      deploy: "https://www.inmobiliariamartini.com/",
      repository: null,
      technologies: [],
    },
  ],
};

export default projectsData;
