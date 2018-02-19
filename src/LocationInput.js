import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs } from 'react-google-maps';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

import './LocationInput.css';

const LocationInput = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWT2mBKoiV053AOTBLsiSiFIDD1S06pt0&v=3.exp&libraries=places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => refs.searchBox.getPlaces()
      });
    }
  }),
  withScriptjs
)(props => (
  <div data-standalone-searchbox="" className="LocationInput">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={() => {
        props.placeChanged(props.onPlacesChanged());
      }}
    >
      <input
        type="text"
        placeholder={props.placeholderText}
        className="LocationInput-input"
      />
    </StandaloneSearchBox>
  </div>
));

export default LocationInput;
