const Payment = require("../models/Payment/Payment");

const postPaymentHistory = (newHistory) => {
  const paymentHistory = new Payment(newHistory);

  return paymentHistory.save();
};

const getOrderByProperty = ({ key, value }) => {
  if (key === "_id") {
    return Payment.findById(value);
  } else {
    return Payment.findOne({ [key]: value });
  }
};

const getOrders = () => {
  const orders = Payment.find();

  return orders;
};

module.exports = {
  postPaymentHistory,
  getOrderByProperty,
  getOrders,
};
