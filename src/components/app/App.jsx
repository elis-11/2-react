import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "../../reset.css";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Projects" exact component={Projects} />
          <About />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
