const express = require("express");
const router = express.Router();
const {
  createAccount,
  editAccount,
  getAccount,
  deleteAccount,
} = require("../Controllers/AccountsController");
const { protect } = require("../Middleware/authMiddleware");

router.route("/").get(protect, getAccount).post(protect, createAccount);
router.route("/:id").put(protect, editAccount).delete(protect, deleteAccount);

module.exports = router;
