import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NewQuote from './components/NewQuote.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Content here
          <NewQuote/>
        </header>
      </div>
    );
  }
}

export default App;
