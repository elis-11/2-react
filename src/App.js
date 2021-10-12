import React, { useState } from "react";
// import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("Text");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>
              JavaScript is important for performance!
          </div>
        </div>
        <div className="post__btns">
<button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
