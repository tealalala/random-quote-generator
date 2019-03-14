import React, { Component } from 'react';
import './App.css';
import HeaderQuote from './components/Header.js'
import QuoteBox from './components/QuoteBox.js'
import FooterQuote from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App" id="container">
        <HeaderQuote/>
        <QuoteBox/>
        <FooterQuote/>
      </div>
    );
  }
}

export default App;
