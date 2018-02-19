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
        <p className="App-intro">Please enter your starting and end point</p>
        <main className="App-main">
          <div className="App-form">
            <LocationInput placeholderText="Enter your starting point" />
            <LocationInput placeholderText="Enter your destination" />
          </div>
          <div className="App-list" />
        </main>
      </div>
    );
  }
}

export default App;
