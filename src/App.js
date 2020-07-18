import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
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
