import React, { useState } from "react";

const Count = () => {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('Text')

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className='Count'>
      <h2>{likes}</h2>
      <h2>{value}</h2>
      <input 
      type="text"
      value={value}
    //   onChange={event => event.target.value}
      onChange={event => setLikes(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Count;
