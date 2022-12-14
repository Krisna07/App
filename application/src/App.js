import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Pages/Dashboard";
import Homepage from "./Pages/Homepage";
import SignupPage from "./Pages/SignupPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/LoginPage";
import Account from "./Components/Dashboard/Pages/Apppages/Account";
import PageRoutes from "./Components/Dashboard/PageRoutes";
import DashHome from "./Components/Dashboard/Pages/DashHome";
import Messages from "./Components/Dashboard/Pages/Apppages/Messages";
import Goal from "./Components/Dashboard/Pages/Apppages/Goal";
import Transaction from "./Components/Dashboard/Pages/Apppages/Transaction";

function App() {
  const [type, setType] = useState(false);
  const showPassword = () => {
    setType(!type);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user" element={<Dashboard />}>
            <Route path="" element={<DashHome />} />
            <Route path="accounts" element={<Account />} />
            <Route path="chats" element={<Messages />} />
            <Route path="goals" element={<Goal />} />
            <Route path="transactions" element={<Transaction />} />
          </Route>
          <Route
            path="/login"
            element={
              <LoginPage
                type={type}
                showPassword={showPassword}
                onLoad={() => (!type ? showPassword() : "")}
              />
            }
          />
          <Route
            path="/signup"
            element={<SignupPage type={type} showPassword={showPassword} />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
