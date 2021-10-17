import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(5);
  // const [value, setValue] = useState('Text')

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className='Count'>
      <h2>{count}</h2>
      {/* <h2>{value}</h2>
      <input 
      type="text"
      value={value}
    //   onChange={event => event.target.value}
      onChange={event => setCount(event.target.value)}
      /> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Count;
