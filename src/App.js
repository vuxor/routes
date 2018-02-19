import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LocationInput from './LocationInput';
import './App.css';
import routeIcon from './ic_near_me_black_24px.svg';

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
          <div className="App-list">
            <p className="App-intro">Your Previous Routes</p>
            <ul>
              <li>
                <Link to="/something" className="App-routes-link">
                  <span>
                    <img
                      className="App-routes-icon"
                      src={routeIcon}
                      width="50px"
                      alt="Route icon"
                    />
                  </span>
                  <span>text</span>
                </Link>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
