const router = require("express").Router();
const productCotroller = require("../controller/product");
const authenticate = require("../middleware/uthenticate");
const verifyAdmin = require("../middleware/verifyAdmin");

/**
 * -@method GET
 * -Get one product by productId
 */
router.get("/api/products/:productId", productCotroller.getProductById);

/**
 * -@method PATCH
 * -Update a product using put
 */
router.patch(
  "/admin/api/products/:productId",
  authenticate,
  verifyAdmin,
  productCotroller.updateProductById
);

/**
 * -@method DELETE
 * -Create a product
 */
router.delete(
  "/admin/api/products/:productId",
  authenticate,
  verifyAdmin,
  productCotroller.deleteProductById
);

/**
 * -@method POST
 * -Create a new product
 */
router.post("/admin/api/products", authenticate, verifyAdmin, productCotroller.postProduct);

/**
 * -@method GET
 * -Get all product
 */
router.get("/api/products", productCotroller.getAllproduct);

module.exports = router;
