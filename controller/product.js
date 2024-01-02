const productService = require("../service/product");
const error = require("../utils/error");

const postProduct = async (req, res, next) => {
  const { name, chef, supplier, taste, category, details } = req.body;
  if (!name || !taste || !category) {
    throw error("Please atleast enter name, taste & category", 400);
  }

  try {
    const product = await productService.postProductService({
      name,
      chef,
      supplier,
      taste,
      category,
      details,
    });

    return res.status(200).json({ message: "Product Created Successfully", product });
  } catch (e) {
    next(e);
  }
};

const getAllproduct = async (_req, res, next) => {
  /**
   * -TODO filter, sort, pagination, select
   */
  try {
    const products = await productService.getProducts();

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await productService.findProductByProperty("_id", productId);

    if (!product) {
      throw error("Product not found", 404);
    }
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
  deleteProductById,
};
