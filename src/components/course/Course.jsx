import React from "react";
import "./Course.scss";

export const Course = () => {
  // !1 random name
  const handleChangeName = () => {
    const names = ["Elis", "John", "John Smith", "Robert"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };
  // !2 click
  const handleClick = () => {
    console.log("You clicked it");
  };
  //!3 click name
  const handleClick3 = (name) => {
    console.log(`${name} was clicked`);
  };
  //!4 click event
  const handleClick4 = (e) => {
    // console.log(e);
    console.log(e.target.innerText);
  };

  return (
    <div className="Course content">
      <h2>Course</h2>
      <p>Page </p>
      <p>Lorem ipsum dolor distinctio!</p>
      {/* !1 random name  */}
      <p onDoubleClick={handleClick}>
        Hello {handleChangeName()}!
        </p>
      <button onClick={handleClick}>Click It</button> {/* !2 click  */}
      <button onClick={() => handleClick3("Lis")}>Click It</button>{" "}
      {/* !2 click  */}
      <button onClick={(e) => handleClick4(e)}>Click</button>
    </div>
  );
};

// export default Course;
