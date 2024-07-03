const Payment = require("../models/Payment/Payment");

const postPaymentHistory = (newHistory) => {
  const paymentHistory = new Payment(newHistory);

  return paymentHistory.save();
};

const getOrderByProperty = (key, value) => {
  if (key === "_id") {
    return Payment.findById(value);
  } else {
    return Payment.findOne({ [key]: value });
  }
};

const getOrders = (userId) => {
  if (userId) {
    return (orders = Payment.find({ userId })
      .populate({ path: "productId", select: "name image price" })
      .populate({ path: "userId", select: "name email" }));
  } else {
    return (orders = Payment.find()
      .populate({ path: "productId", select: "name image price" })
      .populate({ path: "userId", select: "name email" }));
  }
};

module.exports = {
  postPaymentHistory,
  getOrderByProperty,
  getOrders,
};
