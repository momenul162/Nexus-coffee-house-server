const Product = require("../models/Product/Product");
const error = require("../utils/error");

const getProducts = () => {
  return Product.find();
};

const findProductByProperty = (key, value) => {
  if (key == "_id") {
    return Product.findById(value);
  }
  return Product.findOne({ [key]: value });
};

const postProductService = async ({
  name,
  price,
  chef,
  supplier,
  taste,
  category,
  details,
  image,
}) => {
  let product = await Product.findOne({ name });
  if (product) {
    throw error("This Product Already Exits", 400);
  }

  product = new Product({
    name,
    price,
    chef,
    supplier,
    taste,
    category,
    details,
    image,
  });

  console.log("New Product:", product);

  return product.save();
};

module.exports = {
  postProductService,
  getProducts,
  findProductByProperty,
};
