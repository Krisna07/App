import React from "react";
import { FaLightbulb } from "react-icons/fa";
import "./Sidenav.scss";

const SideNav = () => {
  return (
    <div className="sideContainer">
      <div className="heading">
        <FaLightbulb
          style={{
            padding: "1rem 0",
          }}
        />
      </div>
      <div className="sidemenus"></div>
    </div>
  );
};

export default SideNav;
