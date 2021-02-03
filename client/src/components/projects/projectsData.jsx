//INFO SOBRE MIS PROYECTOS

import astridToysIMG from "../../images/AstridToys.JPG";
import inmobiliariaMartiniIMG from "../../images/InmobiliariaMartini.JPG";
import workingIMG from '../../images/working.jpg'
import portfolioIMG from "../../images/Portfolio.JPG"

const projectsData = {
  web: [
    {
      id: 1,
      title: "Astrid Toys",
      description: "Este E-Commerce con tematica de Funkos, fue un gran desafio que desarrollamos a lo largo de un mes junto con 5 compañeros. Noches de desvelo y horas de estudio se encuentran tras este codigo",
      img: astridToysIMG,
      deploy: "http://astridtoys.herokuapp.com/",
      repository: "https://github.com/acevedonm/ecommerce-ft06-g06",
      technologies: [
        "SCRUM",
        "React",
        "Redux",
        "Node",
        "GIT",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "Bootstrap",
      ],
    },
    {
      id: 2,
      title: "Portfolio React",
      description: "Esta misma pagina tambien fue un desafio que me auto-impuse, porque queria hacerla de la mejor manera posible. Y estoy contento con el resultado!",
      img: portfolioIMG,
      deploy: "https://github.com/acevedonm/portafolio/",
      repository: "https://github.com/acevedonm/portafolio/",
      technologies: ["GIT" ,'React', 'Node', 'CSS','MDL'],
    },
    {
      id: 3,
      title: "Working",
      description: "Estoy trabajando en ello",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: ["Tecnologias a definir"],
    },
    {
      id: 4,
      title: "Working",
      description: "Estoy trabajando en ello",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [],
    },
    {
      id: 5,
      title: "Working",
      description: "Estoy trabajando en ello",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [],
    }
  ],
  mobile: [],
  other: [
    {
      title: "Inmobiliaria Martini",
      description: "Humilde proyecto que desarrolle completamente solo. Aunque wix proporciona mucha facilidad a la hora del diseñar la web, la parte logica y la Base de Datos fueron un gran desafio utilizando Velo",
      img: inmobiliariaMartiniIMG,
      deploy: "https://www.inmobiliariamartini.com/",
      repository: null,
      technologies: ['Wix', 'Velo'],
    }
  ],
  working: [
    {
      title: "Working",
      description: "Estoy trabajando en ello",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [],
    },
  ]
};

export default projectsData;
