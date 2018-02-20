import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

import './LocationInput.css';

const LocationInput = compose(
  withProps({
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
  })
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
