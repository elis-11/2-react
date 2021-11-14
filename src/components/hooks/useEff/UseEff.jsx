import React, { useState, useEffect } from "react";
import "./UseEff.scss";

const UseEff = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() =>{
  //   console.log('render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    // console.log('Type change', type);

    return ()=>{
      console.log(('clean type'));
    }
  }, [type]);

  const mouseMoveHandler = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("ComponentDidMount");

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.addEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="UseEff">
      <h2>UseEffect</h2>
      <h2>Resurses: {type}</h2>

      <button onClick={() => setType("Users")}>Users</button>
      <button onClick={() => setType("Todos")}>Todos</button>
      <button onClick={() => setType("Posts")}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre>      ----VERS--2 */}
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
};

export default UseEff;
