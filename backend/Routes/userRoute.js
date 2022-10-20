const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  editUser,
  createUser,
  deleteUser,
  loginUser,
} = require("../Controllers/UserController");
const { protect } = require("../Middleware/authMiddleware");
router.route("/").get(getUsers);
router.get("/user", protect, getUser);
// router.route("/user").get(protect, getUser);
router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/:id").put(editUser).delete(deleteUser);

module.exports = router;
