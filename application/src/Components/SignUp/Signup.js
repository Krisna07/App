import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SignUpContainer from "./SignUpContainer";

const Signup = () => {
  return (
    <MuiThemeProvider>
      <SignUpContainer />
    </MuiThemeProvider>
  );
};

export default Signup;
