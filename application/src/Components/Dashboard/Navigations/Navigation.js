import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaSearch,
  FaMoon,
  FaSun,
  FaBell,
  FaUser,
  FaMailBulk,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaAngleLeft,
} from "react-icons/fa";
import "./Navigation.scss";

import SideNav from "./SideNav";

function Navigation({ optOut, user, extSideNav, showSide }) {
  const [dark, setDark] = useState();
  const [profile, setprofile] = useState();
  const [sidenav, showSidenav] = useState();
  const logout = () => {
    optOut();
    setprofile(!profile);
  };

  return (
    <div className="navigationContainer">
      <section className="topnav">
        <div className="leftnav">
          <div className="burgurmenu" onClick={() => extSideNav()}>
            {showSide ? <FaBars /> : <FaAngleLeft />}
          </div>
          <div className="search-box">
            <input className="search-input" type="text" />
            <FaSearch className="searchIcon" />
          </div>
        </div>
        <div className="rightnav">
          <div className="theme" onClick={() => setDark(!dark)}>
            {!dark ? <FaMoon /> : <FaSun />}
          </div>
          <div className="notifications">
            <FaBell />
          </div>
          <div className="userdetails">
            <div>{user.name.split(" ", 1)}</div>
            <div>{}</div>
          </div>
          <div className="userProfile">
            <div
              className="userImage"
              onClick={() => {
                setprofile(!profile);
              }}
            ></div>

            <div
              className="profileOptions"
              style={{ display: `${profile ? "flex" : "none"}` }}
            >
              <div className="profileItems">
                <FaUser />
                Profile
              </div>
              <div className="profileItems">
                <FaMailBulk /> Inbox
              </div>

              <div className="profileItems">
                <FaCog /> Settings
              </div>
              <div className="profileItems">
                <FaQuestionCircle /> FAQ
              </div>

              <div className="profileItems" onClick={logout}>
                <FaSignOutAlt /> Logout
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navigation;
