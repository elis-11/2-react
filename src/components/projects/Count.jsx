import React, { useState } from "react";

const Count = () => {
  const [likes, setLikes] = useState(5);

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className='Count'>
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Count;
