const Product = require("../models/Product/Product");
const error = require("../utils/error");

const productService = async ({ name, chef, supplier, taste, category, details }) => {
  let product = await Product.findOne({ name });

  if (product) {
    throw error("This Product Already Exits", 400);
  }

  product = new Product({ name, chef, supplier, taste, category, details });
  return product.save();
};

module.exports = productService;
