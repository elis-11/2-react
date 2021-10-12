/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PostItem from "./components/PostItem";
// import Counter from "./components/Counter";
import "./reset.css";
import "./scss/App.scss";

function App() {
  const [value, setValue] = useState("Text");

  return (
    <div className="App">
      <PostItem />
    </div>
  );
}

export default App;
