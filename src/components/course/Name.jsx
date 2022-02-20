import { useState } from "react";
import "./Course.scss";

export const Name = () => {
  const [name, setName] = useState("Elisa");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Elisa", "Simon", "Dr. Hartmann", "Robert"];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(count);
  };

  return (
    <div className="Name content">
      <h2>Name</h2>
      <p>Page </p>
      <p>Lorem ipsum dolor distinctio!</p>
      <p onDoubleClick={handleClick}>Hello {name}!</p>

      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Count</button>
      <button onClick={handleClick2}>Count 2</button>
    </div>
  );
};
