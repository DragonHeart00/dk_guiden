import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import {FaFacebook, FaTiktok} from "react-icons/fa";
import "./footer.css";
import appleIcon from "../../Assets/appstor_icon.png";
import androidIcon from "../../Assets/google_icon.png";
import {MdPhoneEnabled} from "react-icons/md";


const sectionsApp = [
  {
    title: "YDELSER",
    items: ["Ydelser via app", "Ydelser via sociale medier", "Opgrader din virksomhed"],
  },
];

function Footer() {
  return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="4" className="footer-copywright">
              <div className="flex justify-center">
                {sectionsApp.map((section, index) => (
                    <div key={index} className="mb-6 md:mb-0">
                      <h6 className="primary-footer-text pt-5">{section.title}</h6>
                      <ul className="list-unstyled"> {/* Add class 'list-unstyled' to remove bullet points */}
                        {section.items.map((item, i) => (
                            <li key={i} className="py-1 hover:text-white">
                              {item}
                            </li>
                        ))}
                      </ul>
                    </div>
                ))}
              </div>
            </Col>
            <Col md="4" className="footer-copywright">
              <div className="justify-center">
                <div>
                  <h6 className="primary-footer-text pt-5">DOWNLOAD</h6>
                  {/* Add responsive classes for smaller screens */}
                  <div className="align-items-md-center">
                    <img style={{width: 125, height: "auto", display: "block", marginBottom: "10px"}}  src={appleIcon} alt="First"/>
                    <img style={{width: 125, height: "auto", display: "block"}} src={androidIcon} alt="Second"/>
                  </div>
                </div>
              </div>
            </Col>

            <Col md="4" className="footer-body">
              <div className="flex justify-center">
                <div>
                  <h6 className="primary-footer-text pt-5">KONTAKT</h6>
                  <ul className="footer-icons">
                    <li className="social-icons">
                      <a
                          href="https://halaal.dk"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                          aria-label="facebook"
                      >
                        <FaFacebook/>
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                          href="https://halaal.dk"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                          aria-label="tiktok"
                      >
                        <FaTiktok/>
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
                        <AiFillInstagram/>
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                          href="tel:+45 91 75 75 74"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                          aria-label="phone"
                      >
                        <MdPhoneEnabled/>

                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                          href="mailto:info@dkguiden.dk"
                          target="_blank"
                          rel="noreferrer"
                          className="icon-colour  home-social-icons"
                          aria-label="email"
                      >
                        <AiOutlineMail/>

                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </footer>
  );
}

export default Footer;
