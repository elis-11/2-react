import React from "react";
import "./Todos.scss";
// import {FaSearch} from "react-icons/fa"

export const Search = ({ search, setSearch }) => {
  return (
    <form className="Search" onSubmit={(e) => e.preventDefault()}>
      <div className="search-cont">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};
