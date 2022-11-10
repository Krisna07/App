import React, { useState } from "react";
import { FaBullseye, FaCoins, FaHome, FaLightbulb } from "react-icons/fa";

import { BsBank2, BsFillChatDotsFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./Sidenav.scss";

const SideNav = ({ showSide }) => {
  const getUrl = window.location.href.split("/");
  let thisUrl = getUrl[getUrl.length - 1];
  console.log(thisUrl);
  if (thisUrl === "user") {
    thisUrl = "dashboard";
  }
  const menuItems = [
    {
      name: "Dashboard",
      icons: <FaHome />,
      route: "",
      obj: "dashboard",
    },
    {
      name: "Chats",
      icons: <BsFillChatDotsFill />,
      route: "chats",
      obj: "chats",
    },
    { name: "Goals", icons: <FaBullseye />, route: "goals", obj: "goals" },
    {
      name: "Accounts",
      icons: <BsBank2 />,
      route: "accounts",
      obj: "accounts",
    },
    {
      name: "Transactions",
      icons: <FaCoins />,
      route: "transactions",
      obj: "transactions",
    },
  ];

  return (
    <div className="sideContainer">
      <h2
        className="menuItems"
        style={{
          justifyContent: "center",
          margin: "0",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <FaLightbulb />
        <span
          style={{
            display: `${!showSide ? "block" : "none"}`,
            color: "var(--color4)",
          }}
        >
          Brite
        </span>
      </h2>
      <div className="sidemenus">
        {menuItems.map((items, x) => {
          return (
            <NavLink
              className={` ${
                thisUrl === items.obj
                  ? " menuItems menu_active"
                  : "menuItems menu_inactive"
              }`}
              to={`${items.route}`}
            >
              <div
                className="menuOpt"
                style={{ justifyContent: `${showSide ? "center" : ""}` }}
              >
                {items.icons}
                <span style={{ display: `${!showSide ? "block" : "none"}` }}>
                  {items.name}
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
