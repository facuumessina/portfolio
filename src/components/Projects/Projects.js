import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectFrontBack from "./ProjectFront&Back";
import ProjectDemo from "./ProjectDemo";
import Particle from "../Particle";
import rickmorty from "../../Assets/Projects/project_Rick_Morty.png";
import smartprofit from "../../Assets/Projects/smartProfit_project.png";
import chaco from "../../Assets/Projects/project_chaco.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectFrontBack
              imgPath={smartprofit}
              isBlog={false}
              title="SmartProfit"
              description="Aplication designed with university colleagues oriented for small and middle shops in Argentina. The purpose of the solution is to help them to define on an inflationary context, a suggestion price for their products based on confident and selected shoppers. It was designed with CSS, HTML, React.js, Material-UI, Python, Django and MySQL."
              ghLink="https://github.com/matiaspuro/seminario-smartprofit-front"
              demoLink="https://github.com/matiaspuro/seminario-django-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectDemo
              imgPath={chaco}
              isBlog={false}
              title="El Impenetrable - Rewilding"
              description="Page updated with nowaday information, modified as requested by bussiness, translated from spanish to english and the addition of new functionalities such as a button that allows to switch the fully interface language from english to spanish. Those modifications were done with HTML, CSS and Wordpress."
              demoLink="https://www.elimpenetrable.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rickmorty}
              isBlog={false}
              title="Rick & Morty App"
              description="App designed with React.js as a part of a React course dictated by Udemy. It was developed as a first approach with the React.js library."
              ghLink="https://github.com/facuumessina/reactRickMorty"
              demoLink="https://rickmorty-fm.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
