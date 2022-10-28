import React, { useState, useEffect, useRef } from "react";
import { FaApple, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

// import "../SignUp/Signup.css";
import "./Login.css";
import { RaisedButton, TextField } from "material-ui";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, register, reset } from "../../features/auth/authSlice";
import Spinner from "../Spinner/Spinner";

const Login = ({ type, showPassword }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/user");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      toast.error("Please enter the password");
    } else {
      const userData = {
        email,
        password,
      };
      dispatch(login(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <MuiThemeProvider>
      <div className="loginBox">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form action="post" className="login-form" onSubmit={onSubmit}>
          <TextField
            name="email"
            floatingLabelText="Email"
            className="textField"
            onChange={onChange}
          />
          <div className="passwordBox">
            <TextField
              type={!type ? "password" : "text"}
              name="password"
              floatingLabelText="Password"
              className="textField"
              onChange={onChange}
            />
            <span onClick={showPassword} style={{ background: "red" }}>
              {!type ? <FaEyeSlash /> : <FaEye />}
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
          <span style={{ color: "blue" }} onClick={() => navigate("/signup")}>
            {" "}
            here.
          </span>
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
    </MuiThemeProvider>
  );
};

export default Login;
