import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from '../img/image.jpg';

class HomeCard extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} className="home-card">
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button href="http://localhost:3000/products" className="card-button">Více</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HomeCard;