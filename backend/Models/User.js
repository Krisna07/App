const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String },
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
