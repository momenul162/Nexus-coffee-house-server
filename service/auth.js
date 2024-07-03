const User = require("../models/User/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const error = require("../utils/error");
const { findByProperty } = require("./user");

const registerService = async ({ name, email, password }) => {
  let user = await findByProperty("email", email);
  if (user) {
    throw error("User Already Exits", 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  user = new User({ name, email, password: hash });
  return user.save();
};

const loginService = async ({ email, password }) => {
  const user = await findByProperty("email", email);
  if (!user) {
    throw error("Invalid Credential", 400);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw error("Invalid Credential", 400);
  }

  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    roles: user.roles,
  };
  const token = jwt.sign(payload, "secret-key", { expiresIn: "7d" });

  return {
    user: payload,
    token,
  };
};

module.exports = {
  registerService,
  loginService,
};
