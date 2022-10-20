const Account = require("../Models/AccountDetails");
const User = require("../Models/User");

const asyncHandler = require("express-async-handler");

const getAccount = asyncHandler(async (req, res) => {
  const accounts = await Account.find({ user: req.user._id });

  res.status(200).json({ message: accounts });
});
const createAccount = asyncHandler(async (req, res) => {
  let { name, accountNumber, bsb, accountBalance } = req.body;
  if (!name || !accountNumber || !bsb) {
    res.status(400).json({ message: "please input the required field" });
  }

  const account = await Account.create({
    user: req.user.id,
    Accountname: name,
    Accountnumber: accountNumber,
    BSB: bsb,
    Accountbalance: !accountBalance ? "$0" : accountBalance,
  });

  res.status(200).json({ message: account });
});

const editAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);
  if (!account) {
    res.status(400);
    throw new Error("account not found");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure authenticated user matches
  if (account.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const editedAccount = await Account.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ message: editedAccount });
});
const deleteAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  //make sure authenticated user matches
  if (account.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  if (!account) {
    res.status(400);
    throw new Error("user not found");
  }
  await account.remove();
  res.status(200).json({ message: req.params.id });
});
module.exports = { getAccount, createAccount, editAccount, deleteAccount };
