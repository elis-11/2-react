import React from "react";
import { Routes, Link, Route } from "react-router-dom";

import "./Hooks.scss";
import UseState from "./useState/UseState";
import UseEff from "./useEff/UseEff";
import UseRef from "./useRef/UseRef";
import UseSt from "./useSt/UseSt";

export const Hooks = () => {
  return (
    <div className="Hooks">
      HOOKS
      <ul>
        <li>
          <Link to="">UseState-Counter</Link>
        </li>
        <li>
          <Link to="useEff">UseEffect-Coordinator</Link>
        </li>
        <li>
          <Link to="useRef">UseRef-Login</Link>
        </li>
        <li>
          <Link to="useState">UseState-Add-Supliers</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UseSt />} />
        <Route path="useEff" element={<UseEff />} />
        <Route path="useRef" element={<UseRef />} />
        <Route path="useState" element={<UseState />} />
      </Routes>
    </div>
  );
};
