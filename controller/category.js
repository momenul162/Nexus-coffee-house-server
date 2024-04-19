const categoryService = require("../service/category");
const error = require("../utils/error");

const getAllCategory = async (_req, res, next) => {
  try {
    const categories = await categoryService.getCategory();

    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (req, res, next) => {
  const { categoryId } = req.params;
  console.log("CategoryId:", categoryId);
  try {
    let category = await categoryService.findCategoryByProperty("_id", categoryId);

    console.log("Category:", category);

    if (!category) {
      throw error("Category not found", 404);
    }

    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

const postCategory = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    throw error("Please enter category name", 400);
  }
  try {
    const category = await categoryService.postCategory({ name });

    return res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategory,
  postCategory,
  getCategoryById,
};
