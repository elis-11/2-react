import React from "react";
import "./Todos.scss";

export const Footer = ({length}) => {
  const today = new Date();

  return (
    <footer>
      {/* <p>{length} List Items</p> */}
      <p>{length} List {length === 1 ? 'item' : 'items'}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};
