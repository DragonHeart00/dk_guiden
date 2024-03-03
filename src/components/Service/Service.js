import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ServiceCards";

import emailLight from "../../Assets/Services/2.png";
import emailDark from "../../Assets/Services/1.png";
import prisLight from "../../Assets/Services/4.png";
import prisDark from "../../Assets/Services/3.png";
import virksomhedLight from "../../Assets/Services/6.png";
import virksomhedDark from "../../Assets/Services/5.png";
import instaLight from "../../Assets/Services/8.png";
import instaDark from "../../Assets/Services/7.png";
import tiktokLight from "../../Assets/Services/10.png";
import tiktokDark from "../../Assets/Services/9.png";
import youtubeLight from "../../Assets/Services/12.png";
import youtubeDark from "../../Assets/Services/11.png";
import notLight from "../../Assets/Services/14.png";
import notDark from "../../Assets/Services/13.png";
import webLight from "../../Assets/Services/16.png";
import webDark from "../../Assets/Services/15.png";
import rekLight from "../../Assets/Services/18.png";
import rekDark from "../../Assets/Services/17.png";
import logoLight from "../../Assets/Services/20.png";
import logoDark from "../../Assets/Services/19.png";
import TopLight from "../../Assets/Services/22.png";
import TopDark from "../../Assets/Services/21.png";
import seoLight from "../../Assets/Services/24.png";
import seoDark from "../../Assets/Services/23.png";
import faceLight from "../../Assets/Services/26.png";
import faceDark from "../../Assets/Services/25.png";

import "./service.css";
import {ThemeContext} from "../../Context/theme";

function Service() {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);
  return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            <strong className="Fluorescent-Blue">YDELSER VIA DK GUIDENS APPLIKATION </strong>
          </h1>
          <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col md={3} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? virksomhedDark : virksomhedLight}
                  title="OPRET DIN VIRKSOMHED"
                  description="Bliv synlig på DK Guiden-appen! Opret din virksomhed nu!"
                  ghLink="https://github.com/rahuljha4171/E-cart"
                  demoLink="https://ecart.onrender.com/"
              />
            </Col>

            <Col md={3} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? TopDark : TopLight}
                  title="TOPPLACERINGSYDELSE"
                  description="Få topplacering i vores DK Guiden App! "
                  ghLink="https://github.com/rahuljha4171/Portfolio-Website"
                  demoLink="https://rahuljha.info/"
              />
            </Col>
            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? rekDark : rekLight}
                  title="REKLAMEYDELSE"
                  description="Få synlighed med reklamer i vores DK Guiden App! "
                  ghLink="#"
                  demoLink="https://chat-app-rahuljha4171.vercel.app/"
              />
            </Col>

            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? notDark : notLight}
                  title="NOTIFIKATIONSYDELSE"
                  description="Forøg synligheden! Anskaf notifikationsservice i DK Guiden-appen for tilbud"
                  ghLink="https://github.com/rahuljha4171/Expense-Tracker"
                  demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            <strong className="Fluorescent-Blue">YDELSER VIA DK GUIDENS SOCIALE MEDIER </strong>
          </h1>
          <Row style={{justifyContent: "center", paddingBottom: "50px"}}>

            <Col md={3} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? faceDark : faceLight}
                  title="FACEBOOK"
                  description="Udnyt DK Guidens Facebook!"
                  ghLink="https://github.com/rahuljha4171/Portfolio-Website"
                  demoLink="https://rahuljha.info/"
              />
            </Col>
            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? instaDark : instaLight}
                  title="INSTAGRAM"
                  description="Udnyt DK Guidens Instagram!"
                  ghLink="#"
                  demoLink="https://chat-app-rahuljha4171.vercel.app/"
              />
            </Col>
            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? tiktokDark : tiktokLight}
                  title="TIKTOK"
                  description="Udnyt DK Guidens TikTok!"
                  ghLink="#"
                  demoLink="https://chat-app-rahuljha4171.vercel.app/"
              />
            </Col>
            {/*<Col md={6} lg={3} className="project-card">*/}
            {/*  <ProjectCard*/}
            {/*      imgPath={themename === "light" ? youtubeDark : youtubeLight}*/}
            {/*      title="YOUTUBE"*/}
            {/*      description="."*/}
            {/*      ghLink="#"*/}
            {/*      demoLink="https://chat-app-rahuljha4171.vercel.app/"*/}
            {/*  />*/}
            {/*</Col>*/}
            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? emailDark : emailLight}
                  title="EMAIL"
                  description="Maximér synligheden med vores e-mail markedsføringstjeneste!"
                  ghLink="#"
                  demoLink="https://chat-app-rahuljha4171.vercel.app/"
              />
            </Col>
          </Row>

          <h1 className="project-heading">
            <strong className="Fluorescent-Blue">OPGRADER DIN VIRKSOMHED</strong>
          </h1>
          <Row style={{justifyContent: "center", paddingBottom: "50px"}}>

            <Col md={3} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? prisDark : prisLight}
                  title="PRISLISTEDESIGN"
                  description="Få professionelt designet prisliste til din virksomhed!"
                  ghLink="https://github.com/rahuljha4171/Portfolio-Website"
                  demoLink="https://rahuljha.info/"
              />
            </Col>
            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? webDark : webLight}
                  title="HJEMMESIDE"
                  description="Få skræddersyet hjemmeside til din virksomhed!"
                  ghLink="#"
                  demoLink="https://chat-app-rahuljha4171.vercel.app/"
              />
            </Col>
            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? logoDark : logoLight}
                  title="LOGO"
                  description="Få et unikt logo til din virksomhed!"
                  ghLink="#"
                  demoLink="https://chat-app-rahuljha4171.vercel.app/"
              />
            </Col>
            <Col md={6} lg={3} className="project-card">
              <ProjectCard
                  imgPath={themename === "light" ? seoDark : seoLight}
                  title="SEO"
                  description="Forbedr din online synlighed med SEO! "
                  ghLink="#"
                  demoLink="https://chat-app-rahuljha4171.vercel.app/"
              />
            </Col>
          </Row>
        </Container>
        <ScrollToTop/>
      </Container>
  );
}

export default Service;
