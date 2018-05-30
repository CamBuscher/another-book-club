import React, { Component } from 'react';
import HomePage from '../HomePage/HomePage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Another book club</h1>
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
