import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import SignUpContainer from "./SignUpContainer";
import SignUpForm from "./SignUpForm";

const Signup = () => {
  // setFormData(formData.err: "This is an error");

  return (
    <MuiThemeProvider>
      <SignUpForm />
    </MuiThemeProvider>
  );
};

export default Signup;
