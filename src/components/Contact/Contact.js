import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoLight from "../../Assets/logoLight.png";
import logoDark from "../../Assets/logoDark.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { ThemeContext } from "../../Context/theme";
import "./contact.css";
import {AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlineTwitter} from "react-icons/ai";
import {FaFacebook, FaLinkedinIn, FaTiktok} from "react-icons/fa";

function Contact() {
    const [{ themename, toggeltheme }] = useContext(ThemeContext);

    return (
        <Container fluid className="contact-section">
            <Container>

                <Row style={{ justifyContent: "center", padding: "10px"}}>
                    <Col
                        md={5}
                        sx={6}
                        className="contact-img"
                    >
                        <h1
                            style={{fontSize: "2.1em", paddingBottom: "20px", textAlign: "left", fontWeight: "bold"}}
                            data-aos="fade-right"
                        >
                            KONTAKT OS {/* Updated title */}
                        </h1>
                        <div data-aos="fade-up">
                            <p style={{textAlign: "start", fontSize: 18}}>
                                {/* Updated contact information */}
                                For eventuelle henvendelser eller hjælp, er du velkommen til at kontakte os på følgende:
                                <br/>
                                <strong>Mail:</strong> <a href="mailto:info@dkguiden.dk">info@dkguiden.dk</a><br/>
                                <strong>Telefon:</strong> <a href="tel:+4591757574">+45 91 75 75 74</a>
                            </p>
                        </div>

                        <div data-aos="fade-up" style={{ textAlign: "left", paddingBottom:"50px" }}>
                                <Col md={12} >
                                    <ul className="home-about-social-links" data-aos="fade-up">
                                        <li className="social-icons">
                                            <a
                                                href="https://halaal.dk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="icon-colour  home-social-icons"
                                                aria-label="github"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li className="social-icons">
                                            <a
                                                href="https://halaal.dk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="icon-colour  home-social-icons"
                                                aria-label="twitter"
                                            >
                                                <FaTiktok />
                                            </a>
                                        </li>
                                        <li className="social-icons">
                                            <a
                                                href="https://halaal.dk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="icon-colour home-social-icons"
                                                aria-label="instagram"
                                            >
                                                <AiFillInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </Col>

                        </div>
                    </Col>
                    <Col
                        md={3}
                        style={{paddingBottom: "100px", paddingTop:"50px"}}
                        className={"contact-img"}
                    >
                        <img
                            src={themename === "light" ? logoDark : logoLight}
                            alt="contact"
                            style={{width: "100%"}}
                            data-aos="fade-left"
                        />

                    </Col>
                </Row>

            </Container>
            <ScrollToTop/>
        </Container>
    );
}

export default Contact; // Exporting Contact component
