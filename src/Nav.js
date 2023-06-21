import React from "react";
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="/netflix_logo.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="/logo192.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;
