import React from "react";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="container">
        <div className="logo-container"></div>
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
