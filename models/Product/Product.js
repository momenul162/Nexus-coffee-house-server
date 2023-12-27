const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  chef: {
    type: String,
    required: true,
  },
  taste: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  photo: {
    type: File,
    required: true,
  },
});

const Product = model("Product", ProductSchema);
module.exports = Product;
