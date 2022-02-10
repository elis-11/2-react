import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.scss";

export const Links = () => {
  return (
    <div className="links">
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Profile
        </NavLink>
        <NavLink
          to="/projects"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          About
        </NavLink>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Users
        </NavLink>
        <NavLink
          to="/work"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Work
        </NavLink>
        <NavLink
          to="/form"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Form
        </NavLink>
        <NavLink
          to="/todos"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Todos
        </NavLink>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Settings
        </NavLink>
        <NavLink
          to="/hooks"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Hooks
        </NavLink>
      </div>
  );
};