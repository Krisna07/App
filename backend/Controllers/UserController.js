const User = require("../Models/User");
const asyncHandler = require("express-async-handler");
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user" });
});
const createUser = asyncHandler(async (req, res) => {
  let { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "please input the required field" });
  }
  const user = {
    username: username,
    email: email,
    password: password,
  };
  let newUser = new User(user);

  res.status(200).json({ message: user });
});
const editUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `User Upadte ${req.params.id}` });
});
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `User Deeleted ${req.params.id}` });
});
module.exports = { getUsers, createUser, deleteUser, editUser };
