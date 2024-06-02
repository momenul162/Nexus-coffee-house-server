const Cart = require("../models/Cart/Cart");
const cartService = require("../service/cart");
const error = require("../utils/error");

// const updateCart = async (req, res, next) => {
//   const { cartId } = req.params;
//   try {
//     const cart = await cartService.findCartByProperty("_id", cartId);

//     if (!cart) {
//       throw error("Cart not found", 400);
//     }

//     return res.status(200).json(cart);
//   } catch (error) {
//     next(error);
//   }
// };

const getCart = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const carts = await Cart.find({ userId: userId })
      .populate({ path: "userId", select: "email name" })
      .populate({ path: "itemId", select: "name price image" });

    if (!carts) {
      throw error("Empty cart", 400);
    }

    return res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};

const postCart = async (req, res, next) => {
  const newCart = req.body;

  try {
    let exist = await Cart.findOne({ itemId: newCart.itemId });

    if (!exist) {
      exist = newCart;
    } else {
      exist.quantity += 1;
    }

    const cart = new Cart(exist);
    await cart.save();

    return res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCart,
  postCart,
};
