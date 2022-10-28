import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import SignUpContainer from "./SignUpContainer";
import SignUpForm from "./SignUpForm";

const Signup = ({ type, showPassword }) => {
  return (
    <MuiThemeProvider>
      <SignUpForm type={type} showPassword={showPassword} />
    </MuiThemeProvider>
  );
};

export default Signup;
