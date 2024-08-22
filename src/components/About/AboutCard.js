import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Facundo Messina </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            I am currently employed as a Professional Services Consultant at Genesys.
            <br />
            Also, I'm a software engineering student from <span className="purple">UADE </span> (Universidad Argentina de la Empresa) and I'm doing the last career's years.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Training
            </li>
            <li className="about-activity">
              <ImPointRight /> Read books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
