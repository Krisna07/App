import React from "react";

import "./Landing.css";
import {
  FaBullseye,
  FaCogs,
  FaCoins,
  FaHandHolding,
  FaPiggyBank,
  FaRegEye,
  FaStackExchange,
  FaUser,
} from "react-icons/fa";
import FunctionCard from "./Cards/FunctionCard";

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
  const briteFunctions = [
    {
      title: "Multi Banking",
      des: "Get all your banking done at one place. Let brite handeling and securing your funds.",
      icons: <FaPiggyBank />,
    },
    {
      title: "Multi Account",
      des: "Brite let the users to create accounts with keypharse which help to get back and restore the account.",
      icons: <FaStackExchange />,
    },
    {
      title: "Token",
      des: "Brite token are versatile and secure. Brite enables the user to create protfolio in crypto world.",
      icons: <FaCoins />,
    },
    {
      title: "Customizable",
      des: "Customize Brite for all custom finance workflows.",
      icons: <FaCogs />,
    },
  ];
  const briteprocess = [
    {
      title: "Create your account",
      des: "Create an account to start with Brite. And discover our features",
      icons: <FaUser />,
      background: "var(--color3)",
    },
    {
      title: "Verify your identity",
      des: "Complete the identity verification process to secure your account and transactions.",
      icons: <FaRegEye />,
      background: "var(--color2)",
    },

    {
      title: "Shoot for the goal",
      des: "You're good to go!, set up recurring savings for your goal, and discover what Brite has to offer.",
      icons: <FaBullseye />,
      background: "var(--color2)",
    },
    {
      title: "Be a helping hand",
      des: "Be a part of brite charity with goal to create a financially stable world. Help others and ask for help.",
      icons: <FaHandHolding />,
      background: "var(--color3)",
    },
  ];
  const briteEnables = [
    {
      title: "Automated Dollar Cost Averaging",
      des: "“Set It & Forget It” Crypto Dollar Cost Averaging. Automatically convert a percentage of your paycheck into top cryptocurrencies.",
    },
    {
      title: "Yield Farming",
      des: "Allocate some or all of earnings to investment accounts to be automatically deployed into partner Yield Farming and Staking Protocols.",
    },
    {
      title: "Crypto IRA & 401k Accounts",
      des: "Stream your payroll to compliant crypto IRA & 401k accounts. Easily swap between top cryptocurrencies.",
    },
    {
      title: "Free fiat On-Ramp & Off-Ramp ",
      des: "Free fiat On-Ramp and Off-Ramp via ACH transfer. Users are able to transfer to their regular bank accounts without paying a fee.",
    },
  ];
  console.log(arr);
  return (
    <div className="pageLayout">
      <div className="section1">
        <div className="heading textGradient" style={{ maxWidth: "25ch" }}>
          Budget Management System And Budget Planning
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
            <h2 className="heading textGradient">Brite Savings.</h2>
            <p>
              Manage your Finance in secure, Multi-inventory, Auntenticated
              Vault.
            </p>
          </div>
          <div className="appFunctions">
            {briteFunctions.map((items, key) => (
              <FunctionCard key={key} items={items} />
            ))}
          </div>
        </div>
        <div className="briteFunctions">
          <div className="briteHeading ">
            <h2 className="heading textGradient">Easy Managing</h2>
            <p>
              Manage your Finance in secure, Multi-inventory, Auntenticated
              Vault.
            </p>
          </div>
          <div
            className="appFunctions"
            style={{
              background: " rgba(128, 128, 128, 0.247)",
              width: "90%",
            }}
          >
            {briteprocess.map((items, key) => (
              <FunctionCard
                key={key}
                items={items}
                flexStyle={"flex-start"}
                textalign={"left"}
              />
            ))}
          </div>
        </div>
        <div className="briteFunctions">
          <div className="briteHeading ">
            <h2 className="heading textGradient">More than just saving</h2>
            <p>
              Brite is more than saving. We are built todo some great stuffs.
            </p>
          </div>
          <div
            className="appFunctions"
            style={{
              width: "120%",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              padding: "0",
            }}
          >
            {briteEnables.map((items, key) => (
              <FunctionCard
                key={key}
                items={items}
                flexStyle={"flex-start"}
                textalign={"left"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLayout;
