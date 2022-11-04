import React from "react";
import { FaBullseye, FaCoins, FaHome, FaLightbulb } from "react-icons/fa";

import { BsBank2, BsFillChatDotsFill } from "react-icons/bs";

import "./Sidenav.scss";

const SideNav = ({ showSide }) => {
  const menuItems = [
    { name: "Dashboard", icons: <FaHome /> },
    { name: "Chats", icons: <BsFillChatDotsFill /> },
    { name: "Goals", icons: <FaBullseye /> },
    { name: "Accounts", icons: <BsBank2 /> },
    { name: "Transactions", icons: <FaCoins /> },
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
        {menuItems.map((items) => {
          return (
            <div className="menuItems">
              <div
                className="menuOpt"
                style={{ justifyContent: `${showSide ? "center" : ""}` }}
              >
                {items.icons}
                <span style={{ display: `${!showSide ? "block" : "none"}` }}>
                  {items.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
