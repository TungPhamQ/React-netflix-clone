import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
     window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="/netflix_logo.png" alt="Netflix Logo" />
      <img className="nav__avatar" src="/logo192.png" alt="Netflix Logo" />
    </div>
  );
};

export default Nav;
