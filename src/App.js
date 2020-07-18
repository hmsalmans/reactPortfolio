import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1 className="navbar-brand disabled" to="#">
            Salman
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
              <Link className="nav-item nav-link " to="/Aboutme">
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

        <div>
          <Switch>
            <Route exact path="/Aboutme" component={Aboutme} />
            <Route exact path="/Contact" component={Contact} />

            <Route exact path="/Projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
