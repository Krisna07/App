const express = require("express");
const router = express.Router();
const { getUsers } = require("../Controllers/UserController");
router.get("/", getUsers);
router.post("/", (req, res) => {
  res.status(200).json({ message: "userCreated" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "userEdited" });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "userRemoved" });
});
module.exports = router;
