import { NavLink } from "react-router-dom";
import Icons from "./icons/Icons";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJV8o6WqlDiYhUlLyRcwKxRvj1S36C6a3_g&usqp=CAU"
          alt=""
        />
      </div>
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
     <Icons />
    </nav>
  );
};

export default Navbar;
