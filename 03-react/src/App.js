import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import NewQuote from './components/NewQuote.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Content here
          <Header/>
          <NewQuote/>
          <Button/>
        </header>
      </div>
    );
  }
}

export default App;
