const express = require("express");
const router = express.Router();
const {
  getUsers,
  editUser,
  createUser,
  deleteUser,
} = require("../Controllers/UserController");
router.route("/").get(getUsers).post(createUser);
router.route("/:id").put(editUser).delete(deleteUser);

module.exports = router;
