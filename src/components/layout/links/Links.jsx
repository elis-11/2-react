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
          Projects
        </NavLink>
        <NavLink
          to="/books"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Books
        </NavLink>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Profile
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
          to="/course"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Course
        </NavLink>
        <NavLink
          to="/hooks"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          Hooks
        </NavLink>
        <NavLink
          to="/new"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          New
        </NavLink>
      </div>
  );
};