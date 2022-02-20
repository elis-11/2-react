import { Routes, Link, Route } from "react-router-dom";
import { Color } from "./color/Color";
import "./Course.scss";
import { Name } from "./Name";

export const Course = () => {
  return (
    <div className="Course">
      <ul>
        <li>
          <Link to="">Name</Link>
          <Link to="color">Color</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="color" element={<Color />} />
      </Routes>
    </div>
  );
};
