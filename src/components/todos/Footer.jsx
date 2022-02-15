import React from "react";
import "./Todos.scss";

export const Footer = ({length}) => {
  const today = new Date();

  return (
    <footer>
      <p>{length} List Items</p>
      {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
    </footer>
  );
};
