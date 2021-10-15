import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className="link">
      <div className="item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="">
        <NavLink to="/dialogs">Message</NavLink>
      </div>
      <div className="">
        <NavLink to="/news">News</NavLink>
      </div>
      <div className="">
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="">
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </div>
  );
};

export default Links;
