import React from "react";
import { Routes, Route } from "react-router";
import Account from "./Pages/Apppages/Account";
import Messages from "./Pages/Apppages/Messages";
import DashHome from "./Pages/DashHome";
import "./Pages.scss";
import Goal from "./Pages/Apppages/Goal";
import Transaction from "./Pages/Apppages/Transaction";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DashHome />} />
      <Route path="accounts" element={<Account />} />
      <Route path="chats" element={<Messages />} />
      <Route path="goals" element={<Goal />} />
      <Route path="transactions" element={<Transaction />} />
    </Routes>
  );
};

export default PageRoutes;
