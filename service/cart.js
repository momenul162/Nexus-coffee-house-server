const Cart = require("../models/Cart/Cart");

// const findCartByProperty = (key, value) => {
//   console.log("key: ", key, "value: ", value);
//   if ((key = "_id")) {
//     return Cart.findById(value);
//   } else {
//     return Cart.findOne({ [key]: value });
//   }
// };

const findCartByEmail = (email) => {
  return Cart.find({ [userId.email]: email });
};

module.exports = {
  findCartByEmail,
};
