import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LocationInput from './LocationInput';
import './App.css';
import routeIcon from './ic_near_me_black_24px.svg';
import deleteIcon from './ic_close_red_24px.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageError: false,
      origin: null,
      destination: null,
      routes: localStorage.getItem('routes')
        ? JSON.parse(localStorage.getItem('routes'))
        : []
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentDidMount() {
    if (!this.storageAvailable('localStorage')) {
      this.setState({
        storageError: true
      });
    }
  }
  storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage.length !== 0
      );
    }
  }
  handleButtonClick() {
    if (this.state.origin && this.state.destination) {
      const newRoute = {
        id: this.state.origin.place_id + '&&' + this.state.destination.place_id,
        origin: this.state.origin,
        destination: this.state.destination
      };
      const newRoutes = [newRoute, ...this.state.routes];
      this.setState({
        routes: newRoutes
      });
      localStorage.setItem('routes', JSON.stringify(newRoutes));
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Routes</h1>
        </header>
        {this.state.storageError ? (
          <p className="App-error">
            Your browser doesn't support local storage API
          </p>
        ) : (
          <main className="App-main">
            <div className="App-form">
              <p className="App-intro">
                Please enter your starting and end point
              </p>
              <LocationInput
                placeholderText="Enter your starting point"
                placeChanged={places =>
                  this.setState({
                    origin: {
                      formatted_address: places[0].formatted_address,
                      place_id: places[0].place_id,
                      lat: places[0].geometry.location.lat(),
                      lng: places[0].geometry.location.lng()
                    }
                  })
                }
              />
              <LocationInput
                placeholderText="Enter your destination"
                placeChanged={places =>
                  this.setState({
                    destination: {
                      formatted_address: places[0].formatted_address,
                      place_id: places[0].place_id,
                      lat: places[0].geometry.location.lat(),
                      lng: places[0].geometry.location.lng()
                    }
                  })
                }
              />
              <button
                disabled={!(this.state.origin && this.state.destination)}
                className="App-go"
                onClick={this.handleButtonClick}
              >
                <span>Go</span>
                <svg
                  fill="#fff"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </button>
            </div>
            <div className="App-list">
              <p className="App-intro">Your Previous Routes</p>
              <hr />
              <ul>
                {this.state.routes.length ? (
                  this.state.routes.map(route => (
                    <li className="App-list-item" key={route.id}>
                      <Link to="/something" className="App-routes-link">
                        <span>
                          <img
                            className="App-routes-icon"
                            src={routeIcon}
                            width="50px"
                            alt="Route icon"
                          />
                        </span>
                        <span className="App-list-text">
                          {route.origin.formatted_address}
                          <hr />
                          {route.destination.formatted_address}
                        </span>
                      </Link>
                      <span className="App-delete">
                        <a>
                          <img src={deleteIcon} alt="Delete" />
                        </a>
                      </span>
                    </li>
                  ))
                ) : (
                  <li>There isn't any</li>
                )}
              </ul>
            </div>
          </main>
        )}
      </div>
    );
  }
}

export default App;
