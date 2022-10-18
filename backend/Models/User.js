const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: [true, "Please enter the username"] },
    email: { type: String, require: [true, "Please enter the email"] },
    password: { type: String, require: [true, "Please enter the password"] },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;
