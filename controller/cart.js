const Cart = require("../models/Cart/Cart");

const postCart = async (req, res, next) => {
  const newCart = req.body;
  try {
    const cart = new Cart(newCart);
  } catch (error) {}
};
