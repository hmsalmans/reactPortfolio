import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <h1 className="navbar-brand disabled" to="#">
            <span style={{ color: "lime" }}>Salman's Porfolio</span>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/Aboutme">
                AboutMe
              </Link>
              <Link className="nav-item nav-link" to="/Projects">
                Projects
              </Link>
              <Link className="nav-item nav-link" to="/Contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
