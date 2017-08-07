import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pricing-grid">
          <div className="plan plan1">
            <h2>Cat</h2>
            <p>Common, yet regarded by many as the worst house pet.</p>
            <ul className="features">
              <li>Scratches everything</li>
              <li>Easily lost for days</li>
              <li>Kind of a bummer</li>
            </ul>

            <p className="price">free</p>

            <a href="#" className="cta">
              Really?1?
            </a>
          </div>
          <div className="plan plan2">
            <h2>Dog</h2>
            <p>
              Loving, gentle, and caring. Dogs are the best housepet to have and
              will increase happiness ten fold.
            </p>
            <ul class="features">
              <li>Super Fun</li>
              <li>Friends love them</li>
              <li>Plays games</li>
              <li>Not a cat</li>
            </ul>
            <p className="price">$90</p>
            <a href="#" className="cta">
              Best Deal
            </a>
          </div>
          <div className="plan plan3">
            <h2>Fish</h2>
            <p>Cheap and easy</p>
            <ul className="features">
              <li>Eats flakes</li>
              <li>Cop out</li>
              <li>Replacable</li>
            </ul>
            <p className="price">$3</p>
            <a href="#" className="cta">
              Fsh
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
