import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

class ProductDesc extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>{this.props.title}</h1>
                    <p>
                        {this.props.description}
                    </p>
                    <Image src={this.props.image} fluid />
                </Jumbotron>
            </div>
        )
    }
}

export default ProductDesc;