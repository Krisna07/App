import React, { useState } from "react";
// import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
// import PasswordStr from "./PasswordStr";
import "./Signup.css";

const SignUpForm = ({ auth, type, onChange, formData }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   pwConfirm: "",
  // });

  const [pwError, setPwerror] = useState();
  // const { name, email, password, pwConfirm } = formData;

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  console.log(formData);
  const onSubmit = (e) => {
    e.preventDefault();
    // if (!password || !pwConfirm) {
    //   return setPwerror("please enter the password");
    // }
    // if (password !== pwConfirm) {
    //   setPwerror("Password didnt match");
    // } else {
    //   setPwerror("");
    // }
  };
  return (
    <div className="loginBox">
      <h1 className="heading">Sign Up</h1>

      <form onSubmit={onSubmit}>
        <TextField
          name="name"
          floatingLabelText="Username"
          value={formData.name}
          onChange={onChange}
        />

        <TextField
          name="email"
          floatingLabelText="Email"
          value={formData.email}
          onChange={onChange}
        />

        <TextField
          type={type}
          name="password"
          floatingLabelText="Password"
          value={formData.password}
          onChange={onChange}
        />

        <TextField
          type={type}
          name="pwConfirm"
          floatingLabelText="Confirm Password"
          value={formData.pwConfirm}
          onChange={onChange}
        />
        <br />
        <p style={{ display: `${!pwError ? "hidden" : "block"}` }}>
          {!pwError ? "" : pwError}
        </p>

        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        />
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/login">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
