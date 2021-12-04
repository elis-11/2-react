import React from "react";
import { NavLink } from "react-router-dom";
import './Links.scss';

const Links = () => {
  return (
    <div className="links">
      <div>
        <NavLink className="item" to="/home">Profile</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/projects">Projects</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/about">About</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/users">Users</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/work">Work</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/form">Form</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/calendar">Calendar</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/settings">Settings</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/useState">UseState</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/useEffect">UseEffect</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/useRef">UseRef</NavLink>
      </div>
      <div>
        <NavLink className="item" to="/hooks">Hooks</NavLink>
      </div>
    </div>
  );
};

export default Links;
