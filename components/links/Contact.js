import React from 'react';
import MapContainer from '../MapContainer';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container className="component-container">
                    <h1 className="component-heading">Kde nás najdete</h1>
                    <Jumbotron>
                        <Row className="contact-row">
                            <Col sm={4} className="contact-col">
                                <p>
                                    Ing. Radim Jurečka <br />
                                    Štefánikova 58/31 <br />
                                    742 21 Kopřivnice <br />
                                    <hr />
                                    Tel: + 420 724 027 991 <br />
                                    Fax: + 420 556 810 190 <br />
                                </p>
                            </Col>
                            <Col sm={8}>
                                <MapContainer />
                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Contact;