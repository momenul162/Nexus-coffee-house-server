const User = require("../models/User/User");

const findByProperty = (key, value) => {
  if (key == "_di") {
    return User.findById(value);
  }
  return User.findOne({ [key]: value });
};

const getAllUser = () => {
  return User.find();
};

module.exports = {
  findByProperty,
  getAllUser,
};
