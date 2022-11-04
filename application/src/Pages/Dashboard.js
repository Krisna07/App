import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Navigation from "../Components/Dashboard/Navigations/Navigation";
import "./Dashboard.css";
import SideNav from "../Components/Dashboard/Navigations/SideNav";
import DashHome from "../Components/Dashboard/Pages/DashHome";

const Dashboard = () => {
  const [showSide, setShowSide] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const extSidenav = () => {
    setShowSide(!showSide);
  };

  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  console.log(user);

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
        <DashHome />
      </div>
    </div>
  );
};

export default Dashboard;
