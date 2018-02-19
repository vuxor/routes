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
      storageError: false
    };
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
            <Link to="/something" className="App-go">
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
            </Link>
          </div>
          <div className="App-list">
            <p className="App-intro">Your Previous Routes</p>
            <hr />
            <ul>
              <li className="App-list-item" key={1}>
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
                    Origin point<br />Destination point
                  </span>
                </Link>
                <span className="App-delete">
                  <a>
                    <img src={deleteIcon} alt="Delete" />
                  </a>
                </span>
              </li>
              <li className="App-list-item" key={2}>
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
                    Origin point<br />Destination point
                  </span>
                </Link>
                <span className="App-delete">
                  <a>
                    <img src={deleteIcon} alt="Delete" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
