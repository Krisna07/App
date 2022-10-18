const express = require("express");
const router = express.Router();
const {
  getUsers,
  editUser,
  createUser,
  deleteUser,
  loginUser,
} = require("../Controllers/UserController");
router.route("/").get(getUsers);
router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/:id").put(editUser).delete(deleteUser);

module.exports = router;
