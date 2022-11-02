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
      <div className="heading">
        <FaLightbulb
          style={{
            padding: "1rem 0",
          }}
        />
      </div>
      <div className="sidemenus">
        {menuItems.map((items) => {
          return (
            <div
              className="menuItems"
              style={{ justifyContent: `${showSide ? "center" : ""}` }}
            >
              {items.icons}
              <span style={{ display: `${!showSide ? "block" : "none"}` }}>
                {items.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
