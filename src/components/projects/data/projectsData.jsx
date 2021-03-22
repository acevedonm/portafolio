//INFO SOBRE MIS PROYECTOS

import astridToysIMG from "../../../images/AstridToys.JPG";
import workingIMG from '../../../images/working.jpg'
import portfolioIMG from "../../../images/Portfolio.JPG"
import bitcoinIMG from "../../../images/Bitcoin.jpg"
import stackHenry from "../../../images/StackHenryFlow.jpg"
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
      ],
    },
    {
    
      title: "Portfolio",
      description: "Esta misma pagina tambien fue un desafio que me auto-impuse, porque queria hacerla de la mejor manera posible. Aunque aun sigo desarrollando este proyecto estoy contento con el resultado!",
      img: portfolioIMG,
      deploy: "https://github.com/acevedonm/portafolio/",
      repository: "https://github.com/acevedonm/portafolio/",
      technologies: [techs.git ,techs.react, techs.nodeJS, techs.mdl],
    },
    {
    
      title: "MELI Search",
      description: "Este proyecto esta siendo desarrollado por hobbie, como entrenamiento y entretenimiento personal",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [techs.git,
        techs.react,
        techs.css,
        techs.mdl],
    },
    {
      title: "Bitcoin Consultant",
      description: "Microservicio hecho con nodeJS y Express, cuenta con 3 endpoint. Registra una vez por minuto el precio del Bitcoin. Para realizar un frontend simple y hacer la experiencia mas interactiva, se utilizo React + Boostrap",
      img: bitcoinIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [techs.git, techs.nodeJS, techs.express, techs.react, techs.css, techs.boostrap],
    },
    {
      title: "Dulce o Truco Pasteleria",
      description: "Una web para una pasteleria, aun se esta por definir",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/',
      technologies: [techs.git, techs.react, techs.css, techs.mdl ],
    }
  ],
  mobile: [    {
    title: "Stack Henry Flow",
    description: "Una aplicacion mobile desarrollada en React Native y Firebase junto con 5 compañeros, cuenta con un sistema de login, foro interactivo y perfil de usuario",
    img: stackHenry,
    deploy: null,
    repository: 'https://github.com/acevedonm/StackHenryFlow',
    technologies: [techs.git, techs.react, techs.firebase],
  }],
  working: [
    {
      title: "Working",
      description: "Estoy trabajando en ello",
      img: workingIMG,
      deploy: null,
      repository: 'https://github.com/acevedonm/Bitcoin_Price',
      technologies: [techs.git, techs.react, techs.boostrap],
    },
  ]
};

export default projectsData;
