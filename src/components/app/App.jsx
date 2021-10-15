import React from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.scss";
import "../../reset.css";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Home />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
