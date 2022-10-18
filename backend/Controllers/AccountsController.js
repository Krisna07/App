const Account = require("../Models/AccountDetails");
const asyncHandler = require("express-async-handler");
const getAccount = asyncHandler(async (req, res) => {
  const accounts = await Account.find();

  res.status(200).json({ message: accounts });
});
const createAccount = asyncHandler(async (req, res) => {
  let { name, accountNumber, bsb, accountBalance } = req.body;
  if (!name || !accountNumber || !bsb) {
    res.status(400).json({ message: "please input the required field" });
  }

  const account = await Account.create({
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
  if (!account) {
    res.status(400);
    throw new Error("user not found");
  }
  await account.remove();
  res.status(200).json({ message: req.params.id });
});
module.exports = { getAccount, createAccount, editAccount, deleteAccount };
