import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navbar from "../navbar/Navbar";
// import Home from "../home/Home";
// import Works from "../works/Works";
// import About from "../about/About";


function App() {
  return (
    <div className="App">
    <Router>
      <div className="contentt">
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/works" exact component={Works} />
          <Route path="/about" exact component={About} />
        </Switch> */}
      </div>
    </Router>

    </div>
  )
}

export default App
