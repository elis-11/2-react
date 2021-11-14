import React, { useState, useEffect } from "react";
import "./UseEff.scss";

const UseEff = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  // useEffect(() =>{
  //   console.log('render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    // console.log('Type change', type);
  }, [type]);

  return (
    <div className="UseEff">
      <h2>UseEffect</h2>
      <h2>Resurses: {type}</h2>

      <button onClick={() => setType("Users")}>Users</button>
      <button onClick={() => setType("Todos")}>Todos</button>
      <button onClick={() => setType("Posts")}>Posts</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UseEff;
