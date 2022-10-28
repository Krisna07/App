import React from "react";
import Signup from "../Components/SignUp/Signup";

const SignupPage = ({ type, showPassword }) => {
  return (
    <div className="form">
      <Signup type={type} showPassword={showPassword} />
    </div>
  );
};

export default SignupPage;
