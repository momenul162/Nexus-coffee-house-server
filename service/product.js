const Product = require("../models/Product/Product");
const error = require("../utils/error");

const getProducts = (sort, skip, limit) => {
  const products = Product.find({})
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate({ path: "category", select: "name" });
  return products;
};

const getTotalProductsCount = () => {
  return Product.countDocuments();
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

  return product.save();
};

module.exports = {
  postProductService,
  getProducts,
  getTotalProductsCount,
  findProductByProperty,
};
