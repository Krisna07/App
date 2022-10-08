import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="logo"></div>

        <div className="navList">
          <span>Home</span>
          <span>About</span>

          <span>Team</span>
          <span>Pricing</span>
          <span>Contact</span>
          <button className="pageBtn">Sign Up</button>
        </div>
      </div>
      <div className="mobileNav">
        <input type="checkbox" id="active" />
        <label for="active" class="menu-btn">
          <span></span>
        </label>
        <label for="active" class="close"></label>
        <div class="wrapper">
          <span>Home</span>
          <span>About</span>

          <span>Team</span>
          <span>Pricing</span>
          <span>Contact</span>
          <span>
            <button className="pageBtn">Sign Up</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
