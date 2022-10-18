// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const userDetailSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  accounts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountDetails",
  },
});

module.exports = userDetailSchema;
