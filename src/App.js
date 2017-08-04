import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      menuOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ menuOpen: !this.state.menuOpen });
    return false;
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="wrapper">
          <div className="top chunk">
            <h1>What The Flexbox?!</h1>
          </div>
          <nav className="flex-nav">
            <a
              className="menu"
              style={{ cursor: "pointer" }}
              onClick={this.toggleNav}
            >
              &#9776; Menu
            </a>
            <ul className={`toggleNav${this.state.menuOpen ? " open" : ""}`}>
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
          <section className="hero chunk">
            <img alt="Hero Image" src="Fight Global Warming.jpg" />
          </section>
          <div className="chunk details">
            <p>Cool stuff, yo</p>
          </div>
          <div className="chunk signup">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="email address" />
              <input type="submit" value="Sign me up!" />
            </form>
          </div>
          <div className="chunk">
            <p>©Hovatown</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
