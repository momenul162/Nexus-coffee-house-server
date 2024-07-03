const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Object,
    require: true,
    default: { price: 0, newPrice: 0 },
  },
  taste: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sold: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  details: {
    type: String,
    required: true,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
