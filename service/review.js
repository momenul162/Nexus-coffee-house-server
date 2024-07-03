const { ObjectId } = require("mongodb");
const Review = require("../models/Review/Review");
const error = require("../utils/error");

const getReviews = (id) => {
  return Review.find({ productId: id })
    .populate({ path: "userId", select: "name" })
    .populate({ path: "productId", select: "name" });
};

// const getReviewByProperty = (key, value) => {
//   if (key === "_id") {
//     return Review.findById(value);
//   } else {
//     return Review.findOne({ [key]: value });
//   }
// };

const postReviewService = async (review) => {
  // const query = new ObjectId(review.productId);

  const reviewExit = await Review.findOne({ userId: review?.userId, productId: review.productId });

  if (reviewExit) {
    throw error("Review already done", 400);
  }

  const newReview = new Review(review);
  return newReview.save();
};

module.exports = {
  getReviews,
  postReviewService,
};
