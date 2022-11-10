import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Navigation from "../Components/Dashboard/Navigations/Navigation";
import "./Dashboard.css";
import SideNav from "../Components/Dashboard/Navigations/SideNav";

import PageRoutes from "../Components/Dashboard/PageRoutes";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSide, setShowSide] = useState(true);

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const extSidenav = () => {
    setShowSide(!showSide);
  };

  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
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
        <PageRoutes />
      </div>
    </div>
  );
};

export default Dashboard;
