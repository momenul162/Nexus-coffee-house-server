const Cart = require("../models/Cart/Cart");

const findCartByProperty = (key, value) => {
  if ((key = "_id")) {
    return Cart.findById(value);
  } else {
    return Cart.findOne({ [key]: value });
  }
};

const findCartByEmail = (email) => {
  return Cart.find({ email: email });
};

module.exports = {
  findCartByProperty,
  findCartByEmail,
};
