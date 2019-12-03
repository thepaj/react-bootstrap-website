import React from 'react';
import Header from '../Header';
import HomeCard from '../HomeCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron className="jumbotron">
                    <Header />
                    <Row className="home-row">
                        <Col>
                            <HomeCard
                                title="Jeřáby"
                                text=""
                                className="homeCard"
                            />
                        </Col>
                        <Col>
                            <HomeCard
                                title="Ocelové konstrukce"
                                text=""
                                className="homeCard"
                            />
                        </Col>
                        <Col>
                            <HomeCard
                                title="Elektroinstalace"
                                text=""
                                className="homeCard"
                            />
                        </Col>
                        <Col>
                            <HomeCard
                                title="Zámečnické práce"
                                text=""
                                className="homeCard"
                            />
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;