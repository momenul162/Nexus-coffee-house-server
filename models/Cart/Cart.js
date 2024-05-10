const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  itemId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
