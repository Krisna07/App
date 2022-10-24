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
  });
  const [err, setErr] = useState();
  const { name, email, password, pwConfirm } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // setFormData(formData.err: "This is an error");
  const authData = () => {
    if (!name || !email || !password || !pwConfirm) {
      setErr("Please Enter the valid data");
    }
    if (password !== pwConfirm) {
      setErr(" The password doesnt match");
    }
  };

  return (
    <MuiThemeProvider>
      <SignUpForm onChange={onChange} formData={formData} />
    </MuiThemeProvider>
  );
};

export default Signup;
