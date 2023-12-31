const productService = require("../service/product");

const productController = async (req, res, next) => {
  const { name, chef, supplier, taste, category, details } = req.body;

  try {
    const product = await productService({ name, chef, supplier, taste, category, details });
    return res.status(200).json({ message: "Product Created Successfully", product });
  } catch (e) {
    next(e);
  }
};

module.exports = productController;
