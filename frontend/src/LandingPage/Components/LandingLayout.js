import React from "react";
import Navbar from "./Sections/Navigation/Navbar";

import Sections from "./Sections/Sections";
import Basket from "../Files/piggybank.svg";
import "./Landing.css";
import { FaMoneyBill, FaRecordVinyl } from "react-icons/fa";

const LandingLayout = () => {
  const arr = Array(6).fill();
  const uses = [
    {
      number: "120+ Million",
      type: "Users",
    },
    {
      number: "140+",
      type: "Banks",
    },
    {
      number: "18",
      type: "Countries",
    },
  ];
  console.log(arr);
  return (
    <div className="pageLayout">
      <div className="section1">
        <div className="heading" style={{ maxWidth: "25ch" }}>
          Budget Management System And Budget Planning
        </div>
        <div className="animatedBoxed">
          {arr.map((keys) => (
            <div key={keys}>
              <FaMoneyBill />
            </div>
          ))}
        </div>
        <div className="appdes">
          <p>
            Brite is a multi-invertory account management system based on Crypto
            protocol. Brite is creating a world for economic processing and
            saving solutions. Brite is safe and fully customizable online
            banking.
          </p>
        </div>
        <div className="appContainer">
          <div className="appImage"></div>
        </div>
        <div className="usesDiv">
          {uses.map((items, keys) => (
            <div className="items" key={keys}>
              <h4>{items.number}</h4>
              <h4>{items.type}</h4>
            </div>
          ))}
        </div>
        <div className="briteFunctions">
          <div className="briteHeading">
            <h2 className="heading">Brite Savings.</h2>
            <p>
              Manage your Finance in secure, Multi-inventory, Auntenticated
              Vault.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLayout;
