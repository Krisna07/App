import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Navigation from "../Components/Dashboard/Navigations/Navigation";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const logOut = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  console.log(user.token);

  return (
    <div className="dashboard" style={{ color: "white" }}>
      <Navigation optOut={logOut} user={user} />
    </div>
  );
};

export default Dashboard;
