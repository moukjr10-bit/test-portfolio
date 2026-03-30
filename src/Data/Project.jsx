import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const projects = [
  {
    id: 1,
    title: "Gestion de stock avec React",
    description: "Un site de commerce électronique développé avec React et intégré à une API de paiement.",
    image: project1,
    technologies: ["React1", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Site e-commerce avec React",
    description: "Un site de commerce électronique développé avec React et intégré à une API de paiement.",
    image: project2,
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 3,
    title: "Application de gestion des utilisateurs (API)",
    description: "Une API pour gérer les utilisateurs d'une application.",
    image: project3,
    technologies: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 4,
    title: "Blog dynamique avec JavaScript",
    description: "Un blog fonctionnel développé avec JavaScript et intégré à une base de données.",
    image: project4,
    technologies: []
  }
];

export default projects;