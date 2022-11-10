import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Navigation from "../../Navigations/Navigation";
import SideNav from "../../Navigations/SideNav";
import DashHome from "../DashHome";
import Account from "./Account";

import "./Applayout.scss";
import Goal from "./Goal";
import Messages from "./Messages";
import Transaction from "./Transaction";

const AppLayout = (logOut, user) => {
  const [showSide, setShowSide] = useState(true);
  const extSidenav = () => {
    setShowSide(!showSide);
  };

  return (
    <div
      className="dashboard"
      style={{
        color: "white",
        gridTemplateColumns: `${showSide ? "5% 95%" : "15% 85%"}`,
      }}
    >
      <div className="sidenav" style={{ width: `${showSide ? "5% " : "15%"}` }}>
        <SideNav showSide={showSide} />
      </div>
      <div className="topnav">
        <Navigation
          optOut={logOut}
          user={user}
          extSideNav={extSidenav}
          showSide={showSide}
        />
      </div>

      <div className="appbody">
        <Routes>
          <Route path="" element={<DashHome />} />
          <Route path="accounts" element={<Account />} />
          <Route path="chats" element={<Messages />} />
          <Route path="goals" element={<Goal />} />
          <Route path="transactions" element={<Transaction />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
