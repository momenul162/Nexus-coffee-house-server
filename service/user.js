const User = require("../models/User/User");

const findByProperty = (key, value) => {
  if (key == "_di") {
    return User.findById(value);
  }
  return User.findOne({ [key]: value });
};

module.exports = {
  findByProperty,
};
