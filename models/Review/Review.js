const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  ratings: {
    type: Number,
    require: true,
  },
  review: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

reviewSchema.index({ productId: 1, userId: 1 }, { unique: true });

const Review = model("Review", reviewSchema);

module.exports = Review;
