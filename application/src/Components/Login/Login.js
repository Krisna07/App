import React, { useState, useEffect, useRef } from "react";
import { FaApple, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

// import "../SignUp/Signup.css";
import "./Login.css";
import { RaisedButton, TextField } from "material-ui";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePwd, setHidepwd] = useState(true);
  const history = useNavigate();
  const togglePassword = () => {
    setHidepwd(!hidePwd);
  };
  const submitForm = (e) => {
    console.log(username, password);
    e.preventDefault();
  };

  return (
    <MuiThemeProvider>
      <div className="container">
        <div className="login-container">
          <div className="heading">
            <h1>Login</h1>
          </div>
          <form action="post" className="login-form" onSubmit={submitForm}>
            <TextField
              name="email"
              floatingLabelText="Email"
              className="textField"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div className="passwordBox">
              <TextField
                name="password"
                floatingLabelText="Password"
                className="textField"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={!hidePwd ? "text" : "password"}
              />
              <span onClick={() => setHidepwd(!hidePwd)}>
                {!hidePwd ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <RaisedButton
              className="submitBtn"
              primary={true}
              type="submit"
              label="Login"
            />
          </form>
          <label className="newHere">
            New to the app ? Create yout account
            <span style={{ color: "blue" }}> here.</span>
          </label>
          <div className="login-Options">
            <button className="submitBtn">
              Login with Google <FaGoogle />
            </button>
            <button className="submitBtn">
              Login with Apple <FaApple />
            </button>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Login;
