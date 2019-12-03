import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import StockRound from '../../img/stock-round.png';

const About = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container className="component-container">
                    <h1 className="component-heading">O nás</h1>
                    <Jumbotron>
                        <Image src={StockRound} roundedCircle />
                    </Jumbotron>
                    <Jumbotron>
                        <p>
                            Firma byla založena v r. 2004. <br />
                            Od svého vzniku se zabývá montážemi, opravami, rekonstrukcemi mostových jeřábů, otočných sloupových jeřábů a jeřábových drážek, výrobou a montážemi ocelových konstrukcí, elektroinstalacemi a zámečnickými pracemi. <br />
                            Provádí revizní činnost, preventivní prohlídky zdvihacích zařízení, prohlídky ocelových konstrukcí a zvláštní posouzení jeřábů.
                        </p>
                    </Jumbotron>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default About;