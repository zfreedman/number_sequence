import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from "./game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Number Sequence</h1>
          <p>
            This application will allow you to test how well you can remember a
            sequence of numbers.
          </p>
        </header>
        <Game />
      </div>
    );
  }
}

export default App;
