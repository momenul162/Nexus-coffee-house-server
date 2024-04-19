const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
      },
      message: (prop) => `Invalid email: ${prop.value}`,
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Pass is too short"],
  },
  roles: {
    type: [String],
    default: ["USER"],
  },
});

const User = model("User", userSchema);
module.exports = User;
