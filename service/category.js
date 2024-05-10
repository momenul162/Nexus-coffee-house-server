const Category = require("../models/Category/Category");
const error = require("../utils/error");

const getCategory = () => {
  return Category.find();
};

const findCategoryByProperty = (key, value) => {
  if (key == "_id") {
    return Category.findById(value);
  }
  return Category.findOne({ [key]: value });
};

const postCategory = async ({ name }) => {
  let category = await Category.findOne({ name });

  if (category) {
    throw error("Category already exist", 400);
  }

  category = new Category({ name });
  return category.save();
};

module.exports = {
  getCategory,
  postCategory,
  findCategoryByProperty,
};
