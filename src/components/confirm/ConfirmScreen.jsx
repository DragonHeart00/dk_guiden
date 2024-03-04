import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";


const ConfirmScreen = () => {

    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '52vh' }}>
                <Col xs={12} sm={8} md={6}>
                    <Card className="p-4">
                        <div style={{ textAlign: 'center' }}>
                            <h4 className="mb-4">Indsendelse fuldført</h4>
                            <p className="mb-4">
                                Vi har nu modtaget din henvendelse vedrørende din ansøgning om at blive Virksomhedsmedlem. Du hører fra os snarest.
                            </p>
                            {/*<CheckCircle style={{ fontSize: 50, color: '#006D74' }} />*/}
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ConfirmScreen;
