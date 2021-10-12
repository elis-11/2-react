/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import Counter from "./components/Counter";
import "./reset.css";
import './scss/App.scss'

function App() {
  const [value, setValue] = useState("Text");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>JavaScript is important for performance!</div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
