const express = require("express");
const router = express.Router();
const {
  createAccount,
  editAccount,
  getAccount,
  deleteAccount,
} = require("../Controllers/AccountsController");
router.route("/").get(getAccount).post(createAccount);
router.route("/:id").put(editAccount).delete(deleteAccount);

module.exports = router;
