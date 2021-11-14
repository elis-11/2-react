import React, { useState } from "react";
import "./UseSt.scss";

const UseSt = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  // setCounter((prev) => prev + 1);

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="UseSt header">
      <h2>Counter: {counter}</h2>
      <button onClick={increment} className="Add">
        Add
      </button>
      <button onClick={decrement} className="Delete">
        Delete
      </button>
    </div>
  );
};

export default UseSt;
