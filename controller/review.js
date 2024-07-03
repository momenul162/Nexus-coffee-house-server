const reviewService = require("../service/review");
const error = require("../utils/error");

const getReviews = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const reviews = await reviewService.getReviews(productId);

    return res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

const postReview = async (req, res, next) => {
  const newReview = req.body;

  try {
    const review = await reviewService.postReviewService(newReview);

    return res.status(200).json({ review, message: "Thank you for your review" });
  } catch (e) {
    if (e.code === 11000) {
      throw error("Your already done.😌", 400);
    } else {
      next(e);
    }
  }
};

module.exports = {
  getReviews,
  postReview,
};
