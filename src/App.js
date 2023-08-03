import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div className="marker">Your Location</div>;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const MapContainer = styled.div`
  width: 800px;
  height: 500px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const App = () => {
  const mapOptions = {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 14
  };

  return (
    <AppContainer>
      <Title>Welcome to My Landing Page</Title>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          <AnyReactComponent lat={mapOptions.center.lat} lng={mapOptions.center.lng} />
        </GoogleMapReact>
      </MapContainer>
      <Description>Discover amazing places with our interactive map!</Description>
      <div className="cloud-integration">
        {/* Cloud integration content goes here */}
      </div>
    </AppContainer>
  );
};

export default App;
