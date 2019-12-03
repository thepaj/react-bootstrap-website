import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const myApi = 'AIzaSyAqhrnDneuJzKdGrSw5DpMmmW944smZOYs';

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.coordinates = {
            lat: 49.601358,
            lng: 18.147743
        }

        this.mapStyles = {
            width: '100%',
            height: '100%',
        };
    }

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={this.mapStyles}
                initialCenter={this.coordinates}
            >
                <Marker position={this.coordinates} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: myApi
})(MapContainer);