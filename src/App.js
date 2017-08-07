import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="hero chunk">
            <img alt="Fight Global Warming" src="Fight Global Warming.jpg" />
          </div>
          <nav className="slider-nav">
            <ul>
              <li className="arrow">
                <a href="/">
                  <span>←</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Item 01. oh yeah</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Item 02</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>Item 03</span>
                </a>
              </li>
              <li className="arrow">
                <a href="/">
                  <span>→</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
