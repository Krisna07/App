import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const history = useNavigate();
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
          <button
            className="pageBtn"
            onClick={() => {
              return history("./login");
            }}
          >
            Login
          </button>
          <button
            className="pageBtn"
            onClick={() => {
              return history("./signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="mobileNav">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <span>Home</span>
          <span>About</span>

          <span>Team</span>
          <span>Pricing</span>
          <span>Contact</span>
          <span>
            <button
              className="pageBtn"
              onClick={() => {
                return history("./login");
              }}
            >
              Login
            </button>
            <button
              className="pageBtn"
              onClick={() => {
                return history("./signup");
              }}
            >
              Sign Up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
