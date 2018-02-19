import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Routes</h1>
        </header>
        <p className="App-intro">Please enter your starting and end point</p>
        <main>
          <div className="App-form" />
          <div className="App-list" />
        </main>
      </div>
    );
  }
}

export default App;
