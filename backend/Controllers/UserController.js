const User = require("../Models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({ message: users });
});
const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Enter the required values");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user._id,
      name: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
const createUser = asyncHandler(async (req, res) => {
  let { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ message: "please input the required field" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    username: username,
    email: email,
    password: hashPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("Please check the details.");
  }
});
const editUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }
  const editedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ message: editedUser });
});
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }
  await user.remove();
  res.status(200).json({ message: req.params.id });
});
module.exports = { getUsers, loginUser, createUser, deleteUser, editUser };
