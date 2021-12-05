import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
// import "../../reset.css";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Users from "../users/Users";
import Work from "../work/Work";
import Settings from "../settings/Settings";
import Calendar from "../calendar/Calendar";
import UseState from "../useState/UseState";
import Hooks from "../hooks/Hooks";
import Form from "../form/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/useState">
            <UseState />
            </Route>
          <Route path="/hooks">
            <Hooks />
            </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
