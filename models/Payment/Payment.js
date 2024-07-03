const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cartItem: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
  ],
  productId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Order-place", "Delivered"],
    default: "Pending",
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Payment = model("Payment", paymentSchema);

module.exports = Payment;
