import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '80%',
    height: '500px',
    margin: '0 auto'
};
const pStyle = {
    textAlign: 'left',
    width: '80%',
    margin: 'auto'
};

export class GoogleMapComponent extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        return (
            <>
                <h1>GOOGLE MAPS API with REACT JS</h1>
                <p style={pStyle}>MAPS</p>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    isMarkerShown
                    initialCenter={
                        {
                            lat: 37.566,
                            lng: 126.9784
                        }
                    }
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Seoul City'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>

                </Map>

            </>

        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8'
})(GoogleMapComponent);

