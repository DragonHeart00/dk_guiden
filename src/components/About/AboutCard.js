import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "start"}}>
            Velkommen til DK Guiden - din digitale guide til alt, hvad Danmark har at tilbyde!
            DK Guiden er din personlige vejleder til at finde nødvendige tjenester hurtigt og nemt. Uanset om du leder efter en pålidelig håndværker, dygtig rengøringsservice eller blot ønsker at udforske nye serviceoplevelser, er DK Guiden din pålidelige partner.
            Vi er dedikerede til at skabe et effektivt og gratis miljø, hvor både forbrugere og virksomheder kan trives og opbygge meningsfulde forbindelser.
            Velkommen til DK Guiden - lad os sammen opdage, forbinde og skabe fremtidens Danmark.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
