import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {GiPriceTag} from "react-icons/gi";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img
                variant="top"
                src={props.imgPath}
                alt="card-img"
                style={{ width: "50%", height: "auto", margin: "0 auto" }}
            />
            <Card.Body>
                <Card.Title style={{fontWeight:"bold"}}>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "start" }}>
                    {props.description}
                </Card.Text>

                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        {/*<GiPriceTag />*/}
                        &nbsp;
                        {props.title === "OPRET DIN VIRKSOMHED" ? "Tilmeld" : "PRIS"}
                    </Button>
            </Card.Body>
        </Card>
    );
}
export default ProjectCards;
