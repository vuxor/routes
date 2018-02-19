import React, { Component } from 'react';

import LocationInput from './LocationInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Routes</h1>
        </header>
        <main className="App-main">
          <div className="App-form">
            <p className="App-intro">
              Please enter your starting and end point
            </p>
            <LocationInput
              placeholderText="Enter your starting point"
              placeChanged={places => console.log(places)}
            />
            <LocationInput
              placeholderText="Enter your destination"
              placeChanged={place => console.log(place)}
            />
          </div>
          <div className="App-list" />
        </main>
      </div>
    );
  }
}

export default App;
