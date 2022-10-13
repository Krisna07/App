const getUsers = (req, res) => {
  res.status(200).json({ message: "Users" });
};
const createUser = (req, res) => {
  res.status(200).json({ message: "Users created" });
};
const editUser = (req, res) => {
  res.status(200).json({ message: "Users Edited" });
};
const deleteUser = (req, res) => {
  res.status(200).json({ message: "Users Deleted" });
};
module.exports = { getUsers, createUser, deleteUser, editUser };
