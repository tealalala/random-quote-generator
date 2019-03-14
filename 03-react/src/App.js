import React, { Component } from 'react';
import './App.css';
import HeaderQuote from './components/Header.js'
import NewQuote from './components/NewQuote.js'
import ButtonQuote from './components/Button.js'
import FooterQuote from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Content here
          <HeaderQuote/>
          <NewQuote/>
          <ButtonQuote/>
          <FooterQuote/>
        </header>
      </div>
    );
  }
}

export default App;
