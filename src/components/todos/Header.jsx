import React from "react";
import "./Todos.scss";

export const Header = ({ title }) => {
  // ! props 1:36
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title"
}
