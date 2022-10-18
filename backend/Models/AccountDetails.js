const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const accountSchema = mongoose.Schema({
  Accountname: { type: String, required: true },
  Accountnumber: {
    type: String,
    required: [true, "Account number is required."],
    minlength: 8,
    maxlength: 8,
    unique: true,
  },
  BSB: { type: Number, required: true },
  Accountbalance: { type: String },
});
accountSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Account", accountSchema);
