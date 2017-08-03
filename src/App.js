import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <nav className="flex-nav">
            <ul>
              <li>
                <a href="/">Item 01</a>
              </li>
              <li>
                <a href="/">Item 02</a>
              </li>
              <li>
                <a href="/">Item 03</a>
              </li>
              <li>
                <a href="/">Item 04</a>
              </li>
              <li>
                <a href="/">Item 05</a>
              </li>
              <li>
                <a href="/">Item 06</a>
              </li>
              <li className="social">
                <a href="http://twitter.com/matthova">∂ƒ©</a>
              </li>
              <li className="social">
                <a href="http://facebook.com/matthewhovanec">å∫ß</a>
              </li>
              <li className="social">
                <a href="http://github.com/matthova">œœœ</a>
              </li>
              <li className="social">
                <a href="http://instagram.com/matthova">πåπ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
