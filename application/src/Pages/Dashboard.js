import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Navigation from "../Components/Dashboard/Navigations/Navigation";
import "./Dashboard.css";
import SideNav from "../Components/Dashboard/Navigations/SideNav";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  console.log(user);

  return (
    <div className="dashboard" style={{ color: "white" }}>
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="topnav">
        <Navigation optOut={logOut} user={user} />
      </div>
      <div className="appbody">b</div>
    </div>
  );
};

export default Dashboard;
