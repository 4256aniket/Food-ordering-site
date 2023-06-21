import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/images/logo.png" alt="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
