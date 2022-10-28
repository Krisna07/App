import React from "react";
import Login from "../Components/Login/Login";

const LoginPage = ({ type, showPassword }) => {
  return (
    <div className="form">
      <Login type={type} showPassword={showPassword} />
    </div>
  );
};

export default LoginPage;
