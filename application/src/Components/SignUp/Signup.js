import React, { useState } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import SignUpContainer from "./SignUpContainer";
import SignUpForm from "./SignUpForm";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    pwConfirm: "",
    err: "",
  });
  const { name, email, password, pwConfirm, err } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const authData = () => {
    if (!name) {
      return (err = "Please enter the username");
    }
    console.log(formData);
  };

  return (
    <MuiThemeProvider>
      <SignUpForm onChange={onChange} formData={formData} />
    </MuiThemeProvider>
  );
};

export default Signup;
