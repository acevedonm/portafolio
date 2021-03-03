//INFO SOBRE MIS PROYECTOS

import astridToysIMG from "../../../images/AstridToys.jpg";
import workingIMG from '../../../images/working.jpg'
import portfolioIMG from "../../../images/Portfolio.jpg"
import techs from './techs'

const projectsData = {
  web: [
    {
      
      title: "Astrid Toys",
      description: "Este E-Commerce con tematica de Funkos, fue un gran desafio que desarrollamos a lo largo de un mes junto con 5 compañeros. Noches de desvelo y horas de estudio se encuentran tras este codigo",
      img: astridToysIMG,
      deploy: "http://astridtoys.herokuapp.com/",
      repository: "https://github.com/acevedonm/ecommerce-ft06-g06",
      technologies: [
        techs.scrum,
        techs.git,
        techs.react,
        techs.redux,
        techs.nodeJS,
        techs.express,
        techs.postgreSQL,
        techs.sequelize,
        techs.boostrap,
      ],
    },
    {
    
      title: "Portfolio",
      description: "Esta misma pagina tambien fue un desafio que me auto-impuse, porque queria hacerla de la mejor manera posible. Y estoy contento con el resultado!",
      img: portfolioIMG,
      deploy: "https://github.com/acevedonm/portafolio/",
      repository: "https://github.com/acevedonm/portafolio/",
      technologies: [techs.git ,techs.react, techs.nodeJS,techs.mdl],
    },
    {
    
      title: "MELI Search",
      description: "Este proyecto fue desarrollado por hobbie, como entrenamiento y entretenimiento personal",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [techs.git,
        techs.react,
        techs.mdl],
    },
    {
      title: "Bitcoin Consultant",
      description: "Este proyecto fue desarrollado por hobbie, como entrenamiento y entretenimiento personal",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [techs.git, techs.react, techs.boostrap],
    },
    {
      title: "Working",
      description: "Estoy trabajando en ello",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [],
    }
  ],
  mobile: [],
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
