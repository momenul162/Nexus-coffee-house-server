const productService = require("../service/product");
const error = require("../utils/error");

const getAllproduct = async (req, res, next) => {
  const { order = "asc", page = 1, limit = 9 } = req.query;

  const skip = (page - 1) * limit;

  const sort = order === "asc" ? 1 : -1;
  const options = { category: sort };
  try {
    const products = await productService.getProducts(options, skip, parseInt(limit));
    const totalProduct = await productService.getTotalProductsCount();

    return res.status(200).json({ products, totalProduct, page, limit });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await productService
      .findProductByProperty("_id", productId)
      .populate({ path: "category", select: "name" });

    if (!product) {
      throw error("Product not found", 404);
    }
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  const { name, image, supplier, price, taste, category, details } = req.body;

  if (!name || !image || !price || !taste || !category) {
    throw error("Please atleast enter name, price, taste, image & category", 400);
  }

  try {
    let product = await productService.postProductService({
      name,
      supplier,
      taste,
      price,
      image,
      category,
      details,
    });

    return res.status(200).json({
      message: "Product Created Successfully",
      product,
    });
  } catch (e) {
    next(e);
  }
};

const updateProductById = async (req, res, next) => {
  const { productId } = req.params;
  const { name, supplier, price, taste, category, details } = req.body;

  try {
    const product = await productService.findProductByProperty("_id", productId);

    if (!product) {
      throw error("Product not found", 404);
    }

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.supplier = supplier ?? product.supplier;
    product.taste = taste ?? product.taste;
    product.category = category ?? product.category;
    product.details = details ?? product.details;

    await product.save();
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await productService.findProductByProperty("_id", productId);

    if (!product) {
      throw error("Product not found", 404);
    }

    await product.deleteOne({ _id: productId });
    return res.status(203).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postProduct,
  getAllproduct,
  getProductById,
  updateProductById,
  deleteProductById,
};

// const { page = 1, limit = 9, category } = req.query;

// let query = {};
// if (category) {
//   query.category = category;
// }

// const options = {
//   page: parseInt(page),
//   limit: parseInt(limit),
// };
/**
 * TODO: how can provide params??
 */
