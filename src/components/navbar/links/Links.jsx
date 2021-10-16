import React from "react";
import { NavLink } from "react-router-dom";
import './Links.scss';

const Links = () => {
  return (
    <div className="link">
      <div>
        <NavLink className="item" to="/home">Profile</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/projects">Projects</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/news">News</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/about">About</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/settings">Settings</NavLink>
      </div>
    </div>
  );
};

export default Links;
