import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import talatDark from "../../Assets/talatlogo.png";
import talatlight from "../../Assets/talatlogolight.png";
import scandiclight from "../../Assets/scandicdark.png";
import scandicdark from "../../Assets/scandic.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./about.css";
import logoDark from "../../Assets/logoDark.png";
import logoLight from "../../Assets/logoLight.png";
import {ThemeContext} from "../../Context/theme";

function About() {
    const [{ themename, toggeltheme }] = useContext(ThemeContext);

    return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",

            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" , textAlign:"left", fontWeight:"bold"}}
              data-aos="fade-right"
            >OM DK GUIDEN
            </h1>
              <div data-aos="fade-up">
                  <p style={{textAlign: "start", fontSize: 18}}>
                      Velkommen til DK Guiden - din digitale guide til alt, hvad Danmark har at tilbyde!
                      DK Guiden er din personlige vejleder til at finde nødvendige tjenester hurtigt og nemt.
                      <br/>
                      <br/>
                      Uanset om
                      du leder efter en pålidelig håndværker, dygtig rengøringsservice eller blot ønsker at udforske nye
                      serviceoplevelser, er DK Guiden din pålidelige partner. <br/> <br/>
                      Vi er dedikerede til at skabe et effektivt og gratis miljø, hvor både forbrugere og virksomheder
                      kan trives og opbygge meningsfulde forbindelser. <br/> <br/>
                      Velkommen til DK Guiden - lad os sammen opdage, forbinde og skabe fremtidens Danmark.
                  </p>
              </div>
          </Col>
            {/*<Col*/}
            {/*    md={5}*/}
            {/*    style={{paddingTop: "120px", paddingBottom: "50px"}}*/}
            {/*    className="about-img"*/}
            {/*>*/}
            {/*    <img*/}
            {/*        src={laptopImg}*/}
            {/*        alt="about"*/}
            {/*        className="img-fluid"*/}
            {/*        data-aos="fade-left"*/}
            {/*    />*/}
            {/*</Col>*/}
        </Row>

          <Row style={{ justifyContent: "center", padding: "10px", paddingBottom:"200px" }}>

              <Col
                  md={4}
                  xs={6}
                  className="about-img"
              >
                  <img
                      src={themename === "light" ? talatDark : talatlight}
                      alt="about"
                      style={{width: "70%", height:"auto"}}
                      data-aos="fade-left"
                  />
              </Col>
              <Col
                  md={4}
                  xs={6}
                  style={{paddingBottom: "100px"}}
                  className="about-img"
              >
                  <img
                      src={themename === "light" ? scandicdark : scandiclight}
                      alt="about"
                      style={{width: "55%"}}
                      data-aos="fade-left"
                  />

              </Col>
          </Row>
          {/*<h1 data-aos="fade-right">*/}
          {/*  <span className="primary-header">Skillset</span> I Work With*/}
          {/*</h1>*/}

          {/*<div data-aos="fade-up">*/}
          {/*  <Techstack />*/}
          {/*</div>*/}

          {/*<h1 data-aos="fade-right">*/}
          {/*  <span className="primary-header">Tools</span> I use*/}
        {/*</h1>*/}
        {/*<div data-aos="fade-up">*/}
        {/*  <Toolstack data-aos="fade-up" />*/}
        {/*</div>*/}

        {/*<Github />*/}
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
