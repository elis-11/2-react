import React from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.scss";
import "../../reset.css";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import About from "../about/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Home />
          <About />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
