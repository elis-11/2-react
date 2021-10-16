import React from "react";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="nav-logo">
      <a
        href="mailto:eliza.arzanukaeva@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-etsy" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default Logo;
