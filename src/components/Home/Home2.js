import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Toolstack from "../About/Toolstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> Kommer </span> snart
            </h1>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <div data-aos="fade-up">
              <Toolstack data-aos="fade-up"/>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
