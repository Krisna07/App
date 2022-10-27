import React, { useState, useEffect } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./Signup.css";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../Spinner/Spinner";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    pwConfirm: "",
  });
  const [type, setType] = useState();

  const { username, email, password, pwConfirm } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/user");
      console.log(isSuccess);
    }
    dispatch(reset());
    console.log("Signup");
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== pwConfirm) {
      toast.error("Password donot match");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="loginBox">
      <h1 className="heading">
        <FaUser /> Sign Up
      </h1>

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          floatingLabelText="Username"
          value={username}
          onChange={onChange}
        />

        <TextField
          name="email"
          floatingLabelText="Email"
          value={email}
          onChange={onChange}
        />

        <TextField
          type={type}
          name="password"
          floatingLabelText="Password"
          value={password}
          onChange={onChange}
        />

        <TextField
          type={type}
          name="pwConfirm"
          floatingLabelText="Confirm Password"
          value={pwConfirm}
          onChange={onChange}
        />
        <br />

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
