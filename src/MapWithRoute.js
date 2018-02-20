import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';

const RouteDetail = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          height: `calc(100vh - 180px)`,
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />
  }),
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();
      const routes = JSON.parse(localStorage.getItem('routes'));
      const route = routes.filter(route => route.id === this.props.routeId)[0];

      DirectionsService.route(
        {
          origin: route.origin.formatted_address,
          destination: route.destination.formatted_address,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            this.setState({
              directionError: true
            });
          }
        }
      );
    }
  })
)(props => {
  if (props.directionError) {
    return (
      <p
        className="App-error"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        There was an error. No available routes.
      </p>
    );
  }
  return (
    <GoogleMap defaultZoom={7}>
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );
});

export default RouteDetail;
