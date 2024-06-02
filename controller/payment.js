require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const paymentController = async (req, res, next) => {
  const { price } = req.body;
  const amount = price * 100;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  paymentController,
};
