import React, { Component } from 'react';
import './App.css';
import searchViaAuthorTitleISBN from '../../Helpers/APIcalls'

class App extends Component {
  render() {
    console.log(searchViaAuthorTitleISBN('annihilation'))
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Another book club</h1>
        </header>
      </div>
    );
  }
}

export default App;
