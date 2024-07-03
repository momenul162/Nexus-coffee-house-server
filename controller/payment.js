require("dotenv").config();
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const paymentService = require("../service/payment");
const Cart = require("../models/Cart/Cart");
const error = require("../utils/error");
const { catchAsync } = require("../utils/catch-async");

const paymentIntents = catchAsync(async (req, res) => {
  const { price } = req.body;
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return res.status(200).json({
    clientSecret: paymentIntent.client_secret,
  });
});

const getOrdersForUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const orders = await paymentService.getOrders(userId);

    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrders = async (_req, res, next) => {
  try {
    const orders = await paymentService.getOrders();

    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const updateOrderStatus = async (req, res, next) => {
  const { orderId } = req.params;
  const { status } = req.body;
  console.log(orderId);
  try {
    const order = await paymentService.getOrderByProperty("_id", orderId);

    if (!order) {
      throw error("Order not found", 400);
    }
    order.status = status ?? order.status;

    await order.save();
    return res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

const paymentHistory = async (req, res, next) => {
  const newHistory = req.body;

  try {
    const history = await paymentService.postPaymentHistory(newHistory);

    const query = {
      _id: { $in: newHistory.cartItem?.map((id) => new mongoose.Types.ObjectId(id)) },
    };

    await Cart.deleteMany(query);

    return res.status(200).json(history);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOrders,
  getOrdersForUser,
  updateOrderStatus,
  paymentIntents,
  paymentHistory,
};
